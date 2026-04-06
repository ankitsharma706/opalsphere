import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Minus, Plus, Heart, Share2, Info } from 'lucide-react';
import { Product } from '../../data/shopData';
import { useWishlist } from '../../context/WishlistContext';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function QuickViewModal({ product, isOpen, onClose, onAddToCart }: QuickViewModalProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1F3D2B]/40 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-[#1F3D2B] flex items-center justify-center hover:bg-[#1F3D2B] hover:text-white transition-all duration-300"
            >
              <X size={20} />
            </button>

            {/* Product Image */}
            <div className="w-full md:w-1/2 h-[400px] md:h-auto relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {product.tag && (
                <div className="absolute top-8 left-8 px-6 py-2 bg-[#1F3D2B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {product.tag}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-[#E8B4B8] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">{product.category}</span>
                <h2 className="text-4xl md:text-5xl font-serif text-[#1F3D2B] mb-4 leading-tight">{product.name}</h2>
                <p className="text-2xl font-light text-[#1F3D2B]">${product.price}</p>
              </div>

              <p className="text-[#1F3D2B]/60 text-lg mb-10 leading-relaxed font-light">
                {product.description}
              </p>

              <div className="space-y-8">
                {/* Quantity Selector */}
                <div className="flex items-center space-x-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Quantity</span>
                  <div className="flex items-center space-x-4 bg-[#FAF9F6] rounded-full px-4 py-2">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-[#1F3D2B] hover:text-[#E8B4B8] transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-sm font-bold w-8 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-[#1F3D2B] hover:text-[#E8B4B8] transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => {
                      onAddToCart(product, quantity);
                      onClose();
                    }}
                    className="flex-1 px-10 py-5 bg-[#1F3D2B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8B4B8] transition-all duration-500 flex items-center justify-center space-x-3"
                  >
                    <ShoppingCart size={18} />
                    <span>Add to Cart</span>
                  </button>
                  <button 
                    onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                    className={`w-16 h-16 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      isInWishlist(product.id) 
                        ? 'border-[#E8B4B8] bg-[#E8B4B8]/10 text-[#E8B4B8]' 
                        : 'border-[#1F3D2B]/10 text-[#1F3D2B] hover:border-[#E8B4B8] hover:text-[#E8B4B8]'
                    }`}
                  >
                    <Heart size={20} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                  </button>
                  <button className="w-16 h-16 rounded-full border border-[#1F3D2B]/10 text-[#1F3D2B] flex items-center justify-center hover:border-[#E8B4B8] hover:text-[#E8B4B8] transition-all duration-500">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              {/* Trust Elements */}
              <div className="mt-12 pt-8 border-t border-[#1F3D2B]/5 grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8B4B8]/10 flex items-center justify-center text-[#E8B4B8]">
                    <Info size={14} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Freshness Guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8B4B8]/10 flex items-center justify-center text-[#E8B4B8]">
                    <Info size={14} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Premium Delivery</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
