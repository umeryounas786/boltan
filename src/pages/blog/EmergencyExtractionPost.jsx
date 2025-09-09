import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Emergency Tooth Extraction in Bolton: What to Expect",
  description: "The thought of an emergency tooth extraction can be stressful. Our guide explains why it might be necessary and what to expect during a comfortable, pain-free procedure.",
  author: "Dr. Ben Carter",
  readTime: "8 min read",
  category: "Treatments",
  imgSrc: "https://images.unsplash.com/photo-1629904853716-f0bc54eea48d",
  imgAlt: "A calm and modern dental clinic room prepared for a procedure.",
};

const faqs = [
    { question: "Why would I need an emergency tooth extraction?", answer: "An emergency extraction is a last resort, typically needed when a tooth is too damaged to be saved. This can be due to severe trauma (a major fracture), advanced and untreatable decay, a failed root canal, or a severe infection/abscess that has destroyed too much of the surrounding bone." },
    { question: "Will the extraction hurt?", answer: "No. This is the most common concern, and the answer is definitive. The procedure is performed under powerful local anesthetic, which completely numbs the tooth and the surrounding area. You will feel some pressure, but you will not feel any pain." },
    { question: "What is the process of an emergency extraction?", answer: "First, we take an X-ray to plan the procedure. Then, we administer the local anesthetic and wait for it to take full effect. The dentist then gently loosens the tooth and removes it. Finally, we place sterile gauze over the socket and have you bite down to control bleeding." },
    { question: "What about sedation? Can I be asleep?", answer: "We offer sedation options like oral sedation or nitrous oxide for anxious patients. These will put you in a state of deep relaxation, but you will still be conscious. This is not the same as general anesthesia, but it makes the experience much more comfortable for those with dental fear." },
    { question: "How long does the procedure take?", answer: "A simple extraction is a surprisingly quick procedure, often taking only 20-30 minutes from start to finish, including the time for the anesthetic to work." },
    { question: "What is recovery like after an extraction?", answer: "You can expect some mild discomfort and swelling for a few days, which is easily managed with over-the-counter painkillers. We will provide you with detailed aftercare instructions, including what to eat and how to keep the area clean." },
    { question: "What is a dry socket and how can I avoid it?", answer: "A dry socket is a painful condition that occurs if the blood clot in the socket dislodges prematurely. To avoid it, you must not smoke, drink through a straw, or rinse your mouth vigorously for the first 24-48 hours. Following our aftercare instructions is key." },
    { question: "How long do I need to take off work?", answer: "For a simple extraction, most people feel well enough to return to work the next day, as long as their job isn't physically strenuous. We recommend taking it easy for at least 24 hours." },
    { question: "What are my options for replacing the extracted tooth?", answer: "It's important to replace a missing tooth to prevent other teeth from shifting. Options include a dental implant (the best long-term solution), a dental bridge, or a partial denture. We can discuss these with you at your appointment." },
    { question: "I'm in Bolton and need a tooth out urgently. How fast can you help?", answer: "If you are in severe pain from a non-restorable tooth, call our Bolton emergency line. We will arrange to see you the same day to assess the situation and, if extraction is necessary, get you out of pain." }
];

const EmergencyExtractionPost = () => {
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
      
      <p className="lead">Hearing that you need a tooth extracted can be intimidating, especially during a stressful emergency. However, modern dentistry has made tooth extraction a comfortable, pain-free, and routine procedure. Understanding the process can help alleviate any anxiety and prepare you for a smooth experience at our Bolton clinic.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81" />

      <h2>When is an Emergency Extraction Necessary?</h2>
      <p>As dentists, our primary goal is always to save your natural teeth. An extraction is only recommended when a tooth is beyond repair. The most common reasons for an emergency extraction include:</p>
      <ul>
        <li><strong>Severe Trauma:</strong> A tooth that is fractured deep below the gum line.</li>
        <li><strong>Advanced Decay:</strong> When a cavity is so large that there isn't enough healthy tooth structure left to support a filling or crown.</li>
        <li><strong>Severe Infection:</strong> A dental abscess that has caused significant bone loss around the tooth, making it loose and unsalvageable.</li>
        <li><strong>Failed Root Canal:</strong> In some cases, a root canal treatment may fail, and a re-treatment is not possible, leaving extraction as the only option to resolve the infection.</li>
      </ul>

      <blockquote>The extraction procedure does not cause pain; it relieves the pain you are already feeling from the damaged tooth.</blockquote>
      
      <h2>The Pain-Free Extraction Process: Step-by-Step</h2>
      <p>We prioritize your comfort above all else. Here’s what you can expect during your appointment:</p>
      <ol>
        <li><strong>Numbing the Area:</strong> We begin by applying a powerful local anesthetic. We will not proceed until you confirm that the tooth and surrounding gums are completely numb.</li>
        <li><strong>The Procedure:</strong> You will feel some pressure as the dentist gently rocks the tooth to loosen it from the socket, but you will not feel pain. The tooth is then carefully lifted out.</li>
        <li><strong>Post-Procedure Care:</strong> We will place a piece of sterile gauze over the empty socket and ask you to bite down firmly for about 30 minutes. This pressure helps to stop the bleeding and allows a blood clot to form, which is the first step in healing.</li>
        <li><strong>Aftercare Instructions:</strong> We will provide you with clear, detailed instructions on how to care for the extraction site at home to ensure a quick and complication-free recovery.</li>
      </ol>

      <h2>Managing Anxiety with Sedation</h2>
      <p>For patients who feel particularly anxious, we offer sedation options. These medications help you relax deeply throughout the procedure, turning a potentially stressful event into a calm and manageable one. Please let us know if you suffer from dental anxiety so we can discuss the best option for you.</p>
      
      <p>If you are in pain and think you may need an emergency extraction in Bolton, please don't hesitate to call us. We are here to provide a safe, comfortable, and pain-free solution to get you back to health.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default EmergencyExtractionPost;