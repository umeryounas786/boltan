import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Broken or Chipped Tooth? A Guide to Emergency Dental Fixes",
  description: "A chipped or broken tooth is a common dental emergency. Learn immediate first-aid steps and the professional treatments we offer, from cosmetic bonding to durable crowns.",
  author: "Dr. Anya Sharma",
  readTime: "8 min read",
  category: "Dental Injuries",
  imgSrc: "https://images.unsplash.com/photo-1629904853716-f0bc54eea48d",
  imgAlt: "A dentist carefully applying composite material to a chipped front tooth.",
};

const faqs = [
    { question: "Is a chipped tooth a dental emergency?", answer: "Yes. Even if it doesn't hurt, a chipped tooth should be considered an emergency. The sharp edge can cut your tongue or cheek, and the damage can weaken the tooth, making it prone to further fracture. It can also expose inner layers of the tooth to bacteria." },
    { question: "What should I do right after breaking a tooth?", answer: "Rinse your mouth with warm salt water. If you can, find the broken piece and bring it with you. Apply a cold compress to your cheek to reduce pain and swelling. If the tooth is sharp, you can cover it with sugar-free chewing gum or dental wax temporarily." },
    { question: "Can you fix a chipped tooth in one visit?", answer: "For minor to moderate chips, we can often repair the tooth in a single visit using a procedure called dental bonding. This involves applying a tooth-coloured composite resin to reshape the tooth." },
    { question: "What is dental bonding?", answer: "Dental bonding is a cosmetic procedure where a putty-like resin is applied to the tooth, sculpted into the proper shape, hardened with a special light, and then polished. It's a quick, painless, and cost-effective way to repair chips." },
    { question: "When is a crown needed instead of bonding?", answer: "A crown is recommended for a severely broken tooth where a large piece has broken off or the tooth has significant decay. A crown is a cap that covers the entire tooth, providing superior strength and protection against further damage." },
    { question: "What if the break is very close to the nerve?", answer: "If the fracture exposes the dental pulp (the nerve), you may need a root canal treatment before a crown can be placed. This procedure removes the damaged pulp, cleans the inside of the tooth, and prevents a painful infection." },
    { question: "Will the repair match the color of my other teeth?", answer: "Yes, perfectly. For dental bonding, we use a shade guide to select a composite resin that matches your natural tooth color. For crowns, the porcelain is custom-shaded to blend seamlessly with your smile." },
    { question: "How do I care for a bonded or crowned tooth?", answer: "Care for it as you would your natural teeth: brush twice a day, floss daily, and attend regular dental check-ups. It's also wise to avoid biting down on very hard objects with the restored tooth, such as ice, hard candy, or bottle caps." },
    { question: "My front tooth is broken. How quickly can you fix it?", answer: "We understand the aesthetic and functional importance of a front tooth. We prioritize these cases and will aim to see you the same day to provide an immediate solution, which is often dental bonding, to restore your smile." },
    { question: "Does it hurt to fix a broken tooth?", answer: "No. For most bonding procedures, an anesthetic is not even necessary. For more extensive repairs like crowns, we will completely numb the area with a local anesthetic to ensure you don't feel any pain during the treatment." }
];

const BrokenToothPost = () => {
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
      
      <p className="lead">That sickening crunch, followed by the discovery of a piece of your tooth—it’s a startling and common dental emergency. Whether from a fall, a sports injury, or biting down on something hard, a broken or chipped tooth requires immediate attention. Here’s what you should do and how we can professionally restore your smile.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1690167687106-180b0ea1d813" />

      <h2>Immediate First-Aid for a Broken Tooth</h2>
      <p>Your actions in the first few minutes can make a big difference. Follow these steps before you get to our clinic:</p>
      <ol>
        <li><strong>Rinse Your Mouth:</strong> Use warm salt water to clean the area and wash away any small debris.</li>
        <li><strong>Save the Fragment:</strong> If you can find the piece of tooth that broke off, place it in a small container of milk or saliva and bring it with you.</li>
        <li><strong>Manage Swelling:</strong> Apply a cold compress or ice pack to the cheek or lip over the broken tooth to help reduce pain and prevent swelling.</li>
        <li><strong>Protect Your Mouth:</strong> If the remaining tooth has a sharp edge, you can cover it with a piece of sugar-free gum or over-the-counter dental wax to protect your tongue and cheek.</li>
      </ol>
      
      <blockquote>Never ignore a chipped tooth, even if it doesn't hurt. A small fracture can quickly worsen or lead to infection if left untreated.</blockquote>

      <h2>Professional Fixes: How We Repair Your Tooth</h2>
      <p>The best treatment depends on the size and location of the break. We offer several effective solutions:</p>
      
      <h3>Dental Bonding (For Minor Chips)</h3>
      <p>For small to moderate chips, especially on front teeth, dental bonding is often the perfect solution. A tooth-coloured composite resin is skillfully applied and sculpted to restore the tooth's natural shape. This is typically a quick, painless, one-visit procedure that provides an excellent cosmetic result.</p>

      <h3>Dental Crown (For Major Breaks)</h3>
      <p>If a large piece of the tooth has broken off or the tooth is severely weakened, a dental crown is the ideal treatment. A crown, or "cap," is a custom-made restoration that covers the entire tooth, providing strength, protection, and a natural appearance. This usually requires two visits: one to prepare the tooth and take an impression, and a second to fit the permanent crown.</p>

      <h3>Veneers (Cosmetic Solution)</h3>
      <p>A porcelain veneer is a thin shell that is bonded to the front surface of a tooth. While often used for smile makeovers, a veneer can be an excellent way to repair a chipped front tooth, offering a very durable and stain-resistant finish.</p>

      <h3>Root Canal Therapy</h3>
      <p>If the fracture is deep enough to expose the tooth's nerve (pulp), a root canal may be necessary to prevent infection and save the tooth. After the root canal, a crown is placed to protect the tooth from further damage.</p>

      <p>A broken tooth doesn't have to be a disaster. With modern dental techniques, we can restore your tooth's function and appearance, often in a single visit. If you've suffered a dental injury, contact our emergency clinic immediately.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default BrokenToothPost;