import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Facial Swelling & Tooth Infection: What to Do Before You See a Dentist",
  description: "Facial swelling due to a tooth infection is a serious sign. Learn immediate steps to manage symptoms and why seeking prompt emergency dental care in Manchester is crucial.",
  author: "Dr. Anya Sharma",
  readTime: "7 min read",
  category: "First Aid",
  imgSrc: "https://images.unsplash.com/photo-1629904853716-f0bc54eea48d",
  imgAlt: "A person with noticeable facial swelling, indicating a dental infection.",
};

const faqs = [
    { question: "Why is facial swelling from a tooth infection dangerous?", answer: "Facial swelling means the infection is spreading beyond the tooth and bone. If it spreads to areas like the eye, neck, or under the tongue, it can become life-threatening by blocking airways or affecting vital organs. It requires immediate medical attention." },
    { question: "What are the common causes of facial swelling from a tooth?", answer: "The most common cause is an untreated dental abscess, which stems from a severe tooth infection (decay, crack, trauma) or advanced gum disease. The pus from the infection tries to find a path out, causing swelling in surrounding tissues." },
    { question: "Should I apply heat or cold to the swelling?", answer: "Apply a cold compress (ice pack wrapped in cloth) to the outside of your cheek for 15-20 minutes at a time. This can help reduce swelling and pain. Do NOT apply heat, as it can draw the infection further into your tissues and worsen the swelling." },
    { question: "Can I take antibiotics without seeing a dentist?", answer: "No. While antibiotics are often part of the treatment for a spreading infection, they are not a cure. They help control the infection's spread but don't eliminate its source. Only a dentist can diagnose and treat the root cause. Self-medicating can mask symptoms and delay proper treatment." },
    { question: "What pain relief can I take for a swollen face due to dental emergency?", answer: "Over-the-counter anti-inflammatory painkillers like ibuprofen are generally effective. Always follow dosage instructions. Avoid painkillers that are acidic (like aspirin directly on the gum)." },
    { question: "What are the signs the infection is spreading rapidly?", answer: "Rapidly increasing swelling, difficulty swallowing or breathing, fever, chills, increased pain, or swelling extending to the eye or neck are all signs of a rapidly spreading and dangerous infection. Seek emergency medical attention (A&E) if these occur." },
    { question: "How is infected tooth treatment in Bury different for a swollen face?", answer: "If facial swelling is present, the priority for infected tooth treatment in Bury will be to drain the infection quickly. This might involve an incision to release pus, followed by addressing the tooth itself (root canal or extraction) and prescribing antibiotics. The focus is on controlling the active infection." },
    { question: "What if the swelling goes down on its own? Is the problem gone?", answer: "No. If swelling reduces or disappears, it often means the infection has found a way to drain, either into your mouth or internally. The source of the infection is still present and will cause issues again. You still need an urgent dental assessment for the underlying problem." },
    { question: "Can a gum infection urgent care be provided without surgery?", answer: "Many gum infections (periodontal abscesses) can be treated by deep cleaning (scaling and root planing) around the affected tooth to remove bacteria and calculus, often combined with antibiotics. Surgery is usually reserved for more advanced cases." },
    { question: "How quickly should I seek dental care for facial swelling?", answer: "Immediately. Facial swelling from a tooth infection is a serious red flag. Call for emergency dental care in Manchester as soon as you notice any swelling, even if it's small or painless. Early intervention can prevent severe complications." }
];

const FacialSwellingToothInfectionPost = () => {
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
      
      <p className="lead">Finding your face swollen due to a tooth infection is a truly alarming experience. This isn't just a cosmetic issue; it's a critical sign that an infection is spreading and requires immediate attention. Knowing what to do before you can see an emergency dentist in Manchester can help manage symptoms and prevent severe complications.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>Understanding the Danger of Facial Swelling</h2>
      <p>Facial swelling indicates that a dental infection (often an abscess) has breached the confines of your jawbone and is spreading into the soft tissues of your face and potentially your neck. If left untreated, this infection can lead to:</p>
      <ul>
        <li><strong>Airway Obstruction:</strong> Swelling can extend to the throat, making it difficult or impossible to breathe and swallow. This is a life-threatening medical emergency.</li>
        <li><strong>Spread to Other Body Parts:</strong> The infection can spread to the eyes, brain, or even lead to a widespread systemic infection (sepsis).</li>
        <li><strong>Bone Damage:</strong> Prolonged infection can cause significant destruction of the jawbone.</li>
      </ul>
      <blockquote>Facial swelling from a tooth infection is NOT a symptom to watch; it's a critical signal to act immediately.</blockquote>

      <h2>Immediate Steps to Take (Before Seeing a Dentist)</h2>
      <p>While you MUST contact an emergency dental professional immediately, these steps can help manage the situation temporarily:</p>
      <ol>
        <li><strong>Call Your Emergency Dentist:</strong> This is the most crucial step. Clearly explain that you have facial swelling. This will prioritize your case.</li>
        <li><strong>Apply a Cold Compress:</strong> Place an ice pack or a bag of frozen vegetables wrapped in a thin cloth on the outside of your swollen cheek for 15-20 minutes, then remove for 20 minutes. Repeat this cycle. Cold helps reduce swelling and numb the pain. **DO NOT APPLY HEAT.** Heat can worsen the spread of infection.</li>
        <li><strong>Elevate Your Head:</strong> If lying down, try to keep your head elevated with extra pillows. This can help reduce blood flow and pressure to the swollen area.</li>
        <li><strong>Take Over-the-Counter Painkillers:</strong> Ibuprofen (an anti-inflammatory) is generally most effective for swelling and pain. Always follow dosage instructions.</li>
        <li><strong>Rinse with Warm Salt Water:</strong> Gently rinse your mouth with a solution of warm water and a half-teaspoon of salt. This can help cleanse the area and draw out some of the infection.</li>
      </ol>

      <h2>When to Go to A&E (Accident & Emergency)</h2>
      <p>While an emergency dentist is equipped for infected tooth treatment in Bury and Manchester, sometimes the severity of the swelling requires hospital attention. Go to A&E immediately if you experience:</p>
      <ul>
        <li>Rapidly increasing swelling.</li>
        <li>Difficulty breathing or swallowing.</li>
        <li>Swelling extending to your eye or neck.</li>
        <li>Fever and chills, indicating a more widespread infection.</li>
        <li>Severe, unmanageable pain despite medication.</li>
      </ul>

      <p>Whether it's an abscess tooth pain relief in Bolton, gum infection urgent care, or a full-blown dental abscess emergency treatment in Manchester, prompt action is key. Do not delay seeking professional help. Your health and safety are paramount.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default FacialSwellingToothInfectionPost;