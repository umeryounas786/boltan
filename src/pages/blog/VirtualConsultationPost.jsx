import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Virtual Emergency Dental Consultations: Teledentistry in Manchester & Bolton",
  description: "Get immediate dental advice without leaving home. Learn how our teledentistry service for Manchester & Bolton works for urgent assessments, triage, and prescriptions.",
  author: "Dr. Anya Sharma",
  readTime: "7 min read",
  category: "Virtual Care",
  imgSrc: "https://images.unsplash.com/photo-1553877522-5324b31ca7c2",
  imgAlt: "A person having a professional video consultation on their laptop.",
};

const faqs = [
    { question: "What is a virtual dental consultation?", answer: "It's a remote appointment with a qualified dentist using a secure video call on your smartphone, tablet, or computer. It allows us to see the problem area, discuss your symptoms, and provide an expert assessment without you needing to travel to the clinic." },
    { question: "How can teledentistry help in an emergency?", answer: "It provides immediate access to professional advice. We can triage your condition to determine its severity, guide you on first aid, manage pain, and even prescribe medications like antibiotics if necessary. It helps you understand if an in-person visit is truly urgent." },
    { question: "Is this service available for patients in both Manchester and Bolton?", answer: "Yes. Teledentistry is perfect for serving our entire patient base across Manchester, Bolton, and the surrounding areas. It removes the barrier of travel, allowing anyone to access our expertise quickly." },
    { question: "What kind of dental problems are suitable for a virtual consultation?", answer: "It's ideal for initial assessments of toothaches, chipped or broken teeth, lost fillings/crowns, gum swelling, abscesses, and questions about orthodontic or denture problems. It is not for severe trauma or uncontrollable bleeding." },
    { question: "Can I get a prescription from a virtual dental visit?", answer: "Yes. If our dentist diagnoses a bacterial infection (like an abscess) or determines you need specific pain relief, they can electronically send a prescription to your chosen pharmacy, allowing you to start treatment immediately." },
    { question: "What technology do I need for the appointment?", answer: "You just need a device with a camera and microphone (like a smartphone or laptop) and a stable internet connection. We will send you a secure link to join the video call—no special software downloads are needed." },
    { question: "Is the virtual consultation secure and private?", answer: "Absolutely. We use HIPAA-compliant, encrypted video platforms to ensure your consultation is completely private and your personal health information is protected, just like in our clinic." },
    { question: "What if I need to be seen in person after the virtual consult?", answer: "If the dentist determines you need hands-on treatment, we will schedule a priority appointment for you at our clinic. The virtual visit makes the in-person appointment more efficient because we already know what treatment is required." },
    { question: "How do I book a virtual emergency consultation?", answer: "You can book by calling our emergency line or through our online booking portal. Just select the 'Virtual Consultation' option, and we will guide you through the simple process." },
    { question: "Is teledentistry a good option for nervous patients?", answer: "It's an excellent first step. Speaking to a dentist from the comfort and safety of your own home can significantly reduce anxiety and help build trust before a potential in-person visit." }
];

const VirtualConsultationPost = () => {
  return (
    <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Helmet>
      
      <header>
        <span className="text-brand-red font-semibold">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="blog-meta">
          <div><User className="w-5 h-5" /><span>{post.author}</span></div>
          <div><Clock className="w-5 h-5" /><span>{post.readTime}</span></div>
        </div>
      </header>
      
      <p className="lead">In the digital age, healthcare is evolving. When a dental emergency strikes, you no longer have to wait in uncertainty. Our virtual emergency dental consultation service brings expert advice and triage directly to you, wherever you are in Manchester or Bolton, through the convenience of teledentistry.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>Teledentistry: Your First Line of Defense in a Dental Emergency</h2>
      <p>Teledentistry uses secure video conferencing to connect you face-to-face with one of our emergency dentists. This powerful tool allows for a rapid and accurate assessment of your situation, providing immediate peace of mind and a clear plan of action.</p>

      <blockquote>Think of it as a house call from your dentist, delivered through your screen. It's fast, convenient, and effective.</blockquote>
      
      <h2>How a Virtual Consultation Can Help You Right Now</h2>
      <p>A virtual visit is more than just a chat; it's a comprehensive diagnostic tool. Here’s what we can achieve during your consultation:</p>
      <ul>
        <li><strong>Visual Assessment:</strong> Using your device's camera, you can show us the exact problem area, whether it's a swollen gum, a chipped tooth, or a dislodged crown.</li>
        <li><strong>Expert Triage:</strong> We can determine the severity of your condition. We'll let you know if it's something that can be managed at home, if it requires a non-urgent appointment, or if you need to come to the clinic immediately.</li>
        <li><strong>Pain and Symptom Management:</strong> Our dentist can provide personalized advice on how to manage your pain and other symptoms until you can receive in-person treatment.</li>
        <li><strong>E-Prescriptions:</strong> If you have a bacterial infection, we can send a prescription for antibiotics directly to your local pharmacy, allowing you to start treatment without delay.</li>
      </ul>

      <h2>The Ideal Solution for Modern Problems</h2>
      <p>Our teledentistry service is perfect for:</p>
      <ol>
        <li><strong>Busy Professionals:</strong> Get an expert opinion without taking significant time off work.</li>
        <li><strong>Parents with Children:</strong> Quickly find out if your child's dental issue requires a trip to the clinic.</li>
        <li><strong>Anxious Patients:</strong> A gentle introduction to our team from the comfort of your own home.</li>
        <li><strong>Anyone Needing Fast Advice:</strong> Remove the guesswork and get a professional diagnosis in minutes.</li>
      </ol>
      
      <p>Embrace the future of urgent dental care. If you're facing a dental emergency in Manchester or Bolton, a virtual consultation is your fastest route to clarity and relief. Contact us to book your virtual appointment today.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default VirtualConsultationPost;