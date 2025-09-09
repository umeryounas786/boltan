import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Tag, 
  CalendarCheck, 
  Wallet, 
  CheckCircle, 
  Star, 
  Award, 
  Users, 
  Clock, 
  MapPin 
} from 'lucide-react';

const ReviewCard = ({ name, review, rating, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-effect-light p-6 rounded-xl shadow-lg border border-gray-200/80 h-full flex flex-col"
  >
    <div className="flex items-center mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
    <p className="card-description mb-4 flex-grow">"{review}"</p>
    <p className="font-bold text-brand-red mt-auto">- {name}</p>
  </motion.div>
);

const WhyChooseUsCard = ({ icon, title, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white/5 p-6 rounded-xl border border-white/10 text-center flex flex-col items-center"
  >
    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-5 text-red-300 ring-1 ring-red-500/30">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-red-200/90 text-sm leading-relaxed">{children}</p>
  </motion.div>
);

export default function PricingPage() {

  const reviews = [
    { name: "John D.", review: "Incredible service. I was in agony and they saw me within the hour. Can't thank them enough!", rating: 5, delay: 0.1 },
    { name: "Sarah L.", review: "The dentist was so professional and reassuring. They explained everything clearly, including the costs. Highly recommend.", rating: 5, delay: 0.15 },
    { name: "Mike P.", review: "A truly 24/7 service. Called them late on a Saturday and got an appointment straight away. Lifesavers!", rating: 5, delay: 0.2 },
    { name: "Emily R.", review: "Broke my front tooth and was in a panic. They fixed it beautifully with a temporary solution the same day. So grateful for their cosmetic skill!", rating: 5, delay: 0.25 },
    { name: "David B.", review: "My wisdom tooth was causing excruciating pain. They managed the extraction with such care and expertise. The relief was immediate.", rating: 5, delay: 0.3 },
    { name: "Jessica M.", review: "I had a dental abscess and was terrified. The team was calm, kind, and dealt with it swiftly. The pricing was transparent, which helped ease my worries.", rating: 5, delay: 0.35 },
    { name: "Tom H.", review: "My denture broke right before a family event. They repaired it on the same day, saving my weekend. Fantastic, efficient service.", rating: 5, delay: 0.1 },
    { name: "Chloe G.", review: "As a very nervous patient, I was dreading the visit. They offered sedation which made the whole experience stress-free. I felt completely at ease.", rating: 5, delay: 0.15 },
    { name: "Ben S.", review: "Lost a filling and the tooth was very sensitive. Got an appointment in Bolton quickly and the process was painless. Very impressed.", rating: 4, delay: 0.2 },
    { name: "Olivia W.", review: "My son knocked his tooth out playing football. Their pediatric emergency care was amazing. They were so good with him and saved the tooth!", rating: 5, delay: 0.25 },
    { name: "Mark T.", review: "Used their teledentistry service first for advice. It was so helpful and saved me an unnecessary trip. Great modern approach to dental care.", rating: 5, delay: 0.3 },
    { name: "Fatima A.", review: "I'm a tourist and had a dental emergency. They were so accommodating and helpful, making a stressful situation in a foreign city much easier to handle.", rating: 5, delay: 0.35 },
    { name: "George K.", review: "The out-of-hours service is a godsend. Woke up with a swollen face at 2 AM and they had me sorted by sunrise. Worth every penny.", rating: 5, delay: 0.1 },
    { name: "Sophie N.", review: "My temporary crown fell off and I had a wedding to attend. They saw me immediately and fixed it. The staff are so friendly and understanding.", rating: 5, delay: 0.15 },
    { name: "Liam C.", review: "Clear pricing with Klarna made an unexpected root canal manageable. No hidden fees, just honest, excellent dentistry.", rating: 5, delay: 0.2 }
  ];

  const whyChooseUsItems = [
    { icon: <Award className="w-8 h-8" />, title: "40+ Years of Experience", description: "Established in 1986, our Bolton Road practice brings decades of trusted dental expertise to every emergency.", delay: 0.1 },
    { icon: <Users className="w-8 h-8" />, title: "Experienced Oral Surgeons", description: "Our team includes highly qualified GDC-registered dentists and oral surgeons ready to handle complex cases.", delay: 0.2 },
    { icon: <Clock className="w-8 h-8" />, title: "24/7 Emergency Appointments", description: "We are always available. Day or night, weekend or holiday, we're here to provide urgent dental care.", delay: 0.3 },
    { icon: <MapPin className="w-8 h-8" />, title: "Manchester & Bolton Coverage", description: "Conveniently serving the communities of Greater Manchester and Bolton with rapid-response dental services.", delay: 0.4 },
  ];

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
            <Tag className="w-5 h-5 mr-2 text-brand-red" />
            Clear & Affordable
          </div>
          <h1 className="text-4xl lg:text-6xl font-black page-main-title mb-4 dynamic-text-shadow">
            Our Emergency Dental Pricing
          </h1>
          <p className="text-xl page-description max-w-3xl mx-auto leading-relaxed">
            We believe in transparent pricing with no surprises. Your care starts with a clear, fixed-fee consultation.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="glass-effect-light p-8 lg:p-12 rounded-2xl shadow-xl border border-gray-200/80"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold section-title mb-2">Initial Consultation Fee</h2>
              <p className="text-7xl lg:text-8xl font-black text-brand-red my-4">£42</p>
              <p className="card-description mb-6 max-w-md mx-auto lg:mx-0">
                This fixed fee covers your complete initial assessment, diagnosis, and any necessary e-prescriptions. You will receive a full, transparent treatment plan with all costs before any further work is done.
              </p>
              <Button asChild size="lg" className="primary-cta !text-lg w-full sm:w-auto">
                <Link to="/contact">
                  <CalendarCheck className="w-5 h-5 mr-2" /> Book Your Consultation
                </Link>
              </Button>
            </div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="h-64 md:h-80 lg:h-full w-full"
            >
              <img  alt="Friendly dentist consulting with a patient in a modern clinic" className="w-full h-full object-cover rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81" />
            </motion.div>
          </div>
        </motion.div>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-16 lg:mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black page-main-title mb-3">Flexible Payment Options</h2>
            <p className="text-lg page-description max-w-2xl mx-auto">To make your treatment more affordable, we offer flexible payment solutions. Spread the cost of your dental care with our financing partners.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-slate-800/50 p-8 rounded-2xl shadow-lg border border-slate-700/50 flex flex-col items-center text-center text-white">
              <img  alt="Klarna logo" className="h-10 mb-4" width="100" height="40" src="https://images.unsplash.com/photo-1678993233644-a5568ead78b4" />
              <h3 className="text-2xl font-bold text-white mb-2">Pay with Klarna</h3>
              <p className="text-slate-300 mb-4 flex-grow">Choose Klarna at checkout to pay in 3 interest-free installments, or finance your treatment over a longer period.</p>
              <Button asChild variant="outline" className="secondary-cta-white w-full sm:w-auto mt-auto">
                <a href="https://www.klarna.com/uk/smoooth/" target="_blank" rel="noopener noreferrer">Learn More</a>
              </Button>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl shadow-lg border border-slate-700/50 flex flex-col items-center text-center text-white">
              <img  alt="Clearpay logo" className="h-10 mb-4" width="120" height="40" src="https://images.unsplash.com/photo-1634644668925-0827afa08c65" />
              <h3 className="text-2xl font-bold text-white mb-2">Pay with Clearpay</h3>
              <p className="text-slate-300 mb-4 flex-grow">Split your payment into 4 interest-free installments, paid every 2 weeks. No fees when you pay on time.</p>
              <Button asChild variant="outline" className="secondary-cta-white w-full sm:w-auto mt-auto">
                <a href="https://www.clearpay.co.uk/en-GB" target="_blank" rel="noopener noreferrer">Learn More</a>
              </Button>
            </div>
          </div>
        </motion.section>

        <section className="mt-20 lg:mt-28">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-black page-main-title mb-3">What Our Patients Say</h2>
            <p className="text-lg page-description max-w-2xl mx-auto">Real stories from patients we've helped in Manchester and Bolton.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map(review => <ReviewCard key={review.name} {...review} />)}
          </div>
        </section>

        <section className="mt-20 lg:mt-28 emergency-gradient text-white py-16 lg:py-24 px-6 lg:px-12 rounded-2xl shadow-2xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-black mb-3 dynamic-text-shadow-light">Why Choose Us For Your Emergency?</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              When you're in pain, you need a team you can trust. Here's why we are the leading choice for emergency dental care.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsItems.map(item => <WhyChooseUsCard key={item.title} icon={item.icon} title={item.title} delay={item.delay}>{item.description}</WhyChooseUsCard>)}
          </div>
        </section>

      </div>
    </div>
  );
}