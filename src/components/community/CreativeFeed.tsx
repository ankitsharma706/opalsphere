import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { designPosts } from '../../data/communityData';
import { Heart, Bookmark, Share2, X, Plus } from 'lucide-react';

export function CreativeFeed() {
  const [selectedPost, setSelectedPost] = React.useState<any>(null);

  return (
    <section className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Creative Showcase</span>
          <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-6">The Creative Feed</h2>
          <p className="text-secondary/50 text-sm leading-relaxed">
            Discover breathtaking floral designs and behind-the-scenes artistry from our global community.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {designPosts.map((post) => (
            <motion.div 
              key={post.id}
              layoutId={post.id}
              onClick={() => setSelectedPost(post)}
              className="break-inside-avoid group cursor-pointer relative"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-accent/5 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-secondary hover:bg-accent hover:text-primary transition-all">
                      <Heart size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-secondary hover:bg-accent hover:text-primary transition-all">
                      <Bookmark size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={post.creatorImage} 
                        alt={post.creatorName} 
                        className="w-8 h-8 rounded-full object-cover border border-accent/10"
                        referrerPolicy="no-referrer"
                      />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">{post.creatorName}</span>
                    </div>
                    <div className="flex space-x-2">
                      {post.tags.slice(0, 1).map(tag => (
                        <span key={tag} className="text-[8px] font-bold uppercase tracking-widest text-accent bg-accent/5 px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-serif text-secondary mb-4">{post.title}</h3>
                  <div className="flex items-center justify-between text-secondary/40 text-[10px] font-bold uppercase tracking-widest">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Heart size={12} />
                        <span>{post.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Bookmark size={12} />
                        <span>{post.saves}</span>
                      </span>
                    </div>
                    <Share2 size={12} className="hover:text-accent transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-primary/95 backdrop-blur-xl"
            />
            <motion.div 
              layoutId={selectedPost.id}
              className="relative z-10 bg-white w-full max-w-6xl h-full max-h-[90vh] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-8 right-8 z-20 w-12 h-12 rounded-full bg-primary/50 backdrop-blur-md flex items-center justify-center text-secondary hover:bg-accent hover:text-primary transition-all"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-2/3 h-1/2 md:h-full bg-primary/50">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full md:w-1/3 h-1/2 md:h-full p-12 flex flex-col overflow-y-auto no-scrollbar">
                <div className="flex items-center space-x-4 mb-12">
                  <img 
                    src={selectedPost.creatorImage} 
                    alt={selectedPost.creatorName} 
                    className="w-12 h-12 rounded-full object-cover border border-accent/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">{selectedPost.creatorName}</h4>
                    <p className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">Master Decorator</p>
                  </div>
                </div>

                <h2 className="text-4xl font-serif text-secondary mb-6 leading-tight">{selectedPost.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-12">
                  {selectedPost.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/5 px-4 py-2 rounded-full border border-accent/10">
                      #{tag}
                    </span>
                  ))}
                </div>

                <p className="text-secondary/50 text-sm leading-relaxed mb-12">
                  This design was inspired by the ethereal beauty of midnight gardens. We used a combination of deep purple orchids, midnight blue hydrangeas, and subtle fiber-optic lighting to create a truly magical atmosphere.
                </p>

                <div className="mt-auto pt-12 border-t border-accent/10 flex items-center justify-between">
                  <div className="flex items-center space-x-8">
                    <button className="flex flex-col items-center space-y-2 group">
                      <Heart size={24} className="text-secondary/40 group-hover:text-red-400 transition-colors" />
                      <span className="text-[10px] font-bold text-secondary/40">{selectedPost.likes}</span>
                    </button>
                    <button className="flex flex-col items-center space-y-2 group">
                      <Bookmark size={24} className="text-secondary/40 group-hover:text-accent transition-colors" />
                      <span className="text-[10px] font-bold text-secondary/40">{selectedPost.saves}</span>
                    </button>
                  </div>
                  <button className="px-10 py-5 bg-secondary text-primary rounded-full font-bold tracking-widest uppercase text-xs hover:scale-105 transition-all shadow-xl">
                    Hire Creator
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
