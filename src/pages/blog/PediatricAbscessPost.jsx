import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Dental Abscess in Children: Emergency Help in Bolton & Bury",
  description: "A swollen cheek or gum on your child can be very alarming. Learn to recognize the signs of a pediatric dental abscess and why immediate emergency care is crucial.",
  author: "Dr. Chloe Davis",
  readTime: "8 min read",
  category: "Pediatric Care",
  imgSrc: "https://images.unsplash.com/photo-1579203333331-a8314e363892",
  imgAlt: "A compassionate dentist gently examining a worried child's mouth.",
};

const faqs = [
    { question: "What causes a dental abscess in a child?", answer: "Just like in adults, a dental abscess in a child is caused by a bacterial infection. This most commonly results from untreated tooth decay in a baby or adult tooth, or from trauma to a tooth that has damaged the nerve." },
    { question: "Are the symptoms of an abscess different in children?", answer: "The core symptoms are similar: pain, a pimple on the gum, and sensitivity. However, a key sign in children is often visible facial swelling on one side. They may also have a fever, be irritable, refuse to eat, and complain of a bad taste in their mouth." },
    { question: "Is an abscess on a baby tooth still a serious problem?", answer: "Yes, it is very serious. The infection from an abscessed baby tooth can damage the permanent tooth developing underneath it. The infection can also spread to other parts of the body, making the child very ill." },
    { question: "My child has a swollen cheek but says it doesn't hurt. Should I be concerned?", answer: "Yes, you should be very concerned. Swelling is a major red flag for infection. Sometimes an abscess can rupture, which temporarily relieves the pressure and pain, but the dangerous infection is still present and spreading. Seek emergency care immediately." },
    { question: "What is the first thing I should do if I suspect my child has an abscess?", answer: "Call our emergency dental clinic immediately. Explain the symptoms, particularly mentioning any fever or facial swelling. Do not delay, even if it is after hours." },
    { question: "How will a dentist treat my child's abscess?", answer: "Our first priority is your child's comfort and safety. We use a gentle, reassuring approach. Treatment will involve numbing the area, draining the abscess to relieve pressure, and prescribing antibiotics to fight the infection." },
    { question: "Will my child need to have their tooth taken out?", answer: "It depends. If it is a baby tooth, extraction is often the safest and most effective way to remove the source of the infection and protect the developing permanent tooth. If it's a permanent tooth, we will do everything possible to save it, often with a root canal treatment." },
    { question: "Are antibiotics enough to treat the abscess?", answer: "No. Antibiotics help control the spread of infection in the body, but they cannot get to the source of the infection inside the tooth. The source (the infected tooth) must be treated either by extraction or root canal, otherwise the abscess will come back." },
    { question: "How can I help my child manage the pain at home?", answer: "You can give them age-appropriate pain relief like paracetamol or ibuprofen (check with your pharmacist or GP for correct dosage). A cold compress on the outside of their cheek can also help with swelling and discomfort." },
    { question: "How do we prevent this from happening again?", answer: "Prevention is key. Ensure a good diet low in sugar, enforce twice-daily brushing with fluoride toothpaste, and establish regular dental check-ups from a young age. This allows us to catch and treat cavities when they are small, before they can lead to a dangerous abscess." }
];

const PediatricAbscessPost = () => {
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
      
      <p className="lead">There are few things more worrying for a parent than seeing their child in pain or with a swollen face. These are often hallmark signs of a pediatric dental abscess, a serious infection that requires immediate attention from an emergency dentist. For families in Bolton and Bury, understanding the signs and knowing what to do is critical for your child's health.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>Why an Abscess in a Child is a True Emergency</h2>
      <p>A dental abscess is a pocket of pus caused by bacteria. In children, it typically stems from untreated tooth decay or an injury to a tooth. It is not just a simple toothache; it is a significant infection that can make a child very unwell.</p>
      
      <p>Key signs to watch for:</p>
      <ul>
        <li><strong>Facial Swelling:</strong> A puffy or swollen cheek or jaw is a major warning sign.</li>
        <li><strong>Pain:</strong> Your child may complain of a constant, throbbing toothache.</li>
        <li><strong>Fever:</strong> The infection can cause a systemic response, leading to a fever.</li>
        <li><strong>A "Pimple" on the Gum:</strong> A small, tender bump on the gum near the sore tooth.</li>
        <li><strong>Irritability and Loss of Appetite:</strong> Pain and feeling unwell can cause changes in your child's mood and eating habits.</li>
      </ul>

      <blockquote>An infection from a baby tooth can harm the permanent tooth growing beneath it. Never adopt a "wait and see" approach.</blockquote>
      
      <h2>Immediate Steps for Parents</h2>
      <p>If you notice any of these signs, your first and most important action is to call our emergency dental clinic. While you are arranging the appointment:</p>
      <ol>
        <li><strong>Provide Pain Relief:</strong> Give your child an age-appropriate dose of children's paracetamol or ibuprofen.</li>
        <li><strong>Use a Cold Compress:</strong> Apply a cold pack wrapped in a cloth to the outside of their swollen cheek to help with pain and swelling.</li>
        <li><strong>Do NOT Apply Heat:</strong> Heat can draw the infection out into the facial tissues and make the swelling worse.</li>
        <li><strong>Do NOT Try to Pop It:</strong> Never attempt to drain the abscess yourself.</li>
      </ol>

      <h2>Our Gentle Approach to Pediatric Emergencies</h2>
      <p>We understand that a dental emergency is scary for both child and parent. Our team is trained to provide gentle, reassuring care. The treatment goal is to safely drain the infection and remove its source. This often involves prescribing antibiotics and treating the affected tooth, which may require extraction if it's a baby tooth, to ensure the infection is fully resolved and your child's health is protected.</p>
      
      <p>If your child is showing signs of a dental abscess in the Bolton or Bury area, contact us immediately. Prompt action is the key to a safe and speedy recovery.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default PediatricAbscessPost;