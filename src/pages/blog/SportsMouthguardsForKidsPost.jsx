import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Sports Mouthguards & Emergency Prevention for Kids",
  description: "The best emergency is the one that never happens. Learn why a custom-fitted mouthguard is the most important piece of equipment for protecting your child from sports dental injuries in Manchester.",
  author: "Dr. Anya Sharma",
  readTime: "7 min read",
  category: "Prevention",
  imgSrc: "https://images.unsplash.com/photo-1579952516518-6c2027a0a135",
  imgAlt: "A child wearing a sports mouthguard while playing football, showcasing dental protection in action.",
};

const faqs = [
    { question: "Why is a custom-fitted mouthguard better than a store-bought one?", answer: "A custom mouthguard from a dentist is made from a precise impression of your child's teeth. This means it fits perfectly, offering superior protection, comfort, and stability. It won't fall out during a crucial moment and allows for easier breathing and speaking." },
    { question: "What kind of sports require a mouthguard?", answer: "Any sport with a risk of contact or falls can cause a sports dental injury in children. This includes obvious contact sports like rugby and hockey, but also football, basketball, martial arts, skateboarding, and gymnastics. When in doubt, wear a mouthguard." },
    { question: "What types of dental injuries can a mouthguard prevent?", answer: "Mouthguards are incredibly effective at preventing chipped, broken, and knocked-out teeth. They also protect against cuts to the lips, tongue, and cheeks, and can even help reduce the severity of concussions by absorbing shock." },
    { question: "My child wears braces. Can they still wear a mouthguard?", answer: "Yes, and it's even more important! A blow to the mouth can cause significant damage to braces and the soft tissues of the mouth. We can create a special custom mouthguard that fits comfortably over their braces." },
    { question: "How do we get a custom mouthguard in Manchester?", answer: "The process is simple and painless. You'll visit our clinic for a quick appointment where we take a digital or physical impression of your child's teeth. The custom mouthguard is then fabricated in a dental lab and will be ready for a final fitting shortly after." },
    { question: "How often should a mouthguard be replaced?", answer: "For a growing child, the mouthguard should be checked at every dental visit (usually every six months) to ensure it still fits properly. It will likely need to be replaced every season or two as their jaw grows and teeth shift." },
    { question: "How do we care for a mouthguard?", answer: "Rinse it with cool water after each use. Clean it regularly with a toothbrush and toothpaste or a mild soap. Store it in its protective, ventilated case. Never leave it in direct sunlight or a hot car, as it can warp." },
    { question: "Are mouthguards expensive?", answer: "A custom mouthguard is an investment in your child's safety. While it costs more than a store-bought one, it is significantly less expensive than the cost of emergency treatment for a broken or knocked-out tooth, which can require extensive and costly procedures over a lifetime." },
    { question: "Can adults benefit from mouthguards too?", answer: "Absolutely! Any adult playing contact or high-impact sports should wear a custom-fitted mouthguard to protect their teeth from injury. The principles of prevention are the same for all ages." },
    { question: "What's the first step to getting one for my child?", answer: "Just schedule a consultation with us. We can discuss your child's specific sport and needs, and get the process started to ensure they are protected before their next game or practice." }
];

const SportsMouthguardsForKidsPost = () => {
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
      
      <p className="lead">As parents, we do everything we can to keep our children safe. We insist on helmets for cycling and shin pads for football. Yet, one of the most vital pieces of protective gear is often overlooked: the mouthguard. Preventing a dental emergency is always better than treating one, and a mouthguard is your first line of defense.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>The Shocking Statistics on Sports Dental Injuries</h2>
      <p>Dental injuries are the most common type of facial injury in sports. It's estimated that athletes who do not wear mouthguards are 60 times more likely to suffer a dental injury. A single blow can lead to a lifetime of dental work, including root canals, crowns, and implants—all of which are far more costly and traumatic than a simple, preventative mouthguard.</p>

      <blockquote>A custom mouthguard is not just an accessory; it's essential safety equipment, as important as a helmet.</blockquote>
      
      <h2>Custom-Fitted vs. Store-Bought: No Contest</h2>
      <p>While you can buy "boil-and-bite" mouthguards at a sports store, they do not offer the same level of protection as a custom-fitted one from a dentist. Here's why a custom mouthguard is the superior choice:</p>
      <ul>
        <li><strong>Superior Fit & Comfort:</strong> Made from a precise mold of your child's teeth, it fits snugly and comfortably, so they're more likely to wear it correctly.</li>
        <li><strong>Maximum Protection:</strong> The precise fit ensures optimal shock absorption, distributing the force of an impact away from the front teeth.</li>
        <li><strong>Doesn't Interfere with Performance:</strong> A custom guard allows for easy breathing and speaking, unlike bulky store-bought options that can be distracting.</li>
        <li><strong>Protection for Braces:</strong> We can design a mouthguard to fit perfectly over braces, protecting both the teeth and the expensive orthodontic appliances.</li>
      </ul>

      <h2>Investing in Prevention</h2>
      <p>Getting a custom mouthguard in Manchester is a simple, painless process. It involves a quick visit to our clinic to take an impression of your child's teeth. This small investment of time and money can save your child from a painful sports dental injury and save you from the stress and expense of extensive emergency dental treatment.</p>
      <p>Before the next season starts, give your child's smile the protection it deserves. Contact us to schedule a fitting for a custom sports mouthguard—the ultimate tool for emergency prevention.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default SportsMouthguardsForKidsPost;