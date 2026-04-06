import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShopHero } from '../components/shop/ShopHero';
import { CollectionSlider } from '../components/shop/CollectionSlider';
import { ProductGrid } from '../components/shop/ProductGrid';
import { QuickViewModal } from '../components/shop/QuickViewModal';
import { MiniCart } from '../components/shop/MiniCart';
import { FreshPicks } from '../components/shop/FreshPicks';
import { CustomFlowerBuilder } from '../components/shop/CustomFlowerBuilder';
import { TrustElements, FinalCTA } from '../components/shop/TrustElements';
import { Product } from '../data/shopData';

interface CartItem extends Product {
  quantity: number;
}

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('opalsphere_cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem('opalsphere_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <ShopHero />
      
      <CollectionSlider />
      
      <ProductGrid 
        onQuickView={handleQuickView}
        onAddToCart={handleAddToCart}
      />

      <FreshPicks />

      <CustomFlowerBuilder />

      <TrustElements />

      <FinalCTA />

      {/* Modals */}
      <QuickViewModal 
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <MiniCart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Floating Cart Button */}
      <AnimatePresence>
        {cartItems.length > 0 && !isCartOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-10 right-10 z-[1500] w-20 h-20 rounded-full bg-[#1F3D2B] text-white shadow-2xl flex items-center justify-center group hover:bg-[#E8B4B8] transition-all duration-500"
          >
            <div className="relative">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#E8B4B8] text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#1F3D2B] group-hover:border-[#E8B4B8] transition-all">
                {cartItems.length}
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
