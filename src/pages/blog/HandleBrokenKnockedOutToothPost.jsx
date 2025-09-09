import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "How to Handle a Broken or Knocked-Out Tooth Before Your Appointment",
  description: "A knocked-out or broken tooth is a time-sensitive emergency. Learn the crucial first-aid steps to save your tooth and what to do before seeing an emergency dentist in Manchester.",
  author: "Dr. Ben Carter",
  readTime: "8 min read",
  category: "First Aid",
  imgSrc: "https://images.unsplash.com/photo-1629904853716-f0bc54eea48d",
  imgAlt: "A person carefully holding a knocked out tooth, ready for transport to the dentist.",
};

const faqs = [
    { question: "What is the most important thing to do for a knocked-out tooth?", answer: "Act FAST. Time is critical. The best chance of saving the tooth is to have it reimplanted within one hour of being knocked out. Call an emergency dentist immediately." },
    { question: "How should I handle a knocked-out tooth?", answer: "Pick it up by the crown (the white chewing part), NOT the root. If it's dirty, rinse it briefly with milk or water. Do not scrub or use soap." },
    { question: "Should I try to put the tooth back in the socket myself?", answer: "Yes, if possible. Gently push it back into its socket and hold it in place by biting down on a clean cloth or gauze. If you can't reinsert it, proper storage is the next best thing." },
    { question: "What's the best way to store a knocked-out tooth?", answer: "The best storage medium is milk. Place the tooth in a small container of milk. If milk isn't available, you can use your own saliva (by holding it in your cheek) or a special tooth preservation product. Do NOT use plain water." },
    { question: "My tooth is broken, not knocked out. What should I do?", answer: "Rinse your mouth with warm salt water. Find any large fragments and save them. Apply a cold compress to your cheek to reduce swelling and pain. Call a dentist for broken tooth repair in Manchester immediately." },
    { question: "Will a chipped tooth in Bolton be treated the same day?", answer: "Yes, for a chipped tooth emergency in Bolton or Manchester, we aim to provide a same-day appointment. Minor chips can often be repaired in a single visit with dental bonding." },
    { question: "I need a dentist for a broken tooth in Bury. How quickly can I be seen?", answer: "We prioritize dental trauma. If you need a dentist for a broken tooth in Bury or surrounding areas, call our emergency line. We will arrange to see you as quickly as possible, usually the same day." },
    { question: "Can a tooth be saved if it's been out for more than an hour?", answer: "The chances of successful reimplantation decrease significantly after an hour, but it's not impossible. You should still seek immediate emergency dental treatment, as there may be other options available." },
    { question: "What happens if I swallow the broken piece of my tooth?", answer: "Don't worry. It's usually harmless and will pass through your digestive system without any issues. The priority is still to get the remaining tooth assessed by a dentist." },
    { question: "How much does knocked out tooth treatment in Manchester cost?", answer: "The cost involves an emergency consultation and the specific treatment. Reimplanting a tooth is a complex procedure. If the tooth cannot be saved, we will discuss replacement options like a bridge or dental implant. All costs will be explained upfront." }
];

const HandleBrokenKnockedOutToothPost = () => {
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
      
      <p className="lead">In the shocking moments after a tooth is broken or completely knocked out, your actions can mean the difference between saving and losing the tooth. This guide provides clear, step-by-step instructions for what to do before you get to our clinic for emergency broken tooth repair in Manchester.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>Case 1: A Knocked-Out (Avulsed) Tooth - TIME IS CRITICAL</h2>
      <p>If an adult tooth is completely knocked out of its socket, this is one of the most time-sensitive dental emergencies. Your goal is to get professional knocked out tooth treatment in Manchester within one hour.</p>
      <ol>
        <li><strong>Find the Tooth:</strong> Locate the tooth immediately.</li>
        <li><strong>Handle with Care:</strong> Pick it up by the crown (the white, top part). Do NOT touch the root.</li>
        <li><strong>Clean if Necessary:</strong> If dirty, rinse the tooth gently for a few seconds with milk or cool water. Do not scrub, wipe, or use any soap.</li>
        <li><strong>Re-insert if Possible:</strong> This is the best option. Gently push the tooth back into its socket. Hold it in place by biting down softly on a clean cloth or gauze.</li>
        <li><strong>Store Correctly if You Can't Re-insert:</strong> Place the tooth in a small container filled with milk. If milk is unavailable, use your own saliva (hold it in your cheek). Do not store it in plain water, as this can damage the root cells.</li>
        <li><strong>Call Us Immediately:</strong> Contact our emergency line straight away. Inform us you have a knocked-out tooth so we can prepare for your arrival.</li>
      </ol>

      <h2>Case 2: A Broken or Chipped Tooth</h2>
      <p>Whether it's a minor chip or a large fracture, a broken tooth needs urgent care from a dentist for a broken tooth in Bury or Manchester.</p>
      <ul>
          <li><strong>Rinse Your Mouth:</strong> Use warm salt water to clean the area.</li>
          <li><strong>Save the Fragments:</strong> If there are any large pieces of the broken tooth, save them and bring them with you.</li>
          <li><strong>Control Swelling:</strong> Apply a cold compress to the outside of your mouth, cheek, or lip to reduce swelling and ease pain.</li>
          <li><strong>Protect Your Mouth:</strong> If the remaining tooth edge is sharp, you can cover it with a piece of sugar-free gum or pharmacy-bought dental wax to prevent it from cutting your tongue or cheek.</li>
          <li><strong>Contact Us:</strong> For a chipped tooth emergency in Bolton or anywhere in Greater Manchester, call our clinic for a same-day appointment.</li>
      </ul>

      <blockquote>In any case of dental trauma, prompt action and professional evaluation are key. Your quick thinking can save your tooth. Call us now for immediate guidance.</blockquote>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default HandleBrokenKnockedOutToothPost;