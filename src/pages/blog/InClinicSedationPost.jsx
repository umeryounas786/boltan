import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "A Guide to In-Clinic Sedation: Anxious About the Dentist? We Can Help.",
  description: "Learn about safe in-clinic sedation options like nitrous oxide and oral sedation, designed to manage dental anxiety and enhance comfort during stressful emergency visits.",
  author: "Dr. Anya Sharma",
  readTime: "9 min read",
  category: "Patient Comfort",
  imgSrc: "https://images.unsplash.com/photo-1629904791657-8a6f3b393568",
  imgAlt: "A calm and comfortable patient in a modern, welcoming dental clinic room.",
};

const faqs = [
    { question: "What is sedation dentistry?", answer: "Sedation dentistry uses medication to help patients relax during dental procedures. It's designed to manage fear and anxiety, making it possible for individuals to receive necessary dental care comfortably and without stress. It ranges from minimal sedation (feeling drowsy but awake) to deeper levels." },
    { question: "Who is a good candidate for sedation dentistry?", answer: "Sedation is ideal for patients with high dental anxiety or phobia, a low pain threshold, very sensitive teeth, a bad gag reflex, or those who need extensive dental work completed in a single visit. It's particularly helpful during stressful emergency appointments." },
    { question: "What is nitrous oxide ('laughing gas')?", answer: "Nitrous oxide is a safe and effective sedative gas mixed with oxygen that you inhale through a small mask over your nose. It helps you relax and creates a feeling of well-being. Its effects wear off very quickly after the mask is removed, so you can typically drive yourself home after the appointment." },
    { question: "What is oral sedation?", answer: "Oral sedation involves taking a prescribed pill (like Halcion or Valium) about an hour before your appointment. The medication will make you feel very drowsy and relaxed. You will be awake and able to respond to the dentist, but you may remember little about the procedure afterward. You will need someone to drive you to and from this appointment." },
    { question: "Is sedation dentistry safe?", answer: "Yes, when administered by a trained and qualified dentist, sedation dentistry is very safe. We will first review your medical history to ensure you are a good candidate. During the procedure, we continuously monitor your vital signs, including your heart rate, blood pressure, and oxygen levels, to ensure your complete safety." },
    { question: "Will I be completely asleep?", answer: "For the types of sedation we offer (nitrous oxide and oral sedation), you will not be completely asleep. You will remain conscious and able to communicate with the dental team. The goal is 'conscious sedation,' where you are in a state of deep relaxation." },
    { question: "Will I feel any pain with sedation?", answer: "Sedation primarily manages anxiety, not pain. You will still receive a local anesthetic to numb the treatment area. The great benefit of sedation is that it can make you less aware of the injection and the sensations of the procedure, creating a more comfortable experience." },
    { question: "How will I feel after the sedation?", answer: "After nitrous oxide, you'll feel back to normal within minutes. After oral sedation, you will feel groggy for several hours. You should plan to rest for the remainder of the day and must not drive, operate machinery, or make important decisions." },
    { question: "Can sedation be used for children?", answer: "Yes, nitrous oxide is very commonly and safely used to help children relax and cooperate during dental procedures. It's a great tool for making their dental experiences positive." },
    { question: "How do I know which sedation option is right for me?", answer: "The best option depends on your level of anxiety, the procedure you need, and your medical history. We will discuss all the options with you during your consultation to determine the safest and most effective method to ensure your comfort." }
];

const InClinicSedationPost = () => {
  return (
    <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Helmet>
      
      <header>
        <span className="text-brand-red font-semibold">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="blogmeta">
          <div><User className="w-5 h-5" /><span>{post.author}</span></div>
          <div><Clock className="w-5 h-5" /><span>{post.readTime}</span></div>
        </div>
      </header>
      
      <p className="lead">Dental anxiety is incredibly common, and it can be especially overwhelming during an emergency. The fear of pain or the stress of an unexpected dental problem can prevent people from seeking the urgent care they need. At our clinic, we believe that your comfort is paramount. That’s why we offer in-clinic sedation options to ensure your visit is as calm, relaxed, and pain-free as possible.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>Understanding Dental Anxiety and How Sedation Helps</h2>
      <p>Dental anxiety can stem from past negative experiences, fear of needles or drills, or a feeling of helplessness. This fear can trigger a physical stress response, making treatment more difficult for both you and the dentist. Sedation dentistry directly addresses this by calming the central nervous system, allowing you to enter a state of deep relaxation while remaining conscious and able to communicate.</p>

      <blockquote>Sedation dentistry isn't about 'being knocked out'; it's about providing a safe, serene state that allows you to receive care without fear.</blockquote>
      
      <h2>Our Sedation Options for Enhanced Patient Comfort</h2>
      <p>We provide two highly effective and safe methods of conscious sedation, tailored to your level of anxiety and the complexity of your procedure.</p>
      
      <h3>1. Nitrous Oxide (Inhalation Sedation)</h3>
      <p>Commonly known as "laughing gas," nitrous oxide is an excellent option for patients with mild to moderate anxiety. Here's how it works:</p>
      <ul>
        <li><strong>How it's administered:</strong> You simply breathe a mixture of nitrous oxide and oxygen through a small, comfortable mask placed over your nose.</li>
        <li><strong>How it feels:</strong> Within minutes, you'll feel a warm, pleasant, and floaty sensation. You'll be fully relaxed but still awake and responsive.</li>
        <li><strong>The biggest advantage:</strong> The effects wear off just as quickly as they begin. Once the mask is removed, the gas is eliminated from your system in minutes, and you are safe to drive yourself home.</li>
      </ul>

      <h3>2. Oral Conscious Sedation</h3>
      <p>This option is ideal for patients with moderate to severe anxiety or for those undergoing longer procedures. It provides a deeper level of relaxation.</p>
      <ul>
        <li><strong>How it's administered:</strong> We prescribe a sedative pill for you to take approximately one hour before your scheduled appointment.</li>
        <li><strong>How it feels:</strong> You will become very drowsy and relaxed. You will be able to respond to our questions, but you'll be so relaxed that you may not remember much about the appointment afterward (a benefit many patients appreciate).</li>
        <li><strong>Important consideration:</strong> Due to the lingering effects of the medication, you MUST have a responsible adult escort you to and from your appointment and stay with you for a few hours afterward.</li>
      </ul>

      <p>Don't let fear prevent you from getting the emergency dental care you need. Our compassionate team is here to discuss your concerns and find the right sedation solution for you. We are committed to turning a potentially stressful visit into a comfortable and positive experience.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default InClinicSedationPost;