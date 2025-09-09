import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "How Digital Smile Design Helps in Emergency Cosmetic Repairs (Coming Soon)",
  description: "Chipped a front tooth? Discover how we'll soon use Digital Smile Design (DSD) technology for fast, precise, and beautifully natural emergency cosmetic repairs.",
  author: "Dr. Anya Sharma",
  readTime: "6 min read",
  category: "Technology",
  imgSrc: "https://images.unsplash.com/photo-1588776814546-1ff20a3a7b8b",
  imgAlt: "A dentist using a tablet to show a patient a digital preview of their repaired smile.",
};

const faqs = [
    { question: "What is Digital Smile Design (DSD)?", answer: "DSD is an advanced protocol that uses digital photos, videos, and 3D scans to design a smile that is in perfect harmony with your facial features. It allows us to plan and preview the final result before we even start treatment." },
    { question: "I thought DSD was only for big smile makeovers. How does it help in an emergency?", answer: "While DSD is famous for full makeovers, its principles are invaluable for single-tooth emergencies. It allows us to digitally replicate the ideal shape, size, and position of your broken tooth, ensuring the repair is a perfect match for the rest of your smile, not just a 'patch-up'." },
    { question: "How will DSD make my emergency repair faster?", answer: "By designing the repair digitally first, we create a precise blueprint. This reduces guesswork and adjustment time in the chair. We can create a digital 'wax-up' of the repair and use it to guide the bonding process, making it more efficient and predictable." },
    { question: "Will I really be able to see the result beforehand?", answer: "Yes! This is the magic of DSD. Using sophisticated software, we can show you a simulation of how your repaired tooth will look on a screen. This ensures you are happy with the planned outcome before we proceed." },
    { question: "What kind of cosmetic emergencies can DSD help with?", answer: "DSD will be perfect for repairing chipped or broken front teeth, closing a gap that has suddenly appeared, or creating an aesthetic temporary crown that looks incredibly natural while you wait for a permanent one." },
    { question: "Is this technology available at your clinic now?", answer: "We are in the process of integrating this exciting technology into our emergency workflow. It is 'Coming Soon'. We are committed to investing in the best technology to provide superior care for our patients." },
    { question: "Will using DSD for an emergency repair be more expensive?", answer: "Our goal is to incorporate this technology to improve the quality and efficiency of our care. We will always be transparent about any costs associated with specific treatments. The value lies in getting a highly predictable, superior aesthetic result." },
    { question: "How does DSD ensure the repair looks natural?", answer: "DSD analyzes your entire face, not just the broken tooth. It considers your lip line, the curve of your smile, and the proportions of your other teeth to design a repair that is in perfect aesthetic harmony, making it look like the damage never happened." },
    { question: "What's the first step in a DSD-guided emergency repair?", answer: "The process will start with a quick series of digital photos and a 3D scan of your teeth. This data is then fed into the DSD software to begin the digital design and simulation process." },
    { question: "Why are you bringing this technology to your emergency practice?", answer: "Because we believe that even in an emergency, you deserve the highest quality cosmetic result. A broken front tooth affects your confidence, and DSD will allow us to restore it beautifully and predictably." }
];

const DsdEmergencyRepairPost = () => {
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
      
      <p className="lead">When you chip a front tooth, your emergency isn't just about health—it's about your confidence. The goal isn't just to 'fix' the tooth, but to restore your smile so perfectly that no one would ever know it was damaged. That's why we're excited to announce that we will soon be integrating Digital Smile Design (DSD) technology into our emergency cosmetic repair workflow.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1619691249147-c5689d88016b" />

      <h2>Beyond a Simple Patch: The DSD Philosophy</h2>
      <p>Traditionally, repairing a chipped tooth involves the dentist skillfully free-handing the repair with composite material. While effective, Digital Smile Design takes this to a whole new level of precision and artistry. It's a shift from fixing a tooth in isolation to designing a repair that is in perfect harmony with your entire face.</p>

      <blockquote>DSD allows us to begin with the end in mind. We don't just repair what's broken; we restore what was meant to be there.</blockquote>
      
      <h2>How DSD Will Revolutionize Your Emergency Repair</h2>
      <p>Imagine this scenario: you come in with a broken front tooth. Instead of just starting to work on the tooth, we will:</p>
      <ol>
        <li><strong>Take Digital Records:</strong> A quick series of photos and a 3D scan of your mouth provide the raw data.</li>
        <li><strong>Design the Ideal Repair:</strong> Using DSD software, we will digitally rebuild your tooth, not just to its original shape, but to its ideal shape, considering your lip line, facial proportions, and adjacent teeth.</li>
        <li><strong>Show You the Future:</strong> We will show you a realistic simulation of the final result on a screen. You get to approve your new smile before we even touch the tooth.</li>
        <li><strong>Execute with Precision:</strong> Using a 3D-printed guide based on the digital design, we can transfer the plan to your mouth with incredible accuracy, ensuring the final bonding is exactly as planned.</li>
      </ol>

      <h2>The Benefits of a DSD-Guided Emergency Repair</h2>
      <ul>
        <li><strong>Predictability:</strong> You see the final result before we start, eliminating any surprises.</li>
        <li><strong>Superior Aesthetics:</strong> The repair is designed to be in harmony with your face, not just an isolated fix.</li>
        <li><strong>Efficiency:</strong> A clear digital plan can make the in-chair procedure faster and more streamlined.</li>
        <li><strong>Confidence:</strong> You leave not just with a repaired tooth, but with a beautifully restored, confident smile.</li>
      </ul>
      
      <p>We are thrilled to be bringing this cutting-edge technology to our emergency patients soon. It represents our commitment to providing the highest standard of care, ensuring that even in an emergency, your smile receives the artistry it deserves.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default DsdEmergencyRepairPost;