import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Emergency Wisdom Tooth Removal: When Waiting Is Risky",
  description: "Severe wisdom tooth pain can quickly escalate to a serious infection. Learn the critical signs that mean you need urgent wisdom tooth extraction in Manchester and why delaying treatment is dangerous.",
  author: "Dr. Ben Carter",
  readTime: "9 min read",
  category: "Wisdom Teeth",
  imgSrc: "https://images.unsplash.com/photo-1629904853716-f0bc54eea48d",
  imgAlt: "A dental surgeon's hands in gloves, performing a procedure with instruments, signifying urgent dental care.",
};

const faqs = [
    { question: "What makes wisdom tooth pain an emergency?", answer: "When wisdom tooth pain is accompanied by severe swelling (of the cheek or jaw), difficulty opening your mouth, fever, or pus discharge, it indicates a spreading infection (pericoronitis or abscess). These are signs that require immediate wisdom tooth pain emergency dentist Manchester attention." },
    { question: "What are the risks of delaying emergency wisdom tooth removal?", answer: "Delaying removal can lead to the infection spreading to other parts of your face, neck, or even into your bloodstream (sepsis). It can also cause irreversible damage to adjacent teeth, cyst formation, and chronic, severe pain." },
    { question: "Can an infected wisdom tooth affect my overall health?", answer: "Yes, an untreated infection from a wisdom tooth can cause systemic issues, including fever, general malaise, and in severe cases, could lead to a life-threatening widespread infection. This is why urgent wisdom tooth extraction Bolton or Manchester is crucial." },
    { question: "What should I do immediately if I have severe wisdom tooth pain and swelling?", answer: "Contact our emergency dental clinic immediately. In the meantime, you can rinse with warm salt water, apply a cold compress to your cheek (not heat!), and take over-the-counter painkillers like ibuprofen. Do NOT attempt to drain any pus yourself." },
    { question: "What is pericoronitis and how is it treated?", answer: "Pericoronitis is an inflammation or infection of the gum tissue surrounding a partially erupted wisdom tooth. It's treated by thoroughly cleaning the area, prescribing antibiotics (if infected), and often by removing the gum flap or the tooth itself to prevent recurrence." },
    { question: "Will the emergency wisdom tooth removal be painful?", answer: "No, the procedure is performed under local anesthetic, so you won't feel any pain during the extraction. We ensure you are completely numb and comfortable. We also offer sedation options for anxious patients." },
    { question: "How long does recovery take after an urgent wisdom tooth extraction in Bolton?", answer: "Initial recovery typically takes a few days, with most swelling and discomfort peaking around 48-72 hours. Complete healing can take a few weeks. We provide detailed aftercare instructions to ensure a smooth recovery." },
    { question: "What are the signs of an impacted wisdom tooth that needs relief in Bury?", answer: "An impacted wisdom tooth that needs relief in Bury might cause intermittent pain, tenderness, swelling in the area, difficulty chewing, or a foul taste. These symptoms arise when the tooth is trying to erupt but is blocked by bone or another tooth." },
    { question: "What is the cost of emergency wisdom tooth removal?", answer: "The cost varies depending on the complexity of the extraction (e.g., whether the tooth is fully erupted, partially impacted, or fully impacted). We provide a clear estimate after a full assessment during your emergency visit." },
    { question: "Can a wisdom tooth infection lead to a dental abscess?", answer: "Yes, a severe, untreated wisdom tooth infection (pericoronitis) can certainly lead to the formation of a dental abscess in the surrounding bone or soft tissues, which is a very serious complication requiring immediate attention." },
    { question: "Is it always necessary to remove symptomatic wisdom teeth?", answer: "While not all wisdom teeth need removal, those causing severe pain, recurrent infections, damage to adjacent teeth, or leading to cyst formation typically require extraction. We will assess your specific situation to recommend the best course of action." },
    { question: "What if I can't get to a dentist immediately due to severe swollen gum wisdom tooth in Manchester?", answer: "If you have rapidly spreading swelling, difficulty breathing or swallowing, or a high fever, go directly to an A&E department. Otherwise, contact our emergency line for urgent advice and appointment booking." }
];

const EmergencyWisdomToothRemovalPost = () => {
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
      
      <p className="lead">Wisdom teeth, or third molars, often arrive with a painful welcome. While some erupt without issue, others become a source of significant discomfort and even serious infection, demanding immediate professional attention. Understanding when a wisdom tooth pain emergency dentist Manchester visit is critical can prevent severe complications.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>When Wisdom Tooth Pain Becomes a True Emergency</h2>
      <p>Not all wisdom tooth discomfort warrants an emergency visit. However, if your pain is accompanied by any of the following, it’s a red flag that immediate attention is needed:</p>
      <ul>
        <li><strong>Severe, throbbing pain</strong> that radiates to your ear, jaw, or neck, and is not alleviated by over-the-counter painkillers.</li>
        <li><strong>Significant facial swelling</strong> in your cheek, jaw, or neck area. This indicates a spreading infection.</li>
        <li><strong>Difficulty opening your mouth (trismus)</strong> or pain when swallowing.</li>
        <li><strong>Pus discharge</strong> from the gum around the wisdom tooth, or a foul taste in your mouth.</li>
        <li><strong>Fever and general malaise</strong> (feeling unwell), signaling a systemic infection.</li>
        <li>A noticeably <strong>swollen gum wisdom tooth Manchester</strong> area that is tender to touch.</li>
      </ul>

      <blockquote>Delaying emergency wisdom tooth removal can turn a painful situation into a life-threatening one. Act fast if you experience severe symptoms.</blockquote>
      
      <h2>The Risks of Delaying Treatment</h2>
      <p>Ignoring or delaying treatment for an infected or problematic wisdom tooth can lead to severe health consequences:</p>
      <ul>
        <li><strong>Worsening Infection:</strong> The localized infection (pericoronitis) can spread to other areas, forming a dangerous dental abscess, or even causing cellulitis (a rapidly spreading bacterial infection of the skin and tissues). In rare, extreme cases, it can lead to sepsis.</li>
        <li><strong>Damage to Adjacent Teeth:</strong> An impacted wisdom tooth can push against the second molar, causing cavities, bone loss, or root resorption in the healthy tooth.</li>
        <li><strong>Cyst Formation:</strong> A fluid-filled sac (cyst) can develop around an impacted wisdom tooth, which can damage bone and tooth structures if not removed.</li>
        <li><strong>Chronic Pain:</strong> Persistent, unbearable pain and discomfort that significantly impact quality of life.</li>
      </ul>

      <h2>What to Expect During an Emergency Wisdom Tooth Removal</h2>
      <p>When you visit our clinic for an urgent wisdom tooth extraction Bolton or Manchester, our priority is to alleviate your pain and eliminate the infection source:</p>
      <ol>
        <li><strong>Assessment and X-rays:</strong> We'll conduct a thorough examination and take necessary X-rays (usually a panoramic X-ray or OPG) to assess the wisdom tooth's position, impaction, and the extent of the infection.</li>
        <li><strong>Pain Relief and Infection Control:</strong> We will numb the area completely with local anesthetic. If a significant infection is present, we may clean the area, prescribe antibiotics, and perform an initial drainage if there's an abscess, before the full extraction.</li>
        <li><strong>Extraction:</strong> The wisdom tooth will be carefully removed. Modern techniques and sedation options ensure the procedure is as comfortable as possible.</li>
        <li><strong>Aftercare:</strong> We'll provide detailed post-operative instructions for managing pain, swelling, and preventing complications like dry socket, ensuring a smooth recovery.</li>
      </ol>
      <p>If you're suffering from wisdom tooth pain and suspect a serious issue, don't wait. Contact our emergency dental team for immediate assistance. Your health and comfort are our top priority, offering rapid wisdom tooth pain emergency dentist Manchester services.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default EmergencyWisdomToothRemovalPost;