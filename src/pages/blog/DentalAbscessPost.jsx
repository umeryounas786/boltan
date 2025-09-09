import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Swollen Face or Gum? You Might Have a Dental Abscess",
  description: "A dental abscess is a serious infection that can have severe health consequences if ignored. Learn to recognize the symptoms and understand why immediate emergency treatment is vital.",
  author: "Dr. Chloe Davis",
  readTime: "7 min read",
  category: "Infections",
  imgSrc: "https://images.unsplash.com/photo-1631590102635-e4349a3e3995",
  imgAlt: "A dentist examining a dental x-ray, pointing to the root of a tooth where an abscess might form.",
};

const faqs = [
    { question: "What is a dental abscess?", answer: "A dental abscess is a pocket of pus that forms in or around the root of a tooth. It's caused by a bacterial infection. There are two main types: a periapical abscess (at the tip of the root) and a periodontal abscess (in the gum next to a tooth root)." },
    { question: "What are the main symptoms of a dental abscess?", answer: "The classic symptoms are a severe, persistent, throbbing toothache, a swollen face or cheek, a tender pimple-like bump on the gum, extreme sensitivity to hot and cold, and pain when chewing. You might also have a fever and a general feeling of being unwell." },
    { question: "Is a dental abscess a serious emergency?", answer: "Yes, it is one of the most serious dental emergencies. If left untreated, the bacterial infection can spread to your jaw, neck, and other parts of your body, and in rare cases, can lead to a life-threatening condition called sepsis." },
    { question: "Should I try to pop the abscess myself?", answer: "Absolutely not. Do not try to pop or drain the abscess yourself. This can spread the infection to surrounding tissues and make the situation much worse. Draining must be done by a dental professional in a sterile environment." },
    { question: "What should I do if I think I have an abscess?", answer: "Call our emergency dental clinic immediately. While you wait for your appointment, you can rinse your mouth with warm salt water to help draw the pus to the surface and soothe the gum. Take over-the-counter painkillers for the pain." },
    { question: "How does a dentist treat a dental abscess?", answer: "The primary goal is to drain the abscess and eliminate the infection. We will numb the area, make a small incision to allow the pus to drain, and clean the area thoroughly. The next step is to address the source of the infection." },
    { question: "What treatment is needed after the abscess is drained?", answer: "If the abscess was caused by an infected tooth nerve, you will likely need a root canal treatment to save the tooth. If it was caused by severe gum disease, you would need specialized gum treatment. In some severe cases, the tooth may need to be extracted." },
    { question: "Will I need antibiotics?", answer: "Yes, in most cases, we will prescribe a course of antibiotics to help your body fight off the infection and prevent it from spreading. It is crucial to complete the entire course, even if you start to feel better." },
    { question: "The pain from my abscess suddenly stopped. Am I in the clear?", answer: "No, this is a very dangerous sign. If the pain suddenly stops, it may mean the abscess has ruptured and the infection is now spreading. The absence of pain does not mean the infection is gone. You still need to see an emergency dentist immediately." },
    { question: "How can I prevent a dental abscess?", answer: "The best prevention is good oral hygiene—brushing twice a day, flossing daily—and regular dental check-ups. This helps prevent the tooth decay and gum disease that are the primary causes of abscesses. Treating any dental issue promptly also prevents it from developing into an abscess." }
];

const DentalAbscessPost = () => {
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
      
      <p className="lead">Waking up to a swollen face or discovering a painful, pimple-like bump on your gum can be frightening. These are classic signs of a dental abscess, a serious bacterial infection that requires immediate medical attention. Ignoring it is not an option; here's what you need to know.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>Recognizing the Signs of a Dental Abscess</h2>
      <p>A dental abscess is a pocket of pus that collects around the root of a tooth. It's your body's attempt to contain an infection. You must seek emergency dental care if you experience a combination of these symptoms:</p>
      <ul>
        <li><strong>Severe, persistent, throbbing pain</strong> that can radiate to your jaw, neck, or ear.</li>
        <li><strong>Visible swelling</strong> in your face, cheek, or lymph nodes in your neck.</li>
        <li><strong>A tender, painful bump on your gum</strong> that may look like a pimple.</li>
        <li><strong>Extreme sensitivity</strong> to hot and cold temperatures.</li>
        <li><strong>Fever</strong> and a general feeling of being unwell.</li>
        <li>A sudden rush of foul-tasting, salty fluid in your mouth if the abscess ruptures.</li>
      </ul>

      <blockquote>A dental abscess will not go away on its own. It is a serious infection that can spread and lead to life-threatening complications if left untreated.</blockquote>
      
      <h2>The Dangers of Waiting</h2>
      <p>The infection from an abscess can spread from the tooth root to the surrounding bone and soft tissues. In severe cases, it can travel to other parts of the body, leading to a condition called sepsis, which is a medical emergency. If you have swelling that is making it difficult to breathe or swallow, you should go to A&E immediately.</p>

      <h2>How We Treat a Dental Abscess</h2>
      <p>Our priority is to relieve your pain and control the infection. Treatment involves several key steps:</p>
      <ol>
        <li><strong>Draining the Abscess:</strong> After numbing the area completely, we will make a small, careful incision into the abscess to allow the pus to drain out. This provides immediate relief from the pressure and pain.</li>
        <li><strong>Cleaning the Area:</strong> We will thoroughly clean the area with a saline solution.</li>
        <li><strong>Addressing the Source:</strong> To prevent the abscess from returning, we must treat the source of the infection. This most often involves starting a root canal treatment to remove the infected nerve from inside the tooth. In some cases, the tooth may be too damaged and will require extraction.</li>
        <li><strong>Prescribing Antibiotics:</strong> We will almost always prescribe a course of antibiotics to help your body eliminate the infection completely. It is vital that you finish the entire course.</li>
      </ol>
      
      <p>If you suspect you have a dental abscess, do not delay. The risk is too great. Contact our emergency dental clinic immediately for an urgent appointment. We are equipped to provide the care you need to resolve the infection and protect your overall health.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default DentalAbscessPost;