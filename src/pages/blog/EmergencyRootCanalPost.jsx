import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "What Really Happens During an Emergency Root Canal in Bolton?",
  description: "The phrase 'root canal' can cause anxiety, but this tooth-saving procedure is painless with modern techniques. Learn what to expect from an emergency root canal in Bolton.",
  author: "Dr. Ben Carter",
  readTime: "9 min read",
  category: "Treatments",
  imgSrc: "https://images.unsplash.com/photo-1591123720169-2602f65b9a1a",
  imgAlt: "A high-tech dental microscope used for precision endodontic treatments like root canals.",
};

const faqs = [
    { question: "Why would I need an emergency root canal?", answer: "You'd need one if the pulp (the soft tissue inside your tooth containing nerves and blood vessels) becomes inflamed or infected. This is often caused by deep decay, a large filling, a crack in the tooth, or trauma. The result is often a severe, throbbing toothache." },
    { question: "Is a root canal treatment painful?", answer: "No. This is the biggest misconception in dentistry. The pain you feel is from the infection *before* the treatment. The root canal procedure itself is performed under local anesthetic, so you won't feel any pain. The treatment is what relieves the pain." },
    { question: "What is the purpose of a root canal?", answer: "The purpose is to save your natural tooth and prevent the need for extraction. The procedure removes the infected or inflamed pulp, cleans and disinfects the inside of the tooth, and then fills and seals it." },
    { question: "How long does an emergency root canal take?", answer: "An emergency appointment focuses on getting you out of pain. This first stage can take around 60-90 minutes. A full root canal treatment may require one or two appointments depending on the complexity and extent of the infection." },
    { question: "What are the steps of the procedure?", answer: "First, we numb the tooth completely. A small protective sheet called a 'rubber dam' is placed to keep the tooth clean. We then make a small opening in the tooth, remove the damaged pulp, clean and shape the root canals, and fill them with a rubber-like material called gutta-percha. Finally, a temporary or permanent filling is placed." },
    { question: "What happens after the first emergency appointment?", answer: "At the first visit, we'll do the most important part: removing the infected nerve tissue to stop the pain. We'll place a temporary filling, and you'll need to return for a second appointment to have the permanent filling and usually a crown placed." },
    { question: "Why do I need a crown after a root canal?", answer: "A tooth that has had a root canal is more brittle and prone to fracture than a healthy tooth. A crown is a protective cap that covers the tooth, restoring its strength and function and protecting it for the long term." },
    { question: "What is the alternative to a root canal?", answer: "The only alternative to a root canal is extracting the tooth. While sometimes necessary, we always prefer to save your natural tooth whenever possible. Losing a tooth can lead to other problems like shifting teeth or bone loss." },
    { question: "How will I feel after the procedure?", answer: "Once the anesthetic wears off, the tooth may be a little tender for a few days, which is easily managed with over-the-counter painkillers. The severe, throbbing pain from the infection will be gone." },
    { question: "I'm in Bolton and in severe pain. How quickly can you help?", answer: "If you have symptoms of needing a root canal, like severe toothache, swelling, or a pimple on your gum, contact our Bolton emergency service immediately. We will arrange to see you the same day to get you out of pain." }
];

const RootCanalPost = () => {
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
      
      <p className="lead">Few phrases in dentistry cause as much unnecessary fear as "root canal." Thanks to outdated stories and myths, many people associate it with pain. The reality is the exact opposite: a root canal is a pain-relieving procedure that saves a tooth from extraction. Let's demystify what happens during an emergency root canal at our Bolton clinic.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1664530837840-07497f9fe437" />

      <h2>Why Would You Need a Root Canal in an Emergency?</h2>
      <p>A root canal is needed when the pulp—the living tissue inside your tooth—becomes infected or inflamed. In an emergency, this usually presents as a severe, persistent, throbbing toothache, extreme sensitivity to hot or cold, swelling of the gum or face, or a pimple-like bump on the gum near the tooth. The goal of the emergency visit is simple: to relieve this intense pain.</p>

      <blockquote>A root canal doesn't cause pain, it relieves it. The pain is caused by the infection inside your tooth.</blockquote>
      
      <h2>The Modern, Pain-Free Root Canal Process: A Step-by-Step Guide</h2>
      <p>Forget what you've seen in movies. Today's root canal treatment is a sophisticated, comfortable procedure, similar to getting a routine filling.</p>
      <ol>
        <li><strong>Complete Numbing:</strong> The first and most important step is to ensure you are completely comfortable. We use a powerful local anesthetic to thoroughly numb the tooth and surrounding area. You will not feel any pain during the procedure.</li>
        <li><strong>Isolating the Tooth:</strong> We place a small sheet of latex or non-latex material called a "rubber dam" around the tooth. This isolates it from the rest of your mouth, keeping it clean and dry during treatment.</li>
        <li><strong>Creating an Opening:</strong> A small opening is made in the top of the tooth to access the pulp chamber and root canals.</li>
        <li><strong>Cleaning the Canals:</strong> We use tiny, precise instruments to carefully remove the infected or inflamed pulp tissue. The canals are then cleaned, disinfected, and shaped to prepare them for filling.</li>
        <li><strong>Placing a Temporary Filling:</strong> In an emergency appointment, we will typically place a medicated dressing inside the tooth to help it settle and seal the opening with a secure temporary filling. The severe pain will be gone.</li>
      </ol>

      <h2>What Comes After the Emergency Visit?</h2>
      <p>The emergency appointment is the first stage. You will need to return for a follow-up visit to complete the treatment. At the next appointment, we will permanently fill the root canals and then, in most cases, prepare the tooth for a dental crown. A crown is essential to protect the now-brittle tooth from fracturing in the future.</p>
      
      <p>An emergency root canal is one of the most effective procedures in modern dentistry, allowing us to save teeth that would have been lost in the past. If you're in Bolton and experiencing severe tooth pain, don't endure it. Contact us for a painless solution.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default RootCanalPost;