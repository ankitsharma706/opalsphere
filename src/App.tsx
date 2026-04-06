import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/Layout';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Suspense, lazy } from 'react';

// Core layout-essential components can stay direct imports if needed, 
// but most pages should be lazy loaded for a 1MB+ bundle.
const Home = lazy(() => import('./pages/Home'));
const Events = lazy(() => import('./pages/Events'));
const Shop = lazy(() => import('./pages/Shop'));
const Booking = lazy(() => import('./pages/Booking'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Profile = lazy(() => import('./pages/Profile'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Community = lazy(() => import('./pages/Community'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load other pages for performance

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <AuthProvider>
          <WishlistProvider>
            <Router>
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-primary font-serif italic text-2xl">OpalSphere...</div>}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="events" element={<Events />} />
                  <Route path="shop" element={<Shop />} />
                  <Route path="wishlist" element={<Wishlist />} />
                  <Route path="booking" element={<Booking />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<Signup />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="gallery" element={<Gallery />} />
                  <Route path="community" element={<Community />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                </Route>
              </Routes>
            </Suspense>
          </Router>
        </WishlistProvider>
      </AuthProvider>
    </ErrorBoundary>
  </QueryClientProvider>
  );
}
