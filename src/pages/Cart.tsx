import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ShoppingBag, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cartApi, orderApi } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { PRODUCTS } from '../data/shopData';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export default function Cart() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: cartData, isLoading: cartLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: () => cartApi.get(),
    enabled: !!user
  });

  const updateMutation = useMutation({
    mutationFn: ({ productId, quantity }: { productId: string, quantity: number }) => cartApi.update(productId, quantity),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] })
  });

  const removeMutation = useMutation({
    mutationFn: (productId: string) => cartApi.remove(productId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] })
  });

  const checkoutMutation = useMutation({
    mutationFn: (data: any) => orderApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      navigate('/profile');
    }
  });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  if (authLoading || cartLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-primary">
        <Loader2 className="animate-spin text-accent" size={40} />
      </div>
    );
  }

  const cartItems = cartData?.data?.cart || [];
  const itemsWithDetails = cartItems.map((item: any) => {
    const product = PRODUCTS.find(p => p.id.toString() === item.productId);
    return { ...item, ...product };
  }).filter((item: any) => item.name);

  const subtotal = itemsWithDetails.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    checkoutMutation.mutate({
      items: itemsWithDetails.map((item: any) => ({
        productId: item.productId,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      totalPrice: subtotal
    });
  };

  return (
    <div className="py-20 bg-primary min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl mb-16 font-serif">Your Shopping Bag</h1>

        {itemsWithDetails.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-8">
              {itemsWithDetails.map((item: any) => (
                <div key={item.productId} className="flex items-center space-x-6 bg-white p-6 rounded-3xl border border-accent/5">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl mb-1 font-serif">{item.name}</h3>
                    <p className="text-secondary/50 text-sm mb-4">${item.price}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center border border-accent/10 rounded-full px-3 py-1">
                        <button 
                          onClick={() => updateMutation.mutate({ productId: item.productId, quantity: item.quantity - 1 })}
                          className="p-1 hover:text-accent"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-4 text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateMutation.mutate({ productId: item.productId, quantity: item.quantity + 1 })}
                          className="p-1 hover:text-accent"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeMutation.mutate(item.productId)}
                        className="text-secondary/30 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-lg">${item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-10 rounded-3xl border border-accent/5 h-fit sticky top-32">
              <h2 className="text-2xl mb-8 font-serif">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-secondary/60">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-secondary/60">
                  <span>Shipping</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest">Complimentary</span>
                </div>
                <div className="pt-4 border-t border-accent/10 flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span>${subtotal}</span>
                </div>
              </div>
              <button 
                onClick={handleCheckout}
                disabled={checkoutMutation.isPending}
                className="w-full bg-secondary text-primary py-5 rounded-full font-bold tracking-widest uppercase text-xs shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 flex items-center justify-center"
              >
                {checkoutMutation.isPending ? <Loader2 className="animate-spin" size={18} /> : 'Proceed to Checkout'}
              </button>
              <p className="text-center text-[10px] text-secondary/40 mt-6 uppercase tracking-widest">Secure Payment Powered by Razorpay</p>
            </div>
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-3xl border border-accent/5">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 text-accent">
              <ShoppingBag size={32} />
            </div>
            <h2 className="text-3xl mb-4 font-serif">Your bag is empty</h2>
            <p className="text-secondary/60 mb-8">Looks like you haven't added any floral masterpieces yet.</p>
            <Link to="/shop" className="bg-secondary text-primary px-10 py-4 rounded-full font-medium inline-block">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
