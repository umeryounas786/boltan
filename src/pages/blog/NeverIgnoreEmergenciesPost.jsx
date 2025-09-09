import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "5 Dental Emergencies You Should Never Ignore",
  description: "Some dental issues seem minor but can lead to serious complications. Learn about 5 common dental emergencies that require immediate attention from a dentist in Manchester.",
  author: "Dr. Ben Carter",
  readTime: "8 min read",
  category: "Patient Education",
  imgSrc: "https://images.unsplash.com/photo-1512484776495-a09d92e87c3b",
  imgAlt: "An open book with reading glasses, symbolizing the importance of patient education.",
};

const faqs = [
    { question: "Why is a loose adult tooth an emergency?", answer: "A loose adult tooth is a sign of significant trauma or advanced gum disease. If it's from an injury, it needs to be stabilized immediately to save it. If it's from gum disease, it indicates severe bone loss that requires urgent treatment to prevent tooth loss." },
    { question: "My toothache comes and goes. Is it still serious?", answer: "Yes. A toothache that subsides doesn't mean the problem has fixed itself. It often indicates the nerve inside the tooth is dying. The infection is likely still present and can lead to a painful abscess if left untreated." },
    { question: "What are the dangers of bleeding gums?", answer: "While minor bleeding from vigorous flossing can happen, persistent, spontaneous, or heavy bleeding from your gums is a classic sign of gum disease (gingivitis or periodontitis). Ignoring it can lead to bone loss, receding gums, and eventual tooth loss." },
    { question: "I have a metallic taste in my mouth. What could it be?", answer: "A metallic taste can sometimes be a sign of a cracked or leaking old metal (amalgam) filling. This means bacteria can get underneath the filling, causing decay in the tooth that you can't see. It needs to be assessed and likely replaced." },
    { question: "Why is a broken tooth an emergency even if it doesn't hurt?", answer: "A broken tooth has lost its protective outer layer of enamel. This makes it vulnerable to rapid decay and infection. The fracture can also spread deeper into the tooth under normal chewing pressure, potentially leading to a situation where the tooth cannot be saved." },
    { question: "Can a dental abscess go away on its own?", answer: "No, never. A dental abscess is a serious infection that requires professional draining and treatment (like a root canal or extraction). If the pain stops, it may mean the abscess has ruptured and the infection is spreading, which is even more dangerous." },
    { question: "Is jaw pain a dental emergency?", answer: "Persistent jaw pain, especially when accompanied by clicking, popping, or difficulty opening your mouth, can be a sign of Temporomandibular Joint (TMJ) disorder or issues with your bite. While not always an 'emergency' in the same way as an abscess, it requires prompt dental evaluation to prevent long-term problems." },
    { question: "What if I just have a small chip on a back tooth?", answer: "Even a small chip on a molar should be checked. It creates a rough surface that can trap plaque and be difficult to clean, leading to decay. It can also weaken the tooth structure, making it more likely to fracture further." },
    { question: "How can I tell the difference between sensitivity and a real problem?", answer: "Lingering pain is the key. If sensitivity to hot or cold lasts for more than a few seconds after the stimulus is gone, it's often a sign that the nerve is irritated or infected and needs to be checked." },
    { question: "If I have one of these signs, what should I do?", answer: "Do not wait to see if it gets better. Call our emergency dental clinic in Manchester immediately. Explain your symptoms clearly. Prompt action is the best way to save your tooth, prevent complications, and minimize treatment costs." }
];

const NeverIgnoreEmergenciesPost = () => {
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
      
      <p className="lead">It's easy to dismiss a minor toothache or a little bleeding from your gums, hoping it will just go away. However, some seemingly small dental issues are actually warning signs of much bigger problems. Ignoring them can lead to more pain, more complex treatments, and even tooth loss. Here are five dental emergencies you should never ignore.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>1. A Severe, Persistent Toothache</h2>
      <p>A toothache that is severe, throbbing, and keeps you up at night is not normal. It's a classic sign that the nerve (pulp) inside your tooth is infected or inflamed. This condition, called pulpitis, will not heal on its own and often requires a root canal to save the tooth. Ignoring it will almost certainly lead to a painful dental abscess.</p>

      <h2>2. A Loose or Shifting Adult Tooth</h2>
      <p>An adult tooth should never feel loose. If it does, it's a major red flag. Looseness can be caused by a traumatic injury or, more commonly, by advanced gum disease (periodontitis) that has destroyed the bone supporting the tooth. Immediate dental intervention is required to try and stabilize the tooth and treat the underlying cause.</p>

      <h2>3. Swelling in Your Gums, Jaw, or Face</h2>
      <p>Swelling is your body's response to infection. A swollen area on your gum, often looking like a pimple, is a sign of a dental abscess. Swelling in your cheek or jaw is a sign that the infection is spreading. This is a serious emergency that can have systemic health consequences if not treated immediately with professional drainage and antibiotics.</p>

      <h2>4. Bleeding Gums Accompanied by Pain or Swelling</h2>
      <p>While a little blood from flossing can happen, gums that bleed easily, are swollen, tender, or are pulling away from your teeth are clear signs of active gum disease. This is an infection of the tissues that hold your teeth in place. Left untreated, it will lead to bone loss and, eventually, tooth loss.</p>

      <h2>5. A Numb Tooth or a Tooth That Suddenly Stops Hurting</h2>
      <p>If you had a severe toothache that suddenly disappears, do not celebrate. This is often a very dangerous sign. It usually means the nerve inside the tooth has died and can no longer send pain signals. The infection that killed the nerve, however, is still there and is likely silently spreading and forming an abscess at the root of the tooth. A "numb" or dead tooth requires immediate dental assessment.</p>
      
      <p>Your oral health is directly linked to your overall health. If you experience any of these five signs, treat it as a serious warning. Contact our emergency dental clinic in Manchester for an urgent evaluation. Prompt action is always the best course.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default NeverIgnoreEmergenciesPost;