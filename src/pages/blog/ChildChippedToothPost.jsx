import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

const post = {
  title: "Dental Emergency for Kids: What to Do If Your Child Chips a Tooth",
  description: "A chipped tooth can be a scary experience for a child and parent. This guide explains the immediate steps to take and how we provide gentle, child-focused emergency care.",
  author: "Dr. Chloe Davis",
  readTime: "7 min read",
  category: "Pediatric Care",
  imgSrc: "https://images.unsplash.com/photo-1546521593-528e06254146",
  imgAlt: "A happy, smiling child pointing to their healthy teeth.",
};

const faqs = [
    { question: "My child just chipped a tooth. What's the very first thing I should do?", answer: "First, stay calm to reassure your child. Have them rinse their mouth with warm water to clean the area. If you can find the chipped fragment, place it in milk or saliva and bring it with you. Apply a cold compress to their face to reduce any swelling." },
    { question: "Is a small chip on a baby tooth still an emergency?", answer: "Yes. Even small chips should be evaluated by a dentist. A sharp edge could cut your child's lip or tongue, and the damage could hide a deeper crack. We need to ensure the nerve isn't at risk and smooth any sharp edges." },
    { question: "How do you fix a chipped tooth for a child?", answer: "For most chips, we use a simple and painless procedure called dental bonding. We apply a tooth-coloured composite resin to the tooth and sculpt it to match the original shape. It's quick and provides a great-looking result." },
    { question: "Will my child need an injection for the repair?", answer: "For most simple bonding procedures on a chipped tooth, no anesthetic injection is needed, as the work is on the outer enamel layer. If the chip is very deep and close to the nerve, we will ensure your child is completely numb and comfortable before we begin." },
    { question: "What if the chip is on a permanent adult tooth?", answer: "The treatment is similar (usually bonding), but the urgency is just as high. We want to protect the permanent tooth from further damage and ensure its long-term health and appearance. The same first-aid steps apply." },
    { question: "How can I manage my child's pain?", answer: "You can give them age-appropriate pain relief, such as children's paracetamol or ibuprofen. A cold compress on the cheek is also very effective. Avoid giving them very hot, cold, or hard foods until they've been seen by a dentist." },
    { question: "How do you handle a child who is scared or anxious?", answer: "Our team is highly experienced with pediatric patients. We use a friendly, gentle approach, explaining what we're doing in simple terms ('tell-show-do'). Our goal is to build trust and make the visit a positive, non-threatening experience." },
    { question: "Can a chipped tooth lead to other problems if left untreated?", answer: "Yes. A chip can weaken the tooth, making it more susceptible to a larger fracture. It can also expose the inner dentin layer, leading to sensitivity, or allow bacteria to enter, potentially causing an infection or abscess down the line." },
    { question: "How can I prevent my child from chipping their teeth?", answer: "While accidents happen, the best prevention for sports-related injuries is a custom-fitted mouthguard. Also, discourage habits like chewing on ice, pens, or other hard objects." },
    { question: "My child's chipped tooth has turned dark. What does that mean?", answer: "A tooth turning grey or dark after trauma can indicate that the nerve inside the tooth has been damaged or has died. This requires an urgent dental assessment, as the tooth may need further treatment, like a pediatric root canal, to prevent infection." }
];

const ChildChippedToothPost = () => {
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
      
      <p className="lead">The sound of a fall on the playground followed by tears is a moment every parent dreads. Discovering your child has chipped a tooth can be alarming, but knowing the right steps to take can make the situation much less stressful for both of you. Here’s your guide to handling this common pediatric dental emergency.</p>
      
      <img  src={post.imgSrc} alt={post.imgAlt} src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10" />

      <h2>Immediate First Aid: Your Calm Response is Key</h2>
      <p>Your child will look to you for reassurance. By staying calm and acting decisively, you can provide immediate comfort and take the necessary steps to protect their smile.</p>
      <ol>
        <li><strong>Clean the Area:</strong> Have your child rinse their mouth with warm water to wash away any blood or debris.</li>
        <li><strong>Reduce Swelling:</strong> Apply a cold compress or an ice pack wrapped in a cloth to your child's cheek or lips near the injured area.</li>
        <li><strong>Find the Fragment:</strong> If you can find the piece of the chipped tooth, place it in a small container of milk or saliva and bring it with you to our clinic.</li>
        <li><strong>Call Us Immediately:</strong> Contact our emergency dental line. We prioritize pediatric emergencies and will advise you on the next steps and schedule an urgent appointment.</li>
      </ol>

      <blockquote>Even a tiny chip on a baby tooth should be seen by a dentist to rule out more serious damage and smooth any sharp edges.</blockquote>
      
      <h2>How We Care for Your Child's Chipped Tooth</h2>
      <p>Our approach to pediatric dental care is gentle, patient, and focused on making your child feel safe. The treatment for a chipped tooth is usually straightforward and painless.</p>
      
      <h3>Dental Bonding: The Go-To Solution</h3>
      <p>For most chipped teeth, the solution is a simple procedure called dental bonding. Here's what it involves:</p>
      <ul>
        <li>We select a tooth-coloured composite resin that perfectly matches your child's other teeth.</li>
        <li>The tooth surface is prepared with a gentle conditioning liquid.</li>
        <li>The putty-like resin is applied to the chipped area and skillfully sculpted to restore the tooth's natural shape.</li>
        <li>A special light is used to harden the resin, bonding it securely to the tooth.</li>
        <li>Finally, we polish the restored tooth so it blends in seamlessly.</li>
      </ul>
      <p>This entire process is typically completed in one short, pain-free visit, often without the need for any anesthetic injections.</p>

      <h3>Monitoring for Deeper Issues</h3>
      <p>After any trauma, we will monitor the tooth to ensure the nerve inside remains healthy. A tooth changing color to a darker shade can be a sign of nerve damage, which would require further attention. By seeking immediate care, you ensure we can track the tooth's health from the very beginning.</p>
      
      <p>A chipped tooth doesn't have to be a traumatic memory. With prompt action and gentle, expert care, we can quickly restore your child's tooth and their happy, confident smile.</p>

      <FaqAccordion faqs={faqs} />
    </motion.article>
  );
};

export default ChildChippedToothPost;