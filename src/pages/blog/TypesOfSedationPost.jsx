import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Types of Sedation Used in Emergency Dentistry & When They’re Recommended",
  description: "From nitrous oxide to oral sedation, understand the different types of sedation available for emergency dental care in Bolton & Manchester. Learn which option might be right for your needs and anxiety level.",
  author: "Dr. Ben Carter",
  readTime: "10 min read",
  category: "Sedation Dentistry",
  imgSrc: "https://images.unsplash.com/photo-1629904791657-8a6f3b393568",
  imgAlt: "A modern dental operatory with equipment for sedation, including a nitrous oxide mask.",
};

const faqs = [
    { question: "What is the main difference between nitrous oxide and oral sedation?", answer: "The main differences are the level of sedation and the recovery time. Nitrous oxide provides a light, euphoric relaxation that wears off within minutes. Oral sedation provides a deeper level of relaxation, but its effects last for several hours, requiring an escort home." },
    { question: "Which type of sedation is better for severe dental phobia?", answer: "For patients with severe anxiety or dental phobia, oral sedation is often the recommended choice. It provides a deeper level of calm and has an amnesic effect, meaning you're unlikely to remember the procedure, which helps prevent future anxiety." },
    { question: "Can I get nitrous oxide dental treatment in Manchester for a simple filling?", answer: "Yes, absolutely. Nitrous oxide is suitable for any procedure if you feel anxious. Its quick onset and recovery make it a convenient option for shorter appointments where you need to 'take the edge off'." },
    { question: "Is 'sleep dentistry' the same as being put to sleep in a hospital?", answer: "No. 'Sleep dentistry' is a common term for sedation dentistry, but it can be misleading. With the conscious sedation techniques we use (oral and nitrous oxide), you are not unconscious. You are in a deeply relaxed, sleep-like state but are still able to breathe on your own and respond to us." },
    { question: "How do you decide which sedation is right for me?", answer: "The decision is made collaboratively. We consider your level of anxiety, your medical history, the dental procedure being performed, and your personal preference. An emergency dentist with sedation in Bolton will conduct a full consultation to determine the safest and most effective option for you." },
    { question: "Do I need to prepare differently for oral sedation vs. nitrous oxide?", answer: "Yes. For nitrous oxide, there's usually no special preparation. For oral sedation, you will be instructed not to eat or drink for a few hours before your appointment and you MUST arrange for a responsible adult to drive you home and stay with you." },
    { question: "Can these sedation types be combined?", answer: "In some cases, a very light oral sedative might be combined with nitrous oxide to provide an enhanced level of comfort. This would be determined on a case-by-case basis after a thorough assessment." },
    { question: "Are there any side effects?", answer: "Side effects are generally minimal. Nitrous oxide can occasionally cause brief nausea or dizziness. Oral sedatives will cause drowsiness, and possibly dry mouth or lightheadedness for a few hours. We will discuss all potential side effects with you beforehand." }
];

const TypesOfSedationPost = () => {
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
      
      <p className="lead">When facing a dental emergency, knowing that you can receive treatment in a comfortable, anxiety-free environment makes all the difference. Sedation dentistry offers a range of options to suit different needs and anxiety levels. As a leading emergency dentist with sedation in Bolton and Manchester, we offer two primary types of conscious sedation to ensure your safety and comfort.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>Option 1: Nitrous Oxide (Inhalation Sedation)</h2>
      <p>Commonly known as "laughing gas," nitrous oxide is a mild sedative that is inhaled through a small, comfortable mask placed over your nose. It's a time-tested and extremely safe option for managing dental anxiety.</p>
      <ul>
        <li><strong>How it Feels:</strong> You'll feel a warm, pleasant, and sometimes tingly or floaty sensation. It induces a state of light euphoria and relaxation, making you less concerned with the procedure.</li>
        <li><strong>Level of Sedation:</strong> Mild to Moderate.</li>
        <li><strong>When It's Recommended:</strong> Nitrous oxide dental treatment in Manchester is ideal for patients with mild anxiety, those with a gag reflex, or for shorter procedures. It's also an excellent choice for children who are nervous about treatment.</li>
        <li><strong>Key Advantage:</strong> The effects begin within minutes and, more importantly, wear off within minutes of the mask being removed. You can safely drive yourself home and resume your day.</li>
      </ul>

      <blockquote>Nitrous oxide is perfect for taking the edge off and making your dental visit a more pleasant experience, with no lingering effects.</blockquote>
      
      <h2>Option 2: Oral Conscious Sedation</h2>
      <p>Oral sedation involves taking a prescribed sedative pill before your appointment. This method provides a deeper level of relaxation and is highly effective for patients with more significant anxiety.</p>
      <ul>
        <li><strong>How it Feels:</strong> You will feel very drowsy, calm, and deeply relaxed. While you will be conscious and able to respond, you may drift in and out of a light sleep. Many patients have little to no memory of the procedure afterward (amnesia), which is a major benefit for those with dental phobia.</li>
        <li><strong>Level of Sedation:</strong> Moderate.</li>
        <li><strong>When It's Recommended:</strong> This is the preferred option for patients with moderate to severe dental anxiety, those undergoing longer or more complex procedures (like multiple extractions), or individuals with a strong fear of needles.</li>
        <li><strong>Key Advantage:</strong> It provides profound anxiety relief and amnesia, effectively erasing the memory of the treatment and helping to prevent future dental fear.</li>
        <li><strong>Important Note:</strong> You MUST have a responsible adult escort to drive you to and from your appointment, as the sedative effects last for several hours.</li>
      </ul>

      <h2>Choosing the Right Option for You</h2>
      <p>The best choice depends on your unique situation. During your consultation, we will discuss your medical history, anxiety level, and the required dental treatment to recommend the safest and most effective sedation method for you. Our goal is to provide a personalized, comfortable experience that addresses your dental emergency and eases your fears.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default TypesOfSedationPost;