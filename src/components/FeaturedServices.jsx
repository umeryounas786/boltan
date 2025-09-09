import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  AlertTriangle, 
  Smile, 
  Shield, 
  XOctagon, 
  Crown, 
  HelpCircle, 
  Users, 
  HeartCrack, 
  ArrowRight, 
  Camera, 
  Zap, 
  Baby as Kid, 
  MessageSquare, 
  Thermometer, 
  Aperture,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServiceDetailModal = React.lazy(() => 
  import('@/components/ServiceDetailModal').then(module => ({ default: module.ServiceDetailModal }))
);

const ModalFallback = () => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[250]">
    <div className="bg-slate-800 p-8 rounded-lg flex flex-col items-center text-white">
      <Loader2 className="w-10 h-10 animate-spin text-red-400 mb-4" />
      <p>Loading Details...</p>
    </div>
  </div>
);

const allServices = [
  {
    icon: <Activity className="w-10 h-10" />,
    title: "Toothache",
    description: "Rapid relief and treatment for persistent tooth pain, getting to the root cause quickly.",
    details: "Our team uses advanced diagnostics to identify the source of your toothache, offering treatments from fillings to root canals to eliminate pain and preserve your tooth."
  },
  {
    icon: <XOctagon className="w-10 h-10" />,
    title: "Extractions",
    description: "Emergency tooth removal when necessary to alleviate pain or prevent further infection.",
    details: "While we aim to save teeth, extractions are sometimes necessary. We perform them gently and discuss replacement options like implants or bridges."
  },
  {
    icon: <HeartCrack className="w-10 h-10" />,
    title: "Broken or Chipped Tooth",
    description: "Expert repair and restoration for damaged, fractured, or chipped teeth, restoring your smile.",
    details: "From dental bonding for minor chips to crowns for more significant breaks, we provide aesthetic and durable solutions to restore your tooth's function and appearance."
  },
  {
    icon: <Smile className="w-10 h-10" />,
    title: "Dentures (Emergency)",
    description: "Emergency denture repairs, adjustments, and solutions for lost or broken dentures.",
    details: "We offer same-day repairs for many denture issues and can provide temporary solutions while new dentures are being crafted, ensuring you're not without your smile."
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Wisdom Tooth Pain",
    description: "Effective management of pain, swelling, and complications arising from wisdom teeth.",
    details: "Impacted or infected wisdom teeth can cause severe pain. We provide assessment, pain relief, and extractions if necessary, including for complex cases."
  },
  {
    icon: <HelpCircle className="w-10 h-10" />,
    title: "Lost Tooth or Filling",
    description: "Immediate solutions for replacing lost teeth or fillings to protect your oral health.",
    details: "A lost filling can expose sensitive tooth areas, and a lost tooth needs prompt attention. We offer quick replacements and discuss long-term solutions like implants."
  },
  {
    icon: <AlertTriangle className="w-10 h-10" />,
    title: "Root Canal Treatment",
    description: "Urgent root canal therapy to save severely infected teeth and eliminate pain.",
    details: "Root canal treatment is a pain-relieving procedure to save a tooth that's badly infected. Our modern techniques make it comfortable and effective."
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Dental Abscess & Trauma",
    description: "Specialized treatment for dental abscesses and traumatic injuries to the teeth and gums.",
    details: "Abscesses require immediate attention to drain infection and prevent spread. Dental trauma from accidents is also managed swiftly to save teeth and repair damage."
  },
  {
    icon: <Crown className="w-10 h-10" />,
    title: "Lost Crowns & Veneers",
    description: "Prompt re-cementing or replacement of lost or damaged crowns and veneers.",
    details: "A lost crown or veneer can be unsettling. We aim to re-cement it if possible or provide a high-quality temporary while a new restoration is made."
  },
  {
    icon: <Aperture className="w-10 h-10" />,
    title: "Digital Smile Design (DSD)",
    description: "COMING SOON: 3D imaging to preview your post-treatment smile, even in emergencies. Adds cosmetic focus to urgent care.",
    isComingSoon: true,
    details: "Imagine seeing your new smile before treatment even begins! DSD uses cutting-edge 3D technology for predictable and aesthetically pleasing results, especially impactful after dental trauma."
  },
  {
    icon: <Camera className="w-10 h-10" />,
    title: "Emergency Teledentistry",
    description: "Immediate virtual consultations for pain assessment, advice, or triage. Builds trust & reduces unnecessary visits.",
    details: "Connect with our dentists from home for quick advice. We can assess your situation, provide temporary relief measures, and determine if an in-person visit is immediately needed."
  },
  {
    icon: <Kid className="w-10 h-10" />,
    title: "Pediatric Dental Emergencies",
    description: "Child-focused emergency care for knocked-out teeth, sports injuries, infections. Fills a crucial gap for families.",
    details: "Dental emergencies in children require specialized care. We're experienced in handling pediatric dental trauma and urgent issues with a gentle, reassuring approach."
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Aesthetic Temporary Solutions",
    description: "High-quality, same-day aesthetic temporaries for lost crowns or front teeth. Restores confidence immediately.",
    details: "Losing a front tooth or crown can be distressing. We provide beautiful, natural-looking temporary restorations on the same day to ensure you leave our clinic with confidence."
  },
  {
    icon: <MessageSquare className="w-10 h-10" />,
    title: "In-Clinic Sedation",
    description: "Nitrous oxide or oral sedation for anxious emergency patients. Enhances patient comfort during stressful visits.",
    details: "Dental anxiety is common, especially in emergencies. We offer safe sedation options like nitrous oxide (laughing gas) to help you relax during treatment."
  },
  {
    icon: <Thermometer className="w-10 h-10" />,
    title: "TMJ/Lockjaw Management",
    description: "Immediate relief for sudden jaw lock, clicking, or severe TMJ pain. Specialized care for distressing conditions.",
    details: "TMJ disorders and lockjaw can be incredibly painful. Our team can diagnose the cause and provide immediate relief strategies and long-term management plans."
  }
];

const ServiceCard = ({ service, index, onServiceClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.45,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      key={service.title + index} 
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`glass-effect-light rounded-xl p-5 md:p-6 hover:bg-red-500/5 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:shadow-red-500/10 border-t-2 ${service.isComingSoon ? 'border-yellow-400 cursor-default' : 'border-red-600 cursor-pointer'}`}
      onClick={() => onServiceClick(service)}
    >
      <div className={`w-14 h-14 ${service.isComingSoon ? 'bg-yellow-500/10' : 'bg-red-500/10'} rounded-full flex items-center justify-center mb-5 ${service.isComingSoon ? 'text-yellow-300 ring-yellow-500/30' : 'text-red-300 ring-red-500/30'} ring-1`}>
        {React.cloneElement(service.icon, { className: "w-7 h-7" })}
      </div>
      <h3 className="text-lg lg:text-xl font-bold text-white mb-2.5">{service.title}</h3>
      <p className="text-gray-300 text-xs flex-grow mb-5 leading-relaxed">{service.description}</p>
      {service.isComingSoon ? (
         <Button disabled className="bg-yellow-400 text-yellow-800 mt-auto w-full !font-semibold cursor-default text-xs py-2 px-3 h-auto">
           Coming Soon
         </Button>
      ) : (
        <Button 
          className="secondary-cta mt-auto w-full !font-semibold text-xs py-2 px-3 h-auto" 
          onClick={(e) => { e.stopPropagation(); onServiceClick(service); }}
        >
            Learn More & Inquire <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
        </Button>
      )}
    </motion.div>
  );
};

export function FeaturedServices() {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service) => {
    if (!service.isComingSoon) {
      setSelectedService(service);
      setIsModalOpen(true);
    }
  };

  const serviceCategories = [
    {
      name: "Urgent Pain & Damage",
      services: allServices.filter(s => ["Toothache", "Broken or Chipped Tooth", "Wisdom Tooth Pain", "Root Canal Treatment", "Dental Abscess & Trauma", "TMJ/Lockjaw Management"].includes(s.title))
    },
    {
      name: "Restorations & Replacements",
      services: allServices.filter(s => ["Extractions", "Lost Tooth or Filling", "Lost Crowns & Veneers", "Dentures (Emergency)", "Aesthetic Temporary Solutions"].includes(s.title))
    },
    {
      name: "Specialized & Advanced Care",
      services: allServices.filter(s => ["Pediatric Dental Emergencies", "In-Clinic Sedation", "Emergency Teledentistry", "Digital Smile Design (DSD)"].includes(s.title))
    }
  ];

  return (
    <>
    <section className={`py-20 lg:py-28 services-section-light ${isServicesPage ? 'bg-transparent' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isServicesPage && (
          <>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{duration: 0.5, ease: "easeOut"}}
              className="text-center mb-12"
            >
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 dynamic-text-shadow">
                Our 24/7 Emergency Dental Services
              </h2>
              <p className="text-2xl text-red-300 mb-6">
                Experiencing dental pain? We're ready to help.
              </p>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our expert team provides comprehensive emergency dental care. Select a category below to explore our full range of services.
              </p>
            </motion.div>
            <Tabs defaultValue={serviceCategories[0].name} className="w-full">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2">
                  {serviceCategories.map((category) => (
                    <TabsTrigger key={category.name} value={category.name}>{category.name}</TabsTrigger>
                  ))}
                </TabsList>
              </motion.div>
              {serviceCategories.map((category) => (
                <TabsContent key={category.name} value={category.name}>
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0.5, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
                  >
                    {category.services.map((service, index) => (
                      <ServiceCard key={service.title} service={service} index={index} onServiceClick={handleServiceClick} />
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </>
        )}
         {isServicesPage && (
          <>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{duration: 0.5, delay: 0.1, ease: "easeOut"}}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 dynamic-text-shadow">
                Detailed List of Emergency Services
              </h2>
              <p className="text-lg text-red-300 max-w-3xl mx-auto leading-relaxed">
                We offer a comprehensive range of emergency dental treatments to address your urgent needs quickly and effectively. Click on a service to learn more and make an inquiry.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {allServices.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} onServiceClick={handleServiceClick} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
    <Suspense fallback={<ModalFallback />}>
      {isModalOpen && selectedService && (
        <ServiceDetailModal 
          service={selectedService} 
          isOpen={isModalOpen} 
          onOpenChange={setIsModalOpen} 
        />
      )}
    </Suspense>
    </>
  );
}