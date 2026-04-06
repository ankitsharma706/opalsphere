import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Image, MessageSquare, Edit3, X } from 'lucide-react';

export function CommunityFAB() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-12 right-12 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-20 right-0 space-y-4">
            <motion.button 
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              className="w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center text-secondary hover:bg-accent hover:text-primary transition-all group relative"
            >
              <Image size={20} />
              <span className="absolute right-20 bg-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Upload Design</span>
            </motion.button>
            <motion.button 
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ delay: 0.1 }}
              className="w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center text-secondary hover:bg-accent hover:text-primary transition-all group relative"
            >
              <MessageSquare size={20} />
              <span className="absolute right-20 bg-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Share Experience</span>
            </motion.button>
            <motion.button 
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ delay: 0.2 }}
              className="w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center text-secondary hover:bg-accent hover:text-primary transition-all group relative"
            >
              <Edit3 size={20} />
              <span className="absolute right-20 bg-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Create Post</span>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-secondary text-primary shadow-2xl flex items-center justify-center hover:bg-accent transition-all"
      >
        {isOpen ? <X size={24} /> : <Plus size={24} />}
      </motion.button>
    </div>
  );
}
