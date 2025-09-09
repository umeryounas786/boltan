import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "A Parent's Guide to Pediatric Dental Emergencies",
  description: "Learn how to handle common pediatric dental emergencies like knocked-out teeth, toothaches, and sports injuries with our guide on child-focused emergency care.",
  author: "Dr. Chloe Davis",
  readTime: "7 min read",
  category: "Family & Kids",
  imgSrc: "https://images.unsplash.com/photo-1562222403-e29a87299107",
  imgAlt: "A happy child sitting in a dental chair, feeling safe and comfortable.",
};

const faqs = [
    { question: "What is the most common pediatric dental emergency?", answer: "Falls and sports-related accidents that result in chipped, broken, or knocked-out teeth are among the most common emergencies. Toothaches from decay or infection are also very frequent." },
    { question: "What should I do if my child knocks out a permanent tooth?", answer: "Act quickly! Find the tooth and hold it by the crown (the chewing surface), not the root. If it's dirty, rinse it gently with milk or water (do not scrub). Try to reinsert it into the socket. If you can't, place it in a container of milk or saliva and get to our emergency clinic immediately. Time is critical." },
    { question: "What about a knocked-out baby tooth?", answer: "Do not try to reinsert a baby tooth. This can damage the developing permanent tooth underneath. Find the tooth if you can to ensure it wasn't swallowed or inhaled, and contact us for an assessment." },
    { question: "How can I help my child's toothache?", answer: "Have your child rinse their mouth with warm salt water. You can use a cold compress on their cheek to reduce swelling. Never place aspirin directly on the gums. Give age-appropriate pain relief like paracetamol or ibuprofen, and schedule an emergency visit with us." },
    { question: "My child chipped a tooth, is it an emergency?", answer: "Yes, even small chips should be evaluated. A chip can have sharp edges that cut the lips or tongue, and deeper fractures can expose the tooth's nerve. Collect any broken fragments and call us for an appointment." },
    { question: "What should I do for a cut lip or tongue?", answer: "Clean the area gently with a cloth and apply a cold compress to reduce swelling. If bleeding is heavy or doesn't stop with light pressure after 15-20 minutes, go to an urgent care center or A&E, as stitches may be needed." },
    { question: "How can we prevent dental injuries during sports?", answer: "A custom-fitted mouthguard is the best protection against dental injuries during sports. It's a small investment that can save you from significant pain, trauma, and expense. We can create one for your child here at the clinic." },
    { question: "Is a dental abscess in a child serious?", answer: "Yes, a dental abscess (a pimple-like swelling on the gum) is a sign of infection and is a serious emergency. The infection can spread and cause significant health problems. Contact us immediately; do not try to pop the abscess." },
    { question: "How do you make children feel comfortable during an emergency visit?", answer: "Our team is specially trained to work with children. We use a 'tell-show-do' approach, explaining things in simple terms and using a friendly, reassuring tone. Our goal is to make the visit as positive and stress-free as possible." },
    { question: "When should I take my child to A&E vs. an emergency dentist?", answer: "Go to the A&E for a suspected jaw fracture, uncontrollable bleeding, or if your child has lost consciousness or has other significant head injuries. For all other tooth-related emergencies (knocked-out tooth, abscess, severe pain), an emergency dentist is the best choice." }
];

const PediatricEmergenciesPost = () => {
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
      
      <p className="lead">As a parent, seeing your child in pain or distress is one of the most difficult experiences. When that distress comes from a dental emergency, knowing what to do and acting quickly can make all the difference. This guide is designed to empower families in Manchester, Bolton, and beyond with the knowledge to handle these stressful situations calmly and effectively.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>The Golden Rule: Stay Calm</h2>
      <p>Your child will take cues from your reaction. By remaining calm and reassuring, you can help soothe their fear and anxiety. Our clinic specializes in creating a safe, child-focused environment to manage their dental needs with compassion and expertise.</p>

      <blockquote>In any pediatric dental emergency, the first steps you take at home can be crucial for the long-term outcome.</blockquote>
      
      <h2>Step-by-Step Guide for Common Pediatric Emergencies</h2>
      
      <h3>1. Knocked-Out Permanent Tooth</h3>
      <p>This is a time-sensitive emergency that requires immediate action for the best chance of saving the tooth.</p>
      <ol>
        <li><strong>Find the Tooth:</strong> Handle it by the chewing surface (crown), never the root.</li>
        <li><strong>Clean the Tooth (If Dirty):</strong> Gently rinse with milk or cool water. Do not scrub or use soap.</li>
        <li><strong>Replant the Tooth:</strong> If possible, gently push the tooth back into its socket. Have your child bite down on a clean cloth to hold it in place.</li>
        <li><strong>Store it Safely:</strong> If you can't replant it, place the tooth in a small container of milk or your child's saliva. Do not store it in water.</li>
        <li><strong>See Us Immediately:</strong> Call our emergency line and come to the clinic right away. The first 30-60 minutes are critical.</li>
      </ol>

      <h3>2. Chipped or Fractured Tooth</h3>
      <p>Rinse your child's mouth with warm water to clean the area. Apply a cold compress to the face to minimize swelling. If you can find the broken tooth fragment, bring it with you to the clinic. Even minor chips need to be assessed to prevent further damage or infection.</p>
      
      <h3>3. Toothache</h3>
      <p>A toothache is a sign that something is wrong. Help your child rinse with warm salt water and gently floss around the sore tooth to remove any trapped food. A cold compress can help with discomfort. Do not apply heat or place aspirin on the tooth or gums. Contact us to diagnose the underlying cause.</p>

      <h3>4. Dental Injury from Sports</h3>
      <p>The best offense is a good defense. A custom-fitted mouthguard from a dentist provides the best protection against sports-related dental trauma. If an injury does occur, follow the steps for a knocked-out or chipped tooth and contact us immediately.</p>
      
      <p>At our practice, we understand that children are not just small adults. Their dental needs, and their emotional needs during an emergency, are unique. We are dedicated to providing expert, compassionate care that protects your child's smile and fills a crucial gap for families in our community.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default PediatricEmergenciesPost;