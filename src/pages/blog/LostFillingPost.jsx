import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Lost a Filling or Crown in Bolton? Here’s Your Step-by-Step Guide",
  description: "Losing a filling or crown can be alarming. Follow our step-by-step guide on what to do next, including temporary fixes and why you need to see an emergency dentist.",
  author: "Dr. Chloe Davis",
  readTime: "6 min read",
  category: "Dental Repairs",
  imgSrc: "https://images.unsplash.com/photo-1606636660488-5276535544d3",
  imgAlt: "A dental crown and professional tools on a sterile tray, ready for a procedure.",
};

const faqs = [
    { question: "Why did my filling or crown fall out?", answer: "Restorations can come loose for several reasons: new decay forming underneath it, biting down on very hard or sticky food, trauma to the tooth, or simply the age of the restoration. The dental cement holding it in place can also wash out over time." },
    { question: "Is a lost filling or crown a dental emergency?", answer: "Yes. The underlying tooth structure is now exposed and vulnerable to decay, fracture, and sensitivity. You should see an emergency dentist as soon as possible, ideally within 48 hours, to prevent further damage." },
    { question: "What should I do with the crown if I find it?", answer: "If you have the crown, keep it in a safe place (like a small container or zip-lock bag) and bring it with you to your appointment. Do not try to re-glue it yourself with household adhesives like superglue, as this can damage the crown and your tooth." },
    { question: "How can I manage the pain or sensitivity?", answer: "You can take over-the-counter pain relievers like ibuprofen or paracetamol. Avoid chewing on that side of your mouth. Rinsing with warm salt water can help keep the area clean. You can also apply a small amount of clove oil with a cotton swab for temporary relief." },
    { question: "Is there anything I can use to cover the tooth temporarily?", answer: "Yes, you can buy temporary dental cement or filling material from most pharmacies. This can be used to cover the exposed tooth or even temporarily stick a crown back in place. This is only a very short-term solution until you can see us." },
    { question: "Can the original crown be re-cemented?", answer: "Often, yes. If the crown still fits well and both the crown and the underlying tooth are undamaged and free of decay, we can simply re-cement it for you. This is the quickest and most cost-effective solution." },
    { question: "What if the old crown can't be used?", answer: "If the crown is damaged, doesn't fit anymore, or there is decay on the tooth underneath, you will need a new crown. We will need to prepare the tooth and take a new impression to have a new crown custom-made." },
    { question: "What happens if I just leave it?", answer: "Leaving the tooth exposed is a bad idea. The tooth can decay rapidly, fracture, or shift position, which could affect your bite and require more extensive and expensive treatment (like a root canal or even extraction) later on." },
    { question: "How do you replace a lost filling?", answer: "The process is straightforward. We will clean out the area, remove any decay, and place a new filling. We use modern, tooth-coloured composite materials that provide a strong and aesthetic result." },
    { question: "How can I prevent this from happening again?", answer: "Maintain excellent oral hygiene by brushing and flossing daily, and attend regular dental check-ups. Avoid chewing on extremely hard items like ice or hard candy. If you grind your teeth at night, ask us about a custom night guard to protect your restorations." }
];

const LostFillingPost = () => {
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
      
      <p className="lead">You're eating a meal, and suddenly you feel something hard in your food that definitely shouldn't be there. A moment of panic reveals a lost filling or a dislodged crown. This situation can be unsettling, but by taking the right steps, you can protect your tooth and ensure a simple fix.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>Your Immediate Action Plan</h2>
      <p>As soon as you realize a restoration is missing, follow these steps. Your quick response is key to preventing further complications.</p>

      <ol>
        <li><strong>Remove it from Your Mouth:</strong> Carefully take the crown or filling out of your mouth to avoid swallowing or inhaling it.</li>
        <li><strong>Keep the Crown Safe:</strong> If you have a crown, rinse it off and store it in a safe, memorable place (like a small plastic bag or container). Bring it to your dental appointment. We may be able to re-cement it.</li>
        <li><strong>Call Us Immediately:</strong> Contact our emergency dental clinic in Bolton. Explain what has happened. We need to see you as soon as possible to assess the tooth and prevent damage.</li>
        <li><strong>Manage Sensitivity:</strong> The exposed tooth tissue can be sensitive to temperature and air. Avoid chewing on that side. You can purchase temporary dental cement from a pharmacy to cover the area for short-term relief.</li>
      </ol>

      <blockquote>Do not use superglue or any other household adhesive to try and fix a crown yourself. This can damage your tooth and the restoration, making a professional repair impossible.</blockquote>
      
      <h2>What to Expect at Your Emergency Appointment</h2>
      <p>When you visit us, we will first assess the situation to determine the best course of action.</p>
      
      <h3>If You Lost a Filling:</h3>
      <p>This is typically a straightforward fix. We will clean any decay or debris from the cavity and place a new, durable filling. We use high-quality, tooth-coloured composite materials that bond directly to the tooth, creating a strong and aesthetically pleasing result.</p>

      <h3>If You Lost a Crown:</h3>
      <p>There are a couple of potential outcomes:</p>
      <ul>
        <li><strong>Re-cementing the Crown:</strong> If the crown and the underlying tooth are both in good condition and the crown still fits properly, we can often just re-cement it back into place. This is the ideal scenario.</li>
        <li><strong>Needing a New Crown:</strong> If the original crown is damaged, no longer fits, or if there is new decay on the tooth, a new crown will be necessary. We will prepare the tooth and take an impression to have a new crown fabricated by our dental lab. A temporary crown will be placed to protect your tooth in the meantime.</li>
      </ul>
      
      <p>Losing a restoration can be a nuisance, but it doesn't have to be a major problem. By seeking prompt professional care, you protect the health of your tooth and prevent more complex and costly issues down the line. If you're in Bolton or the surrounding area and have lost a filling or crown, call us now.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default LostFillingPost;