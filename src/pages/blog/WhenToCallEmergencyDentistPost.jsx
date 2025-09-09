import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "When to Call an Emergency Dentist: 7 Signs You Shouldn’t Wait",
  description: "Unsure if your dental issue is a true emergency? This guide covers 7 critical signs that mean you need to call an emergency dentist in Manchester immediately.",
  author: "Dr. Anya Sharma",
  readTime: "8 min read",
  category: "Patient Education",
  imgSrc: "https://images.unsplash.com/photo-1576091160550-2173dba9996a",
  imgAlt: "A person holding a phone, looking concerned, about to call for an emergency.",
};

const faqs = [
    { question: "What is the number one sign I need an emergency dentist?", answer: "Severe, persistent, and throbbing pain that isn't relieved by painkillers is the most common and urgent sign. It indicates a serious underlying problem like an infection or abscess that needs immediate attention." },
    { question: "My face is swollen. How serious is this?", answer: "Facial swelling is a major red flag for a dental abscess, which is a serious infection. You should contact an emergency dentist in Manchester immediately. If swelling affects your breathing or swallowing, go to A&E straight away." },
    { question: "I knocked my tooth out. Can it be saved?", answer: "Yes, but time is critical. Find the tooth, hold it by the crown (the white part), and if clean, try to reinsert it into the socket. If not, store it in milk or saliva and call us immediately. The sooner you act, the higher the chance of saving it." },
    { question: "Is a loose adult tooth an emergency?", answer: "Yes. An adult tooth should never be loose. It could be a sign of advanced gum disease or trauma. Seeking immediate care can often prevent the tooth from being lost completely." },
    { question: "What if I have bleeding from my mouth that won't stop?", answer: "Uncontrolled bleeding after an injury or extraction is a definite emergency. Apply firm, consistent pressure with a clean gauze or cloth and call your emergency dentist. If bleeding is severe, consider going to A&E." },
    { question: "I have a bad taste in my mouth and a bump on my gum. What is it?", answer: "This is a classic sign of a dental abscess. The bump (or fistula) is a channel draining pus from an infection at the root of the tooth. It requires urgent treatment to prevent the infection from spreading." },
    { question: "I had an accident and my jaw hurts. Is this a dental emergency?", answer: "Yes. Any significant trauma to the mouth or jaw requires an emergency assessment. You could have a fractured or dislocated jaw, which needs immediate medical and dental attention." },
    { question: "Can I just wait and see if the pain goes away?", answer: "This is never a good idea. Dental pain, especially severe pain, is a sign of an underlying problem that will not resolve on its own. Waiting often leads to more complex, painful, and expensive treatments later." },
    { question: "What if my emergency happens on a weekend in Manchester?", answer: "Our emergency dental service operates on weekends. We are a reliable weekend dentist in Manchester, ready to handle your urgent needs when other clinics are closed." },
    { question: "I'm looking for a 'dental emergency near me'. How do I know you're the right choice?", answer: "We specialize in urgent dental care, meaning our systems are built for speed and efficiency. We serve the entire Greater Manchester area, including Bolton, Bury, and Radcliffe, ensuring you get expert care quickly." }
];

const WhenToCallEmergencyDentistPost = () => {
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
      
      <p className="lead">It can be difficult to know what constitutes a true dental emergency. Is a chipped tooth urgent? What about a dull ache? Knowing when to seek immediate help can save your tooth, prevent serious complications, and get you out of pain faster. If you experience any of these 7 signs, it's time to call an emergency dentist in Manchester without delay.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} />

      <h2>1. Severe, Persistent Pain</h2>
      <p>This isn't just a minor ache. We're talking about severe, throbbing pain that interferes with your ability to eat, sleep, or concentrate. Pain this intense is a clear signal of a serious problem, such as a deep cavity, an infected nerve, or a dental abscess. Over-the-counter painkillers may not touch it, and you need professional help.</p>

      <h2>2. Swelling in Your Face, Jaw, or Gums</h2>
      <p>Swelling is a major red flag. It almost always indicates an infection that has spread from the tooth into the surrounding soft tissues. A dental abscess can be life-threatening if the infection spreads further into your body. This is one of the most critical signs you need an emergency dentist.</p>

      <h2>3. A Knocked-Out Adult Tooth</h2>
      <p>A knocked-out (avulsed) tooth is a time-sensitive emergency. With quick action, the tooth can often be successfully reimplanted. If this happens, find the tooth, handle it only by the crown (the chewing surface), and try to place it back in the socket. If you can't, store it in a small container of milk or your own saliva and get to an emergency dentist immediately.</p>

      <h2>4. A Loose Adult Tooth</h2>
      <p>An adult tooth should never feel loose or wobbly. This can be caused by an injury or advanced gum disease that has damaged the supporting bone. Prompt treatment is essential to have any chance of saving the tooth.</p>

      <h2>5. Uncontrolled Bleeding</h2>
      <p>Bleeding from the mouth that doesn't stop after applying firm pressure for 10-15 minutes is a serious issue. Whether it's from an injury, a recent extraction, or unexplained gum bleeding, it requires immediate medical attention.</p>

      <h2>6. Signs of an Abscess</h2>
      <p>Besides swelling, a key sign of an abscess is a small, pimple-like bump on your gum. This is a fistula, which is a tunnel created by the infection to drain pus. You might also notice a foul taste or smell in your mouth. An abscess will not go away on its own and requires urgent treatment.</p>

      <h2>7. Significant Trauma to the Mouth or Jaw</h2>
      <p>Any hard blow to the face, mouth, or jaw from a fall, sports injury, or accident should be evaluated immediately. You could have a fractured or dislocated jaw, or damage to your teeth that isn't immediately visible. This is a clear case where you need to find a 'dental emergency near me' right away.</p>

      <blockquote>If you're experiencing any of these symptoms in Manchester, Bolton, or Bury, don't hesitate. Our urgent dental care team is here to help. Call us now.</blockquote>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default WhenToCallEmergencyDentistPost;