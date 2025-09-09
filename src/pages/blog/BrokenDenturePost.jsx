import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "How to Handle a Broken Denture in Manchester: Same-Day Emergency Repair",
  description: "A broken denture is a true dental emergency. Learn the immediate steps to take, what not to do, and how our Manchester clinic offers same-day repairs to restore your smile.",
  author: "Dr. Ben Carter",
  readTime: "7 min read",
  category: "Denture Care",
  imgSrc: "https://images.unsplash.com/photo-1625498542638-857fb3734d84",
  imgAlt: "A pair of dentures on a dental technician's workbench, mid-repair.",
};

const faqs = [
    { question: "Is a broken denture considered a real dental emergency?", answer: "Yes, absolutely. A broken denture can prevent you from eating and speaking properly, and wearing a damaged one can cause significant irritation and sores to your gums and mouth tissues. It requires immediate professional attention." },
    { question: "Can I use superglue to fix my broken denture?", answer: "No, never use superglue or any household adhesives. These glues are toxic and not safe for your mouth. They can also permanently damage the denture, making a professional repair impossible and often requiring a costly replacement." },
    { question: "What should I do immediately after my denture breaks?", answer: "Carefully collect all the pieces, including any teeth that have broken off. Place them in a secure container or bag. Do not attempt to wear the broken denture. Call our emergency denture repair service in Manchester immediately." },
    { question: "Do you offer same-day denture repairs?", answer: "Yes, we understand the urgency and offer a same-day emergency repair service for most types of denture damage, including cracks, fractures, and broken-off teeth. Our goal is to get your denture back to you as quickly as possible." },
    { question: "What kind of denture damage can you repair?", answer: "Our skilled technicians can repair most common issues, such as a cracked denture base, a complete fracture, a chipped or missing tooth, and adding a new tooth after an extraction. We can also perform relines to improve the fit." },
    { question: "How long does a denture repair take?", answer: "For simple repairs like a clean fracture or replacing a single tooth, we can often complete the repair within a few hours on the same day. More complex repairs may take longer, but we will give you a clear timeframe when you call." },
    { question: "Will the repair be strong and durable?", answer: "Yes. We use high-strength, professional-grade acrylics and bonding agents specifically designed for dental prosthetics. The repaired denture will be strong, durable, and safe to wear." },
    { question: "What if my denture is very old and keeps breaking?", answer: "If your denture is old and has had multiple repairs, it may be a sign that it's time for a replacement. The shape of your jaw changes over time, and an ill-fitting denture is more prone to breaking. We can assess its condition and advise you on the best course of action." },
    { question: "How much does an emergency denture repair cost in Manchester?", answer: "The cost depends on the type and extent of the damage. We offer transparent and competitive pricing. Please call us with a description of the problem, and we can provide you with an estimated cost over the phone." },
    { question: "Do I need to come to the clinic, or can I send my denture in?", answer: "You will need to bring your denture to our clinic. This allows us to properly assess the damage and, in some cases, check the fit in your mouth to ensure the repair will be successful." }
];

const BrokenDenturePost = () => {
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
      
      <p className="lead">A broken denture is far more than a simple inconvenience—it's a genuine dental emergency that can disrupt your ability to eat, speak, and feel confident. When your denture breaks, you need a fast and reliable solution. Here’s a guide on what to do and how our emergency denture repair service in Manchester can help.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1612283105644-7ff66a3d5d8d" />

      <h2>The #1 Rule: Do Not Use Superglue!</h2>
      <p>It can be tempting to reach for a tube of superglue for a quick fix, but this is the worst thing you can do. Household glues are not biocompatible, meaning they are toxic and can cause severe irritation to your gums. Furthermore, they often fail to create a strong bond and can dissolve the denture material, making a professional repair impossible and forcing you to buy a completely new set.</p>

      <blockquote>A failed DIY superglue repair almost always leads to needing a new, more expensive denture. Always seek professional help.</blockquote>
      
      <h2>Your Immediate Steps After a Denture Breaks</h2>
      <ol>
        <li><strong>Collect All Pieces:</strong> Carefully gather every piece of the denture, including any clasps or teeth that have broken off.</li>
        <li><strong>Store Them Safely:</strong> Place the pieces in a sealed plastic bag or container to avoid losing them.</li>
        <li><strong>Do Not Wear It:</strong> Do not attempt to wear the broken denture. A fractured edge can cut your gums, and an improper fit can cause significant sores and damage.</li>
        <li><strong>Call Us Immediately:</strong> Contact our Manchester emergency denture repair line. Describe the damage, and we will schedule you for a same-day appointment.</li>
      </ol>

      <h2>Our Same-Day Denture Repair Process</h2>
      <p>We are equipped to handle most denture emergencies quickly and efficiently, often on the same day.</p>
      <ul>
        <li><strong>Assessment:</strong> Our dental technician will carefully examine the broken denture to determine the best repair strategy.</li>
        <li><strong>Professional Repair:</strong> Using specialized, high-strength dental acrylics, we will precisely piece the denture back together. If a tooth has broken off, we will securely bond it back into place or replace it with a new, perfectly matched one.</li>
        <li><strong>Finishing and Polishing:</strong> After the repair is complete, the denture is polished to a smooth, high-shine finish, making it comfortable to wear and difficult to spot the repair.</li>
      </ul>
      
      <p>A broken denture doesn't have to mean days of discomfort and embarrassment. With our expert same-day repair service in Manchester, we can restore your smile, your function, and your confidence in a matter of hours. If your denture has broken, don't hesitate—call us now.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default BrokenDenturePost;