
import React from 'react';
import { motion } from 'framer-motion';
import { FeaturedServices } from '@/components/FeaturedServices';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, AlertCircle, Calendar, Info, CheckSquare, HelpCircle } from 'lucide-react';

const EMERGENCY_NUMBER = "07375064619";

export default function ServicesPage() {
  
  const handleEmergencyCall = () => {
    window.location.href = `tel:${EMERGENCY_NUMBER}`;
  };

  const handleWhatsAppChat = () => {
    window.open(`https://wa.me/${EMERGENCY_NUMBER.replace(/-/g, "")}`, '_blank');
  };

  const InfoCard = ({ icon, title, children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="glass-effect-light p-6 md:p-8 rounded-xl border-l-4 border-brand-red shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="text-brand-red mt-1 shrink-0">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold card-title mb-2">{title}</h3>
          <div className="card-description leading-relaxed">{children}</div>
        </div>
      </div>
    </motion.div>
  );

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
            <CheckSquare className="w-5 h-5 mr-2 text-brand-red" />
            Our Commitment to Your Dental Health
          </div>
          <h1 className="text-4xl lg:text-6xl font-black page-main-title mb-4 dynamic-text-shadow">
            Emergency Dental Treatments
          </h1>
          <p className="text-2xl page-subtitle mb-6 font-semibold">
            Serving Greater Manchester & Bolton
          </p>
          <p className="text-xl page-description max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive emergency dental treatment across the local and surrounding areas of Manchester and Bolton. Same-day appointments are available for urgent needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 lg:mb-24 items-stretch">
          <InfoCard icon={<Info className="w-7 h-7"/>} title="Initial Consultation & Diagnosis" delay={0.1}>
            <p className="mb-2">Your emergency consultation starts from just <span className="font-bold text-yellow-400">£42</span>.</p>
            <p>During this appointment, our experienced dentists will conduct a thorough assessment to understand your dental emergency. We'll discuss our findings with you and clearly outline all available treatment options, ensuring you can make an informed decision about your care.</p>
          </InfoCard>
          <InfoCard icon={<HelpCircle className="w-7 h-7"/>} title="What to Expect" delay={0.2}>
            <p className="mb-2">We prioritize your urgent needs. Our goal is to provide same-day appointments to address your pain and dental issues promptly.</p>
            <p>Whether it's a severe toothache, a broken tooth, or another urgent problem, we strive to offer immediate relief and effective treatment solutions in a calm and supportive environment.</p>
          </InfoCard>
        </div>

        <FeaturedServices /> 

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-20 lg:mt-28 emergency-gradient text-white py-16 lg:py-24 px-6 lg:px-12 rounded-2xl shadow-2xl text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-black mb-6 dynamic-text-shadow-light">
            Need Urgent Dental Help Now?
          </h2>
          <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Don't endure dental pain. Contact our emergency team immediately for fast, compassionate care in Manchester and Bolton.
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
              <Link to="/book-appointment">
                <Calendar className="w-5 h-5 mr-2" /> Book an Appointment Online
              </Link>
          </Button>
        </motion.section>
      </div>
    </div>
  );
}
