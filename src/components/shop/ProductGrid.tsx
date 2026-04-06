import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Eye, Heart, Filter, X, ChevronRight, Search } from 'lucide-react';
import { Product, PRODUCTS } from '../../data/shopData';
import { useWishlist } from '../../context/WishlistContext';

interface ProductGridProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductGrid({ onQuickView, onAddToCart }: ProductGridProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeOccasion, setActiveOccasion] = useState<string>('All');
  const [activeFlower, setActiveFlower] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<number>(1500);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesOccasion = activeOccasion === 'All' || product.occasion === activeOccasion;
      const matchesFlower = activeFlower === 'All' || product.flowerType === activeFlower;
      const matchesPrice = product.price <= priceRange;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesOccasion && matchesFlower && matchesPrice && matchesSearch;
    });
  }, [activeCategory, activeOccasion, activeFlower, priceRange, searchQuery]);

  const categories = ['All', 'Wedding', 'Luxury Bouquets', 'Event Decor Kits', 'Seasonal Specials'];
  const occasions = ['All', 'Wedding', 'Birthday', 'Corporate', 'Anniversary'];
  const flowers = ['All', 'Roses', 'Orchids', 'Mixed', 'Lilies', 'Peonies'];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 border-b border-[#1F3D2B]/5 pb-8">
          <div className="flex items-center space-x-12 overflow-x-auto scrollbar-hide w-full md:w-auto pb-4 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap transition-all duration-300 relative pb-2 ${
                  activeCategory === cat ? 'text-[#1F3D2B]' : 'text-[#1F3D2B]/40 hover:text-[#1F3D2B]/70'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div layoutId="activeCat" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8B4B8]" />
                )}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1F3D2B]/30" size={16} />
              <input 
                type="text" 
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#FAF9F6] border-none rounded-full text-xs font-medium focus:ring-1 focus:ring-[#E8B4B8] transition-all"
              />
            </div>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`p-3 rounded-full border transition-all duration-300 ${isFilterOpen ? 'bg-[#1F3D2B] text-white border-[#1F3D2B]' : 'border-[#1F3D2B]/10 text-[#1F3D2B] hover:border-[#1F3D2B]'}`}
            >
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Expanded Filters */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-16 bg-[#FAF9F6] rounded-3xl"
            >
              <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40 mb-6">Occasion</h4>
                  <div className="flex flex-wrap gap-3">
                    {occasions.map(occ => (
                      <button 
                        key={occ}
                        onClick={() => setActiveOccasion(occ)}
                        className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeOccasion === occ ? 'bg-[#1F3D2B] text-white' : 'bg-white text-[#1F3D2B]/60 hover:bg-[#E8B4B8]/20'}`}
                      >
                        {occ}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40 mb-6">Flower Type</h4>
                  <div className="flex flex-wrap gap-3">
                    {flowers.map(flower => (
                      <button 
                        key={flower}
                        onClick={() => setActiveFlower(flower)}
                        className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeFlower === flower ? 'bg-[#1F3D2B] text-white' : 'bg-white text-[#1F3D2B]/60 hover:bg-[#E8B4B8]/20'}`}
                      >
                        {flower}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40 mb-6">Max Price: ${priceRange}</h4>
                  <input 
                    type="range" 
                    min="50" 
                    max="1500" 
                    step="50"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full h-1 bg-[#1F3D2B]/10 rounded-lg appearance-none cursor-pointer accent-[#E8B4B8]"
                  />
                  <div className="flex justify-between mt-4 text-[10px] font-bold text-[#1F3D2B]/40 uppercase tracking-widest">
                    <span>$50</span>
                    <span>$1500</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-[#FAF9F6] mb-6 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Tags */}
                  {product.tag && (
                    <div className="absolute top-6 left-6 px-4 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[8px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]">
                      {product.tag}
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-[#1F3D2B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onQuickView(product)}
                      className="w-12 h-12 rounded-full bg-white text-[#1F3D2B] flex items-center justify-center shadow-xl hover:bg-[#E8B4B8] hover:text-white transition-colors"
                    >
                      <Eye size={20} />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onAddToCart(product)}
                      className="w-12 h-12 rounded-full bg-[#1F3D2B] text-white flex items-center justify-center shadow-xl hover:bg-[#E8B4B8] transition-colors"
                    >
                      <ShoppingCart size={20} />
                    </motion.button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-serif text-[#1F3D2B] group-hover:text-[#E8B4B8] transition-colors duration-300">{product.name}</h3>
                    <button 
                      onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                      className={`transition-colors ${isInWishlist(product.id) ? 'text-[#E8B4B8]' : 'text-[#1F3D2B]/20 hover:text-[#E8B4B8]'}`}
                    >
                      <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                    </button>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">{product.category}</p>
                  <p className="text-lg font-light text-[#1F3D2B]">${product.price}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-[#1F3D2B]/40 font-serif text-2xl italic">No floral treasures found matching your criteria.</p>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setActiveOccasion('All');
                setActiveFlower('All');
                setPriceRange(1500);
                setSearchQuery('');
              }}
              className="mt-8 text-[10px] font-bold uppercase tracking-widest text-[#E8B4B8] hover:text-[#1F3D2B] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
