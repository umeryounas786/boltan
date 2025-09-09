import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Emergency Dental Care for Seniors: Lost Dentures and Broken Fillings",
  description: "Seniors face unique dental challenges. This guide covers common emergencies like lost dentures and broken fillings, and how we provide gentle, prompt care.",
  author: "Dr. Anya Sharma",
  readTime: "8 min read",
  category: "Senior Care",
  imgSrc: "https://images.unsplash.com/photo-1592890287445-f2410770827f",
  imgAlt: "A senior patient smiling comfortably in a dental chair, with a caring dentist.",
};

const faqs = [
    { question: "Why are seniors more prone to certain dental emergencies?", answer: "As we age, teeth can become more brittle, existing fillings and crowns may wear out, and gum recession can expose roots to decay. Additionally, many seniors take medications that cause dry mouth, increasing cavity risk. Dentures can also break or become ill-fitting over time." },
    { question: "My denture broke. Can it be fixed quickly?", answer: "Many broken dentures can be repaired on the same day, especially if it's a clean break. It's crucial to bring all pieces of the denture with you. We aim to restore your ability to eat and speak comfortably as soon as possible." },
    { question: "What should I do if a filling or crown falls out?", answer: "Collect the filling or crown if possible. Avoid chewing on that side of your mouth. You can use a temporary dental cement from a pharmacy to cover the exposed tooth, but call us immediately for a proper repair to prevent further damage or sensitivity." },
    { question: "Is it safe for seniors to undergo emergency dental procedures?", answer: "Yes, with proper medical history review. We take extra care to understand your health conditions and medications to ensure any treatment is safe and tailored to your needs. We prioritize your comfort and well-being." },
    { question: "I have a severe toothache, but I'm on blood thinners. What should I do?", answer: "Call us immediately. It's vital to inform us about all your medications, especially blood thinners. We will coordinate with your physician if necessary to ensure safe treatment, as delaying care for an infection can be more dangerous." },
    { question: "My gums are bleeding and swollen. Is this an emergency?", answer: "Persistent bleeding and significant swelling can be signs of severe gum disease or an infection. While not always a 'drop everything' emergency, it requires prompt attention to prevent further bone loss and potential tooth loss. Call us for an urgent assessment." },
    { question: "What if I can't travel easily to the clinic?", answer: "Please discuss your mobility concerns with us when you call. We strive to make our clinic accessible and can discuss options or provide guidance on transportation if needed. Your access to care is important." },
    { question: "How can I prevent future dental emergencies?", answer: "Regular dental check-ups and professional cleanings are paramount. Discuss any changes in your health or medications with your dentist. Maintain good oral hygiene, and if you wear dentures, ensure they fit well and are cleaned daily." },
    { question: "Are there special considerations for seniors with cognitive impairment?", answer: "Yes, we approach care for patients with cognitive impairment with extra patience and understanding. We encourage caregivers to accompany them and provide us with as much information as possible to ensure a comfortable and effective visit." },
    { question: "What if my emergency happens after hours or on a weekend?", answer: "Our emergency line is available 24/7. Please call us, and our on-call team will provide advice and arrange for you to be seen if your situation is critical, ensuring you receive care when you need it most." }
];

const SeniorEmergencyCarePost = () => {
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
      
      <p className="lead">As we age, our dental needs evolve, and sometimes, unexpected emergencies can arise. For seniors, issues like a broken denture, a lost filling, or sudden tooth pain can be particularly distressing and impact daily life significantly. Understanding these common emergencies and knowing where to find gentle, prompt care is essential for maintaining comfort and health.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>Common Dental Emergencies for Seniors</h2>
      <p>While anyone can experience a dental emergency, certain issues are more prevalent among older adults:</p>
      <ul>
        <li><strong>Broken or Ill-Fitting Dentures:</strong> Dentures can break from accidents or simply wear down over time, leading to discomfort, difficulty eating, and even gum sores. An ill-fitting denture can also cause significant pain.</li>
        <li><strong>Lost or Broken Fillings/Crowns:</strong> Older restorations can fail, exposing sensitive tooth structure to decay or pain.</li>
        <li><strong>Tooth Fractures:</strong> Teeth can become more brittle with age, making them susceptible to cracks or breaks, especially when chewing hard foods.</li>
        <li><strong>Gum Disease Flare-ups:</strong> Advanced gum disease can lead to abscesses, pain, and even tooth mobility.</li>
        <li><strong>Dry Mouth (Xerostomia):</strong> Often a side effect of medications, dry mouth reduces saliva's protective effects, leading to rapid decay and increased sensitivity.</li>
      </ul>

      <blockquote>We understand the unique needs of our senior patients and provide compassionate, tailored emergency care.</blockquote>
      
      <h2>Our Approach to Senior Emergency Dental Care</h2>
      <p>When a senior patient experiences a dental emergency, our priority is to provide care that is not only effective but also comfortable and considerate of their overall health. Our team is experienced in:</p>
      <ul>
        <li><strong>Thorough Medical History Review:</strong> We carefully review all medications and health conditions to ensure safe and appropriate treatment.</li>
        <li><strong>Gentle Techniques:</strong> We use gentle approaches and ensure adequate pain control to make the experience as stress-free as possible.</li>
        <li><strong>Prompt Resolution:</strong> For issues like broken dentures, we aim for same-day repairs whenever possible to restore function quickly.</li>
        <li><strong>Clear Communication:</strong> We explain procedures clearly and patiently, ensuring both the patient and their caregivers understand the treatment plan.</li>
      </ul>
      
      <p>If you or a senior loved one in Manchester is experiencing a dental emergency, don't hesitate to reach out. We are here to provide the urgent, compassionate care needed to restore comfort and peace of mind.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default SeniorEmergencyCarePost;