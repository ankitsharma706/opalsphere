import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, User as UserIcon, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { user } = useAuth();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Events', path: '/events' },
    { name: 'Community', path: '/community' },
    { name: 'Shop', path: '/shop' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-primary/80 backdrop-blur-xl border-b border-accent/5 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="font-serif text-2xl font-bold tracking-[0.2em] text-secondary uppercase group-hover:text-accent transition-colors">OPALSPHERE</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-accent relative group ${
                    isActive ? 'text-accent' : 'text-secondary/60'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    <span className={`absolute -bottom-2 left-0 h-[1px] bg-accent transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-8">
            <Link to="/wishlist" className="p-2 text-secondary/60 hover:text-accent transition-all relative group">
              <Heart size={18} className="group-hover:scale-110 transition-transform" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-primary text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="p-2 text-secondary/60 hover:text-accent transition-all relative group">
              <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 bg-accent text-primary text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </Link>
            <Link to={user ? "/profile" : "/login"} className="p-2 text-secondary/60 hover:text-accent transition-all group">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="w-7 h-7 rounded-full border border-accent/20 group-hover:border-accent transition-colors" referrerPolicy="no-referrer" />
              ) : (
                <UserIcon size={18} className="group-hover:scale-110 transition-transform" />
              )}
            </Link>
            <button
              className="md:hidden p-2 text-secondary/70"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-b border-accent/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-4 text-base font-medium ${
                      isActive ? 'text-accent' : 'text-secondary/70'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/booking"
                className="block w-full text-center bg-secondary text-primary py-4 mt-4 font-medium tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Book an Event
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
