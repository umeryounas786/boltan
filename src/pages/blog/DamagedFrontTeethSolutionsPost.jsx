import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Emergency Solutions for Damaged Front Teeth in Greater Manchester",
  description: "A damaged front tooth can shatter your confidence. Discover the immediate cosmetic solutions we offer, from bonding to temporary veneers, to restore your smile in a single visit.",
  author: "Dr. Chloe Davis",
  readTime: "8 min read",
  category: "Aesthetic Dentistry",
  imgSrc: "https://images.unsplash.com/photo-1606814893907-c2a0b1b1c345",
  imgAlt: "A person with a beautiful, confident smile, showcasing well-repaired front teeth.",
};

const faqs = [
    { question: "What is the fastest way to fix a chipped front tooth?", answer: "The fastest and most common method is dental bonding. In a single, painless visit, we can apply a tooth-coloured composite resin to the chip and sculpt it to perfectly restore your tooth's shape. You'll walk out with a complete smile." },
    { question: "My front tooth is severely broken. What are my emergency options?", answer: "If the break is severe, we will first ensure the tooth's nerve is safe. The immediate cosmetic solution is often a high-quality, custom-made temporary crown, which we can create and fit in the same emergency appointment. This protects the tooth and restores your appearance while a permanent crown is made." },
    { question: "Can you repair a broken veneer in an emergency?", answer: "Yes. For a chipped veneer, we can often smooth it or perform a small composite repair. If the veneer has come off intact, we may be able to re-bond it. For a fractured veneer, we can provide a temporary solution and plan for a replacement." },
    { question: "Will the repair on my front tooth look natural?", answer: "Absolutely. We are meticulous about aesthetics. For dental bonding in Manchester, we use a wide range of shades to perfectly match your natural teeth. Our temporary and permanent crowns are also custom-shaded for a seamless, beautiful result." },
    { question: "Is emergency cosmetic work expensive?", answer: "The cost depends on the procedure. Dental bonding is a very cost-effective solution for chips. A crown is a more significant investment but provides long-term strength for a badly broken tooth. We provide a clear breakdown of all costs before treatment." },
    { question: "How long does dental bonding last on a front tooth?", answer: "With good care, dental bonding can last for many years. It's important to avoid biting directly on very hard things (like ice or packaging) with the bonded tooth to prevent chipping." },
    { question: "What if the trauma has made my front tooth wobbly?", answer: "A loose adult tooth is a serious emergency. We will assess the damage and may need to splint the tooth to its neighbours. This involves temporarily bonding it to adjacent teeth to hold it stable while the ligaments heal." },
    { question: "My front tooth has turned dark after being hit. Can you fix it?", answer: "A dark tooth usually indicates nerve damage. The tooth will likely need root canal treatment. After that, we can address the colour with internal bleaching or cover the tooth with a veneer or crown to restore its natural appearance." },
    { question: "I have a big event tomorrow and just chipped my tooth. Can you help?", answer: "Yes! This is exactly the kind of emergency we are here for. Call us immediately. We specialize in providing rapid, aesthetic solutions like dental bonding precisely for these situations." },
    { question: "How do I choose between bonding and a veneer for a front tooth chip?", answer: "Bonding is excellent for small to medium chips and is a one-visit solution. A porcelain veneer is a more durable, stain-resistant, and premium option for larger chips or for achieving a perfect cosmetic result. We will discuss the pros and cons of each with you." }
];

const DamagedFrontTeethSolutionsPost = () => {
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
      
      <p className="lead">There are few dental emergencies more distressing than damaging a front tooth. A chip, crack, or fracture in your smile line can immediately impact your confidence and ability to interact with others. At our Greater Manchester clinic, we specialize in providing rapid and beautiful emergency solutions to restore your smile, often in a single visit.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>Solution 1: Dental Bonding - The Quick Fix for Chips</h2>
      <p>For small to medium-sized chips, dental bonding is the hero of emergency cosmetic dentistry. It's a fast, painless, and cost-effective procedure that delivers fantastic results in one appointment.</p>
      <p>The process involves applying a putty-like, tooth-coloured composite resin directly to the tooth. We then expertly sculpt and shape the resin to flawlessly replicate the missing part of your tooth. A special light hardens the material, and a final polish makes it indistinguishable from your natural enamel. For a chipped tooth emergency in Bolton or Manchester, this is often the ideal solution.</p>

      <h2>Solution 2: Emergency Veneer Repair and Temporary Solutions</h2>
      <p>If you have porcelain veneers and one gets damaged, we can help. A small chip might be smoothed out. If a veneer debonds but is intact, we can often re-bond it. If it's fractured, we can create a temporary composite veneer to restore your smile's appearance immediately while a new permanent veneer is crafted by our lab.</p>

      <h2>Solution 3: Temporary Crowns for Severe Fractures</h2>
      <p>When a front tooth suffers a major break, it needs more than just a patch-up; it needs full protection. This is where a crown comes in. In an emergency, our priority is a same-day solution. We will prepare the tooth and then fabricate a high-quality temporary crown in our clinic. This provides:</p>
      <ul>
        <li><strong>Instant Smile Restoration:</strong> You leave with a full, natural-looking tooth.</li>
        <li><strong>Protection:</strong> The temporary crown shields the vulnerable tooth from further damage.</li>
        <li><strong>Stability:</strong> It maintains the correct spacing for the permanent crown.</li>
      </ul>
      <p>This provides an immediate and aesthetic broken tooth repair in Manchester, giving you peace of mind while your permanent, perfectly matched porcelain crown is made.</p>

      <blockquote>A damaged front tooth demands immediate attention. We combine artistry with emergency dental science to give you back your smile without delay.</blockquote>
      
      <h2>What if the Tooth is Discoloured or Loose?</h2>
      <p>Trauma can sometimes cause a tooth to darken or become loose. A dark tooth may need root canal treatment followed by a veneer or crown to restore its colour. A loose tooth is a severe emergency that may require splinting—temporarily bonding it to the neighbouring teeth to hold it stable while the supporting ligaments heal.</p>

      <p>No matter the damage to your front tooth, there is an emergency solution. Don't hide your smile or wait in distress. Contact our clinic for immediate, expert cosmetic repair.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default DamagedFrontTeethSolutionsPost;