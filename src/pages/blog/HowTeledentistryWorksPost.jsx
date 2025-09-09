import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "How Emergency Teledentistry Works in Manchester: A Step-by-Step Guide",
  description: "Curious about a video call with a dentist? Our step-by-step guide explains how our emergency teledentistry service in Manchester provides fast, secure, and effective dental triage from your home.",
  author: "Dr. Ben Carter",
  readTime: "8 min read",
  category: "Virtual Care",
  imgSrc: "https://images.unsplash.com/photo-1554734867-bf3c00a49371",
  imgAlt: "A person smiling while on a video call on their laptop, showing the ease of teledentistry.",
};

const faqs = [
    { question: "What is the very first step to getting a virtual appointment?", answer: "The first step is to call our emergency line or use our online booking system. Simply mention you'd like an 'emergency teledentistry' or 'virtual' appointment. Our team will find the next available slot and send you all the information you need." },
    { question: "Do I need to download any special app?", answer: "No, you don't. We use a secure, browser-based video platform. We will email or text you a link. At the time of your appointment, you just click the link on your smartphone or computer, and you'll be connected to the virtual waiting room." },
    { question: "How should I prepare for the video call with the dentist?", answer: "Find a quiet, well-lit area. It's helpful to have a small flashlight (your phone's flashlight works perfectly) handy to help illuminate the inside of your mouth. Be ready to point to the exact area of pain or concern." },
    { question: "What happens during the consultation?", answer: "The dentist will greet you, ask you to describe your symptoms and medical history, and then guide you in using your camera to show them the problem. They will ask questions to understand the issue fully, just like an in-person visit." },
    { question: "What are the possible outcomes of an emergency teledentistry consultation in Manchester?", answer: "There are three main outcomes: 1) We provide advice and reassurance for self-care at home. 2) We prescribe medication (like antibiotics) to your local pharmacy. 3) We determine you need an in-person visit and schedule a priority appointment for you at our clinic." },
    { question: "Is a video call dentist emergency session as effective as seeing a dentist in person?", answer: "For initial diagnosis and triage, it is incredibly effective. It allows us to quickly determine the severity and the next steps. While it can't replace physical procedures, it's the most efficient way to get expert advice and a treatment plan started." },
    { question: "How long does a typical virtual consultation last?", answer: "Most emergency virtual consultations last between 15 to 20 minutes. This gives us enough time for a thorough assessment, discussion of your options, and answering any questions you may have." },
    { question: "Will I be speaking with a real, qualified dentist?", answer: "Yes, absolutely. You will be connected with one of our GDC-registered, experienced emergency dentists based in the Manchester area. You receive the same high standard of professional care as you would in our clinic." }
];

const HowTeledentistryWorksPost = () => {
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
      
      <p className="lead">When a dental emergency hits, the last thing you want is confusion. Teledentistry offers a refreshingly simple, fast, and modern solution. If you're wondering how a video call dentist emergency consultation works, this guide breaks down our straightforward process for patients across Manchester.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>Step 1: Booking Your Virtual Slot</h2>
      <p>Getting started is easy. You can either call our dedicated emergency line or use our online booking portal. Request a "virtual consultation" or "teledentistry appointment." Our reception team will find the earliest available time, collect your basic details, and explain the next steps. We prioritize these calls to ensure you get advice quickly.</p>

      <h2>Step 2: Connecting to the Secure Video Call</h2>
      <p>You don't need to be a tech expert. Before your appointment, we will send you a secure link via email or text message. At your scheduled time, simply click the link. This will open the video consultation in your web browser—no downloads or apps are required. It's designed to be as simple as making a regular video call to a friend.</p>
      
      <blockquote>Our teledentistry platform is 100% secure and HIPAA-compliant, ensuring your privacy is fully protected throughout the call.</blockquote>

      <h2>Step 3: The Consultation with Your Emergency Dentist</h2>
      <p>You'll be greeted by one of our friendly, GDC-registered dentists. The process will feel much like a normal visit:</p>
      <ol>
        <li><strong>Discussion:</strong> You'll explain your symptoms, when they started, and your general medical history.</li>
        <li><strong>Visual Examination:</strong> The dentist will guide you on how to use your phone or laptop camera to give them a clear view of the problem tooth or area. Good lighting is key here!</li>
        <li><strong>Diagnosis & Triage:</strong> Based on the visual evidence and your description, the dentist will form a provisional diagnosis and determine the urgency of your situation.</li>
      </ol>

      <h2>Step 4: The Outcome and Your Treatment Plan</h2>
      <p>After the assessment, your dentist will provide a clear action plan. This will be one of three outcomes:</p>
      <ul>
        <li><strong>Home Care Advice:</strong> For less severe issues, you may receive advice on pain management and self-care, avoiding a trip to the clinic.</li>
        <li><strong>E-Prescription:</strong> If an infection is suspected, we can instantly send a prescription for antibiotics or specialized pain relief to a pharmacy near you in Manchester.</li>
        <li><strong>Priority In-Person Appointment:</strong> If hands-on treatment is necessary, we will book you into the next available slot at our clinic, fully prepared for the procedure you need.</li>
      </ul>
      <p>Emergency teledentistry in Manchester is designed for your convenience and peace of mind. It demystifies the first step of handling a dental crisis, putting expert advice just a click away.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default HowTeledentistryWorksPost;