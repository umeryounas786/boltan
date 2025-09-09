import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Emergency Teledentistry: Immediate Expert Dental Advice From Home",
  description: "Learn how emergency teledentistry provides immediate virtual consultations for pain assessment, triage, and expert advice, helping you manage dental emergencies from anywhere.",
  author: "Dr. Ben Carter",
  readTime: "6 min read",
  category: "Virtual Care",
  imgSrc: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957",
  imgAlt: "A person on a laptop having a video call with their dentist.",
};

const faqs = [
    { question: "What is teledentistry?", answer: "Teledentistry uses technology like video calls and secure messaging to provide dental care and consultations remotely. It allows you to connect with a dentist from the comfort of your home, office, or while traveling, using your smartphone, tablet, or computer." },
    { question: "Is teledentistry suitable for all dental emergencies?", answer: "Teledentistry is perfect for initial assessment, triage, and advice for many emergencies like toothaches, chipped teeth, gum swelling, or questions about post-operative care. For severe trauma, uncontrollable bleeding, or swelling that affects your breathing, you should seek in-person emergency care immediately." },
    { question: "How does an emergency teledentistry consultation work?", answer: "It's simple. You'll book a virtual appointment, and at the scheduled time, you connect with one of our dentists via a secure video link. You'll describe your symptoms, and you can use your device's camera to show us the problem area. We'll then provide a diagnosis, advice, and next steps." },
    { question: "Can a dentist prescribe medication through teledentistry?", answer: "Yes. If our dentist determines that medication such as antibiotics or pain relievers is necessary based on your virtual examination, we can electronically send a prescription to your preferred pharmacy." },
    { question: "What are the main benefits of using teledentistry for an emergency?", answer: "The key benefits are speed, convenience, and peace of mind. You get immediate access to a professional, avoid unnecessary travel, reduce time off work, and get expert guidance on whether an in-person visit is truly needed, potentially saving you time and money." },
    { question: "Is my personal information secure during a virtual consultation?", answer: "Absolutely. We use HIPAA-compliant platforms for all our teledentistry consultations. This ensures your personal health information is encrypted and protected, maintaining the same level of privacy as an in-person visit." },
    { question: "What kind of technology do I need?", answer: "All you need is a device with a camera and an internet connection. This could be a smartphone, tablet, laptop, or desktop computer. No special software is required; you'll typically just click a secure link we send you." },
    { question: "Does dental insurance cover teledentistry appointments?", answer: "Many dental insurance providers now recognize the value of teledentistry and offer coverage for virtual consultations, especially for emergency assessments. We recommend checking with your provider, and we can assist with any necessary documentation." },
    { question: "Can teledentistry help if I'm anxious about visiting the dentist?", answer: "Yes, it's an excellent first step for anxious patients. Discussing your concerns from a familiar, safe environment can build trust and rapport with the dentist, making a future in-person visit feel much less daunting." },
    { question: "What if I need an in-person follow-up after the virtual visit?", answer: "If we determine that you need hands-on treatment, we will schedule a priority in-person appointment for you at our clinic. The teledentistry visit ensures you are booked for the correct procedure, making your in-clinic visit as efficient as possible." }
];

const TeledentistryPost = () => {
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
      
      <p className="lead">A severe toothache strikes late at night. You've chipped a tooth on vacation. You're unsure if your child's swollen gum needs immediate attention. In these moments of uncertainty and pain, teledentistry serves as your direct line to expert dental care, no matter where you are.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>What is Teledentistry and How Does it Help in an Emergency?</h2>
      <p>Teledentistry is the use of telecommunications technology to provide dental care from a distance. Through secure, HIPAA-compliant video conferencing on your smartphone or computer, you can have a face-to-face consultation with one of our experienced emergency dentists. This "virtual visit" is a powerful tool for modern urgent care.</p>

      <blockquote>Teledentistry bridges the gap between a dental problem and a professional solution, providing immediate guidance and peace of mind.</blockquote>
      
      <h2>Key Benefits of a Virtual Emergency Consultation</h2>
      <p>In a stressful situation, the advantages of teledentistry are clear and compelling:</p>
      <ol>
        <li><strong>Immediate Triage:</strong> Our dentist can quickly assess your situation, determine the urgency, and advise you on the immediate next steps. This helps differentiate between a problem that can be managed at home and one that requires an urgent in-person visit.</li>
        <li><strong>Reduces Unnecessary Visits:</strong> Not every dental concern requires a trip to the clinic. A virtual consultation can often resolve the issue with professional advice and, if needed, a prescription, saving you time, travel, and stress.</li>
        <li><strong>Pain Management & First Aid:</strong> We can guide you on effective at-home pain management techniques and provide first-aid instructions for issues like a knocked-out or dislodged tooth, which can be critical for a successful outcome.</li>
        <li><strong>Access from Anywhere:</strong> Whether you're at home, at work, or traveling, you can access expert care. This is especially valuable for residents in Manchester, Bolton, and surrounding areas who may not be close to our clinic.</li>
      </ol>

      <h2>What Can Be Addressed in a Teledentistry Visit?</h2>
      <p>Our virtual consultations are ideal for a wide range of common dental emergencies:</p>
      <ul>
        <li>Severe toothaches or dental pain</li>
        <li>Chipped, cracked, or broken teeth</li>
        <li>Lost fillings or crowns</li>
        <li>Gum swelling, abscesses, or infections</li>
        <li>Guidance after dental surgery or trauma</li>
        <li>Questions about orthodontic appliance issues</li>
      </ul>
      
      <p>While teledentistry cannot replace hands-on procedures, it is an essential first step in modern emergency dental care. It empowers you with immediate, professional advice, helping to build trust and ensure you get the right care at the right time. The next time a dental emergency strikes, remember that expert help is just a video call away.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default TeledentistryPost;