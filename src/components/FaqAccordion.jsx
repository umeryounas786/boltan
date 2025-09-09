import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const contentVariants = {
    collapsed: { height: 0, opacity: 0, marginTop: 0 },
    open: { height: 'auto', opacity: 1, marginTop: '1rem' }
  };

  const isLightThemeActive = document.body.classList.contains('light-theme-active');
  const itemClasses = isLightThemeActive 
    ? 'border-b border-gray-200'
    : 'border-b border-gray-700';
  const buttonClasses = isLightThemeActive
    ? 'text-brand-black-text hover:text-brand-red'
    : 'text-white hover:text-red-400';
  const contentClasses = isLightThemeActive
    ? 'text-brand-gray-text'
    : 'text-gray-300';
  const iconColor = isLightThemeActive ? 'text-brand-red' : 'text-red-400';

  return (
    <div className={itemClasses}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center text-left py-5 text-lg font-semibold transition-colors duration-200 ${buttonClasses}`}
      >
        <span>{faq.question}</span>
        {isOpen ? <Minus className={`w-5 h-5 ${iconColor}`} /> : <Plus className={`w-5 h-5 ${iconColor}`} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={contentVariants}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`overflow-hidden ${contentClasses}`}
          >
            <p className="pb-5">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqAccordion = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="w-full">
      {faqs.map((faq, index) => (
        <FaqItem key={index} faq={faq} />
      ))}
    </div>
  );
};

export default FaqAccordion;