import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Compass } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';

export default function NotFound() {
  return (
    <div className="pt-36 pb-28 bg-primary min-h-screen text-secondary flex items-center justify-center">
      <SEOHead
        title="404 - Page Not Found | OpalSphere"
        description="The requested page could not be located on OpalSphere. Explore our luxury floral collections or return to the homepage."
        noindex={true}
        nofollow={true}
      />

      <div className="max-w-xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white border border-accent/20 flex items-center justify-center text-accent shadow-sm">
            <Compass size={36} />
          </div>

          <span className="text-xs uppercase tracking-[0.3em] font-bold text-accent block mb-3">
            Error 404
          </span>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Page Not Found</h1>
          <p className="text-secondary/60 mb-10 text-base leading-relaxed">
            The botanical journey you are looking for has blossomed elsewhere or no longer exists. Allow us to guide you back to our curated collections.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center space-x-2 bg-secondary text-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-secondary transition-all shadow-md"
            >
              <ArrowLeft size={16} />
              <span>Return Home</span>
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center space-x-2 border border-secondary/20 text-secondary px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:text-primary transition-all"
            >
              <span>Explore Shop</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

