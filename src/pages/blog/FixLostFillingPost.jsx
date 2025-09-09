import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "How to Fix a Lost Filling at Home (and Why You Shouldn’t Wait)",
  description: "Lost a filling? Learn about temporary at-home fixes to protect your tooth and why it's crucial to see an emergency dentist immediately to prevent further damage.",
  author: "Dr. Chloe Davis",
  readTime: "6 min read",
  category: "First Aid",
  imgSrc: "https://images.unsplash.com/photo-1594394213447-a7c7b5241a8a",
  imgAlt: "A person looking closely into a mirror at their teeth, concerned about a lost filling.",
};

const faqs = [
    { question: "What can I use for a temporary filling at home?", answer: "You can buy temporary dental filling material from most pharmacies. These are typically zinc oxide-based pastes that you can place into the cavity yourself. This is only a very temporary measure to cover the exposed area and reduce sensitivity." },
    { question: "Is it safe to use sugar-free chewing gum as a temporary filling?", answer: "While some people suggest this as a last resort, it's not ideal. Gum can trap bacteria and doesn't create a good seal. A proper temporary filling kit from a pharmacy is a much safer and more effective option." },
    { question: "Why is a lost filling considered an emergency?", answer: "When a filling is lost, the sensitive inner layer of your tooth (dentin) is exposed. This makes the tooth vulnerable to bacteria, which can lead to rapid decay, infection of the nerve (requiring a root canal), or even fracture of the weakened tooth structure." },
    { question: "How do I use a temporary filling kit?", answer: "Read the instructions carefully. Generally, you'll take a small amount of the material, roll it into a ball, gently press it into the clean and dry cavity, and bite down to ensure it's not too high. It will harden over a short period." },
    { question: "How long will a temporary at-home filling last?", answer: "These kits are designed to last for a few days at most. They are not a permanent solution and are only meant to protect the tooth until you can get to an emergency dentist." },
    { question: "My tooth doesn't hurt after losing the filling. Do I still need to see a dentist?", answer: "Yes, absolutely. Lack of pain does not mean there is no problem. The tooth is still compromised and at high risk of infection and fracture. You must get it professionally repaired." },
    { question: "What should I do before applying a temporary filling?", answer: "Gently rinse your mouth with warm salt water to clean any food debris out of the cavity. Make sure the area is as dry as possible before applying the temporary material for it to stick properly." },
    { question: "Can I eat with a temporary filling?", answer: "Yes, but you should be very careful. Avoid chewing directly on the temporary filling and stay away from hard, sticky, or very chewy foods that could dislodge it." },
    { question: "What will the dentist do to fix it permanently?", answer: "The dentist will remove the temporary material, clean out the cavity thoroughly to remove any decay, and place a new, permanent filling. They will use modern, durable materials like tooth-coloured composite resin." },
    { question: "I lost my filling. How quickly should I see a dentist?", answer: "You should aim to see an emergency dentist within 24-48 hours. The sooner you get the tooth properly sealed and protected, the lower the risk of developing more serious and costly problems." }
];

const FixLostFillingPost = () => {
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
      
      <p className="lead">That moment of realization—a hard piece in your food that turns out to be a lost filling—can be jarring. Your tooth now feels strange and sensitive. While your first instinct might be to find a quick fix, it's crucial to understand what you can do at home and why calling an emergency dentist must be your top priority.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>The Temporary At-Home Solution: A Bridge to the Dentist</h2>
      <p>The main goal of an at-home fix is to temporarily cover the exposed, sensitive part of your tooth and prevent food from getting trapped in the cavity. The best way to do this is with a temporary dental filling kit, available at most pharmacies.</p>
      
      <p>These kits contain a zinc oxide-based paste that you can place into the cavity. This is far superior to using makeshift solutions like sugar-free gum, which can trap bacteria and doesn't provide a proper seal.</p>

      <blockquote>An at-home temporary filling is first aid for your tooth. It is not a cure. Professional dental treatment is essential.</blockquote>
      
      <h2>Why You Shouldn't Wait to See a Dentist</h2>
      <p>Even if the tooth doesn't hurt, a lost filling is a dental emergency for several reasons:</p>
      <ul>
        <li><strong>Exposure to Bacteria:</strong> The inner dentin layer of your tooth is now exposed. It's softer than enamel and much more susceptible to decay. Bacteria can quickly lead to a new, larger cavity.</li>
        <li><strong>Risk of Infection:</strong> If bacteria reach the nerve (pulp) of the tooth, it can cause a painful infection or abscess, which would then require a root canal treatment.</li>
        <li><strong>Structural Weakness:</strong> The filling was supporting the tooth structure. Without it, the remaining tooth is weaker and at a much higher risk of cracking or fracturing under normal chewing pressure.</li>
        <li><strong>Shifting Teeth:</strong> Over time, the teeth around the gap can start to shift, which can affect your bite and lead to other complications.</li>
      </ul>

      <h2>What to Do Now</h2>
      <ol>
        <li><strong>Call Us:</strong> Your first step should be to call our emergency dental clinic to schedule an appointment. We need to see you as soon as possible.</li>
        <li><strong>Keep it Clean:</strong> Gently rinse your mouth with warm salt water to keep the area clean.</li>
        <li><strong>Get a Temporary Kit:</strong> If you can't be seen immediately, visit a pharmacy for a temporary filling kit to protect the tooth.</li>
        <li><strong>Be Gentle:</strong> Avoid chewing on that side of your mouth until you've seen the dentist.</li>
      </ol>
      
      <p>Treating a lost filling is a simple, routine procedure for us, but ignoring it can turn a small problem into a major one. Protect your oral health by seeking prompt, professional care.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default FixLostFillingPost;