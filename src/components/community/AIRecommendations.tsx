import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { designPosts } from '../../data/communityData';

export function AIRecommendations() {
  // Mock AI recommendation logic
  const recommendations = designPosts.slice(0, 3);

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] p-12 border border-accent/10 shadow-sm">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-secondary">Tailored for You</h3>
              <p className="text-secondary/40 text-[10px] font-bold uppercase tracking-widest">AI-Powered Recommendations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((post) => (
              <motion.div 
                key={post.id}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="h-48 rounded-2xl overflow-hidden mb-4 border border-accent/5">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-sm font-bold text-secondary mb-1">{post.title}</h4>
                <p className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest">{post.creatorName}</p>
              </motion.div>
            ))}
          </div>

          <button className="mt-12 flex items-center space-x-2 text-accent group">
            <span className="text-[10px] font-bold uppercase tracking-widest">Refine Recommendations</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
