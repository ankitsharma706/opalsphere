import React from 'react';
import { motion } from 'motion/react';
import { useAuth } from '../../context/AuthContext';
import { User, Award, BookOpen, Heart, Bookmark, ArrowRight } from 'lucide-react';

export function PersonalDashboard() {
  const { user } = useAuth();

  if (!user) return null;

  const stats = [
    { label: 'Designs Shared', value: 12, icon: Heart },
    { label: 'Courses Completed', value: 3, icon: BookOpen },
    { label: 'Community Rank', value: 'Silver', icon: Award },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/30 rounded-[60px] p-12 md:p-20 border border-accent/5">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src={user.photoURL || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'} 
                    alt={user.displayName || 'User'} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary shadow-xl border-4 border-white">
                  <Award size={18} />
                </div>
              </div>
              <h2 className="text-3xl font-serif text-secondary mb-2">Welcome back, {user.displayName?.split(' ')[0] || 'Creator'}</h2>
              <p className="text-secondary/40 text-sm font-bold uppercase tracking-widest mb-8">OpalSphere Member since 2024</p>
              <button className="px-8 py-4 border border-secondary/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all">
                Edit Profile
              </button>
            </div>

            <div className="lg:w-2/3 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white p-8 rounded-3xl shadow-sm border border-accent/5 text-center group hover:shadow-xl transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center text-accent mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <stat.icon size={20} />
                    </div>
                    <h4 className="text-3xl font-serif text-secondary mb-2">{stat.value}</h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-sm border border-accent/5">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-serif text-secondary">Learning Progress</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">75% Overall</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-secondary/40 mb-2">
                      <span>Wedding Decoration Mastery</span>
                      <span>85%</span>
                    </div>
                    <div className="h-1.5 bg-primary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-secondary/40 mb-2">
                      <span>Luxury Event Styling</span>
                      <span>40%</span>
                    </div>
                    <div className="h-1.5 bg-primary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '40%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                </div>
                <button className="mt-10 flex items-center space-x-2 text-accent group">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Continue Learning</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
