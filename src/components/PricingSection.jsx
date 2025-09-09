
import React from 'react';
import { motion } from 'framer-motion';
import { PoundSterling as Pound, ArrowRight, Tag, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function PricingSection({ isPage = false }) {
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="pricing" className={`py-20 lg:py-28 pricing-section-light ${isPage ? 'bg-transparent' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isPage && (
            <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{duration: 0.5, ease: "easeOut"}}
            className="text-center mb-16"
            >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 dynamic-text-shadow">
                Transparent & Fair Pricing
            </h2>
            <p className="text-xl text-red-300 max-w-3xl mx-auto leading-relaxed">
                No hidden fees, just clear, upfront costs for your emergency dental needs. We prioritize your health and peace of mind.
            </p>
            </motion.div>
        )}

        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-effect-light p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-red-500/10 transition-all duration-300 border-t-4 border-red-500 hover:border-red-400"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
                <div className="w-20 h-20 bg-red-500/10 rounded-xl flex items-center justify-center text-red-300 ring-2 ring-red-500/30 pricing-icon-container">
                    <Tag className="w-9 h-9" />
                </div>
            </div>
            <div className="lg:col-span-5 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 pricing-service-title">Initial Consultation</h3>
                <p className="text-gray-300 pricing-description-text">Includes a comprehensive pain assessment, professional diagnosis, and any necessary e-prescriptions to manage your symptoms.</p>
            </div>
            <div className="lg:col-span-3 text-center">
                <div className="flex items-baseline justify-center mb-2 text-red-300">
                    <span className="text-lg font-medium mr-1.5">From</span>
                    <Pound className="w-8 h-8" />
                    <span className="text-6xl font-black text-white tracking-tighter pricing-price-text">42</span>
                </div>
                <p className="text-xs text-yellow-500 font-semibold bg-yellow-500/10 p-2 rounded-md">Full treatment plan provided after diagnosis.</p>
            </div>
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
                <Button 
                    asChild
                    size="lg"
                    className="w-full lg:w-auto primary-cta !font-semibold !text-lg"
                >
                    <Link to="/book-appointment">
                    Book Now <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </Button>
            </div>
          </div>
        </motion.div>
        
        {!isPage && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{duration: 0.5, delay: 0.2, ease: "easeOut"}}
              id="flexible-payments-card"
              className="mt-16 bg-slate-800/50 rounded-2xl p-8 text-white shadow-lg border border-slate-700/50"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2 flex items-center"><Wallet className="w-6 h-6 mr-3 text-yellow-300"/>Flexible Payment Options</h3>
                  <p className="opacity-90 max-w-xl">
                    We offer flexible payment solutions, including <span className="font-bold text-yellow-300">Klarna</span> and <span className="font-bold text-yellow-300">Clearpay</span>, to make your treatment more manageable.
                  </p>
                </div>
                <Button asChild size="lg" className="secondary-cta-white shrink-0">
                    <Link to="/pricing">
                        Learn More <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </Button>
              </div>
            </motion.div>
        )}
      </div>
    </section>
  );
}
