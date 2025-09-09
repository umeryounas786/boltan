import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Phone, MessageCircle, Mail, MapPin, Clock, User, AlertTriangle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import FaqAccordion from '@/components/FaqAccordion';

const EMERGENCY_NUMBER = "07375064619";
const OFFICE_NUMBER = "0161-724-7344";
const FULL_ADDRESS = "265, Bolton Road Dental Practice, Radcliffe, Manchester, M26 3QP";

const contactFAQs = [
  {
    question: "What does the initial consultation fee cover?",
    answer: "The initial fee secures your emergency appointment and covers the cost of the dentist's time for a full examination, diagnosis of your issue, and a discussion of all treatment options. The cost of any subsequent treatment will be explained clearly before we proceed."
  },
  {
    question: "What happens after I pay online?",
    answer: "You will receive an immediate email confirmation with your appointment details, including the time, date, and our clinic address. Our team will also be notified, and we will prepare for your arrival."
  },
  {
    question: "Can I book without paying online?",
    answer: "Yes, you can. Simply click the 'Book via Phone/Email' button, which will take you to our contact page. Call our emergency line for the fastest response to secure your appointment. Please note that online payments are the quickest way to guarantee your slot."
  },
  {
    question: "What if I need to cancel my appointment?",
    answer: "Please call our clinic as soon as possible if you need to cancel or reschedule. Please refer to our cancellation policy, which will be provided in your booking confirmation email, for details on refunds."
  },
  {
    question: "Will I get a refund if I don't get an appointment within 24 hours?",
    answer: "Yes, absolutely. If for any unforeseen reason we are unable to provide you with an appointment within 24 hours of your booking, we guarantee a full refund of your payment."
  },
  {
    question: "What is your cancellation policy regarding refunds?",
    answer: "Cancellations made within 15 minutes of booking are eligible for a full refund. As emergency appointments require us to notify and prepare our dentists and nurses immediately, cancellations made after 15 minutes may be subject to a cancellation fee."
  },
  {
    question: "Do you offer payment plans or interest-free options for treatments?",
    answer: "Yes, we understand that emergency treatments can be an unexpected expense. We offer 0% interest and monthly payment plans for your treatments to make them more manageable. Please discuss this with our team during your consultation."
  }
];

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Emergency Consultation',
    preferredTime: 'Any',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null}));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Please describe your dental issue.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please check the form for errors and try again.",
      });
      return;
    }
    
    localStorage.setItem('contactFormSubmission', JSON.stringify(formData));
    toast({
      title: "Message Sent!",
      description: "We've received your request and will contact you shortly.",
    });
    setFormData({ name: '', phone: '', email: '', service: 'Emergency Consultation', preferredTime: 'Any', message: '' });
  };

  const contactOptions = [
    { 
      icon: <Phone className="w-7 h-7" />, 
      title: "Emergency Call (24/7)", 
      value: EMERGENCY_NUMBER, 
      action: `tel:${EMERGENCY_NUMBER}`,
      cta: "Call Now",
      color: "red"
    },
    { 
      icon: <MessageCircle className="w-7 h-7" />, 
      title: "WhatsApp Emergency", 
      value: EMERGENCY_NUMBER, 
      action: `https://wa.me/${EMERGENCY_NUMBER.replace(/-/g, "")}`,
      cta: "Chat Now",
      color: "green"
    },
    { 
      icon: <Clock className="w-7 h-7" />, 
      title: "Office Hours Line", 
      subtext: "(Mon-Sat 8am-5pm)",
      value: OFFICE_NUMBER, 
      action: `tel:${OFFICE_NUMBER}`,
      cta: "Call Office",
      color: "blue"
    },
    { 
      icon: <Mail className="w-7 h-7" />, 
      title: "Email Us", 
      value: "emergency@dental.manchesterbolton.co.uk", 
      action: "mailto:emergency@dental.manchesterbolton.co.uk",
      cta: "Send Email",
      color: "purple"
    },
  ];

  const getButtonColorClasses = (colorName) => {
    switch (colorName) {
      case 'red': return '!bg-brand-red hover:!bg-brand-red-dark !text-brand-white';
      case 'green': return '!bg-brand-green-whatsapp hover:!bg-brand-green-whatsapp-dark !text-brand-white';
      case 'blue': return '!bg-blue-500 hover:!bg-blue-600 !text-brand-white';
      case 'purple': return '!bg-purple-500 hover:!bg-purple-600 !text-brand-white';
      default: return '!bg-brand-red hover:!bg-brand-red-dark !text-brand-white';
    }
  };
  const getIconColorClasses = (colorName) => {
    switch (colorName) {
      case 'red': return 'text-brand-red';
      case 'green': return 'text-brand-green-whatsapp';
      case 'blue': return 'text-blue-500';
      case 'purple': return 'text-purple-500';
      default: return 'text-brand-red';
    }
  };
  const getBorderColorClasses = (colorName) => {
    switch (colorName) {
      case 'red': return 'border-brand-red';
      case 'green': return 'border-brand-green-whatsapp';
      case 'blue': return 'border-blue-500';
      case 'purple': return 'border-purple-500';
      default: return 'border-brand-red';
    }
  };


  return (
    <div className="page-background-light contact-page-light">
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black page-main-title mb-4">Contact & Book</h1>
            <p className="text-lg sm:text-xl lg:text-2xl page-subtitle max-w-3xl mx-auto">
              Reach out for immediate assistance or to schedule an appointment. We're here for you 24/7.
            </p>
          </motion.div>
          
          <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12 text-center"
          >
              <Button asChild size="lg" className="primary-cta !text-lg !font-bold">
                  <Link to="/book-appointment">
                      <Calendar className="w-5 h-5 mr-3" />
                      Book & Pay Online to Secure Your Spot
                  </Link>
              </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10 sm:gap-y-16 lg:items-stretch">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col space-y-5 sm:space-y-6 h-full"
            >
              <h2 className="text-2xl sm:text-3xl font-bold section-title mb-4 sm:mb-6 border-b-2 border-brand-red pb-3">Direct Contact Options</h2>
              {contactOptions.map(opt => (
                <motion.div 
                  key={opt.title}
                  className={`contact-card-item glass-effect p-4 sm:p-5 rounded-xl shadow-xl border-l-4 ${getBorderColorClasses(opt.color)}`}
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3 sm:gap-4 flex-grow min-w-0">
                          <div className={`p-2 rounded-full bg-opacity-10 ${getIconColorClasses(opt.color).replace('text-', 'bg-')}`}>
                             {React.cloneElement(opt.icon, { className: `w-5 h-5 sm:w-6 sm:h-6 ${getIconColorClasses(opt.color)}` })}
                          </div>
                          <div className="flex-grow min-w-0">
                              <h3 className={`text-md sm:text-lg font-semibold ${getIconColorClasses(opt.color)}`}>{opt.title}</h3>
                              {opt.subtext && <p className="text-xs card-description -mt-0.5">{opt.subtext}</p>}
                              <p className="text-sm sm:text-md font-medium card-description truncate">{opt.value}</p>
                          </div>
                      </div>
                      <Button 
                          asChild 
                          size="sm"
                          className={`shrink-0 primary-cta !font-semibold !px-3 !py-1.5 sm:!px-4 sm:!py-2 text-sm sm:text-base w-full mt-2 sm:w-auto sm:mt-0 ${getButtonColorClasses(opt.color)}`}
                      >
                          <a href={opt.action} target={opt.action.startsWith('http') || opt.action.startsWith('mailto') ? "_blank" : "_self"} rel="noopener noreferrer">
                              {opt.cta}
                          </a>
                      </Button>
                  </div>
                </motion.div>
              ))}
              <motion.div 
                  className={`contact-card-item glass-effect p-4 sm:p-5 rounded-xl shadow-xl border-l-4 border-yellow-500 mt-auto`} 
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
              >
                  <div className="flex items-start gap-3 sm:gap-4">
                       <div className="p-2 rounded-full bg-yellow-500 bg-opacity-10 mt-0.5">
                          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                      </div>
                      <div>
                          <h3 className="text-md sm:text-lg font-semibold text-yellow-500">Our Clinic Address</h3>
                          <p className="card-description text-sm sm:text-md">
                          {FULL_ADDRESS}
                          </p>
                          <p className="text-xs text-yellow-600 mt-1">(Please call ahead for emergency appointments)</p>
                      </div>
                  </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="glass-effect p-6 md:p-8 lg:p-10 rounded-2xl shadow-2xl border-t-4 border-brand-red flex flex-col h-full"
            >
              <h2 className="text-2xl sm:text-3xl font-bold section-title mb-6 sm:mb-8 text-center">Or Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 flex flex-col flex-grow">
                <div>
                  <Label htmlFor="name" className="next-level-label">Full Name <span className="text-brand-red">*</span></Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., John Doe" 
                    className={`next-level-input ${errors.name ? 'border-yellow-500 focus:border-yellow-500' : ''}`}
                    required
                  />
                  {errors.name && <p className="text-yellow-400 text-xs sm:text-sm mt-1 flex items-center"><AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className="next-level-label">Phone Number <span className="text-brand-red">*</span></Label>
                  <Input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g., 07123456789" 
                    className={`next-level-input ${errors.phone ? 'border-yellow-500 focus:border-yellow-500' : ''}`}
                    required
                  />
                  {errors.phone && <p className="text-yellow-400 text-xs sm:text-sm mt-1 flex items-center"><AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />{errors.phone}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="next-level-label">Email Address <span className="text-brand-red">*</span></Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g., john.doe@example.com" 
                    className={`next-level-input ${errors.email ? 'border-yellow-500 focus:border-yellow-500' : ''}`}
                    required
                  />
                  {errors.email && <p className="text-yellow-400 text-xs sm:text-sm mt-1 flex items-center"><AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />{errors.email}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service" className="next-level-label">Service Needed</Label>
                    <select 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="next-level-input w-full appearance-none"
                    >
                      <option>Emergency Consultation</option>
                      <option>Toothache Relief</option>
                      <option>Broken Tooth Repair</option>
                      <option>Extraction</option>
                      <option>Root Canal Inquiry</option>
                      <option>Other Urgent Issue</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="preferredTime" className="next-level-label">Preferred Time</Label>
                    <select 
                      id="preferredTime" 
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="next-level-input w-full appearance-none"
                    >
                      <option>Any</option>
                      <option>Morning (8am-12pm)</option>
                      <option>Afternoon (12pm-5pm)</option>
                      <option>Evening (After 5pm)</option>
                    </select>
                  </div>
                </div>
                <div className="flex-grow flex flex-col">
                  <Label htmlFor="message" className="next-level-label">Describe Your Dental Issue <span className="text-brand-red">*</span></Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide a brief description of your symptoms or problem..." 
                    rows={4}
                    className={`next-level-input flex-grow ${errors.message ? 'border-yellow-500 focus:border-yellow-500' : ''}`}
                    required
                  />
                  {errors.message && <p className="text-yellow-400 text-xs sm:text-sm mt-1 flex items-center"><AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />{errors.message}</p>}
                </div>
                <Button type="submit" className="w-full primary-cta text-base sm:text-lg !py-2.5 sm:!py-3 pulse-animation mt-auto">
                  Send Emergency Request
                </Button>
              </form>
              <p className="text-xs text-brand-gray-medium mt-5 sm:mt-6 text-center opacity-80">
                For immediate life-threatening emergencies, please call 999. This form is for urgent dental care requests.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black page-main-title">Booking Questions Answered</h2>
              <p className="text-xl page-subtitle mt-2">Find answers to common questions about our appointment process.</p>
            </div>
            <FaqAccordion faqs={contactFAQs} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}