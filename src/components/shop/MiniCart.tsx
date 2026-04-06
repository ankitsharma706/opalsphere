import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Product } from '../../data/shopData';

interface CartItem extends Product {
  quantity: number;
}

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export function MiniCart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: MiniCartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[2000] bg-[#1F3D2B]/40 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[2001] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-[#1F3D2B]/5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <ShoppingCart size={24} className="text-[#1F3D2B]" />
                <h2 className="text-2xl font-serif text-[#1F3D2B]">Your Selection</h2>
                <span className="bg-[#E8B4B8]/10 text-[#E8B4B8] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {items.length} Items
                </span>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-[#FAF9F6] text-[#1F3D2B] flex items-center justify-center hover:bg-[#1F3D2B] hover:text-white transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-full bg-[#FAF9F6] flex items-center justify-center mb-8 text-[#1F3D2B]/20">
                    <ShoppingCart size={40} />
                  </div>
                  <p className="text-xl font-serif text-[#1F3D2B]/40 italic mb-8">Your cart is as empty as a winter garden.</p>
                  <button 
                    onClick={onClose}
                    className="px-10 py-4 bg-[#1F3D2B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8B4B8] transition-all duration-500"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex space-x-6 group"
                    >
                      <div className="w-24 h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-[#FAF9F6]">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-2">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-serif text-[#1F3D2B] leading-tight">{item.name}</h3>
                            <button 
                              onClick={() => onRemoveItem(item.id)}
                              className="text-[#1F3D2B]/20 hover:text-red-400 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40 mb-4">{item.category}</p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 bg-[#FAF9F6] rounded-full px-3 py-1.5">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="text-[#1F3D2B] hover:text-[#E8B4B8] transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="text-[#1F3D2B] hover:text-[#E8B4B8] transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="text-lg font-light text-[#1F3D2B]">${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 bg-[#FAF9F6] border-t border-[#1F3D2B]/5 space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">
                    <span>Delivery</span>
                    <span className="text-[#E8B4B8]">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-2xl font-serif text-[#1F3D2B] pt-3 border-t border-[#1F3D2B]/5">
                    <span>Total</span>
                    <span>${subtotal}</span>
                  </div>
                </div>
                
                <button className="w-full py-6 bg-[#1F3D2B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8B4B8] transition-all duration-500 flex items-center justify-center space-x-4 shadow-xl">
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={18} />
                </button>
                
                <p className="text-center text-[8px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]/30">
                  Secured by OpalSphere Luxury Payments
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
