import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
// In serverless production, we don't import Vite at the top level
// to avoid bundling issues since it's a devDependency.
import { User, Product, Booking, Order } from './src/models/index.js';
import dotenv from 'dotenv';
import { initializeApp, getApps, getApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

dotenv.config();

// Initialize Firebase Admin
const initializeFirebase = () => {
  try {
    if (getApps().length === 0) {
      const configPath = path.join(process.cwd(), 'firebase-applet-config.json');
      if (process.env.FIREBASE_PROJECT_ID) {
        initializeApp({
          projectId: process.env.FIREBASE_PROJECT_ID,
        });
        console.log('Firebase Admin initialized with environment variable');
      } else if (fs.existsSync(configPath)) {
        const firebaseConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        initializeApp({
          projectId: firebaseConfig.projectId
        });
        console.log('Firebase Admin initialized with config file');
      } else {
        console.warn('Firebase configuration not found. Google Auth will not work.');
      }
    }
  } catch (error) {
    console.error('Error initializing Firebase Admin:', error);
  }
};

initializeFirebase();

const app = express();
const PORT = 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'opalsphere-secret-key';

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true
}));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;
if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
} else {
  console.warn('MONGODB_URI not found. Database features will not work.');
}

// Auth Middleware
const authenticate = async (req: any, res: any, next: any) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(401).json({ message: 'User not found' });
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    environment: process.env.NODE_ENV,
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    firebase: getApps().length > 0 ? 'initialized' : 'not_initialized'
  });
});

// API Routes

// Auth
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    res.status(201).json({ user: { id: user._id, name: user.name, email: user.email } });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user: any = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    res.json({ user: { id: user._id, name: user.name, email: user.email } });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/auth/google', async (req, res) => {
  try {
    const { token } = req.body;
    const decodedToken = await getAuth().verifyIdToken(token);
    const { email, name, picture } = decodedToken;

    if (!email) {
      return res.status(400).json({ message: 'Email not provided by Google' });
    }

    let user = await User.findOne({ email });
    if (!user) {
      // Create new user if they don't exist
      user = new User({
        name: name || email.split('@')[0],
        email,
        password: Math.random().toString(36).slice(-10), // Random password for social login
      });
      await user.save();
    }

    const jwtToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', jwtToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    res.json({ user: { id: user._id, name: user.name, email: user.email } });
  } catch (err: any) {
    console.error('Google Auth Error:', err);
    res.status(401).json({ message: 'Invalid Google token' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
});

app.get('/api/auth/me', authenticate, (req: any, res) => {
  res.json({ user: req.user });
});

// Cart
app.get('/api/cart', authenticate, async (req: any, res) => {
  try {
    res.json({ cart: req.user.cart });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/cart/add', authenticate, async (req: any, res) => {
  try {
    const { productId, quantity } = req.body;
    const user: any = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const existingItem = user.cart.find((item: any) => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity || 1;
    } else {
      user.cart.push({ productId, quantity: quantity || 1 });
    }

    await user.save();
    res.json({ cart: user.cart });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

app.put('/api/cart/update', authenticate, async (req: any, res) => {
  try {
    const { productId, quantity } = req.body;
    const user: any = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const item = user.cart.find((item: any) => item.productId === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        user.cart = user.cart.filter((i: any) => i.productId !== productId);
      }
    }

    await user.save();
    res.json({ cart: user.cart });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

app.delete('/api/cart/remove/:productId', authenticate, async (req: any, res) => {
  try {
    const { productId } = req.params;
    const user: any = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.cart = user.cart.filter((item: any) => item.productId !== productId);
    await user.save();
    res.json({ cart: user.cart });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Wishlist
app.get('/api/wishlist', authenticate, async (req: any, res) => {
  try {
    res.json({ wishlist: req.user.wishlist });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/wishlist/add', authenticate, async (req: any, res) => {
  try {
    const { productId } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.wishlist.includes(productId)) {
      user.wishlist.push(productId);
      await user.save();
    }
    res.json({ wishlist: user.wishlist });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

app.delete('/api/wishlist/remove/:productId', authenticate, async (req: any, res) => {
  try {
    const { productId } = req.params;
    const user: any = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.wishlist = user.wishlist.filter((id: string) => id !== productId);
    await user.save();
    res.json({ wishlist: user.wishlist });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Bookings
app.post('/api/booking/create', authenticate, async (req: any, res) => {
  try {
    const booking = new Booking({
      ...req.body,
      userId: req.user._id
    });
    await booking.save();
    res.status(201).json({ booking });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/booking/user', authenticate, async (req: any, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json({ bookings });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

app.delete('/api/booking/cancel/:id', authenticate, async (req: any, res) => {
  try {
    const booking = await Booking.findOne({ _id: req.params.id, userId: req.user._id });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    booking.status = 'cancelled';
    await booking.save();
    res.json({ message: 'Booking cancelled' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Orders
app.post('/api/order/create', authenticate, async (req: any, res) => {
  try {
    const { items, totalPrice } = req.body;
    const order = new Order({
      userId: req.user._id,
      items,
      totalPrice,
      status: 'pending'
    });
    await order.save();

    // Clear cart after order
    const user: any = await User.findById(req.user._id);
    if (user) {
      user.cart = [] as any;
      await user.save();
    }

    res.status(201).json({ order });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/order/user', authenticate, async (req: any, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json({ orders });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Server startup for local development
async function startServer() {
  if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    // Dynamically import Vite only in development to keep prod build slim
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production serving of static files
    const distPath = path.resolve(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        // Only serve index.html for non-api routes
        if (!req.path.startsWith('/api')) {
          res.sendFile(path.join(distPath, 'index.html'));
        }
      });
    }
  }

  // Only listen if not running as a Vercel serverless function
  if (!process.env.VERCEL && !process.env.NETLIFY) {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on http://localhost:${PORT} (${process.env.NODE_ENV || 'development'})`);
    });
  }
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
});

export default app;
