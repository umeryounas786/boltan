import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "What to Expect from an Emergency Dentist Visit in Bury",
  description: "Facing a dental emergency in Bury? Understand the process, from your initial call to diagnosis and treatment, ensuring a smooth and stress-free experience.",
  author: "Dr. Chloe Davis",
  readTime: "6 min read",
  category: "Patient Guide",
  imgSrc: "https://images.unsplash.com/photo-1588776814546-1ff20a3a7b8b",
  imgAlt: "A dentist explaining a procedure to a patient in a calm, professional setting.",
};

const faqs = [
    { question: "What should I do first if I have a dental emergency in Bury?", answer: "Your first step should always be to call our emergency dental line. Do not just show up. Calling allows us to assess your situation, provide immediate advice, and prepare for your arrival, ensuring you are seen as quickly as possible." },
    { question: "What information will you need when I call?", answer: "Please be ready to describe your symptoms clearly: what happened, where the pain is, its severity, and any swelling or bleeding. Also, mention any relevant medical conditions or medications you are taking." },
    { question: "How quickly will I be seen?", answer: "We prioritize genuine emergencies and aim to see you on the same day. The exact waiting time depends on the severity of your condition and the time you call. We will give you an estimated appointment time when you call." },
    { question: "What happens during the emergency examination?", answer: "The dentist will focus on the area of concern. This typically involves a visual examination, possibly gentle probing, and often an X-ray to diagnose the underlying problem. Our goal is to quickly identify the cause of your pain." },
    { question: "Will my emergency be fully treated in one visit?", answer: "The primary goal of an emergency visit is to alleviate your pain and stabilize the situation. This might involve a temporary filling, draining an abscess, or prescribing medication. Complex treatments may require a follow-up appointment." },
    { question: "How much will the emergency visit cost?", answer: "There is an initial emergency consultation fee. Any treatment required will be an additional cost, which will be discussed with you transparently before we proceed. We aim to provide cost-effective solutions." },
    { question: "What if I'm very nervous about dental treatment?", answer: "Please let us know about your anxiety when you call or arrive. Our team is highly experienced in treating nervous patients and will take extra steps to ensure you feel comfortable and at ease throughout your visit." },
    { question: "Can I bring someone with me?", answer: "Yes, you are welcome to bring a friend or family member for support, especially if you are feeling anxious or unwell. They can also help remember information discussed during the visit." },
    { question: "What if I need follow-up treatment?", answer: "If your emergency requires further treatment, we will discuss a comprehensive treatment plan with you. You can choose to have this follow-up care with us or we can provide a referral letter to your regular dentist." },
    { question: "Is your clinic easily accessible in Bury?", answer: "Our clinic is conveniently located and accessible. We can provide directions and information on public transport or parking when you call. Our facilities are designed to accommodate patients with varying mobility." }
];

const BuryEmergencyVisitPost = () => {
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
      
      <p className="lead">A dental emergency can be a frightening experience, especially when you're in pain and unsure where to turn. For residents of Bury, knowing what to expect from an emergency dentist visit can help alleviate anxiety and ensure you receive prompt, effective care. Our goal is to make your experience as smooth and stress-free as possible.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1681939278218-a755fb2bf2d3" />

      <h2>Your First Step: The Phone Call</h2>
      <p>When a dental emergency strikes, your first action should always be to call our dedicated emergency line. This is crucial because:</p>
      <ul>
        <li><strong>Immediate Advice:</strong> We can provide guidance on how to manage your symptoms until you reach the clinic.</li>
        <li><strong>Triage:</strong> We assess the urgency of your situation to ensure the most critical cases are seen first.</li>
        <li><strong>Preparation:</strong> Calling ahead allows us to prepare for your arrival, ensuring the right equipment and personnel are ready.</li>
      </ul>

      <blockquote>We understand dental emergencies are stressful. Our team in Bury is here to guide you through every step.</blockquote>
      
      <h2>What Happens When You Arrive</h2>
      <p>Upon arrival at our Bury clinic, our friendly team will greet you. We aim to minimize your waiting time, but please understand that emergencies can be unpredictable. Once you're called in, the process typically involves:</p>
      <ol>
        <li><strong>Focused Examination:</strong> The dentist will concentrate on the area of your concern. This will involve a thorough visual inspection and often an X-ray to get a clear picture of the underlying issue.</li>
        <li><strong>Diagnosis and Discussion:</strong> Once the problem is identified, the dentist will explain the diagnosis clearly, discuss the treatment options available, and answer any questions you may have.</li>
        <li><strong>Pain Relief and Stabilization:</strong> The immediate priority is to alleviate your pain. This might involve administering local anesthetic, placing a temporary filling, draining an abscess, or prescribing medication.</li>
        <li><strong>Treatment Plan:</strong> For more complex issues, a comprehensive treatment plan will be discussed. While we aim to complete treatment in one visit, some conditions may require a follow-up appointment.</li>
      </ol>

      <h2>Our Commitment to Your Comfort</h2>
      <p>We understand that dental emergencies can be particularly stressful. Our team in Bury is committed to providing compassionate, gentle care. We encourage you to communicate any anxieties or concerns you have, and we will do our utmost to ensure your visit is as comfortable as possible.</p>
      
      <p>If you're in Bury and experiencing a dental emergency, remember you're not alone. Call us, and let us help you get back to comfort and health.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default BuryEmergencyVisitPost;