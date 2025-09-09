import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Tooth Pain After Hours? 24-Hour Emergency Dental Tips in Manchester",
  description: "Dental pain doesn't adhere to a 9-to-5 schedule. This guide helps Manchester residents understand what to do for after-hours tooth pain and how our 24/7 service works.",
  author: "Dr. Anya Sharma",
  readTime: "7 min read",
  category: "After Hours Care",
  imgSrc: "https://images.unsplash.com/photo-1532285142689-495495958632",
  imgAlt: "A city skyline at night, representing 24-hour availability.",
};

const faqs = [
    { question: "What constitutes an 'after-hours' dental emergency?", answer: "Any dental issue causing severe pain, swelling, bleeding, or trauma that occurs outside of standard clinic hours (e.g., overnight, on weekends, or on public holidays) is considered an after-hours emergency." },
    { question: "Is your 24-hour service a walk-in clinic?", answer: "No, our service operates on an on-call basis. You must call our emergency number first. We will assess your situation over the phone and arrange for you to be seen by the on-call dentist at our clinic if necessary." },
    { question: "Why does my toothache feel worse at night?", answer: "This is a common phenomenon. When you lie down, blood pressure in your head increases, which can put more pressure on an inflamed tooth nerve, intensifying the pain. Without daily distractions, you also tend to focus on the pain more." },
    { question: "What are the most important first-aid steps for tooth pain at 2am?", answer: "First, call our emergency number for advice. While waiting, you can take over-the-counter painkillers like ibuprofen or paracetamol. Rinsing with warm salt water can also help. Try to sleep propped up on pillows to reduce pressure in your head." },
    { question: "I can't reach a dentist. Should I go to A&E?", answer: "For uncontrolled bleeding or swelling that affects your breathing, go to A&E immediately. For most other dental pain, A&E can only offer pain relief and antibiotics; they cannot perform dental treatment. It's always best to persist in contacting a 24-hour emergency dental service." },
    { question: "How does payment work for a late-night emergency appointment?", answer: "There is an out-of-hours call-out fee for after-hours appointments. The cost of any treatment required will be additional. We will discuss all potential fees with you over the phone before you come in." },
    { question: "What kind of problems can you treat in a late-night appointment?", answer: "Our goal is to provide immediate pain relief and stabilize the situation. This can include dressing a painful tooth, starting the first stage of a root canal, extracting a non-restorable tooth, or re-cementing a crown." },
    { question: "I'm a very anxious patient. Is after-hours care more stressful?", answer: "We understand dental anxiety can be heightened during an emergency. Our on-call dentists are experienced in managing anxious patients. The quiet, focused nature of an after-hours appointment can actually be calmer for some patients than a busy daytime clinic." },
    { question: "Is the 24-hour service available every day of the year?", answer: "Yes, our on-call emergency service is designed to be available 365 days a year, including all public holidays like Christmas and Easter, for genuine dental emergencies." },
    { question: "What's the best way to avoid a late-night dental emergency?", answer: "Regular dental check-ups are key. Most emergencies are the result of underlying problems (like decay or cracks) that have been left untreated. Addressing these issues early during routine visits is the best prevention." }
];

const AfterHoursPainPost = () => {
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
      
      <p className="lead">A severe toothache is one of the worst pains imaginable, and it has a nasty habit of flaring up at the most inconvenient times—late at night, on a bank holiday, or in the middle of the weekend. When your regular dentist is closed, it's easy to feel helpless. But for residents of Manchester, our 24-hour emergency dental service means you're never alone.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1703464094016-ef16febfcf5e" />

      <h2>First Steps When After-Hours Pain Strikes</h2>
      <p>Before you do anything else, the most important step is to call a professional. Our 24-hour emergency line is your first point of contact. We can provide immediate advice and determine if you need to be seen urgently.</p>
      <p>While you're waiting for advice or an appointment, here’s what you can do:</p>
      <ul>
        <li><strong>Take Pain Relief:</strong> Over-the-counter anti-inflammatory painkillers like ibuprofen are often most effective for dental pain, if you are able to take them. Paracetamol is an alternative. Do not exceed the recommended dose.</li>
        <li><strong>Rinse Gently:</strong> A warm salt water rinse (half a teaspoon of salt in a glass of warm water) can help clean the area and soothe inflammation.</li>
        <li><strong>Use a Cold Compress:</strong> Apply a cold pack to the outside of your cheek for 15-minute intervals to help reduce swelling and numb the pain.</li>
        <li><strong>Elevate Your Head:</strong> Try to rest or sleep with your head propped up on extra pillows. This can reduce blood flow to the head and alleviate the throbbing sensation.</li>
      </ul>

      <blockquote>Pain is a signal. Don't ignore it. Our on-call dentists are ready to help you, day or night.</blockquote>
      
      <h2>What to Expect from Our 24-Hour Service</h2>
      <p>Our after-hours service is for genuine emergencies. When you call, we will assess your symptoms. If an emergency appointment is necessary, we will arrange to meet you at our fully equipped clinic. The goal of the visit is to get you comfortable and out of immediate danger. This might involve:</p>
      <ul>
        <li>Dressing a painful tooth to soothe the nerve.</li>
        <li>Starting the first stage of a root canal to relieve pressure from an infection.</li>
        <li>Extracting a tooth that cannot be saved.</li>
        <li>Prescribing antibiotics for a spreading infection.</li>
      </ul>
      
      <p>Definitive, long-term treatment is usually completed during regular clinic hours. But our 24-hour service ensures that you never have to endure a night of agony. If you're in pain, call us now.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default AfterHoursPainPost;