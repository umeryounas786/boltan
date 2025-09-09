import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Emergency Dental Services for Tourists in Manchester: What to Know",
  description: "A dental emergency can quickly derail your travel plans. This guide provides essential information for tourists and visitors in Manchester on how to access fast, reliable emergency dental care.",
  author: "Dr. Ben Carter",
  readTime: "6 min read",
  category: "Visitor Information",
  imgSrc: "https://images.unsplash.com/photo-1533106418989-88406e768237",
  imgAlt: "A suitcase and travel map placed on a bed, representing a tourist in a new city.",
};

const faqs = [
    { question: "I'm a tourist in Manchester and have a dental emergency. What should I do first?", answer: "The first step is to call a private emergency dental clinic like ours. Explain that you are a visitor. We are experienced in helping tourists and can provide advice over the phone and arrange a prompt appointment if needed." },
    { question: "Can I use the NHS for a dental emergency as a tourist?", answer: "Access to NHS dental care for tourists can be complicated and may involve long waits. Some visitors may be entitled to it, but many are not. Private emergency care is the fastest and most reliable way to be seen and treated quickly." },
    { question: "How much will an emergency dental appointment cost for a visitor?", answer: "As a private clinic, we have standard fees for an emergency consultation, and any treatment required is an additional cost. We are fully transparent about all fees. We can provide you with a detailed receipt to claim back from your travel insurance." },
    { question: "Will you accept my travel insurance?", answer: "Patients typically pay for their treatment at the time of the appointment. We will provide you with all the necessary documentation, including a detailed invoice and treatment summary, for you to submit a claim to your travel insurance provider for reimbursement." },
    { question: "I've broken a tooth. Can you fix it on the same day so I can enjoy my trip?", answer: "In many cases, yes. For a broken front tooth, we can often perform a cosmetic bonding repair in a single visit. For more complex issues, our goal is to get you out of pain and provide a stable temporary solution so you can continue your holiday with minimal disruption." },
    { question: "What information should I have ready when I call?", answer: "It's helpful to have the address of where you are staying in Manchester, a contact phone number, and any details about your travel insurance (though this is not essential for booking). Most importantly, be ready to clearly describe your symptoms." },
    { question: "What if I need follow-up treatment or medication?", answer: "We can provide private prescriptions for medication like antibiotics or strong painkillers, which you can fill at any local pharmacy. If you need follow-up care, we will provide a full report for your home dentist to ensure continuity of care when you return." },
    { question: "I don't know my way around Manchester. How can I find your clinic?", answer: "Our address is listed on our website, and we are easily found on Google Maps. Manchester has excellent public transport and taxi services like Uber that can bring you directly to our clinic." },
    { question: "Do I need to be registered with a dentist in the UK to see you?", answer: "No, not at all. Our emergency service is available to everyone, including temporary visitors and tourists, with no registration required." },
    { question: "What are the most common dental emergencies you see in tourists?", answer: "We often see lost fillings or crowns, broken teeth from accidents, and sudden, severe toothaches or infections that have flared up during travel." }
];

const TouristDentalInfoPost = () => {
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
      
      <p className="lead">You've planned your trip to Manchester, ready to explore the vibrant culture, history, and nightlife. The last thing you expect is a debilitating toothache or a broken tooth. A dental emergency away from home can be stressful, but knowing how to access care quickly can save your holiday.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>Your Best Option: Private Emergency Dental Care</h2>
      <p>While the UK has the National Health Service (NHS), accessing emergency dental care through this route can be slow and confusing for a visitor. The fastest and most straightforward way to get treatment is to contact a private emergency dental clinic. We are accustomed to helping tourists and international visitors and can get you seen promptly.</p>

      <blockquote>Don't let a dental problem ruin your trip. We're here to provide fast, efficient care to get you back to your plans.</blockquote>
      
      <h2>Navigating Care as a Visitor</h2>
      <p>Here’s a simple process to follow if you experience a dental emergency while visiting Manchester:</p>
      <ol>
        <li><strong>Call Us Immediately:</strong> Contact our emergency phone line. Explain your situation and that you are a tourist. We will provide immediate advice.</li>
        <li><strong>Schedule an Appointment:</strong> We will book you the earliest available emergency slot to get you seen, diagnosed, and treated.</li>
        <li><strong>Payment and Insurance:</strong> You will pay for the treatment at the clinic. We accept major credit cards. We will then provide you with a full, itemized receipt and treatment summary.</li>
        <li><strong>Claim on Travel Insurance:</strong> You can use the documentation we provide to make a claim for reimbursement from your travel insurance company. Be sure to check your policy for dental emergency coverage.</li>
      </ol>

      <h2>Our Goal: Getting You Back to Your Holiday</h2>
      <p>We understand that your time in Manchester is valuable. Our primary goal is to resolve your immediate pain and provide a durable solution that allows you to continue your travels comfortably. Whether it's a temporary filling, a cosmetic repair, or starting treatment for an infection, we'll ensure you're stable and can get back to enjoying our city.</p>
      
      <p>If you're a visitor in Manchester with a dental problem, don't hesitate. Call us for friendly, professional, and efficient emergency care.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default TouristDentalInfoPost;