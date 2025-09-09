import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Weekend Tooth Pain in Manchester? Here’s What to Do",
  description: "Dental pain doesn't wait for Monday. Learn what to do if you have a toothache on a Saturday or Sunday and how our emergency weekend service in Manchester can help.",
  author: "Dr. Ben Carter",
  readTime: "7 min read",
  category: "Appointments",
  imgSrc: "https://images.unsplash.com/photo-1580624403224-9195936a54d2",
  imgAlt: "A calendar page showing Saturday and Sunday highlighted, representing weekend availability.",
};

const faqs = [
    { question: "Are you actually open on Saturdays and Sundays in Manchester?", answer: "Yes, we operate a dedicated emergency dental service over the weekend. We understand that dental emergencies don't stick to a 9-to-5 schedule, and we are here to help when you need it most." },
    { question: "Is it more expensive to see an emergency dentist on the weekend?", answer: "There is typically an out-of-hours fee for weekend emergency appointments, which reflects the cost of having our clinic and staff on standby. We are fully transparent about all costs before you commit to an appointment." },
    { question: "What is considered a 'weekend dental emergency'?", answer: "Any situation causing you severe pain, swelling, or bleeding is an emergency. This includes severe toothache, a dental abscess (swollen face/gum), a knocked-out tooth, or a broken tooth causing sharp pain." },
    { question: "Should I just go to A&E for weekend tooth pain?", answer: "A&E is not equipped to handle dental problems. They can provide pain relief but cannot treat the underlying dental issue. You will save time and get the correct treatment by contacting an emergency dentist directly." },
    { question: "What pain relief can I take until my appointment?", answer: "Over-the-counter painkillers like paracetamol or ibuprofen can help manage the pain. Always follow the dosage instructions on the packet and inform our dentist what you have taken." },
    { question: "I have a swollen face on a Sunday morning. What should I do?", answer: "A swollen face is a sign of a serious infection (abscess) and requires immediate attention. Call our emergency line right away. While you wait, you can use a cold compress on your cheek to help manage the swelling." },
    { question: "How quickly can I get an appointment on a weekend?", answer: "We prioritize genuine emergencies and aim to see you as quickly as possible, often within a few hours of your call. Our goal is to get you out of pain on the same day." },
    { question: "I knocked out my tooth playing football on Saturday. What do I do?", answer: "This is a time-critical emergency. Find the tooth, hold it by the crown (not the root), and if it's clean, try to place it back in the socket. If not, store it in milk or your own saliva and call us immediately. The sooner you act, the better the chance of saving the tooth." },
    { question: "My child has a severe toothache on a Sunday. Can you see them?", answer: "Yes, our emergency service is available for patients of all ages, including children. We provide gentle and reassuring care for pediatric dental emergencies." },
    { question: "What's the best way to contact you on a weekend?", answer: "The best and fastest way to reach us is by calling our dedicated emergency phone number. This line is monitored throughout the weekend to ensure a rapid response." }
];

const WeekendToothPainPost = () => {
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
      
      <p className="lead">There's nothing worse than a throbbing toothache starting on a Friday night, leaving you to face a long weekend of pain. Many people think they have to suffer through until Monday, but that's not the case. Our emergency dental service in Manchester is available 7 days a week to provide the urgent care you need.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>Why Waiting Until Monday is a Bad Idea</h2>
      <p>Dental pain is your body's warning signal that something is wrong. Ignoring it can allow the problem to escalate significantly. A simple infection can develop into a painful abscess, and a small crack can lead to a completely fractured tooth. Seeking immediate care is not just about relieving pain; it's about preventing more complex and expensive treatments down the line.</p>

      <blockquote>Don't let a weekend be the reason a small dental issue becomes a major one. We are here to help, right when you need it.</blockquote>
      
      <h2>Immediate First-Aid for Weekend Tooth Pain</h2>
      <p>While you are arranging your emergency appointment, here are a few things you can do to manage the discomfort:</p>
      <ul>
        <li><strong>Rinse with Warm Salt Water:</strong> Dissolve half a teaspoon of salt in a glass of warm water and rinse gently. This helps to clean the area and can soothe inflammation.</li>
        <li><strong>Use a Cold Compress:</strong> Apply a cold compress or ice pack wrapped in a towel to the outside of your cheek for 15-20 minutes at a time. This can help reduce swelling and numb the area.</li>
        <li><strong>Over-the-Counter Pain Relief:</strong> Ibuprofen or paracetamol can be effective for dental pain. Always adhere to the recommended dosage.</li>
        <li><strong>Avoid Triggers:</strong> Stay away from foods and drinks that are very hot, cold, sweet, or hard, as these can aggravate the pain.</li>
      </ul>

      <h2>Your Weekend Emergency Appointment</h2>
      <p>When you call our Manchester emergency line, we will listen to your symptoms and arrange the earliest possible appointment. Our weekend service is focused on one thing: getting you out of pain. We will diagnose the problem and perform the necessary treatment to provide immediate relief, whether that's dressing a tooth, starting a root canal, or extracting a non-restorable tooth.</p>
      
      <p>If you're experiencing dental pain this weekend, don't suffer in silence. Call our emergency team now for immediate advice and care.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default WeekendToothPainPost;