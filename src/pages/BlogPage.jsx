import React from 'react';
import { motion } from 'framer-motion';
import { BlogPreview as BlogContent } from '@/components/BlogPreview'; 
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Edit3, MessageCircle, Phone, Rss } from 'lucide-react';

const EMERGENCY_NUMBER = "07375064619";

export default function BlogPage() {
  const handleEmergencyCall = () => {
    window.location.href = `tel:${EMERGENCY_NUMBER}`;
  };

  const handleWhatsAppChat = () => {
    window.open(`https://wa.me/${EMERGENCY_NUMBER.replace(/-/g, "")}`, '_blank');
  };
  return (
    <div className="py-20 lg:py-28 page-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center bg-red-100 text-brand-red px-4 py-2 rounded-full text-sm font-medium mb-4 border border-red-200">
            <Rss className="w-5 h-5 mr-2 text-brand-red" />
            Dental Health Insights
          </div>
          <h1 className="text-4xl lg:text-6xl font-black page-main-title mb-4 dynamic-text-shadow">
            Emergency Dental Blog
          </h1>
          <p className="text-xl page-description max-w-3xl mx-auto leading-relaxed">
            Expert advice, tips, and insights for handling dental emergencies and maintaining your oral health.
          </p>
        </motion.div>

        <BlogContent isPage={true} />
        
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-20 lg:mt-28 emergency-gradient text-white py-16 lg:py-24 px-6 lg:px-12 rounded-2xl shadow-2xl text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-black mb-6 dynamic-text-shadow-light">
            Questions About Your Dental Health?
          </h2>
          <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto opacity-90">
            If you have any concerns or need immediate advice, don't hesitate to reach out to our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleEmergencyCall}
              size="lg" 
              className="bg-white text-red-600 font-bold text-xl px-10 py-4 hover:bg-gray-200 glow-effect-light !rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Emergency Line
            </Button>
            <Button 
              onClick={handleWhatsAppChat}
              variant="outline" 
              size="lg" 
              className="whatsapp-cta-on-dark-gradient text-xl px-10 py-4"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              WhatsApp Us
            </Button>
          </div>
           <Button asChild size="lg" className="mt-10 bg-slate-800/80 hover:bg-slate-700/80 text-white font-bold text-lg px-8 py-3 hover:text-yellow-300 transition-colors">
              <Link to="/contact">
                <Edit3 className="w-5 h-5 mr-2" /> Ask a Question
              </Link>
          </Button>
        </motion.section>
      </div>
    </div>
  );
}