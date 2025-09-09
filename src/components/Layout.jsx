import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Mail, Clock, Heart, ListChecks, Edit3, Tag, MapPin as MapPinIcon, Menu, X, Home as HomeIcon } from 'lucide-react';

const EMERGENCY_NUMBER = "07375064619";
const OFFICE_NUMBER = "0161-724-7344";
const FULL_ADDRESS = "265, Bolton Road Dental Practice, Radcliffe, Manchester, M26 3QP";

export function Layout() {
  const { toast } = useToast();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleEmergencyCall = (number) => {
    window.location.href = `tel:${number}`;
    toast({
      title: "Calling Emergency Line",
      description: `Dialing ${number}...`,
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

  const navLinkClass = ({ isActive }) => 
    `nav-link px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'nav-link-active' : 'hover:text-red-600 hover:bg-red-500/5'}`;
  
  const mobileNavLinkClass = ({ isActive }) => 
    `block px-4 py-3 text-base font-medium rounded-md ${isActive ? 'bg-red-600 text-white' : 'text-brand-gray-text hover:bg-red-500/10 hover:text-red-600'}`;

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } }
  };

  return (
    <div className="min-h-screen bg-brand-gray-light text-brand-gray-text">
      <Toaster />
      
      <div 
        className="emergency-gradient text-white py-3 px-4 text-center text-sm md:text-base shadow-lg"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
          <span className="font-semibold">🚨 DENTAL EMERGENCY? CALL <a href={`tel:${EMERGENCY_NUMBER}`} className="font-bold underline hover:text-yellow-300 transition-colors duration-200">{EMERGENCY_NUMBER}</a> (24/7)</span>
          <span className="hidden md:inline text-red-200/70">|</span>
          <span className="font-semibold">Office Hours (Mon-Sat 8am-5pm): <a href={`tel:${OFFICE_NUMBER}`} className="font-bold underline hover:text-yellow-300 transition-colors duration-200">{OFFICE_NUMBER}</a></span>
        </div>
      </div>

      <header>
        <nav
          className="navbar-light-theme shadow-lg sticky top-0 z-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3 md:py-4">
              <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
                <div className="w-10 h-10 md:w-12 md:h-12 medical-gradient rounded-full flex items-center justify-center pulse-animation-nav ring-2 ring-red-500/50">
                  <span className="text-white font-bold text-xl md:text-2xl">🦷</span>
                </div>
                <div>
                  <span className="text-lg md:text-xl font-black text-white tracking-tight">Emergency Dentistry</span>
                  <p className="text-xs text-red-300 uppercase tracking-wider font-medium">Manchester & Bolton</p>
                </div>
              </Link>
              <div className="hidden md:flex items-center space-x-5">
                <NavLink to="/" className={navLinkClass}>Home</NavLink>
                <NavLink to="/services" className={navLinkClass}>Services</NavLink>
                <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
                <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
                <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
                 <Button 
                  onClick={() => handleEmergencyCall(EMERGENCY_NUMBER)}
                  className="primary-cta ml-2"
                  size="sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button 
                  onClick={handleWhatsAppChat}
                  variant="outline"
                  className="whatsapp-cta"
                  size="sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
              <div className="md:hidden flex items-center gap-2">
                 <Button onClick={() => handleEmergencyCall(EMERGENCY_NUMBER)} className="primary-cta !p-2.5 !rounded-md">
                  <Phone className="w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                  className="text-brand-gray-text hover:text-brand-red p-2.5 rounded-md hover:bg-red-500/5 focus:outline-none focus:ring-2 focus:ring-brand-red"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40 border-t border-border"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <NavLink to="/" className={mobileNavLinkClass}><HomeIcon className="inline-block w-5 h-5 mr-2 align-text-bottom"/>Home</NavLink>
                  <NavLink to="/services" className={mobileNavLinkClass}><ListChecks className="inline-block w-5 h-5 mr-2 align-text-bottom"/>Services</NavLink>
                  <NavLink to="/pricing" className={mobileNavLinkClass}><Tag className="inline-block w-5 h-5 mr-2 align-text-bottom"/>Pricing</NavLink>
                  <NavLink to="/blog" className={mobileNavLinkClass}><Edit3 className="inline-block w-5 h-5 mr-2 align-text-bottom"/>Blog</NavLink>
                  <NavLink to="/contact" className={mobileNavLinkClass}><Mail className="inline-block w-5 h-5 mr-2 align-text-bottom"/>Contact</NavLink>
                </div>
                <div className="px-4 py-3 border-t border-border">
                   <Button 
                      onClick={handleWhatsAppChat}
                      variant="outline"
                      className="whatsapp-cta w-full"
                      size="sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Triage
                    </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-brand-slate-background text-brand-gray-medium py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-6 hover:opacity-90 transition-opacity">
                <div className="w-10 h-10 medical-gradient rounded-full flex items-center justify-center ring-1 ring-red-500/30">
                  <span className="text-white font-bold text-xl">🦷</span>
                </div>
                <div>
                  <span className="text-lg font-black text-white">Emergency Dentistry</span>
                  <p className="text-xs text-red-300 uppercase font-medium">Manchester & Bolton</p>
                </div>
              </Link>
              <p className="leading-relaxed text-sm text-brand-gray-medium mb-3">
                Your trusted 24/7 emergency dental care. Fast, reliable, and always here for you in Manchester & Bolton.
              </p>
              <div className="flex items-start space-x-2 text-sm text-brand-gray-medium">
                <MapPinIcon className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                <span>{FULL_ADDRESS}</span>
              </div>
            </div>
            
            <div>
              <span className="text-md font-semibold text-brand-black-text mb-4 block uppercase tracking-wider">Quick Links</span>
              <ul className="space-y-2.5">
                <li><NavLink to="/" className="text-brand-gray-medium hover:text-brand-red transition-colors">Home</NavLink></li>
                <li><NavLink to="/services" className="text-brand-gray-medium hover:text-brand-red transition-colors">Our Services</NavLink></li>
                <li><NavLink to="/pricing" className="text-brand-gray-medium hover:text-brand-red transition-colors">Pricing Plans</NavLink></li>
                <li><NavLink to="/blog" className="text-brand-gray-medium hover:text-brand-red transition-colors">Dental Blog</NavLink></li>
                <li><NavLink to="/contact" className="text-brand-gray-medium hover:text-brand-red transition-colors">Contact & Appointments</NavLink></li>
              </ul>
            </div>

            <div>
              <span className="text-md font-semibold text-brand-black-text mb-4 block uppercase tracking-wider">Contact Us</span>
              <div className="space-y-3">
                <a href={`tel:${EMERGENCY_NUMBER}`} className="flex items-center space-x-3 text-brand-gray-medium hover:text-brand-red transition-colors group">
                  <Phone className="w-5 h-5 text-brand-red transition-colors" />
                  <span>{EMERGENCY_NUMBER} (24/7)</span>
                </a>
                <a href={`https://wa.me/${EMERGENCY_NUMBER.replace(/-/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-brand-gray-medium hover:text-green-500 transition-colors group">
                  <MessageCircle className="w-5 h-5 text-green-500 transition-colors" />
                  <span>WhatsApp Emergency</span>
                </a>
                <a href={`tel:${OFFICE_NUMBER}`} className="flex items-center space-x-3 text-brand-gray-medium hover:text-blue-500 transition-colors group">
                  <Clock className="w-5 h-5 text-blue-500 transition-colors" />
                  <span>{OFFICE_NUMBER} (Office Hours)</span>
                </a>
                <a href="mailto:emergency@dental.manchesterbolton.co.uk" className="flex items-center space-x-3 text-brand-gray-medium hover:text-blue-500 transition-colors group">
                  <Mail className="w-5 h-5 text-blue-500 transition-colors" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
            
            <div>
              <span className="text-md font-semibold text-brand-black-text mb-4 block uppercase tracking-wider">Office Hours</span>
              <ul className="space-y-2 text-brand-gray-medium text-sm">
                <li>Monday - Saturday: 08:00 - 17:00</li>
                <li>Weekends & Holidays: Emergency Only</li>
                <li className="mt-2 text-brand-red font-semibold">24/7 Emergency Line Active</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-12 pt-8 text-center">
            <p className="text-brand-gray-medium text-sm">
              © {new Date().getFullYear()} Emergency Dentistry Manchester & Bolton. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Designed by <a href="https://www.laskontech.com/" target="_blank" rel="dofollow noopener noreferrer" className="underline hover:text-brand-red">Laskon Technologies</a>
            </p>
          </div>
        </div>
      </footer>
       <div className="fixed bottom-4 right-4 md:hidden z-[100] flex flex-col gap-3">
          <div>
            <Button 
              onClick={() => handleEmergencyCall(EMERGENCY_NUMBER)}
              className="primary-cta !p-3.5 !rounded-full pulse-animation shadow-xl"
              aria-label="Call Emergency"
            >
              <Phone className="w-6 h-6" />
            </Button>
          </div>
          <div>
            <Button 
              onClick={handleWhatsAppChat}
              className="whatsapp-cta !p-3.5 !rounded-full shadow-xl"
              aria-label="WhatsApp Triage"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
          </div>
        </div>
    </div>
  );
}
