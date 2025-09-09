import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "What to Do If Your Child Knocks Out a Tooth: A Parent's First Aid Guide",
  description: "A knocked-out tooth is a time-sensitive emergency. Learn the critical steps to take immediately to give your child the best chance of saving their tooth. Your quick action is key.",
  author: "Dr. Chloe Davis",
  readTime: "8 min read",
  category: "Pediatric Care",
  imgSrc: "https://images.unsplash.com/photo-1594495894542-a46cc73e081a",
  imgAlt: "A parent gently comforting their child, representing care during an emergency.",
};

const faqs = [
    { question: "What is the single most important thing to do if my child knocks out a permanent tooth?", answer: "Act FAST. The chances of saving the tooth are highest if it is reimplanted within 30-60 minutes. Find the tooth, handle it correctly, and get to an emergency pediatric dentist in Manchester immediately." },
    { question: "How should I handle the knocked-out tooth?", answer: "Pick it up by the crown (the white, chewing part), NOT the root. Touching the root can damage the cells needed for reattachment. If it's dirty, rinse it gently with milk or cool water for no more than 10 seconds. Do not scrub it or use soap." },
    { question: "Should I try to put the tooth back in the socket myself?", answer: "Yes, if it is a permanent (adult) tooth. This is the best place for it. Gently push it back into place and have your child bite on a clean cloth or handkerchief to hold it steady. If you can't, proceed to the next step immediately." },
    { question: "What if I can't get the tooth back in? How do I transport it?", answer: "Place the tooth in a small container of milk. If milk isn't available, use your child's saliva (have them spit in a container). Do NOT transport it dry or in water. The goal is to keep the root cells alive." },
    { question: "What about a knocked out baby tooth in Manchester? Should I reimplant it?", answer: "NO. Never try to reimplant a knocked-out baby tooth. Doing so can damage the permanent tooth that is developing in the jaw underneath. Find the tooth to ensure it wasn't swallowed, and call us for an appointment to assess the area." },
    { question: "Will my child be in a lot of pain?", answer: "There will be some initial shock and pain. You can give them age-appropriate pain relief like children's paracetamol or ibuprofen. A cold compress on their cheek will also help with pain and swelling." },
    { question: "What will the dentist do to save the tooth?", answer: "The dentist will numb the area, clean the socket, and carefully reimplant the tooth if you haven't already. They will then use a flexible splint to stabilize the tooth by attaching it to the neighboring teeth for a few weeks while it heals." },
    { question: "What happens if we can't save the tooth?", answer: "If the tooth cannot be saved, we will discuss future options for replacing it, such as a dental implant or bridge, once your child is old enough. The priority is to manage the space to prevent other teeth from shifting." },
    { question: "How can I find a dentist for my child's tooth injury in Bolton or Bury?", answer: "Our clinic serves the entire Greater Manchester area, including Bolton and Bury. Call our emergency line immediately. We are equipped to handle pediatric dental trauma and prioritize these urgent cases." },
    { question: "Is there anything I can do to prevent this from happening?", answer: "While accidents are unavoidable, the best prevention for sports-related injuries is a custom-fitted mouthguard. It provides a crucial layer of protection for your child's teeth during physical activities." }
];

const WhatToDoIfChildKnocksOutToothPost = () => {
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
      
      <p className="lead">A knocked-out tooth (avulsed tooth) is one of the most serious dental emergencies for a child. It's a frightening experience, but your calm and swift actions can make the difference between losing and saving the tooth. This guide provides the critical first-aid steps you need to know.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>Permanent Tooth vs. Baby Tooth: A Critical Difference</h2>
      <p>The first thing to determine is whether the knocked-out tooth is a primary (baby) tooth or a permanent (adult) tooth. The advice is very different for each.</p>
      <ul>
        <li><strong>Knocked-Out Baby Tooth:</strong> DO NOT attempt to put it back in. You could damage the permanent tooth developing underneath.</li>
        <li><strong>Knocked-Out Permanent Tooth:</strong> This is a time-critical emergency. Follow the steps below immediately.</li>
      </ul>

      <blockquote>For a knocked-out permanent tooth, the first 30-60 minutes are the 'golden hour' for saving it. Act fast.</blockquote>
      
      <h2>Step-by-Step First Aid for a Knocked-Out PERMANENT Tooth</h2>
      <p>If your child has knocked out an adult tooth, follow these steps precisely:</p>
      <ol>
        <li><strong>Find the Tooth & Handle it Correctly:</strong> Pick the tooth up by the crown (the white part), not the root.</li>
        <li><strong>Clean it Gently (If Needed):</strong> If the tooth is dirty, rinse it briefly (10 seconds max) with milk or cool water. Do not scrub, wipe, or use soap.</li>
        <li><strong>Replant the Tooth (If Possible):</strong> This is the best step. Gently push the tooth back into its socket. Have your child hold it in place by biting down on a clean cloth.</li>
        <li><strong>Store it Properly:</strong> If you cannot replant it, place the tooth in a small container of milk. Saliva is the next best option. Do not use water.</li>
        <li><strong>Call an Emergency Pediatric Dentist in Manchester Immediately:</strong> Contact our clinic right away. We will prepare for your arrival and provide urgent care.</li>
      </ol>

      <h2>What to Do for a Knocked-Out BABY Tooth</h2>
      <p>While you should not reimplant a knocked out baby tooth in Manchester or anywhere else, it's still an emergency. Find the tooth to ensure it hasn't been swallowed. Control any bleeding with gentle pressure from a clean cloth. Contact our clinic for an urgent appointment. We need to assess the area for other damage and determine if a space maintainer is needed to ensure adult teeth erupt correctly.</p>
      <p>No matter the situation, our team is here to provide expert, compassionate care for your child's tooth injury in Bolton, Bury, and across Manchester. Your quick thinking combined with our expertise gives your child's smile the best possible future.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default WhatToDoIfChildKnocksOutToothPost;