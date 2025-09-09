import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { 
  AlertTriangle, 
  CreditCard, 
  Phone, 
  Calendar, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Award, 
  ChevronRight
} from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';
import FaqAccordion from '@/components/FaqAccordion';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

const bookingBenefits = [
  {
    icon: <Clock className="w-8 h-8 text-yellow-400" />,
    title: "Same-Day Appointments",
    description: "We prioritise urgent cases to ensure you're seen as quickly as possible, often within the hour."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
    title: "Secure Online Payment",
    description: "Our booking system uses Stripe for secure, hassle-free payment to confirm your appointment."
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    title: "Expert Dental Team",
    description: "Your appointment will be with a GDC-registered dentist experienced in emergency care."
  }
];

const bookingFAQs = [
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

export default function BookingPage() {
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
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStripeCheckout = async () => {
    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Form Incomplete",
        description: "Please fill in your details before proceeding to payment.",
      });
      return;
    }

    toast({
      title: "Redirecting to Stripe...",
      description: "Please provide your Stripe keys to complete the setup.",
    });

    console.log("Stripe checkout initiated with data:", formData);
  };

  const services = [
    "Emergency Consultation",
    "Toothache Relief",
    "Broken Tooth Repair",
    "Wisdom Tooth Pain",
    "Lost Filling or Crown",
    "Dental Abscess",
    "Root Canal Treatment",
    "Emergency Extraction",
    "Pediatric Emergency",
    "Other Urgent Issue",
  ];

  return (
    <>
      <Helmet>
        <title>Book Appointment - Emergency Dental Care Manchester</title>
        <meta name="description" content="Secure your emergency dental appointment online. Choose to pay securely with Stripe or contact us to book directly. Fast, easy, and reliable booking." />
      </Helmet>
      <div className="page-background-light">
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-red-100 text-brand-red px-4 py-2 rounded-full text-sm font-medium mb-4 border border-red-200">
                <Calendar className="w-5 h-5 mr-2 text-brand-red" />
                Secure Your Appointment
              </div>
              <h1 className="text-4xl lg:text-6xl font-black page-main-title mb-4">Book Your Emergency Appointment</h1>
              <p className="text-xl page-subtitle max-w-3xl mx-auto">
                Secure your spot with our expert dental team in Manchester & Bolton. Fill out your details below to get started.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 lg:gap-16 items-start">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mb-12 lg:mb-0"
              >
                <h2 className="text-3xl font-bold section-title mb-6">What to Expect</h2>
                <p className="card-description text-lg mb-8">
                  We've streamlined our booking process to be as simple and stress-free as possible, getting you the care you need without delay.
                </p>
                <div className="space-y-6">
                  {bookingBenefits.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-red-500/10 p-3 rounded-full mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold card-title text-xl">{item.title}</h3>
                        <p className="card-description">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="glass-effect p-6 md:p-8 lg:p-10 rounded-2xl shadow-2xl border-t-4 border-brand-red"
              >
                  <h2 className="text-2xl font-bold section-title mb-6">1. Fill in Your Details</h2>
                  <div className="space-y-5">
                    <div>
                      <Label htmlFor="name" className="next-level-label">Full Name <span className="text-brand-red">*</span></Label>
                      <Input id="name" name="name" type="text" placeholder="e.g., Jane Smith" value={formData.name} onChange={handleInputChange} className={`next-level-input ${errors.name ? 'border-yellow-500' : ''}`} />
                      {errors.name && <p className="text-yellow-400 text-xs mt-1 flex items-center"><AlertTriangle className="w-3.5 h-3.5 mr-1" />{errors.name}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone" className="next-level-label">Phone Number <span className="text-brand-red">*</span></Label>
                      <Input id="phone" name="phone" type="tel" placeholder="e.g., 07123 456789" value={formData.phone} onChange={handleInputChange} className={`next-level-input ${errors.phone ? 'border-yellow-500' : ''}`} />
                      {errors.phone && <p className="text-yellow-400 text-xs mt-1 flex items-center"><AlertTriangle className="w-3.5 h-3.5 mr-1" />{errors.phone}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email" className="next-level-label">Email Address <span className="text-brand-red">*</span></Label>
                      <Input id="email" name="email" type="email" placeholder="e.g., jane.smith@email.com" value={formData.email} onChange={handleInputChange} className={`next-level-input ${errors.email ? 'border-yellow-500' : ''}`} />
                      {errors.email && <p className="text-yellow-400 text-xs mt-1 flex items-center"><AlertTriangle className="w-3.5 h-3.5 mr-1" />{errors.email}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                          <Label htmlFor="service" className="next-level-label">Service Needed</Label>
                          <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="next-level-input w-full appearance-none">
                            {services.map(s => <option key={s}>{s}</option>)}
                          </select>
                      </div>
                      <div>
                          <Label htmlFor="preferredTime" className="next-level-label">Preferred Time</Label>
                          <select id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleInputChange} className="next-level-input w-full appearance-none">
                            <option>Any</option>
                            <option>Morning (8am-12pm)</option>
                            <option>Afternoon (12pm-5pm)</option>
                            <option>Evening (After 5pm)</option>
                          </select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message" className="next-level-label">Brief Message (Optional)</Label>
                      <Textarea id="message" name="message" placeholder="Add any specific details here..." rows={3} value={formData.message} onChange={handleInputChange} className="next-level-input" />
                    </div>
                  </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="mt-16 text-center"
            >
              <h2 className="text-3xl font-bold section-title mb-8">2. Choose How to Book</h2>
              <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} className="w-full">
                    <Button onClick={handleStripeCheckout} className="w-full primary-cta text-lg !py-6 flex-col h-auto">
                        <div className="flex items-center">
                            <CreditCard className="w-6 h-6 mr-3" />
                            <span>Confirm & Pay Online</span>
                        </div>
                        <span className="text-xs font-normal opacity-80 mt-1">Fastest way to secure your spot via Stripe</span>
                    </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="w-full">
                     <Button asChild className="w-full secondary-cta text-lg !py-6 flex-col h-auto">
                       <Link to="/contact">
                            <div className="flex items-center">
                                <Phone className="w-6 h-6 mr-3" />
                                <span>Book via Phone/Email</span>
                            </div>
                            <span className="text-xs font-normal opacity-80 mt-1">Contact us directly to arrange your booking</span>
                       </Link>
                    </Button>
                </motion.div>
              </div>
            </motion.div>
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
              <FaqAccordion faqs={bookingFAQs} />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}