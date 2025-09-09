import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Pediatric Dental Emergencies: A Fast Action Guide for Parents",
  description: "From toothaches to chipped teeth and bitten tongues, dental emergencies can happen anytime. This guide helps parents in Manchester identify and act on common pediatric dental issues quickly and calmly.",
  author: "Dr. Ben Carter",
  readTime: "9 min read",
  category: "Pediatric Care",
  imgSrc: "https://images.unsplash.com/photo-1503213521139-3a11c1939352",
  imgAlt: "A parent looking closely at their child's mouth with a flashlight, representing quick assessment.",
};

const faqs = [
    { question: "What are the most common pediatric dental emergencies besides a knocked-out tooth?", answer: "Common emergencies include severe toothaches, chipped or broken teeth, objects caught between teeth, and soft tissue injuries like a bitten lip or tongue." },
    { question: "How should I handle my child's toothache?", answer: "First, have them rinse their mouth with warm salt water and gently floss around the sore tooth to dislodge any trapped food. A cold compress can help with swelling. Give age-appropriate pain relief, but never place aspirin on the gums. Call us to find the cause." },
    { question: "My child chipped their tooth. What's the first aid?", answer: "Stay calm. Have your child rinse with warm water. If you find the tooth fragment, save it in milk. Apply a cold compress to their face to reduce swelling and call our clinic for an urgent appointment. Even small chips need checking." },
    { question: "What if my child has something stuck between their teeth?", answer: "Try to remove it gently with dental floss. Never use a sharp or pointed object like a pin. If you can't get it out, contact us. Leaving it can cause gum inflammation or decay." },
    { question: "How do I treat a bitten lip or tongue?", answer: "Clean the area gently with a cloth and apply a cold compress to reduce swelling. If the bleeding is heavy or doesn't stop with light pressure after 15-20 minutes, it's best to go to an urgent care center or A&E." },
    { question: "My child's face is swollen. What does this mean?", answer: "Facial swelling is a serious sign of infection, such as a dental abscess. This is a true emergency. Contact an urgent dentist for kids in Bury or Manchester immediately. Do not delay, even if your child says the pain has subsided." },
    { question: "What if I think my child's jaw is broken?", answer: "If you suspect a broken jaw, try to keep their jaw from moving and go directly to the nearest A&E department. This is a medical emergency that requires hospital care." },
    { question: "Should I have an emergency dental kit for my child?", answer: "It's a great idea! A small kit could include gauze, a small container with a lid (for a tooth), our clinic's emergency phone number, and children's pain reliever. This can help you feel prepared." },
    { question: "How do you make an emergency visit less scary for a child?", answer: "Our team uses a 'tell-show-do' technique, explaining things in a simple, non-threatening way. We use a calm tone and positive reinforcement. Our goal is to build trust and make them feel safe and cared for." },
    { question: "When is it better to call an emergency dentist vs. going to A&E?", answer: "For any issue directly involving the teeth (chipped, broken, knocked out, abscess, toothache), an emergency dentist is best equipped. For uncontrollable bleeding, suspected jaw fractures, or other major facial trauma, go to A&E first." }
];

const PediatricDentalEmergenciesFastActionPost = () => {
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
      
      <p className="lead">Childhood is full of tumbles, bumps, and unexpected pains. When a dental emergency strikes, a parent's quick, informed response can prevent complications and ease a child's distress. This guide covers some of the most common pediatric dental emergencies and the immediate actions you should take.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>Emergency 1: The Severe Toothache</h2>
      <p>A toothache is your child's way of saying something is wrong. It could be a deep cavity, an emerging tooth, or an infection.</p>
      <ul>
        <li><strong>Fast Action:</strong> Have your child rinse their mouth with warm salt water. Gently floss around the tooth to remove any trapped food. Apply a cold compress to the outside of their cheek if there's swelling.</li>
        <li><strong>What NOT to Do:</strong> Never place aspirin or heat directly on the tooth or gums.</li>
        <li><strong>Next Step:</strong> Call us. A persistent toothache needs a professional diagnosis.</li>
      </ul>

      <h2>Emergency 2: Chipped or Broken Tooth</h2>
      <p>A common result of playground falls or sports mishaps. Even a small chipped tooth child in Manchester needs attention.</p>
      <ul>
        <li><strong>Fast Action:</strong> Rinse the mouth with warm water. Find any broken tooth fragments and store them in milk. Apply a cold compress to the face to reduce swelling.</li>
        <li><strong>Next Step:</strong> Contact our clinic immediately. We need to assess the damage, smooth sharp edges, and determine if the nerve is affected.</li>
      </ul>

      <blockquote>Your calm demeanor is the most important first-aid tool you have. It reassures your child when they are scared and in pain.</blockquote>
      
      <h2>Emergency 3: Bitten Lip or Tongue</h2>
      <p>These injuries can bleed a lot and look very dramatic, but are often manageable at home.</p>
      <ul>
        <li><strong>Fast Action:</strong> Clean the area gently with a clean, damp cloth. Apply a cold compress to minimize swelling and bleeding.</li>
        <li><strong>Next Step:</strong> If bleeding is heavy or doesn't stop with 15-20 minutes of firm, gentle pressure, it's best to seek medical attention at an urgent care clinic or A&E.</li>
      </ul>

      <h2>Emergency 4: Facial Swelling</h2>
      <p>This is a major red flag and should never be ignored. Swelling in the cheek or jaw area often indicates a serious infection, like a dental abscess.</p>
      <ul>
        <li><strong>Fast Action:</strong> Call an urgent dentist for kids in Bury or your local area immediately. This is a top-priority emergency.</li>
        <li><strong>Next Step:</strong> While waiting for your appointment, a cold compress can help with discomfort, but the priority is getting professional medical care as soon as possible.</li>
      </ul>
      <p>Being prepared can turn a panic-filled moment into a manageable situation. Keep our emergency number handy, and never hesitate to call for advice. We're here to support you and your child through any dental emergency.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default PediatricDentalEmergenciesFastActionPost;