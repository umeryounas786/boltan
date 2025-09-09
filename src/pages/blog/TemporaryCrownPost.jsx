import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Temporary Crowns in a Dental Emergency: A Same-Day Fix in Manchester",
  description: "A broken front tooth needs an immediate aesthetic fix. Learn how same-day temporary crowns in Manchester protect your tooth and restore your smile while you await a permanent solution.",
  author: "Dr. Anya Sharma",
  readTime: "6 min read",
  category: "Aesthetic Solutions",
  imgSrc: "https://images.unsplash.com/photo-1629904853716-f0bc54eea48d",
  imgAlt: "A dentist holding a perfectly crafted dental crown between their fingers.",
};

const faqs = [
    { question: "What is a temporary crown?", answer: "A temporary crown is a short-term cap placed over a damaged or prepared tooth. Its purpose is to protect the tooth, prevent sensitivity, maintain the space for the permanent crown, and provide an aesthetic appearance while the permanent crown is being custom-made in a dental lab." },
    { question: "Why would I need a temporary crown in an emergency?", answer: "If you've severely broken a tooth, especially a front one, you need an immediate solution. A temporary crown restores the look of your smile instantly, allowing you to go about your life with confidence. It also protects the vulnerable, prepared tooth from further damage or infection." },
    { question: "Can you make a temporary crown on the same day?", answer: "Yes. We can fabricate and fit a high-quality, natural-looking temporary crown in a single emergency appointment at our Manchester clinic. You will walk out with a complete-looking smile." },
    { question: "What are temporary crowns made of?", answer: "Temporary crowns are typically made from materials like acrylic, composite resin, or stainless steel. We use tooth-coloured materials for front teeth to ensure the best possible aesthetic result." },
    { question: "How long can I wear a temporary crown?", answer: "Temporary crowns are designed to last for a few weeks, which is the typical time it takes for a dental laboratory to create your permanent crown. They are not intended for long-term use as the material is not as durable as a permanent crown." },
    { question: "How do I care for my temporary crown?", answer: "Be gentle. Avoid eating very hard, sticky, or chewy foods on that side of your mouth. When flossing, slide the floss out sideways instead of pulling it up, to avoid dislodging the crown. Brush the area carefully." },
    { question: "What if my temporary crown comes off?", answer: "Don't panic. This can sometimes happen. Keep the temporary crown in a safe place and call us immediately. We will schedule you in to have it re-cemented. You can use a small amount of temporary dental cement from a pharmacy for a very short-term fix if needed." },
    { question: "Will the temporary crown look natural?", answer: "While not as perfectly matched and translucent as a final porcelain crown, we take great care to create temporary crowns that look very natural and blend in well with your other teeth. For a front tooth, we ensure the shape and shade are aesthetically pleasing." },
    { question: "Is getting a temporary crown painful?", answer: "No. The tooth will be numbed with local anesthetic before any preparation is done, so you won't feel any pain during the procedure. The temporary crown will actually help to reduce any sensitivity you were feeling from the broken tooth." },
    { question: "Does the temporary crown affect the fit of the final crown?", answer: "On the contrary, it's essential for it! The temporary crown holds the space and prevents your other teeth from shifting, ensuring that the custom-made permanent crown will fit perfectly when it's ready." }
];

const TemporaryCrownPost = () => {
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
      
      <p className="lead">Breaking a prominent tooth can be a distressing experience, impacting not just your ability to chew but also your confidence. While a permanent crown is the ultimate solution, you need an immediate fix. This is where a same-day temporary crown becomes an essential part of emergency dental care in Manchester.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>The Crucial Role of a Temporary Crown</h2>
      <p>A temporary crown is much more than just a placeholder. It serves several vital functions in a dental emergency:</p>
      <ul>
        <li><strong>Immediate Aesthetics:</strong> It instantly restores the appearance of your smile, which is especially important for a visible front tooth.</li>
        <li><strong>Protection:</strong> It covers and protects the prepared or damaged tooth from bacteria, temperature sensitivity, and further fracture.</li>
        <li><strong>Maintains Space:</strong> It prevents adjacent teeth from shifting into the gap, ensuring the permanent crown will fit perfectly.</li>
        <li><strong>Function:</strong> It allows you to eat and speak more comfortably while you wait for your final restoration.</li>
      </ul>

      <blockquote>A temporary crown is a bridge—not just between appointments, but between a dental crisis and a confident smile.</blockquote>
      
      <h2>Our Same-Day Temporary Crown Process</h2>
      <p>When you come to our Manchester clinic with a severely broken tooth, we can provide an aesthetic temporary solution in a single visit.</p>
      <ol>
        <li><strong>Assessment and Preparation:</strong> We will first assess the tooth. If a crown is the right treatment, we will numb the area and prepare the tooth by reshaping it to make room for the final crown.</li>
        <li><strong>Impression or Scan:</strong> We take a digital scan or impression of the prepared tooth.</li>
        <li><strong>On-the-Spot Fabrication:</strong> Using this impression, we fabricate a custom-fitted temporary crown right here in the clinic using high-quality, tooth-coloured resin materials.</li>
        <li><strong>Fitting and Cementing:</strong> We check the fit and bite of the temporary crown, make any necessary adjustments, and then secure it in place with a temporary dental cement.</li>
      </ol>

      <h2>Caring for Your Temporary Restoration</h2>
      <p>Temporary crowns are not as strong as permanent ones, so a little extra care is needed. We advise patients to avoid chewing hard or sticky foods (like toffees, hard-crusted bread, or nuts) on the side with the temporary crown. When you floss, it's important to slide the floss out from the side rather than pulling it up, which could dislodge the crown. Continue to brush gently around the area to keep your gums healthy.</p>
      
      <p>If you've suffered a dental injury and need an immediate cosmetic solution, don't hesitate. Our same-day temporary crown service in Manchester ensures you can leave our clinic with your smile and confidence fully restored.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default TemporaryCrownPost;