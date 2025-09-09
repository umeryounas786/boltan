import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Wisdom Tooth Pain Relief in Manchester: Emergency Tips & Treatment",
  description: "Excruciating wisdom tooth pain? Learn immediate at-home remedies for relief and understand the signs that mean you need an emergency wisdom tooth removal in Manchester.",
  author: "Dr. Anya Sharma",
  readTime: "8 min read",
  category: "Pain Management",
  imgSrc: "https://images.unsplash.com/photo-1619451439344-a0c4a8993c47",
  imgAlt: "A person holding their jaw in discomfort, illustrating the severe pain from a wisdom tooth.",
};

const faqs = [
    { question: "What causes wisdom tooth pain?", answer: "Pain is often caused by the tooth erupting at an angle (impaction), pressing against other teeth. It can also be due to pericoronitis, an infection of the gum flap over a partially erupted wisdom tooth, or decay, as they are hard to clean." },
    { question: "What can I do for immediate pain relief at home?", answer: "Rinsing with warm salt water can clean the area and soothe gums. Applying a cold compress to your cheek for 15-20 minutes can reduce inflammation and numb the pain. Over-the-counter pain relievers like ibuprofen are also effective." },
    { question: "What is pericoronitis and is it an emergency?", answer: "Pericoronitis is the inflammation and infection of the gum tissue around a wisdom tooth. Symptoms include red, swollen gums, pain, a bad taste, and difficulty opening your jaw. It is an emergency as the infection can spread and become serious." },
    { question: "When do I need to see an emergency dentist for wisdom tooth pain?", answer: "You should call us immediately if you have severe, throbbing pain, swelling in your cheek or jaw, difficulty opening your mouth or swallowing, a fever, or pus draining from the area. These are signs of a significant infection." },
    { question: "Will I need my wisdom tooth removed?", answer: "Not always. If the pain is from a minor gum infection, a thorough professional cleaning of the area and a course of antibiotics may solve the problem. However, if the tooth is impacted, causing repeated infections, or damaging other teeth, extraction is often the best long-term solution." },
    { question: "What happens during an emergency wisdom tooth appointment?", answer: "We will take an X-ray (an OPG) to see the position of the tooth and surrounding structures. We will diagnose the cause of your pain, clean the infected area, and provide prescriptions for antibiotics and/or strong painkillers if needed. We will then discuss the need for extraction." },
    { question: "Is wisdom tooth removal painful?", answer: "No. The procedure itself is not painful as it's performed under local anesthetic, which completely numbs the area. We also offer sedation for anxious patients. You can expect some soreness and swelling during the recovery period, which is manageable with painkillers." },
    { question: "How long is the recovery after an extraction?", answer: "Initial recovery takes a few days. We recommend taking it easy for 24-48 hours. Swelling and discomfort usually peak around day three and then subside. We will provide you with detailed aftercare instructions to ensure a smooth recovery." },
    { question: "Can you remove all four wisdom teeth at once?", answer: "This is typically done by an oral surgeon under general anesthetic or deep sedation. In an emergency setting, we focus on removing the one tooth that is causing the immediate problem to provide relief." },
    { question: "I live in Manchester, how quickly can you help with my wisdom tooth pain?", answer: "As a dedicated emergency clinic in Manchester, we aim to see patients with severe wisdom tooth pain on the same day. Call our emergency line for an immediate assessment and appointment." }
];

const WisdomToothPost = () => {
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
      
      <p className="lead">The deep, radiating pain of an erupting or infected wisdom tooth is one of the most common dental emergencies. This intense discomfort can disrupt your sleep, work, and life. This guide offers immediate tips for pain relief and explains when it's crucial to seek emergency dental treatment in Manchester.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>Immediate At-Home Relief: What You Can Do Right Now</h2>
      <p>While these tips won't solve the underlying problem, they can provide temporary relief while you arrange to see a dentist:</p>
      <ul>
        <li><strong>Salt Water Rinse:</strong> Mix half a teaspoon of salt in a glass of warm water and rinse gently. This helps to clean the area and can draw out fluid, reducing inflammation.</li>
        <li><strong>Cold Compress:</strong> Wrap an ice pack in a towel and apply it to the outside of your cheek for 15-20 minutes at a time. This helps to numb the area and reduce swelling.</li>
        <li><strong>Over-the-Counter Painkillers:</strong> Anti-inflammatory medications like ibuprofen can be particularly effective as they target both pain and swelling.</li>
        <li><strong>Clove Oil:</strong> A natural anesthetic, a small amount of clove oil on a cotton bud applied to the gum can provide temporary numbing. Use sparingly.</li>
      </ul>

      <blockquote>At-home remedies are a temporary bridge to professional care. They are not a substitute for a proper dental diagnosis and treatment.</blockquote>
      
      <h2>When Wisdom Tooth Pain Becomes an Emergency</h2>
      <p>You need to call our emergency clinic immediately if you experience any of the following signs of a serious infection:</p>
      <ol>
        <li><strong>Severe, Throbbing Pain:</strong> Pain that isn't managed by standard painkillers.</li>
        <li><strong>Facial Swelling:</strong> Visible swelling in your cheek, jaw, or neck area.</li>
        <li><strong>Limited Jaw Opening (Trismus):</strong> Difficulty or pain when trying to open your mouth wide.</li>
        <li><strong>Fever or Feeling Unwell:</strong> A sign that the infection is becoming systemic.</li>
        <li><strong>Pus or a Bad Taste:</strong> Indicates a draining abscess.</li>
      </ol>

      <h2>Emergency Treatment in Manchester: What to Expect</h2>
      <p>When you come to our clinic, our first priority is to get you out of pain. We will perform a thorough assessment, including an X-ray, to understand the position of the wisdom tooth and the extent of the infection. Treatment may involve:</p>
      <ul>
        <li><strong>Professional Cleaning:</strong> We will thoroughly clean the infected gum flap (pericoronitis) to remove trapped food and bacteria.</li>
        <li><strong>Antibiotics:</strong> A course of antibiotics is often prescribed to clear up the infection before any extraction can be considered.</li>
        <li><strong>Extraction:</strong> If the tooth is impacted or causing recurrent problems, we will recommend its removal. This is a routine procedure performed under local anesthetic to ensure you feel no pain.</li>
      </ul>
      
      <p>If you are struggling with wisdom tooth pain in Manchester, don't wait for it to become unbearable. Contact our emergency dental team for immediate advice and treatment.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default WisdomToothPost;