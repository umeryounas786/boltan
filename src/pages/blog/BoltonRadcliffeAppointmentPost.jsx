import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Can You Get a Dentist Appointment Today in Bolton or Radcliffe?",
  description: "When dental pain strikes, waiting isn't an option. Learn how to secure a same-day emergency dental appointment in Bolton or Radcliffe and get immediate relief.",
  author: "Dr. Ben Carter",
  readTime: "7 min read",
  category: "Appointments",
  imgSrc: "https://images.unsplash.com/photo-1551189023-e4a73373a623",
  imgAlt: "A calendar with a specific day circled, signifying an urgent appointment.",
};

const faqs = [
    { question: "How quickly can I get an appointment in Bolton or Radcliffe?", answer: "We prioritize genuine dental emergencies and reserve dedicated slots daily. If you call early in the day, we can often see you on the same day. Our goal is to get you out of pain as quickly as possible." },
    { question: "What kind of emergencies do you treat on the same day?", answer: "We treat severe pain, swelling, bleeding, knocked-out teeth, broken teeth, lost fillings or crowns causing discomfort, and infections. If it's causing you significant distress or risk, it's an emergency." },
    { question: "Do I need to be a registered patient to get a same-day appointment?", answer: "No, you do not need to be a registered patient. Our emergency service is open to new patients and visitors in Bolton, Radcliffe, and the wider Manchester area." },
    { question: "What information should I have ready when I call?", answer: "Please be prepared to describe your symptoms clearly, including the location and severity of your pain. Also, mention any relevant medical history or medications you are taking." },
    { question: "Will I receive full treatment during my same-day visit?", answer: "The primary goal of a same-day emergency appointment is to diagnose the problem, alleviate pain, and stabilize the situation. This might involve temporary solutions. Comprehensive treatment may require a follow-up appointment." },
    { question: "What are your emergency hours for Bolton and Radcliffe?", answer: "Our emergency line is available 24/7. During regular clinic hours, we have dedicated emergency slots. Outside of these, our on-call dentist can provide advice and arrange to see you for critical situations." },
    { question: "How much does a same-day emergency appointment cost?", answer: "There is an emergency consultation fee, which covers the assessment and diagnosis. Any treatment required will be an additional cost, which will be discussed with you transparently before we proceed." },
    { question: "What if I'm very anxious about seeing a dentist?", answer: "Please inform us when you call. Our team is experienced in treating anxious patients and can discuss options to make your visit as comfortable as possible, including sedation if appropriate." },
    { question: "Can I just walk in for an emergency appointment?", answer: "We strongly advise against walk-ins for emergencies. Please call us first so we can assess your situation, provide initial advice, and ensure a dentist is available to see you without delay." },
    { question: "What if my emergency happens on a weekend or public holiday?", answer: "Our emergency service operates on weekends and public holidays. Call our dedicated emergency line, and our on-call team will guide you on the next steps." }
];

const BoltonRadcliffeAppointmentPost = () => {
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
      
      <p className="lead">When a sudden toothache strikes, a broken tooth occurs, or an infection flares up, waiting days or weeks for an appointment simply isn't an option. For residents of Bolton and Radcliffe, getting immediate dental care is crucial. We understand the urgency of dental emergencies and are committed to providing same-day appointments to get you out of pain and back to comfort.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1641386337567-c824f91bea87" />

      <h2>Our Commitment to Immediate Care</h2>
      <p>We specifically allocate time in our daily schedule for emergency patients. This means that when you call with a genuine dental emergency, we are prepared to see you quickly. Our focus is on providing rapid diagnosis and effective treatment to alleviate your discomfort and prevent further complications.</p>

      <blockquote>Don't suffer in silence. If you're in pain in Bolton or Radcliffe, call us now for a same-day emergency appointment.</blockquote>
      
      <h2>How to Secure Your Same-Day Appointment</h2>
      <p>Getting seen quickly is straightforward:</p>
      <ol>
        <li><strong>Call Our Emergency Line:</strong> This is the most direct way to reach us. Our dedicated emergency phone number is monitored to ensure you get through to a team member who can assess your situation.</li>
        <li><strong>Describe Your Symptoms:</strong> Be clear and concise about what you're experiencing. Is it severe pain, swelling, bleeding, or a broken tooth? This helps us understand the urgency and prepare for your arrival.</li>
        <li><strong>Follow Our Guidance:</strong> We may provide immediate first-aid advice over the phone to help manage your symptoms until you can reach our clinic.</li>
        <li><strong>Arrive for Your Appointment:</strong> We will give you a specific time to come in. Our goal is to minimize your waiting time and address your emergency as efficiently as possible.</li>
      </ol>

      <h2>What to Expect During Your Emergency Visit</h2>
      <p>Your same-day emergency appointment will be focused on resolving the immediate problem:</p>
      <ul>
        <li><strong>Thorough Assessment:</strong> We will examine the affected area and may take X-rays to accurately diagnose the issue.</li>
        <li><strong>Pain Relief:</strong> Our priority is to get you out of pain. This might involve local anesthetic, temporary dressings, or other immediate interventions.</li>
        <li><strong>Stabilization:</strong> We will take steps to stabilize the condition, such as placing a temporary filling, re-cementing a crown, or draining an abscess.</li>
        <li><strong>Clear Next Steps:</strong> We will explain our findings, discuss the necessary treatment, and outline any follow-up appointments required for definitive care.</li>
      </ul>
      
      <p>Whether you're in Bolton, Radcliffe, or the surrounding areas, you don't have to endure dental pain. Our team is ready to provide the urgent care you need, today. Call us now.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default BoltonRadcliffeAppointmentPost;