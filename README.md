# OpalSphere — The Art of Floral Transformation

OpalSphere is a high-end, cinematic web experience designed for a luxury floral brand. It translates the delicate beauty of artisanal floral design into a premium digital journey, centered around the core narrative of **"Transformation."**

![OpalSphere Favicon](public/favicon.png)

## 🌸 The Experience

OpalSphere isn't just a portfolio; it's a living sculpture in digital form. Key sections include:

- **Cinematic Hero**: An immersive introduction to the brand's aesthetic.
- **The Journey**: A custom-engineered sticky scroll experience that narrates the transition from "The Visionary Seed" to "The Transcendent Space."
- **Monuments of Memory**: A curated showcase of high-end floral collections for weddings, galas, and private events.
- **Interactive Event Builder**: A tool for clients to begin their own transformation journey by custom-building their vision.
- **Floral Market**: A minimalist commerce preview for daily luxury subscriptions.
- **Transformation Slider**: High-impact before-and-after testimonials with interactive image sliding.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion (Framer Motion)](https://motion.dev/) for high-performance parallax and transitions.
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend & Auth**: [Firebase](https://firebase.google.com/) (Auth, Firestore, Storage)
- **Database**: [MongoDB](https://www.mongodb.com/) (via Express/Mongoose server)
- **State Management**: [TanStack Query v5](https://tanstack.com/query/latest)

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- npm or yarn

### 2. Installation
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory and add the following:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

# Firebase Configuration
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_FIRESTORE_DATABASE_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
```

### 4. Direct Development
Run the integrated Vite server:
```bash
npm run dev
```
The server will be available at `http://localhost:3000`.

## 📁 Project Structure

```text
├── public/                 # Static assets (Favicons, etc.)
├── src/
│   ├── components/         # Reusable UI components (Hero, ScrollStory, etc.)
│   ├── context/            # React Contexts (Auth, Wishlist)
│   ├── pages/              # Main page views
│   ├── models/             # Mongoose/Type schemas
│   ├── services/           # External API & Firebase services
│   ├── firebase.ts         # Firebase initialization using .env
│   └── index.css           # Global Tailwind themes and animations
├── server.ts               # Express server with Vite middleware
└── vite.config.ts          # Vite build configuration
```

---

*Crafted with precision for the discerning floral architect.*
