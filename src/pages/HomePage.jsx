
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { FeaturedServices } from '@/components/FeaturedServices';
import { PricingSection } from '@/components/PricingSection';
import { BlogPreview } from '@/components/BlogPreview';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Shield, 
  AlertCircle,
  Calendar,
  MessageCircle,
  ArrowRight,
  PlusCircle,
  Award
} from 'lucide-react';

const EMERGENCY_NUMBER = "07375064619";

export default function HomePage() {
  const { toast } = useToast();

  const handleEmergencyCall = () => {
    window.location.href = `tel:${EMERGENCY_NUMBER}`;
    toast({
      title: "Calling Emergency Line",
      description: `Dialing ${EMERGENCY_NUMBER}...`,
      duration: 3000,
    });
  };

  const handleWhatsAppChat = () => {
    window.open(`https://wa.me/${EMERGENCY_NUMBER.replace(/-/g, "")}`, '_blank');
    toast({
      title: "WhatsApp Triage",
      description: "Opening WhatsApp chat for instant support...",
      duration: 3000,
    });
  };

  const keyFeatures = [
    { icon: <Clock className="w-8 h-8 text-yellow-300" />, title: "Rapid Response", desc: "Appointments typically within 1 hour." },
    { icon: <MapPin className="w-8 h-8 text-yellow-300" />, title: "Wide Coverage", desc: "Manchester, Bolton & surrounding areas." },
    { icon: <Shield className="w-8 h-8 text-yellow-300" />, title: "Expert Care", desc: "Qualified & experienced GDC dentists." },
  ];
  

  return (
    <>
      <style>
        {`
          body.light-theme-active #homepageBlogPreviewWrapper section#blog-preview-homepage p.section-description {
            color: hsl(0, 0%, 100%) !important;
          }
        `}
      </style>
      <section className="relative overflow-hidden py-16 lg:py-24 hero-section-light">
        <div className="absolute inset-0 opacity-[0.02]">
          <img  alt="Subtle geometric pattern for dental website background" className="w-full h-full object-cover" width="1920" height="1080" src="https://images.unsplash.com/photo-1586135526446-cea30d52bc5e" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:order-1"
            >
              <div className="inline-flex items-center bg-red-600/10 text-red-300 px-4 py-2.5 rounded-full text-sm font-semibold mb-7 border border-red-500/40 shadow-md">
                <AlertCircle className="w-5 h-5 mr-2.5 text-red-400" />
                Your Trusted Emergency Dentists
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight dynamic-text-shadow">
                Emergency Dental Care
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-400 mb-8 leading-tight">
                Manchester & Bolton
              </h2>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed max-w-xl">
                Providing rapid emergency dental treatment across Manchester, Bolton, and surrounding areas. We offer same-day appointments and urgent consultations from £42.
              </p>
              <p className="text-md text-gray-400 mb-12 leading-relaxed max-w-xl">
                Our expert team will diagnose your dental emergency and provide clear treatment options for immediate relief and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button 
                  asChild
                  size="lg" 
                  className="primary-cta text-lg px-10 py-5"
                >
                  <Link to="/book-appointment">
                    <Calendar className="w-5 h-5 mr-2.5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button 
                  onClick={handleEmergencyCall}
                  variant="outline" 
                  size="lg" 
                  className="secondary-cta text-lg px-10 py-5"
                >
                  <Phone className="w-5 h-5 mr-2.5" />
                  Call Emergency Now
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative mt-12 lg:mt-0 group lg:order-2" 
            >
              <div className="floating-animation relative">
                 <img  className="rounded-2xl shadow-xl w-full h-auto max-h-[380px] sm:max-h-[450px] md:max-h-[520px] object-cover border-4 border-red-500/25 group-hover:border-red-500/50 transition-all duration-300" alt="Comfortable and modern dental clinic interior" width="800" height="520" src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
              </div>
              <div 
                className="hero-badge-home-mobile sm:hero-badge-home"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center ring-1 sm:ring-2 ring-white/25 shrink-0 shadow-lg">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-300" />
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-md md:text-xl text-white">Same-Hour Appointments</p>
                    <p className="text-xs sm:text-sm md:text-base text-red-200">Guaranteed Rapid Response</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 mid-section-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity:0, y: 20 }}
            whileInView={{ opacity:1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">Comprehensive Emergency Care, When You Need It Most</h2>
            <p className="text-lg text-red-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              From severe toothaches to dental trauma, our experienced team is equipped to handle a wide range of urgent dental needs with precision and compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button asChild size="lg" className="primary-cta !text-lg !px-8 !py-4">
                <Link to="/services">
                  Explore Our Services <ArrowRight className="w-5 h-5 ml-2.5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="secondary-cta !text-lg !px-8 !py-4">
                <Link to="/pricing">
                  View Pricing Plans <ArrowRight className="w-5 h-5 ml-2.5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <FeaturedServices />
      <PricingSection isPage={false} />
      <div id="homepageBlogPreviewWrapper">
        <BlogPreview isPage={false} />
      </div>

      <section id="cta-final" className="py-24 lg:py-36 emergency-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-[0.6]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-7 dynamic-text-shadow-light">
              Dental Emergency? Don't Wait. Act Now.
            </h2>
            <p className="text-xl lg:text-2xl mb-14 max-w-3xl mx-auto opacity-95 leading-relaxed">
              Pain, swelling, or a broken tooth? Our expert emergency dental team in Manchester & Bolton is ready to provide immediate care and relief, 24 hours a day, 7 days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-x-7 gap-y-5 justify-center items-center">
              <Button 
                onClick={handleEmergencyCall}
                size="lg" 
                className="bg-white text-red-600 font-bold text-xl px-10 py-5 hover:bg-gray-200 glow-effect-light !rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call <span className="ml-1.5 text-red-600">{EMERGENCY_NUMBER}</span>
              </Button>
              <Button 
                onClick={handleWhatsAppChat}
                variant="outline" 
                size="lg" 
                className="whatsapp-cta-on-dark-gradient-contrast text-xl px-10 py-5"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp Us
              </Button>
            </div>
            
            <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9 text-left">
              {keyFeatures.map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="bg-white/10 p-7 rounded-xl hover:bg-white/15 transition-colors duration-300 backdrop-blur-lg border border-white/15 card-hover-effect"
                  initial={{opacity: 0, y: 25}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.6, ease: "easeOut", delay: index * 0.1}}
                >
                  <div className="flex items-center gap-5">
                    <div className="bg-red-500/25 p-3.5 rounded-full ring-1 ring-red-400/50">
                      {React.cloneElement(item.icon, { className: "w-7 h-7" })}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">{item.title}</h3>
                      <p className="text-sm text-red-200">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
             <Button asChild size="lg" className="mt-16 primary-cta !text-lg !px-10 !py-5">
                <Link to="/book-appointment">
                Book Your Appointment Now <ArrowRight className="w-5 h-5 ml-2.5" />
                </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
