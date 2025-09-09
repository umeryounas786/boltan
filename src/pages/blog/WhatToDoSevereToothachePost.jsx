import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "What to Do if You Have Severe Toothache Before Seeing a Dentist",
  description: "Agonizing tooth pain? Learn immediate steps you can take at home to manage severe toothache before you can get to an emergency dentist in Manchester or Bolton.",
  author: "Dr. Anya Sharma",
  readTime: "7 min read",
  category: "First Aid",
  imgSrc: "https://images.unsplash.com/photo-1579621970795-87facc2f976d",
  imgAlt: "A person holding their jaw in pain, symbolizing severe toothache.",
};

const faqs = [
  { question: "What's the best over-the-counter painkiller for a toothache?", answer: "Non-steroidal anti-inflammatory drugs (NSAIDs) like ibuprofen are generally effective for dental pain, as they reduce inflammation. Paracetamol can also help. Always follow dosage instructions and consult a pharmacist if unsure." },
  { question: "Can I use ice for a toothache?", answer: "Yes, applying a cold pack to the outside of your cheek, near the affected area, can help reduce swelling and numb the pain. Do not apply ice directly to the tooth." },
  { question: "Is a salt water rinse really effective?", answer: "Absolutely. Rinsing with warm salt water can help dislodge food particles, cleanse the area, and reduce inflammation. It's a simple, effective way to maintain oral hygiene temporarily and provide some relief." },
  { question: "Should I apply aspirin directly to the tooth or gum?", answer: "No, never do this! Aspirin is acidic and can burn your gum tissue, causing more harm than good. Aspirin should only be taken orally as directed." },
  { question: "What if there's a visible hole in my tooth?", answer: "If you have a cavity or lost filling, you can try to gently pack a small piece of sugar-free chewing gum or a temporary dental filling material (available at pharmacies) into the hole. This can prevent further irritation until you see a dentist." },
  { question: "Can I use clove oil for severe tooth pain relief?", answer: "Clove oil contains eugenol, a natural anaesthetic. You can apply a small amount to a cotton ball and place it on the affected tooth or gum. Use sparingly, as too much can irritate the tissues." },
  { question: "How can I sleep with a severe toothache?", answer: "Elevating your head with extra pillows can reduce blood pressure to the painful area, which may lessen throbbing. Take painkillers before bed and avoid lying flat. A cold compress on your cheek might also help." },
  { question: "When should I stop trying home remedies and call an emergency dentist?", answer: "If your pain is severe, persistent, accompanied by swelling, fever, or difficulty breathing/swallowing, seek immediate professional help. Home remedies are only for temporary relief until you can see an emergency dentist in Manchester." },
  { question: "How quickly can I get an emergency dental appointment in Bolton?", answer: "Our clinic is set up for rapid response. We prioritize dental emergencies and aim to see patients in Bolton or Manchester on the same day, often within hours. Call us as soon as possible." },
  { question: "Will my toothache treatment in Bury be expensive?", answer: "The cost of emergency toothache treatment in Bury or Manchester starts with a consultation fee. Any further treatment costs will be discussed transparently after diagnosis. We aim to provide effective solutions that fit your budget." }
];

const WhatToDoSevereToothachePost = () => {
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
      
      <p className="lead">Severe toothache can strike at any time, leaving you in agonizing pain and desperately searching for relief. While no home remedy can replace professional dental treatment, there are steps you can take to manage the pain and discomfort before you can get to an emergency dentist in Manchester or Bolton. Follow these guidelines to find some quick pain relief during a dental emergency.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>1. Clean the Area Thoroughly</h2>
      <p>Gently brush and floss around the painful tooth to remove any trapped food particles that might be aggravating the issue. Sometimes, a simple piece of food stuck between teeth can cause surprising discomfort.</p>

      <h2>2. Rinse with Warm Salt Water</h2>
      <p>Dissolve half a teaspoon of salt in a glass of warm water. Swish the solution around your mouth for at least 30 seconds, then spit it out. Repeat several times. This acts as a natural disinfectant, reduces inflammation, and can help dislodge debris.</p>

      <h2>3. Use Over-the-Counter Painkillers</h2>
      <p>Ibuprofen (an NSAID) is generally highly effective for dental pain as it reduces inflammation. Paracetamol can also be used. Always follow the dosage instructions on the packaging. Do NOT place aspirin directly on the tooth or gum, as it can cause chemical burns.</p>

      <h2>4. Apply a Cold Compress</h2>
      <p>Place an ice pack or a bag of frozen vegetables wrapped in a cloth on the outside of your cheek, near the affected area, for 15-20 minutes at a time. This can help to numb the pain and reduce any swelling.</p>

      <h2>5. Elevate Your Head While Sleeping</h2>
      <p>If the pain is worse when lying down, try sleeping with your head elevated on extra pillows. This can help reduce blood flow and pressure to the painful area, potentially easing the throbbing sensation.</p>

      <h2>6. Avoid Trigger Foods and Drinks</h2>
      <p>Stay away from very hot, cold, sweet, or acidic foods and drinks, as these can exacerbate sensitivity and pain. Chew on the opposite side of your mouth if possible.</p>

      <h2>7. Consider Temporary Measures for Cavities/Lost Fillings</h2>
      <p>If you have a visible cavity or a lost filling, you can gently pack a small piece of sugar-free chewing gum or a temporary dental filling material (available at most pharmacies) into the hole. This can protect the exposed area from sensitivity.</p>

      <blockquote>These steps are for temporary severe tooth pain relief in Manchester or Bolton. They are not a cure. You MUST contact an emergency dentist for proper diagnosis and treatment.</blockquote>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default WhatToDoSevereToothachePost;