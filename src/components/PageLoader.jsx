import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export function PageLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-brand-gray-light z-[200]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="mb-6"
      >
        <Loader2 className="w-16 h-16 text-brand-red" />
      </motion.div>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl font-semibold text-brand-gray-text"
      >
        Loading Your Page...
      </motion.p>
      <motion.div 
        className="mt-4 w-48 h-1.5 bg-brand-red/20 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div 
          className="h-full bg-brand-red"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>
    </div>
  );
}