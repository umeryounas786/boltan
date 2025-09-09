import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Your Guide to Dental Emergencies: Symptoms, First Aid & When to Call for Help",
  description: "Understand the key signs of a dental emergency, learn effective first-aid tips to manage pain, and know exactly when to call an emergency dentist.",
  author: "Dr. Chloe Davis",
  readTime: "12 min read",
  category: "Patient Education",
  imgSrc: "https://images.unsplash.com/photo-1536856093144-884391745479",
  imgAlt: "A person looking concerned in a bathroom mirror, possibly due to a dental issue.",
};

const faqs = [
    { question: "What is the most common dental emergency?", answer: "Severe toothache is one of the most common reasons people seek emergency dental care. It's often a sign of an underlying infection or damage to the tooth's pulp." },
    { question: "How can I relieve toothache at night?", answer: "To relieve toothache at night, elevate your head with extra pillows to reduce blood flow to the head. Take over-the-counter painkillers like ibuprofen, and rinse with warm salt water to clean the area and reduce inflammation. Avoid very hot or cold foods." },
    { question: "Is a broken tooth always an emergency?", answer: "A broken tooth, especially a large fracture or one causing pain, sensitivity, or a sharp edge, should be seen by a broken tooth emergency dentist as soon as possible. Even small, painless chips should be evaluated to prevent further damage." },
    { question: "How do you fix a chipped tooth?", answer: "How to fix a chipped tooth depends on its severity. Minor chips can often be repaired with dental bonding, using a tooth-coloured resin. Larger chips may require a dental crown or veneer. Your emergency dentist will assess the best solution." },
    { question: "What should I do if I have a lost filling?", answer: "If you have a lost filling, avoid chewing on that side of your mouth. You can temporarily cover the exposed area with sugar-free chewing gum or an at-home temporary filling kit from a pharmacy. Contact an emergency dentist immediately, as the tooth is vulnerable to decay and sensitivity." },
    { question: "What are the key wisdom tooth pain remedies?", answer: "For wisdom tooth pain remedies, rinse with warm salt water, apply a cold compress to your cheek, and take over-the-counter anti-inflammatory painkillers. If pain is severe, accompanied by swelling or difficulty opening your mouth, contact an emergency dentist." },
    { question: "What are the dental abscess symptoms and treatment?", answer: "Dental abscess symptoms include severe, throbbing pain, facial swelling, fever, and a pimple-like bump on the gum. Treatment involves draining the abscess, eliminating the source of infection (often via root canal or extraction), and antibiotics. It's a serious emergency." },
    { question: "What are the signs you need emergency dentist help?", answer: "Signs you need emergency dentist help include severe, persistent toothache, facial swelling, uncontrollable bleeding, a knocked-out tooth, visible dental trauma (e.g., broken jaw), or difficulty breathing/swallowing due to a dental issue. If in doubt, always call." },
    { question: "What should I do if my child chips a tooth?", answer: "For a chipped tooth emergency in a child, rinse their mouth with warm water, apply a cold compress, and try to find the chipped fragment (store in milk or saliva). Contact a pediatric dental emergencies specialist immediately. Even small chips need assessment." },
    { question: "What's the difference between an emergency dentist vs urgent care?", answer: "An emergency dentist is specifically equipped and trained for immediate dental trauma, severe pain, and acute infections. Urgent care, while prompt, might be for less severe issues that can't wait for a routine appointment but aren't life-threatening." },
    { question: "When should I call emergency dentist services?", answer: "You should call emergency dentist services if you experience severe, unmanageable pain, facial swelling, a knocked-out tooth, significant trauma to your mouth, or uncontrollable bleeding. If your condition impacts your ability to eat, sleep, or function, call immediately." },
    { question: "What are my options for dental sedation emergency?", answer: "For dental sedation emergency, your dentist may offer options like nitrous oxide (laughing gas) or oral sedation to help manage anxiety and pain during urgent procedures. Discuss your anxiety with the dentist so they can make your visit as comfortable as possible." },
    { question: "How does a virtual dentist consultation UK work?", answer: "A virtual dentist consultation UK allows you to speak with a dentist remotely via video call. They can assess your symptoms, provide advice on first aid, determine the urgency, and even issue prescriptions for antibiotics or pain relief, potentially saving you an unnecessary trip." }
];

const EmergencyGuidePost = () => {
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
      
      <p className="lead">Dental emergencies can be sudden, painful, and alarming. Knowing what to look for, how to provide immediate first aid, and when to call an emergency dentist can make all the difference in saving a tooth and alleviating discomfort. This comprehensive guide will equip you with the knowledge to handle common dental crises calmly and effectively.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1563551385652-2a6a2d099736" />

      <h2>Recognizing the Signs: When to Call an Emergency Dentist</h2>
      <p>Not all dental issues require immediate emergency care, but some demand urgent attention. Here are the key signs you need emergency dentist help:</p>
      <ul>
        <li><strong>Severe, Persistent Toothache:</strong> A throbbing, unmanageable toothache, especially if it wakes you up at night (`how to relieve toothache at night`), is a classic sign of deep infection.</li>
        <li><strong>Facial or Gum Swelling:</strong> Swelling in your cheek, jaw, or a tender "pimple" on your gum indicates a `dental abscess symptoms and treatment`. This is serious and requires immediate drainage and antibiotics.</li>
        <li><strong>Broken or Chipped Tooth:</strong> Whether it's a `broken tooth emergency dentist` visit or a `chipped tooth emergency`, any fracture exposes the sensitive inner parts of the tooth to bacteria and further damage. Learn `how to fix a chipped tooth` temporarily.</li>
        <li><strong>Knocked-Out Tooth:</strong> A time-sensitive emergency. Acting fast can save the tooth.</li>
        <li><strong>Lost Filling or Crown:</strong> The underlying tooth is now vulnerable. `How to fix lost filling at home` is only a temporary measure until you can see a professional.</li>
        <li><strong>Bleeding That Won't Stop:</strong> Persistent bleeding from gums or after an injury is a serious sign.</li>
        <li><strong>Signs of Infection:</strong> Fever, general malaise, or pus draining from the mouth.</li>
        <li><strong>Limited Jaw Movement:</strong> Difficulty opening or closing your mouth, or severe pain when doing so.</li>
      </ul>

      <blockquote>When in doubt, always call your emergency dentist. It's better to be safe and get professional advice than to let a problem worsen.</blockquote>
      
      <h2>First Aid: What You Can Do Immediately</h2>
      <p>While you wait for your emergency appointment, these tips can help manage pain and prevent further damage:</p>
      <ul>
        <li><strong>For Toothache:</strong> Take over-the-counter pain relievers (like ibuprofen). Rinse with warm salt water. Avoid very hot or cold foods/drinks. Elevate your head to reduce pressure (`how to relieve toothache at night`).</li>
        <li><strong>For Broken/Chipped Tooth:</strong> Rinse with warm water. Apply a cold compress to your face if there's swelling. If sharp, cover the edge with sugar-free gum or dental wax. If you have the piece, save it.</li>
        <li><strong>For Lost Filling:</strong> Temporarily fill the cavity with a dental wax or a temporary filling kit from a pharmacy (`how to fix lost filling at home`). Avoid chewing on that side.</li>
        <li><strong>For Wisdom Tooth Pain:</strong> `wisdom tooth pain remedies` often involve warm salt water rinses and cold compresses. If pain is severe or accompanied by swelling, seek immediate dental care.</li>
        <li><strong>For Pediatric Emergencies:</strong> For `pediatric dental emergencies`, especially a `child chipped tooth emergency`, keep calm, clean the area, and call your dentist. If a permanent tooth is knocked out, try to reinsert it and get to the dentist immediately.</li>
      </ul>

      <h2>When to Seek Professional Help: Emergency Dentist vs. Urgent Care</h2>
      <p>Understanding the distinction between an `emergency dentist vs urgent care` can save you time and ensure you get the right help:</p>
      <ul>
        <li><strong>Emergency Dentist:</strong> For severe, immediate threats to your oral health or life, such as severe pain, facial swelling, knocked-out teeth, or uncontrollable bleeding. They are equipped to provide definitive treatment like extractions or starting root canals. When to call emergency dentist: when you are in severe, unmanageable pain or have visible trauma/infection.</li>
        <li><strong>Urgent Care:</strong> For issues that require prompt attention but are not life-threatening, like a lost filling without pain, a minor chip, or a dull ache. These can often be seen within 24-48 hours.</li>
      </ul>

      <p>Consider a `virtual dentist consultation UK` as a convenient first step. Many clinics offer this to assess your situation remotely and advise on the best course of action. If anxiety is a concern, discuss `dental sedation emergency` options with your dentist to ensure a comfortable experience.</p>

      <p>Your oral health is vital to your overall well-being. Don't ignore `signs you need emergency dentist` help. Prompt action can often prevent a small problem from becoming a major, costly, and painful one.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default EmergencyGuidePost;