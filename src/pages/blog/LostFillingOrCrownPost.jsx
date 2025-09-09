import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Lost a Filling or Crown? Here’s Why You Shouldn’t Wait",
  description: "Losing a filling or crown exposes your tooth to risk. Learn why this is an urgent dental issue and the importance of getting an urgent crown repair or new filling in Manchester.",
  author: "Dr. Anya Sharma",
  readTime: "7 min read",
  category: "Restorations",
  imgSrc: "https://images.unsplash.com/photo-1594394213447-a7c7b5241a8a",
  imgAlt: "A person looking at their smile in a mirror with a concerned expression.",
};

const faqs = [
    { question: "Why is a lost filling or crown a dental emergency?", answer: "Your filling or crown was protecting a compromised tooth. Without it, the tooth is structurally weak and exposed to bacteria, temperature changes, and pressure. Waiting can lead to infection, fracture, or the need for more complex treatment like a root canal." },
    { question: "My tooth doesn't hurt. Do I still need to see a dentist?", answer: "Yes, absolutely. Pain is not a reliable indicator of a problem. The tooth is vulnerable, and decay can progress rapidly without you feeling it until it's too late. Prompt action prevents more serious issues." },
    { question: "I lost my crown. Can it be re-used?", answer: "Sometimes, yes. If the crown is intact and the underlying tooth is healthy, we can often re-cement it. Bring the crown with you. However, if the tooth underneath has decayed, a new crown will be needed." },
    { question: "What should I do with the crown I found?", answer: "Keep it safe in a small container and bring it to your appointment. You can try to temporarily place it back on the tooth using temporary dental cement from a pharmacy, but do not use superglue." },
    { question: "How quickly do I need to replace a lost filling in Manchester?", answer: "You should aim to see a dentist within 24-48 hours. The quicker you act to replace a lost filling in Manchester, the better you protect the tooth from decay and fracture, saving you time and money in the long run." },
    { question: "What is the process for an urgent crown repair in Bolton?", answer: "For an urgent crown repair in Bolton, we will first assess the tooth and the crown. If it can be re-cemented, we'll do that in one visit. If a new crown is needed, we'll place a temporary crown to protect the tooth while the permanent one is made." },
    { question: "What can I do for sensitivity before my appointment?", answer: "Avoid chewing on that side. Steer clear of very hot, cold, or sugary foods. You can cover the exposed area with temporary filling material from a pharmacy to reduce sensitivity." },
    { question: "Can I use sugar-free gum to plug the hole?", answer: "This is a last resort and not recommended. While it can temporarily cover the area, it doesn't create a good seal and can trap food and bacteria. A proper temporary filling kit is a much better and safer option." },
    { question: "What happens if I wait too long?", answer: "Waiting can cause the tooth to decay further, potentially leading to a painful abscess requiring a root canal. The tooth could also fracture, making it unrestorable and needing extraction. Neighboring teeth may also shift, complicating future treatment." },
    { question: "How much will it cost to fix my lost crown or filling?", answer: "The cost depends on the solution. Re-cementing a crown or placing a simple filling is less expensive than needing a new crown or root canal treatment. Acting quickly is the most cost-effective strategy." }
];

const LostFillingOrCrownPost = () => {
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
      
      <p className="lead">It often happens unexpectedly while eating—a lost filling or a dislodged crown. You might not feel any pain, leading you to believe it's not a big deal. However, this is a deceptive situation. A lost restoration is a true dental emergency that requires prompt attention to avoid serious consequences.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>Why It's an Emergency: The Tooth is Exposed</h2>
      <p>A filling or crown isn't just cosmetic; it's a protective seal and structural support for a tooth that has already been weakened by decay or trauma. When that protection is gone, the tooth is left vulnerable to a host of new problems:</p>
      <ul>
        <li><strong>Structural Weakness:</strong> The remaining tooth structure is fragile and can easily fracture under normal chewing forces. A small problem can quickly become a big one, potentially leading to an unsalvageable tooth.</li>
        <li><strong>Bacterial Invasion:</strong> The exposed inner layers of the tooth (dentin) are softer and more porous than enamel. Bacteria can penetrate quickly, leading to rapid decay deep inside the tooth.</li>
        <li><strong>Nerve Damage and Infection:</strong> If decay reaches the tooth's nerve (pulp), it can cause a severe infection or abscess. This results in intense pain and requires more complex treatment, such as a root canal.</li>
        <li><strong>Shifting Teeth:</strong> The gap left by the restoration can allow adjacent and opposing teeth to drift out of position, which can affect your bite and complicate future treatment.</li>
      </ul>

      <blockquote>Pain is a poor indicator of a dental problem. A painless, exposed tooth is a ticking time bomb. Seeking immediate care is crucial.</blockquote>
      
      <h2>What to Do Immediately</h2>
      <ol>
        <li><strong>Call for an Appointment:</strong> Your first and most important step is to call us. Explain that you've lost a filling or crown so we can schedule an urgent appointment for you.</li>
        <li><strong>Save the Crown:</strong> If a crown came off, keep it in a safe, clean container and bring it with you. Do not try to glue it back in with household adhesives.</li>
        <li><strong>Keep the Area Clean:</strong> Gently rinse your mouth with warm salt water to dislodge any food particles.</li>
        <li><strong>Manage Sensitivity:</strong> If the tooth is sensitive, avoid chewing on that side and steer clear of very hot, cold, or sweet foods. You can use over-the-counter temporary filling material from a pharmacy to cover the exposed area.</li>
      </ol>
      
      <h2>Your Treatment Options</h2>
      <p>When you come in for an urgent crown repair in Bolton or to replace a lost filling in Manchester, we will assess the situation and recommend the best course of action:</p>
      <ul>
          <li><strong>New Filling:</strong> If a filling was lost, we will clean the cavity and place a new, durable restoration.</li>
          <li><strong>Re-cementing a Crown:</strong> If the crown and tooth are both in good condition, we can often simply re-cement it in place.</li>
          <li><strong>New Crown:</strong> If the original crown is damaged or there is new decay on the tooth, a new crown will be necessary. We will place a temporary crown to protect the tooth in the meantime.</li>
      </ul>
      <p>Don't delay. Acting fast is the key to a simple, effective, and cost-efficient solution. Contact us today to protect your tooth.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default LostFillingOrCrownPost;