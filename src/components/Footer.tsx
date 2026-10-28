import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-primary pt-20 pb-12 border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-3xl font-bold tracking-widest mb-6 block text-primary hover:text-accent transition-colors">
              OPALSPHERE
            </Link>
            <p className="text-primary/70 text-sm leading-relaxed mb-6">
              Crafting bespoke luxury floral architectures and botanical narratives for unforgettable celebrations, galas, and intimate gatherings.
            </p>
            <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-accent border border-accent/20 px-3 py-1.5 rounded-full">
              <Sparkles size={12} />
              <span>Artisan Botanical Atelier</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-primary border-b border-primary/10 pb-2">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-primary/70 font-medium">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Atelier</Link></li>
              <li><Link to="/events" className="hover:text-accent transition-colors">Event Portfolio</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Floral Collections</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Design Gallery</Link></li>
              <li><Link to="/community" className="hover:text-accent transition-colors">Creator Community</Link></li>
              <li><Link to="/booking" className="hover:text-accent transition-colors">Consultation Booking</Link></li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-primary border-b border-primary/10 pb-2">
              Legal & Trust
            </h4>
            <ul className="space-y-3 text-sm text-primary/70 font-medium">
              <li>
                <Link to="/privacy-policy" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  <Shield size={14} className="text-accent" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li><Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Concierge</Link></li>
              <li>
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors text-xs text-primary/50"
                >
                  Ad Choices & Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-primary border-b border-primary/10 pb-2">
              Contact Studio
            </h4>
            <ul className="space-y-3 text-sm text-primary/70">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span>123 Luxury Lane, Bloom District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-accent shrink-0" />
                <a href="mailto:hello@opalsphere.com" className="hover:text-accent transition-colors">
                  hello@opalsphere.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-accent shrink-0" />
                <a href="tel:+15550001234" className="hover:text-accent transition-colors">
                  +1 (555) 000-1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center text-xs text-primary/50 gap-4">
          <p>© 2026 OpalSphere Floral Artistry LLC. All rights reserved.</p>

          <div className="flex space-x-6">
            <a
              href="https://instagram.com/opalsphere"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OpalSphere on Instagram"
              className="hover:text-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://pinterest.com/opalsphere"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OpalSphere on Pinterest"
              className="hover:text-accent transition-colors"
            >
              Pinterest
            </a>
            <a
              href="https://linkedin.com/company/opalsphere"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OpalSphere on LinkedIn"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
