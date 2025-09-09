import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "How to Get a Same-Day Emergency Dental Appointment in Manchester & Bolton",
  description: "In pain? Learn how our clinic reserves specific slots for genuine dental emergencies to provide same-day appointments in Manchester and Bolton, ensuring you get relief fast.",
  author: "Dr. Ben Carter",
  readTime: "7 min read",
  category: "Appointments",
  imgSrc: "https://images.unsplash.com/photo-1551189023-e4a73373a623",
  imgAlt: "A calendar with a day circled and marked as 'Urgent', symbolizing a same-day appointment.",
};

const faqs = [
    { question: "Do you guarantee a same-day appointment for any issue?", answer: "We reserve dedicated slots every day specifically for genuine dental emergencies. This includes severe pain, swelling, bleeding, or trauma. While we strive to see every emergency patient the same day, availability depends on the time you call and the severity of your condition. We will always triage your call to ensure the most urgent cases are seen first." },
    { question: "What is the best way to get a same-day appointment?", answer: "Call us on our emergency line as early in the day as possible. Phone calls are the most direct and effective way for us to understand your situation, provide immediate advice, and book you into an emergency slot." },
    { question: "What qualifies as a 'genuine dental emergency'?", answer: "A genuine emergency typically involves conditions that require immediate attention to stop bleeding, alleviate severe pain, or save a tooth. Examples include a knocked-out tooth, uncontrollable bleeding, a dental abscess with swelling, or severe, debilitating toothache." },
    { question: "What if I call outside of normal office hours?", answer: "Our emergency line is available 24/7. Calls outside of our regular hours are directed to our on-call emergency dentist who can provide advice and arrange to see you if the situation is critical." },
    { question: "Will I receive full treatment on the same day?", answer: "The primary goal of a same-day emergency appointment is to diagnose the problem, get you out of pain, and stabilize the situation. This may involve a temporary filling, a prescription for antibiotics, or the first stage of a root canal. Complex treatments may require a follow-up visit." },
    { question: "How much does a same-day emergency appointment cost?", answer: "The cost consists of our emergency consultation fee, which covers the assessment and diagnosis. The cost of any subsequent treatment will be discussed with you before we proceed. We are transparent about all costs involved." },
    { question: "Should I book online or call for a same-day emergency?", answer: "For any urgent, same-day needs, you should always call us directly. Our online booking system is for non-urgent appointments and may not show the reserved emergency slots." },
    { question: "I'm in Bolton, can I still get a same-day appointment?", answer: "Yes, our emergency services cover both Manchester and Bolton. We will direct you to the most appropriate location to ensure you are seen as quickly as possible." },
    { question: "What information should I have ready when I call?", answer: "Be ready to describe your symptoms clearly, including when the pain started, its location, and its severity. Also, have your personal details and a list of any current medications you are taking." },
    { question: "What if I'm very anxious about the visit?", answer: "Please let us know when you call. We are experienced in treating anxious patients and offer options like in-clinic sedation to make your visit as comfortable and stress-free as possible." }
];

const SameDayAppointmentPost = () => {
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
      
      <p className="lead">When you're hit with sudden, severe dental pain, the last thing you want to hear is "Our next available appointment is in two weeks." At our clinic serving Manchester and Bolton, we understand that dental emergencies can't wait. That's why we've structured our practice to ensure we can help when you need it most.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>Our Commitment to Emergency Care</h2>
      <p>Getting you out of pain is our top priority. We are not a standard 9-to-5 dental office; we are a dedicated emergency dental service. This means we operate differently to accommodate urgent cases.</p>

      <blockquote>We reserve specific appointment slots every single day exclusively for patients experiencing dental emergencies. These slots are not available for routine check-ups.</blockquote>
      
      <h2>How to Secure Your Same-Day Appointment: A Step-by-Step Guide</h2>
      <ol>
        <li><strong>Call Us Immediately:</strong> The moment you realize you have a dental emergency, call our dedicated emergency phone number. This is the fastest and most effective way to reach us. Our trained staff will listen to your symptoms and assess the urgency.</li>
        <li><strong>Provide Clear Information:</strong> Be ready to explain your problem. Is it a severe toothache? A broken tooth? Swelling? The more accurately you can describe the issue, the better we can prepare for your visit.</li>
        <li><strong>Follow Our Advice:</strong> Our team may provide you with important first-aid instructions over the phone to manage your symptoms until you can get to the clinic.</li>
        <li><strong>Arrive for Your Appointment:</strong> We will give you an appointment time for that day. Our goal is to see you, diagnose the issue, and provide immediate pain relief as quickly as possible.</li>
      </ol>

      <h2>What to Expect at Your Emergency Visit</h2>
      <p>A same-day emergency appointment is focused and efficient. Our objective is to address the immediate crisis.</p>
      <ul>
        <li><strong>Diagnosis:</strong> We'll conduct a thorough examination, which may include a digital X-ray, to identify the root cause of the problem.</li>
        <li><strong>Pain Relief:</strong> We will take immediate steps to alleviate your pain. This might involve a local anesthetic, dressing the tooth, or prescribing medication.</li>
        <li><strong>Stabilization:</strong> We will stabilize the tooth or area to prevent the problem from worsening. For example, placing a temporary filling on a broken tooth or draining an abscess.</li>
        <li><strong>Treatment Plan:</strong> We will explain our findings and discuss the next steps. While we aim to complete treatment in one visit, some conditions (like a root canal) may require a follow-up appointment for definitive care.</li>
      </ul>
      
      <p>You don't have to suffer through dental pain. If you're in Manchester or Bolton and need an emergency dentist, don't hesitate. Call us now, and let us help you get back to a pain-free life.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default SameDayAppointmentPost;