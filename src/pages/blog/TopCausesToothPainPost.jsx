import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Top Causes of Tooth Pain and How Emergency Dentists Treat Them",
  description: "From cavities to infections, uncover the common culprits behind your toothache and how an emergency dentist in Manchester provides quick and effective treatment.",
  author: "Dr. Ben Carter",
  readTime: "9 min read",
  category: "Diagnosis",
  imgSrc: "https://images.unsplash.com/photo-1621251390311-66c30f40ce7e",
  imgAlt: "A close-up of a tooth, highlighting dental issues like decay.",
};

const faqs = [
  { question: "How does an emergency dentist diagnose the cause of toothache?", answer: "An emergency dentist will perform a thorough examination, including visual inspection, gentle probing, and often an X-ray to pinpoint the exact cause of your tooth pain. They may also test the vitality of the tooth." },
  { question: "Can a simple cavity cause severe tooth pain?", answer: "Yes, if a cavity is deep enough to reach the nerve (pulp) of the tooth, it can cause excruciating pain, especially when exposed to hot, cold, or sweet stimuli. This often requires an emergency filling or root canal." },
  { question: "What is a dental abscess and how is it treated?", answer: "A dental abscess is a pocket of pus caused by a bacterial infection, often at the root of a tooth or in the gums. Treatment involves draining the pus, often through an incision or root canal treatment, and prescribing antibiotics to clear the infection." },
  { question: "My tooth pain comes and goes. Is it still an emergency?", answer: "Intermittent pain, especially if sharp or severe, can still indicate a serious underlying problem, such as a cracked tooth or early nerve infection. It's best to consult an emergency dentist in Manchester to prevent it from worsening." },
  { question: "Can wisdom teeth cause referred pain in other areas?", answer: "Yes, impacted or erupting wisdom teeth can cause pain that radiates to your jaw, ear, or head. An emergency dentist can assess the wisdom tooth's position and recommend appropriate treatment, which may include extraction." },
  { question: "How can clenching or grinding teeth cause tooth pain?", answer: "Bruxism (teeth grinding) or clenching puts excessive force on your teeth, leading to cracks, fractures, wear, and jaw pain. An emergency dentist can diagnose this and provide temporary relief, potentially recommending a night guard." },
  { question: "What if my toothache is due to a broken filling or crown?", answer: "A broken filling or crown exposes the sensitive inner parts of your tooth to extreme temperatures and pressure, causing pain. An emergency dentist can provide a temporary or permanent restoration to seal and protect the tooth." },
  { question: "How quickly can an emergency dentist stop my severe tooth pain relief in Manchester?", answer: "In most cases, an emergency dentist can provide significant pain relief during your initial appointment, often by numbing the area, draining infection, or providing a temporary restoration. The goal is to get you out of immediate pain." },
  { question: "Is toothache always a sign of a serious dental problem?", answer: "While some mild toothaches can be from temporary sensitivity or food impaction, persistent or severe tooth pain is almost always a sign of an underlying issue that requires professional attention to prevent further complications." },
  { question: "What's the cost of emergency toothache treatment in Manchester?", answer: "The cost starts with an initial emergency consultation fee (usually £42). The total cost depends on the diagnosis and the specific treatment required. A clear breakdown will be provided before any work begins." }
];

const TopCausesToothPainPost = () => {
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
      
      <p className="lead">Tooth pain can be debilitating, often striking without warning and causing immense discomfort. Understanding the common causes behind your toothache is the first step towards getting effective treatment. An emergency dentist in Manchester is equipped to diagnose and treat these issues quickly, providing much-needed relief. Let's explore the top culprits and how they're handled.</p>
      
      <img src={post.imgSrc} alt={post.imgAlt} />

      <h2>1. Dental Cavities (Tooth Decay)</h2>
      <p>Cavities are the most common cause of tooth pain. When bacteria in your mouth produce acids that erode tooth enamel, they create holes. If a cavity reaches the inner layers of the tooth (dentin or pulp), it can cause sensitivity to hot, cold, or sweet foods, and eventually, severe, persistent pain.</p>
      <p><strong>Emergency Treatment:</strong> An emergency dentist will remove the decayed material and place a filling. If the decay is extensive and has reached the pulp, a root canal treatment may be necessary to save the tooth and eliminate the pain.</p>

      <h2>2. Dental Abscess</h2>
      <p>An abscess is a localized collection of pus, usually caused by a bacterial infection at the root of a tooth or between the gum and a tooth. It can lead to throbbing pain, facial swelling, fever, and a bad taste in your mouth. This is a critical dental emergency that requires immediate attention.</p>
      <p><strong>Emergency Treatment:</strong> The primary goal is to drain the pus to relieve pressure and stop the spread of infection. This may involve an incision to drain the abscess, followed by a root canal or extraction of the affected tooth. Antibiotics are often prescribed.</p>

      <h2>3. Cracked or Fractured Teeth</h2>
      <p>Cracks can occur from biting on something hard, trauma, or even extensive fillings. These cracks can expose the tooth's sensitive inner layers to bacteria and temperature changes, leading to sharp, intermittent pain, especially when chewing or biting down.</p>
      <p><strong>Emergency Treatment:</strong> Treatment depends on the severity of the crack. Minor cracks might be filled, while more extensive fractures may require a crown, root canal, or even extraction if the tooth is irreparable.</p>

      <h2>4. Gum Disease (Periodontitis)</h2>
      <p>Advanced gum disease causes inflammation and infection of the gums and bone supporting your teeth. This can lead to loose teeth, receding gums, and significant pain, especially during chewing or when brushing.</p>
      <p><strong>Emergency Treatment:</strong> An emergency dentist can provide immediate relief by cleaning the infected pockets and prescribing antibiotics. Long-term treatment will involve deep cleaning (scaling and root planing) and ongoing periodontal care.</p>

      <h2>5. Impacted Wisdom Teeth</h2>
      <p>When wisdom teeth don't have enough room to erupt properly, they can become impacted, leading to pain, swelling, infection (pericoronitis), and even damage to adjacent teeth. This is a common source of severe tooth pain relief in Manchester.</p>
      <p><strong>Emergency Treatment:</strong> An emergency dentist can manage the infection with antibiotics, provide pain relief, and if necessary, plan for the surgical removal of the impacted wisdom tooth.</p>

      <h2>6. Damaged or Lost Fillings/Crowns</h2>
      <p>A broken or dislodged filling or crown can leave the underlying tooth structure exposed and highly sensitive to external stimuli. This can cause sharp pain and discomfort, especially when eating or drinking.</p>
      <p><strong>Emergency Treatment:</strong> The dentist for toothache in Bolton or Bury can provide a temporary filling or re-cement a crown to protect the tooth and relieve sensitivity. A permanent restoration will then be planned.</p>

      <h2>7. Bruxism (Teeth Grinding)</h2>
      <p>Chronic teeth grinding or clenching, often stress-related or occurring during sleep, can cause significant tooth wear, cracks, and jaw pain. This pain can radiate to other teeth and even the head or ear.</p>
      <p><strong>Emergency Treatment:</strong> While long-term solutions include night guards, an emergency dentist can provide advice for immediate pain management and discuss temporary relief strategies. This helps manage the toothache treatment in Bury or other areas.</p>

      <blockquote>If you're experiencing any of these types of tooth pain, don't delay. Contact an emergency dentist in Manchester for rapid diagnosis and effective treatment. Your comfort and oral health are our priority.</blockquote>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default TopCausesToothPainPost;