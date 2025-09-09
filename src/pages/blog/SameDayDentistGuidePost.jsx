import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "The Complete Guide to Finding a Same-Day Dentist in Manchester & Bolton",
  description: "In pain and need a dentist today? This guide explains how to find and secure a same-day dental appointment in Manchester and Bolton, and what to expect during your visit.",
  author: "Dr. Ben Carter",
  readTime: "9 min read",
  category: "Appointments",
  imgSrc: "https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81",
  imgAlt: "A friendly dentist consulting with a patient, representing a successful same-day appointment.",
};

const faqs = [
    { question: "How do I find a dentist that offers same-day appointments in Bolton?", answer: "The best way is to search for clinics that specifically advertise 'emergency' or 'urgent' dental care. General practices are often booked weeks in advance. Our clinic is structured to accommodate same-day dental appointments in Bolton and Manchester for genuine emergencies." },
    { question: "What's the best time to call to get a same-day slot?", answer: "Call as early in the day as possible. Most emergency clinics, including ours, reserve specific slots each day for urgent cases. Calling early gives you the best chance of securing one of these." },
    { question: "Do I need to be registered with you to get an emergency appointment?", answer: "No, you do not need to be a registered patient. Our urgent dental care service is available to everyone, whether you're a local resident or just visiting Manchester." },
    { question: "What information should I have ready when I call?", answer: "Be prepared to clearly describe your symptoms, when they started, and their severity. Have your personal details and a list of any medications you're taking. This helps us triage your case effectively." },
    { question: "Will my entire treatment be completed on the same day?", answer: "The goal of a same-day appointment is to diagnose the problem and get you out of pain. This might involve a temporary fix. More complex treatments, like a full root canal or a permanent crown, may require a follow-up visit." },
    { question: "What if my emergency happens on a weekend?", answer: "A dedicated weekend dentist in Manchester is crucial. Our service operates 7 days a week, so you can get the same level of urgent care on a Saturday or Sunday as you would on a weekday." },
    { question: "Is a 24-hour dentist the same as a same-day dentist?", answer: "They are related but not identical. A 24-hour dentist in Manchester offers an on-call service for severe, out-of-hours emergencies. A same-day dentist ensures you can be seen during clinic hours on the day you call. We offer both services to provide comprehensive coverage." },
    { question: "How much does a same-day appointment cost?", answer: "There will be an emergency consultation fee. The cost of any treatment is additional and will be fully explained to you before we proceed. We believe in transparent pricing for all urgent dental care." },
    { question: "Can I just walk in without an appointment?", answer: "We strongly advise against this. Please call first. This allows us to manage our schedule, prepare for your arrival, and ensure you are seen with minimal waiting time. A walk-in may result in a long wait." },
    { question: "What if I'm extremely anxious about the dentist?", answer: "Please let us know when you call. We are experienced in treating nervous patients and can discuss options to make your visit as comfortable as possible, ensuring your anxiety doesn't prevent you from getting the care you need." }
];

const SameDayDentistGuidePost = () => {
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
      
      <p className="lead">When you're dealing with severe dental pain, the thought of waiting days or even weeks for an appointment is unbearable. Fortunately, for residents of Greater Manchester, securing a same-day dental appointment in Bolton or the city centre is possible if you know where to look. This guide will walk you through the process.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} />

      <h2>Step 1: Identify the Right Type of Clinic</h2>
      <p>Your regular family dentist is likely booked with routine check-ups and may not have the flexibility to fit in an emergency. You need to search for clinics that specialize in or have a dedicated service for **urgent dental care in Manchester**. Look for keywords like "emergency dentist," "same-day appointments," or "24-hour dentist." These clinics are structured to handle last-minute, urgent cases.</p>

      <h2>Step 2: Call, Don't Email</h2>
      <p>For a same-day appointment, the phone is your best friend. Email inquiries can get lost or delayed. Calling allows for an immediate conversation where you can explain your symptoms and the receptionist can assess the urgency. The best strategy is to call as early in the morning as possible, as this is when emergency slots are most likely to be available.</p>

      <h2>Step 3: Be Clear and Concise About Your Emergency</h2>
      <p>When you call, be prepared to describe your situation clearly. Is it:</p>
      <ul>
        <li>Severe, throbbing pain?</li>
        <li>Swelling in your face or gums?</li>
        <li>A tooth that has been knocked out or broken?</li>
        <li>Bleeding that won't stop?</li>
      </ul>
      <p>This information helps the dental team understand the severity and allocate an appropriate appointment time. It also helps them prepare the right equipment for your arrival.</p>

      <blockquote>Our clinic reserves specific slots every day for patients needing a same-day dental appointment in Bolton and Manchester. Your pain is our priority.</blockquote>
      
      <h2>Step 4: What to Expect During Your Visit</h2>
      <p>A same-day emergency appointment is focused and efficient. The goal is not a full check-up, but to solve the immediate problem.</p>
      <ol>
        <li><strong>Diagnosis:</strong> The dentist will examine the problem area, likely taking an X-ray to see the full picture.</li>
        <li><strong>Pain Relief:</strong> The first priority is to make you comfortable. This usually involves local anaesthetic to numb the area.</li>
        <li><strong>Stabilisation:</strong> The dentist will perform the necessary treatment to stabilise the situation. This could be draining an abscess, placing a temporary filling, or starting the first stage of a root canal.</li>
        <li><strong>Treatment Plan:</strong> You will receive a clear explanation of the problem and a plan for any follow-up treatment required to permanently fix the issue.</li>
      </ol>

      <h2>Finding a Weekend or 24-Hour Dentist</h2>
      <p>Emergencies don't just happen from 9 to 5. If your problem arises on a weekend or late at night, you'll need a **weekend dentist in Manchester** or a **24-hour dentist** service. These on-call services are designed for true emergencies and ensure you're never left to suffer. If you're in pain, don't wait. Call our dedicated emergency line for immediate help.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default SameDayDentistGuidePost;