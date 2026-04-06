import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { User, Settings, ShoppingBag, Calendar, LogOut, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { bookingApi, orderApi } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function Profile() {
  const { user, logout, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('bookings');

  const { data: bookingsData, isLoading: bookingsLoading } = useQuery({
    queryKey: ['bookings'],
    queryFn: () => bookingApi.getUserBookings(),
    enabled: !!user
  });

  const { data: ordersData, isLoading: ordersLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: () => orderApi.getUserOrders(),
    enabled: !!user
  });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  if (authLoading || !user) {
    return (
      <div className="h-screen flex items-center justify-center bg-primary">
        <Loader2 className="animate-spin text-accent" size={40} />
      </div>
    );
  }

  const bookings = bookingsData?.data?.bookings || [];
  const orders = ordersData?.data?.orders || [];

  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl border border-accent/5 sticky top-32">
              <div className="text-center mb-8">
                <div className="w-24 h-24 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center text-accent overflow-hidden">
                  <User size={40} />
                </div>
                <h2 className="text-xl font-serif">{user.name}</h2>
                <p className="text-secondary/40 text-xs capitalize">OpalSphere Member</p>
              </div>

              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveTab('bookings')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'bookings' ? 'bg-secondary text-primary' : 'text-secondary/60 hover:bg-primary'}`}
                >
                  <Calendar size={18} />
                  <span>My Bookings</span>
                </button>
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'orders' ? 'bg-secondary text-primary' : 'text-secondary/60 hover:bg-primary'}`}
                >
                  <ShoppingBag size={18} />
                  <span>Order History</span>
                </button>
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'settings' ? 'bg-secondary text-primary' : 'text-secondary/60 hover:bg-primary'}`}
                >
                  <Settings size={18} />
                  <span>Settings</span>
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-50 transition-all mt-8"
                >
                  <LogOut size={18} />
                  <span>Sign Out</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white p-10 rounded-3xl border border-accent/5 min-h-[600px]">
              {activeTab === 'bookings' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl mb-8">Your Bookings</h2>
                  <div className="space-y-6">
                    {bookingsLoading ? (
                      <div className="flex justify-center py-12"><Loader2 className="animate-spin text-accent" /></div>
                    ) : bookings.length > 0 ? bookings.map((booking: any) => (
                      <div key={booking._id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-2xl border border-accent/10 bg-primary/20">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-accent">{booking.eventType}</span>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                              booking.status === 'confirmed' ? 'bg-green-100 text-green-600' : 
                              booking.status === 'pending' ? 'bg-yellow-100 text-yellow-600' : 
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {booking.status}
                            </span>
                          </div>
                          <h3 className="text-xl mb-1 capitalize">{booking.theme || 'Bespoke Design'}</h3>
                          <p className="text-secondary/40 text-sm">{booking.date} • {booking.location}</p>
                        </div>
                        <button className="mt-4 md:mt-0 px-6 py-2 border border-secondary/10 rounded-full text-xs font-medium hover:bg-secondary hover:text-primary transition-all">
                          View Details
                        </button>
                      </div>
                    )) : (
                      <div className="text-center py-12">
                        <p className="text-secondary/40">No bookings found. Start your journey by booking a consultation.</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === 'orders' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl mb-8">Order History</h2>
                  <div className="space-y-6">
                    {ordersLoading ? (
                      <div className="flex justify-center py-12"><Loader2 className="animate-spin text-accent" /></div>
                    ) : orders.length > 0 ? orders.map((order: any) => (
                      <div key={order._id} className="p-6 rounded-2xl border border-accent/10 bg-primary/20">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xs font-bold uppercase tracking-widest text-secondary/40">Order #{order._id.slice(-6)}</span>
                          <span className="text-accent font-bold">${order.totalPrice}</span>
                        </div>
                        <div className="space-y-2">
                          {order.items.map((item: any, i: number) => (
                            <div key={i} className="text-sm text-secondary/60 flex justify-between">
                              <span>{item.name} x {item.quantity}</span>
                              <span>${item.price * item.quantity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )) : (
                      <div className="text-center py-20">
                        <ShoppingBag size={48} className="mx-auto text-secondary/10 mb-6" />
                        <h3 className="text-xl mb-2">No orders yet</h3>
                        <p className="text-secondary/40 text-sm">Your luxury floral purchases will appear here.</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl mb-8">Account Settings</h2>
                  <div className="space-y-8 max-w-xl">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/50 mb-2">Full Name</label>
                      <input type="text" className="w-full bg-primary/50 border border-accent/10 rounded-xl py-4 px-4 focus:outline-none focus:border-accent" defaultValue={user.name} />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/50 mb-2">Email Address</label>
                      <input type="email" className="w-full bg-primary/50 border border-accent/10 rounded-xl py-4 px-4 focus:outline-none focus:border-accent" defaultValue={user.email} disabled />
                    </div>
                    <button className="bg-secondary text-primary px-10 py-4 rounded-full font-medium">Save Changes</button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
