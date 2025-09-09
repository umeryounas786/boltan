import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "How to Manage Wisdom Tooth Pain Until Your Appointment",
  description: "Suffering from wisdom tooth pain? Learn effective at-home remedies and essential steps to manage your discomfort until you can see an emergency dentist in Manchester for treatment.",
  author: "Dr. Anya Sharma",
  readTime: "7 min read",
  category: "Pain Management",
  imgSrc: "https://images.unsplash.com/photo-1619451439344-a0c4a8993c47",
  imgAlt: "A person applying a cold compress to their cheek for pain relief.",
};

const faqs = [
    { question: "What is the best way to get severe wisdom tooth pain relief at home?", answer: "Over-the-counter pain relievers like ibuprofen or paracetamol are generally effective. Applying a cold compress to the outside of your cheek can reduce swelling and numb the area. Warm salt water rinses can also help clean and soothe inflamed gums." },
    { question: "Can I use ice or heat for wisdom tooth pain?", answer: "Use a cold compress (ice pack wrapped in a cloth) on the outside of your cheek for 15-20 minutes at a time. This helps reduce inflammation and pain. Avoid heat, as it can worsen swelling and draw infection to the area." },
    { question: "What are some natural at-home remedies for wisdom tooth pain?", answer: "Warm salt water rinses are excellent for reducing inflammation and cleaning the area. You can also try applying a small amount of clove oil (diluted if pure) to the affected gum with a cotton swab, as it has natural anesthetic properties." },
    { question: "When should I seek an emergency dentist for my wisdom tooth pain?", answer: "Seek immediate attention if you experience severe, throbbing pain that isn't managed by painkillers, significant swelling in your face/jaw, difficulty opening your mouth, fever, or pus discharge. These are signs of a spreading infection." },
    { question: "Can rinsing with salt water cure a wisdom tooth infection?", answer: "No, salt water rinses cannot cure an infection. They can help clean the area, reduce inflammation, and provide temporary relief by drawing out fluid. However, an underlying infection requires professional dental intervention, often antibiotics and/or removal." },
    { question: "What food should I avoid if my wisdom tooth is causing pain?", answer: "Avoid hard, chewy, sticky, or very hot/cold foods. Opt for soft foods like soups, smoothies, yogurt, mashed potatoes, or scrambled eggs. This minimizes irritation to the inflamed area." },
    { question: "Will antibiotics help my wisdom tooth pain?", answer: "If the pain is caused by a bacterial infection (e.g., pericoronitis or an abscess), a dentist might prescribe antibiotics to help control the infection. However, antibiotics don't solve the underlying problem, which may require extraction." },
    { question: "Can temporary wisdom tooth pain management delay the need for extraction?", answer: "Temporary pain management can help you cope until your dental appointment, but it does not remove the need for treatment. If the tooth is impacted or causing recurrent infections, extraction is often the definitive solution to prevent future problems." },
    { question: "Should I keep brushing the painful wisdom tooth?", answer: "Yes, continue to brush gently around the area to keep it clean, but avoid vigorous brushing that might irritate the inflamed gum. Proper hygiene can help prevent food debris from worsening the situation." },
    { question: "How can an emergency dentist help with an impacted wisdom tooth relief Bury?", answer: "An emergency dentist can assess the impacted wisdom tooth, clean the inflamed gum area, and prescribe medication for pain and infection. They can also discuss a definitive treatment plan, which often involves extraction, to provide long-term relief from impaction symptoms." }
];

const ManageWisdomToothPainPost = () => {
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
      
      <p className="lead">Wisdom tooth pain can strike suddenly and intensely, turning everyday activities into a challenge. While these tips are not a substitute for professional dental care, they can provide much-needed severe wisdom tooth pain relief and help you manage until you can see an emergency dentist in Manchester for definitive treatment.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>Immediate At-Home Remedies for Temporary Relief</h2>
      <p>These methods focus on reducing inflammation, cleaning the area, and temporarily easing the discomfort:</p>
      <ul>
        <li><strong>Warm Salt Water Rinse:</strong> Dissolve half a teaspoon of salt in a glass of warm water. Swish the solution gently around the affected area for 30 seconds, then spit it out. Repeat several times a day. This helps cleanse the area, reduce inflammation, and can draw out fluid.</li>
        <li><strong>Cold Compress:</strong> Apply an ice pack (wrapped in a cloth to protect your skin) to the outside of your cheek near the painful area for 15-20 minutes. Remove for 20 minutes, then reapply. Cold helps to numb the area and reduce swelling. **Avoid heat**, as it can increase inflammation and potentially draw infection.</li>
        <li><strong>Over-the-Counter Painkillers:</strong> Non-steroidal anti-inflammatory drugs (NSAIDs) like ibuprofen (e.g., Nurofen) are often highly effective for wisdom tooth pain as they target both pain and inflammation. Paracetamol can also provide relief. Always follow the dosage instructions on the packet.</li>
        <li><strong>Clove Oil:</strong> Clove oil has natural analgesic (pain-relieving) and antiseptic properties. Apply a tiny amount to a cotton ball and dab it gently onto the affected tooth and surrounding gum. Use sparingly, as it can be strong.</li>
      </ul>

      <blockquote>These at-home remedies are for temporary relief only. They do not treat the underlying cause of your wisdom tooth pain and you must still seek professional dental care.</blockquote>
      
      <h2>Essential Steps Before Your Dental Appointment</h2>
      <ol>
        <li><strong>Contact Your Dentist Immediately:</strong> As soon as you experience significant wisdom tooth pain, especially with swelling, contact an emergency dentist. Describe your symptoms clearly.</li>
        <li><strong>Maintain Oral Hygiene (Gently):</strong> Even with pain, it's crucial to keep the area as clean as possible. Brush gently around the wisdom tooth to remove food debris and plaque that can worsen the infection.</li>
        <li><strong>Avoid Irritating Foods:</strong> Steer clear of hard, sticky, or very hot/cold foods that might aggravate the area. Stick to soft foods that require minimal chewing.</li>
        <li><strong>Monitor Your Symptoms:</strong> Keep an eye on any changes. If swelling spreads rapidly, you develop a fever, or find it difficult to breathe or swallow, seek immediate medical attention at an A&E department.</li>
      </ol>

      <p>Effective temporary wisdom tooth pain management can make a painful wait much more bearable. However, remember that these are stop-gap measures. The definitive solution for wisdom tooth pain often involves professional intervention, whether it's cleaning an inflamed gum or an extraction to provide impacted wisdom tooth relief Bury or elsewhere. Don't hesitate to reach out to an emergency dentist for prompt diagnosis and treatment.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default ManageWisdomToothPainPost;