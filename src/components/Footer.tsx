import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-secondary text-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-serif text-3xl font-bold tracking-widest mb-6 block">OPALSPHERE</Link>
            <p className="text-primary/60 max-w-md leading-relaxed">
              Crafting luxury floral experiences for life's most precious moments. From intimate weddings to grand corporate galas, we bring nature's elegance to your doorstep.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-primary/60">
              <li><Link to="/events" className="hover:text-accent transition-colors">Events</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Flower Shop</Link></li>
              <li><Link to="/community" className="hover:text-accent transition-colors">Community</Link></li>
              <li><Link to="/booking" className="hover:text-accent transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-primary/60">
              <li>123 Luxury Lane, Bloom District</li>
              <li>contact@opalsphere.com</li>
              <li>+1 (555) 000-1234</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center text-sm text-primary/40">
          <p>© 2026 OpalSphere. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent">Instagram</a>
            <a href="#" className="hover:text-accent">Pinterest</a>
            <a href="#" className="hover:text-accent">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
