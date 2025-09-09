import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "A&E for Tooth Pain? Why an Emergency Dentist is Always Your Best Choice",
  description: "When faced with severe tooth pain, many wonder whether to go to A&E or a dentist. Learn why a hospital is ill-equipped for dental issues and why an emergency dentist is vital.",
  author: "Dr. Ben Carter",
  readTime: "7 min read",
  category: "Public Information",
  imgSrc: "https://images.unsplash.com/photo-1586773860414-72476c3cce48",
  imgAlt: "The bright red sign for a hospital's Accident & Emergency department.",
};

const faqs = [
    { question: "What can a hospital A&E actually do for tooth pain?", answer: "A&E departments are not staffed by dentists and do not have dental equipment. They can provide pain relief (like painkillers) and, if there's a visible infection or swelling, they may prescribe antibiotics. However, they cannot diagnose the dental cause or provide any treatment to fix the underlying problem." },
    { question: "Why is going to A&E a waste of time for a dental problem?", answer: "Because they cannot treat the source of the pain, you will be told to see a dentist anyway. You will likely endure a long wait only to be given a temporary solution, meaning you still need to book and attend a separate dental appointment." },
    { question: "When SHOULD I go to A&E for a mouth-related issue?", answer: "You should go to A&E for severe trauma to the face or jaw (like a suspected fracture), uncontrollable bleeding that doesn't stop with pressure, or swelling around the throat or eye that is making it difficult to breathe or see. These are medical emergencies." },
    { question: "Can an emergency dentist do everything A&E can do for pain?", answer: "Yes, and much more. We can provide pain relief and antibiotics just like a hospital, but crucially, we can also diagnose the problem with X-rays and provide definitive treatment, such as starting a root canal, extracting a tooth, or dressing a fracture." },
    { question: "Will an emergency dentist cost more than A&E?", answer: "While NHS A&E is free at the point of use, it won't solve your problem. You'll still have to pay for the subsequent dental visit. Seeing an emergency dentist directly is more cost-effective in the long run as it combines diagnosis and treatment in one place, preventing the issue from worsening and requiring more expensive care." },
    { question: "My face is swollen. Is that a dental or medical emergency?", answer: "If the swelling is localized around a tooth or jaw, start with an emergency dentist. We can drain abscesses and treat the infection. If the swelling is spreading rapidly and affecting your breathing or vision, go to A&E immediately." },
    { question: "Do emergency dentists have access to strong painkillers?", answer: "Yes. In addition to prescribing medication, we can administer a local anesthetic to completely numb the painful area, providing immediate and profound relief that oral painkillers cannot match." },
    { question: "I have a toothache late at night. Is A&E my only option?", answer: "No. Our emergency dental clinic has a 24/7 on-call service. You can call us any time for advice. If your situation is urgent, our on-call dentist can arrange to meet you at the clinic for treatment, which is a far better option than waiting in A&E." },
    { question: "Can A&E pull a tooth?", answer: "No. Medical doctors at A&E are not trained or equipped to perform dental extractions. This procedure can only be done safely by a qualified dentist with the proper instruments and anesthetic." },
    { question: "What is the key takeaway when choosing where to go?", answer: "It's simple: for any problem inside your mouth related to teeth or gums, see a dentist. For major facial trauma or medical complications like breathing difficulties, go to A&E. Choosing the right service gets you the right care, faster." }
];

const DentistVsAEPost = () => {
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
      
      <p className="lead">In the middle of the night, you're awakened by a throbbing, unbearable toothache. Your first instinct might be to head to the nearest hospital A&E department. However, for almost all dental emergencies, this is the wrong choice—one that can lead to wasted time, frustration, and unresolved pain.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1588268393007-068bc70a443d" />

      <h2>The Critical Difference: Medical vs. Dental Care</h2>
      <p>Hospital A&E departments are designed to handle medical emergencies. They are staffed by brilliant doctors and nurses who can set broken bones, stitch wounds, and treat life-threatening conditions. What they are not, however, are dentists. They lack the specific training, diagnostic tools, and equipment needed to treat dental problems.</p>

      <blockquote>A&E can only treat your symptoms, not the cause. An emergency dentist treats the cause.</blockquote>
      
      <h2>What Happens When You Go to A&E for Tooth Pain?</h2>
      <p>If you go to A&E with a dental issue, you can expect the following:</p>
      <ol>
        <li><strong>A Long Wait:</strong> Dental problems are triaged as low priority compared to medical emergencies like heart attacks or major trauma. You will likely wait for several hours.</li>
        <li><strong>Symptom Management Only:</strong> A medical doctor will assess you. They cannot perform a dental examination or take dental X-rays. Their only course of action is to provide you with painkillers and, if they suspect an infection, a course of antibiotics.</li>
        <li><strong>The Inevitable Advice:</strong> After all that waiting, you will be told: "You need to see a dentist." You will leave with your underlying dental problem completely unresolved.</li>
      </ol>

      <h2>Why an Emergency Dentist is the Right Choice</h2>
      <p>Coming directly to a dedicated emergency dentist is a faster, more effective, and ultimately more efficient solution. Here's what we can do that A&E cannot:</p>
      
      <ul>
        <li><strong>Accurate Diagnosis:</strong> We use dental-specific knowledge and tools, including digital X-rays, to pinpoint the exact cause of your pain.</li>
        <li><strong>Definitive Treatment:</strong> We don't just mask the pain; we fix the problem. We can perform extractions, start root canals, dress broken teeth, re-cement crowns, and treat infections at their source.</li>
        <li><strong>Profound Pain Relief:</strong> While oral painkillers help, nothing beats a dental anesthetic injection, which can completely numb the area and provide immediate, total relief from pain.</li>
        <li><strong>Preserve Your Teeth:</strong> Our primary goal is to save your natural teeth. Prompt and proper dental treatment is often the only way to do this.</li>
      </ul>

      <h3>When You SHOULD Go to A&E</h3>
      <p>There are a few, very specific exceptions. You should go to A&E if you have:</p>
      <ul>
        <li>Severe, uncontrollable bleeding from your mouth.</li>
        <li>A suspected broken or dislocated jaw.</li>
        <li>Facial swelling that is spreading to your eye or down your neck, causing difficulty with vision or breathing.</li>
      </ul>

      <p>For everything else—toothache, a broken tooth, a lost filling, or a dental abscess—your first and only call should be to an emergency dentist. It will save you time, and stress, and is the only path to truly resolving your dental pain.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default DentistVsAEPost;