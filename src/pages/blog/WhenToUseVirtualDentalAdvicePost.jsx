import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Virtual Dental Advice: When You Can Avoid an In-Clinic Visit in Bolton & Bury",
  description: "Not every dental issue requires a trip to the clinic. Learn which common emergencies can be effectively managed with online dentist advice in Bolton and remote dental triage in Bury, saving you time and stress.",
  author: "Dr. Anya Sharma",
  readTime: "9 min read",
  category: "Virtual Care",
  imgSrc: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
  imgAlt: "A person relaxing at home on a couch while using their laptop, symbolizing the convenience of virtual advice.",
};

const faqs = [
    { question: "What is the main goal of remote dental triage in Bury?", answer: "The main goal is to accurately assess the severity of your dental problem. Triage helps us determine if you need immediate in-person care, if your issue can be managed with a prescription, or if simple home care advice is sufficient. It ensures you get the right level of care efficiently." },
    { question: "I have a mild, intermittent toothache. Is a virtual visit a good idea?", answer: "Yes, it's a perfect scenario. A virtual consultation allows us to discuss the nature of the pain, look for any visual clues like discoloration or swelling, and advise you on the next steps without you needing to come into the clinic unnecessarily." },
    { question: "Can you provide online dentist advice in Bolton for a lost filling?", answer: "Absolutely. We can visually assess the tooth, determine the risk of sensitivity or further damage, and advise you on how to manage it. We can also tell you if a temporary filling kit from a pharmacy is a suitable short-term solution and how urgently you need to book a repair." },
    { question: "My child chipped a tooth, but it doesn't seem to hurt. Should I book a virtual call?", answer: "Yes, this is an excellent use of teledentistry. We can look at the chip to see how severe it is and whether the nerve is likely exposed. We can then give you peace of mind and advise on whether a non-urgent visit for smoothing or bonding is needed." },
    { question: "What if I'm unsure if my situation is a 'true' emergency?", answer: "This is precisely why teledentistry is so valuable. Don't guess—get an expert opinion. A quick virtual call can prevent a minor issue from becoming a major one, or save you from a stressful, unnecessary trip to the clinic." },
    { question: "Can a virtual consultation help with denture problems?", answer: "Yes. If you have a sore spot from a rubbing denture or a small crack, we can often provide advice on adjustments or temporary solutions. We can assess the issue and schedule a proper repair or reline appointment if needed." },
    { question: "What situations are NOT suitable for a virtual visit?", answer: "Situations involving severe, uncontrollable bleeding, a suspected broken jaw, significant facial trauma from an accident, or swelling that is making it difficult to breathe or swallow. These require immediate in-person medical attention at A&E." },
    { question: "Is the advice I receive in a virtual consultation legally sound?", answer: "Yes. The virtual consultation is a formal medical appointment. Our dentists are fully registered and insured to provide remote advice and prescriptions. The consultation is documented in your patient record just like an in-person visit." }
];

const WhenToUseVirtualDentalAdvicePost = () => {
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
      
      <p className="lead">In the middle of a busy week, a dental issue can feel like a major disruption. But what if you could get expert advice without leaving your home or office? Teledentistry makes this possible, serving as a powerful tool for remote dental triage. Here’s a guide to situations where virtual dental advice can save you a trip to the clinic.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>Green Light: Scenarios Perfect for a Virtual Consultation</h2>
      <p>If you're in Bolton, Bury, or anywhere in Greater Manchester and experiencing one of the following, a virtual visit is an ideal first step:</p>
      <ul>
        <li><strong>Mild to Moderate Toothache:</strong> If the pain is present but not unbearable, a dentist can assess potential causes and advise on pain management or prescribe antibiotics if an infection is suspected.</li>
        <li><strong>A Chipped Tooth with No Pain:</strong> We can visually inspect the chip to ensure the nerve isn't exposed and advise if a non-urgent visit for cosmetic repair is needed.</li>
        <li><strong>Lost Filling or Crown:</strong> Our team can assess the tooth's vulnerability and guide you on using a temporary filling kit from a pharmacy until you can come in for a permanent fix.</li>
        <li><strong>Gum Swelling or Bleeding:</strong> We can help determine if it's simple gingivitis, a reaction to food, or the early sign of an abscess needing urgent care.</li>
        <li><strong>Post-Operative Questions:</strong> Have a question after an extraction or procedure? A quick video call can provide reassurance and instructions without another trip to the clinic.</li>
      </ul>

      <blockquote>Remote dental triage isn't about avoiding the dentist; it's about using technology to access expert care more efficiently.</blockquote>
      
      <h2>Yellow Light: Situations That May Still Need an In-Person Visit</h2>
      <p>A virtual call is still the best first step here, as it prepares us for your arrival:</p>
      <ul>
        <li><strong>Severe, Throbbing Toothache:</strong> While we can prescribe pain relief, this level of pain almost always indicates a problem (like a root canal) that requires hands-on treatment.</li>
        <li><strong>A Broken or Fractured Tooth:</strong> We need to see you in person to determine the extent of the break and perform a restoration.</li>
        <li><strong>Denture Issues:</strong> For sore spots or breakages, we'll likely need to see you to make physical adjustments or repairs.</li>
      </ul>

      <h2>Red Light: Go Directly to In-Person Emergency Care</h2>
      <p>Virtual advice is NOT a substitute for immediate, in-person care in these situations:</p>
      <ul>
        <li><strong>A Knocked-Out Tooth:</strong> Time is critical for reimplantation. Come to the clinic immediately.</li>
        <li><strong>Uncontrollable Bleeding:</strong> Go to A&E or an urgent care center.</li>
        <li><strong>Suspected Jaw Fracture:</strong> This requires hospital-level care.</li>
        <li><strong>Swelling That Affects Breathing or Swallowing:</strong> This is a life-threatening emergency; go to A&E immediately.</li>
      </ul>
      <p>By understanding when to use online dentist advice in Bolton and Bury, you can navigate dental issues with confidence, saving time and stress while ensuring you always get the appropriate level of care.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default WhenToUseVirtualDentalAdvicePost;