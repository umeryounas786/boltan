import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Urgent Dental Care vs. Routine Visits: What’s the Difference?",
  description: "Is your dental issue a true emergency or can it wait? We explain the key differences between urgent care and a routine check-up to help you make the right call.",
  author: "Dr. Chloe Davis",
  readTime: "8 min read",
  category: "Patient Education",
  imgSrc: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
  imgAlt: "A split image showing a dental emergency on one side and a routine check-up on the other.",
};

const faqs = [
    { question: "What is the main goal of an urgent care visit?", answer: "The primary goal of an urgent care visit is to address an immediate problem, primarily to get you out of pain, manage an infection, or repair trauma. It's focused on resolving the acute issue at hand." },
    { question: "What is the main goal of a routine dental visit?", answer: "The goal of a routine visit (a check-up and clean) is prevention. It's about identifying and addressing potential problems before they become painful emergencies and maintaining your overall oral health." },
    { question: "Is a chipped tooth that doesn't hurt an emergency?", answer: "It's considered urgent, but not necessarily a 'drop everything' emergency unless it's sharp and cutting your mouth. It needs to be seen promptly (within a day or two) to prevent further damage or decay, but it's different from a severe, painful abscess." },
    { question: "I have a dull, occasional toothache. Is that urgent?", answer: "This is a grey area. While not a severe emergency, it's a clear warning sign. You should book an appointment promptly. If it suddenly becomes severe, throbbing, or constant, it has escalated into a true emergency." },
    { question: "What are clear signs of a true dental emergency?", answer: "Uncontrolled bleeding, severe pain that isn't managed by painkillers, a knocked-out tooth, or swelling of the face, jaw, or gums. These conditions require immediate attention." },
    { question: "Can I get a full check-up and clean during my emergency appointment?", answer: "No. The emergency appointment is dedicated to diagnosing and resolving your specific urgent problem. A comprehensive check-up and cleaning is a separate, routine appointment that can be scheduled once the emergency is resolved." },
    { question: "Why can't I just wait for my next routine check-up to mention my toothache?", answer: "Because a toothache is a sign that damage is already occurring. Waiting weeks or months for a routine visit can allow a small cavity to turn into a root canal problem, or a minor infection to become a major abscess." },
    { question: "Is the cost different for urgent vs. routine care?", answer: "Yes. Urgent care appointments, especially out-of-hours, may have a different fee structure. The treatment itself is costed based on what is needed to resolve the problem (e.g., an extraction, a root canal dressing). Routine care has standard fees for exams and cleans." },
    { question: "My crown fell off but it doesn't hurt. How quickly should I be seen?", answer: "This is urgent. The underlying tooth is exposed and vulnerable. You should aim to be seen within 24-48 hours to have the crown re-cemented and prevent damage or decay to the tooth." },
    { question: "If I'm ever in doubt, what should I do?", answer: "Always call us. It costs nothing to ask. Our team can listen to your symptoms over the phone and give you professional advice on whether you need to be seen urgently or if it's safe to book a regular appointment." }
];

const UrgentVsRoutineCarePost = () => {
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
      
      <p className="lead">When a dental problem arises, it can be hard to know how serious it is. Is this a true emergency that needs immediate attention, or is it something that can wait for a regular appointment? Understanding the difference between urgent care and routine visits can help you make the right decision for your health and peace of mind.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>Urgent Dental Care: The Problem-Solvers</h2>
      <p>Think of urgent care as the 'fire department' of dentistry. Its purpose is to deal with an immediate, acute problem. You should seek urgent dental care if you are experiencing:</p>
      <ul>
        <li><strong>Severe Pain:</strong> Toothache that is throbbing, constant, and not relieved by painkillers.</li>
        <li><strong>Swelling:</strong> Swelling in your gums, cheek, or face is a sign of infection (abscess).</li>
        <li><strong>Trauma:</strong> A tooth that has been knocked out, pushed out of position, or severely fractured.</li>
        <li><strong>Uncontrolled Bleeding:</strong> Bleeding from the mouth that doesn't stop.</li>
        <li><strong>Lost Crown or Filling:</strong> Especially if it's causing pain or the tooth is sharp.</li>
      </ul>
      <p>The goal of an urgent care visit is to diagnose the specific issue, get you out of pain, and stabilize the situation. It is not a comprehensive check-up.</p>

      <blockquote>Urgent care is REACTIVE. It's about fixing a problem that is happening right now.</blockquote>
      
      <h2>Routine Dental Visits: The Health Guardians</h2>
      <p>A routine visit, which includes a dental exam and professional cleaning, is the 'health maintenance' of dentistry. Its purpose is to prevent problems from ever becoming emergencies in the first place.</p>
      <p>During a routine visit, we:</p>
      <ul>
        <li><strong>Screen for Problems:</strong> We look for early signs of decay, gum disease, and oral cancer.</li>
        <li><strong>Perform a Professional Clean:</strong> We remove plaque and tartar from places your brush can't reach, preventing cavities and gum disease.</li>
        <li><strong>Take X-rays:</strong> To see what's happening below the surface, like problems with tooth roots or bone loss.</li>
        <li><strong>Provide Advice:</strong> We offer personalized guidance on your home care routine.</li>
      </ul>
      <p>By catching issues when they are small and painless, we can treat them with simpler, less invasive, and less expensive procedures.</p>

      <blockquote>Routine care is PROACTIVE. It's about stopping problems before they start.</blockquote>

      <h2>When in Doubt, Call Us</h2>
      <p>The most important takeaway is this: if you are in pain, or if something in your mouth looks or feels wrong, don't hesitate to contact us. Our experienced team can assess your symptoms over the phone and guide you on the best course of action. It's always better to be safe and get professional advice than to wait and let a small issue turn into a major emergency.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default UrgentVsRoutineCarePost;