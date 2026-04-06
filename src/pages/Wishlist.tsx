import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ShoppingCart, Trash2, ArrowRight, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { wishlistApi, cartApi } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { PRODUCTS } from '../data/shopData';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export default function Wishlist() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: wishlistData, isLoading: wishlistLoading } = useQuery({
    queryKey: ['wishlist'],
    queryFn: () => wishlistApi.get(),
    enabled: !!user
  });

  const removeMutation = useMutation({
    mutationFn: (productId: string) => wishlistApi.remove(productId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wishlist'] })
  });

  const addToCartMutation = useMutation({
    mutationFn: (productId: string) => cartApi.add(productId, 1),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      navigate('/cart');
    }
  });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  if (authLoading || wishlistLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#FAF9F6]">
        <Loader2 className="animate-spin text-[#E8B4B8]" size={40} />
      </div>
    );
  }

  const wishlistItems = wishlistData?.data?.wishlist || [];
  const itemsWithDetails = wishlistItems.map((productId: string) => {
    return PRODUCTS.find(p => p.id.toString() === productId);
  }).filter(Boolean);

  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-[#E8B4B8] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Your Collection</span>
          <h1 className="text-5xl md:text-6xl font-serif text-[#1F3D2B]">Your Wishlist</h1>
        </div>

        {itemsWithDetails.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {itemsWithDetails.map((product: any) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <button 
                      onClick={() => removeMutation.mutate(product.id.toString())}
                      className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#1F3D2B] flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all duration-300 shadow-lg"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="p-10 space-y-6">
                    <div>
                      <span className="text-[#E8B4B8] font-bold uppercase tracking-[0.4em] text-[8px] mb-2 block">{product.category}</span>
                      <h3 className="text-2xl font-serif text-[#1F3D2B] mb-2">{product.name}</h3>
                      <p className="text-xl font-light text-[#1F3D2B]">${product.price}</p>
                    </div>

                    <div className="flex flex-col space-y-4">
                      <button 
                        onClick={() => addToCartMutation.mutate(product.id.toString())}
                        disabled={addToCartMutation.isPending}
                        className="w-full py-4 bg-[#1F3D2B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8B4B8] transition-all duration-500 flex items-center justify-center space-x-3 shadow-lg disabled:opacity-50"
                      >
                        {addToCartMutation.isPending ? <Loader2 className="animate-spin" size={16} /> : (
                          <>
                            <ShoppingCart size={16} />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-40 text-center bg-white rounded-[3rem] border border-[#1F3D2B]/5">
            <div className="w-20 h-20 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-8 text-[#1F3D2B]/20">
              <Heart size={40} />
            </div>
            <p className="text-[#1F3D2B]/40 font-serif text-2xl italic mb-8">Your wishlist is currently empty.</p>
            <Link 
              to="/shop" 
              className="inline-flex items-center space-x-3 px-10 py-4 bg-[#1F3D2B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8B4B8] transition-all duration-500 shadow-xl"
            >
              <span>Explore Shop</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
