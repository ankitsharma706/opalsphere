import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, Search, Plus } from 'lucide-react';

export function Discussion() {
  const categories = ['Techniques', 'Tools', 'Trends', 'Business'];
  const discussions = [
    { id: 1, title: 'Best sustainable alternatives to floral foam?', author: 'Julian Chen', replies: 24, category: 'Techniques' },
    { id: 2, title: 'How to price luxury installations for destination weddings?', author: 'Elena Rossi', replies: 56, category: 'Business' },
    { id: 3, title: 'Top 5 floral trends for 2026 summer season', author: 'Sarah Jenkins', replies: 89, category: 'Trends' },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Knowledge Exchange</span>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8">Community <br />Discussions</h2>
            <p className="text-secondary/50 text-sm leading-relaxed mb-12">
              Share insights, ask questions, and stay ahead of the curve with our professional discussion boards.
            </p>
            
            <div className="relative mb-12">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-secondary/30" size={18} />
              <input 
                type="text" 
                placeholder="Search topics..." 
                className="w-full bg-primary/50 border border-accent/10 rounded-full py-5 pl-16 pr-8 focus:outline-none focus:border-accent transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button key={cat} className="px-6 py-3 bg-primary/50 border border-accent/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-secondary/60 hover:bg-secondary hover:text-primary transition-all">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 space-y-6">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-serif text-secondary">Recent Topics</h3>
              <button className="flex items-center space-x-2 text-accent group">
                <Plus size={18} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Start Discussion</span>
              </button>
            </div>

            {discussions.map((topic) => (
              <motion.div 
                key={topic.id}
                whileHover={{ x: 10 }}
                className="p-8 bg-primary/30 rounded-3xl border border-accent/5 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-accent bg-accent/5 px-3 py-1.5 rounded-full mb-4 inline-block">
                      {topic.category}
                    </span>
                    <h4 className="text-xl font-serif text-secondary mb-4 group-hover:text-accent transition-colors">{topic.title}</h4>
                    <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest text-secondary/40">
                      <span className="flex items-center space-x-2">
                        <MessageSquare size={14} />
                        <span>{topic.replies} Replies</span>
                      </span>
                      <span>By {topic.author}</span>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-secondary/20 group-hover:text-accent transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
