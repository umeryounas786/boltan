import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, Edit3, Rss } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { blogPostsData } from '@/lib/blogData';

export function BlogPreview({ isPage = false }) {
  const postsToDisplay = isPage ? blogPostsData : blogPostsData.slice(0, 3);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.07,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const sectionStyles = !isPage ? {
    backgroundImage: 'linear-gradient(to bottom right, #0f172a, rgba(17, 24, 39, 0.8), #0f172a)',
  } : {};

  const badgeStyles = !isPage ? {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    color: 'hsl(0, 84.2%, 70.2%)',
    borderColor: 'rgba(239, 68, 68, 0.3)',
  } : {};
  
  const badgeIconStyles = !isPage ? { color: 'hsl(0, 84.2%, 70.2%)' } : {};

  const cardOuterStyles = !isPage ? {
    backgroundColor: 'rgba(30, 41, 59, 0.4)',
    borderColor: 'rgba(51, 65, 85, 0.6)',
  } : {};
  
  const cardCategoryStyles = !isPage ? { color: 'hsl(0, 84.2%, 70.2%)' } : {};
  const cardTitleStyles = !isPage ? { color: 'white' } : {};
  const cardExcerptStyles = !isPage ? { color: 'rgba(209, 213, 219, 0.9)' } : {};
  const cardMetaTextStyles = !isPage ? { color: '#9ca3af' } : {};
  const cardMetaIconStyles = !isPage ? { color: '#6b7280' } : {};
  
  const cardButtonStyles = !isPage ? {
    color: 'white',
    borderColor: 'rgba(255, 255, 255, 0.7)',
  } : {};

  return (
    <section 
      id={isPage ? "blog-page" : "blog-preview-homepage"} 
      className={`py-20 lg:py-28 ${isPage ? 'page-background-light' : ''}`}
      style={sectionStyles}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isPage && (
            <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{duration: 0.5, ease: "easeOut"}}
            className="text-center mb-16"
            >
            <Link to="/blog" className="inline-block hover:opacity-80 transition-opacity">
              <div 
                className="inline-flex items-center justify-center px-5 py-2 rounded-full text-md font-medium mb-4 border"
                style={badgeStyles}
                id="expert-insights-badge"
              >
                  <Edit3 className="w-5 h-5 mr-2" style={badgeIconStyles} />
                  Expert Dental Insights
              </div>
            </Link>
            <h2 className={`text-4xl lg:text-5xl font-black mb-6 dynamic-text-shadow section-title ${isPage ? 'page-main-title' : 'text-brand-black-text'}`}>
                Emergency Dental Care Guide
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed section-description opacity-90 ${isPage ? 'page-description' : 'text-white'}`}>
                Stay informed with expert advice, tips, and insights for handling dental emergencies effectively and maintaining your oral health.
            </p>
            </motion.div>
        )}

        <div className={`grid md:grid-cols-2 ${isPage ? 'lg:grid-cols-3' : 'lg:grid-cols-3'} gap-6 lg:gap-8`}>
          {postsToDisplay.map((post, index) => (
            <motion.div
              key={post.slug}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 group ${isPage ? 'blog-card-light card-hover-effect' : 'border hover:bg-slate-700/50'}`}
              style={cardOuterStyles}
              id={!isPage ? 'blog-preview-card' : ''}
            >
              <Link to={`/blog/${post.slug}`} className="block h-56 sm:h-60 overflow-hidden">
                <img   
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350 ease-in-out" 
                  alt={post.imageDescription}
                  width={500}
                  height={300}
                  src={post.imgSrc} 
                />
              </Link>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <span 
                  className={`text-xs font-semibold uppercase mb-2.5 tracking-wider ${isPage ? 'text-red-400' : ''}`}
                  style={cardCategoryStyles}
                >
                  {post.category}
                </span>
                <h3 
                  className={`text-xl lg:text-2xl font-bold mb-3.5 leading-tight group-hover:text-red-300 transition-colors duration-200 ${isPage ? 'card-title' : ''}`}
                  style={cardTitleStyles}
                >
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p 
                  className={`text-sm leading-relaxed flex-grow mb-7 ${isPage ? 'card-description' : ''}`}
                  style={cardExcerptStyles}
                >
                  {post.excerpt}
                </p>
                <div className={`flex items-center justify-between text-xs font-medium mb-7`}>
                  <div className="flex items-center" style={cardMetaTextStyles}>
                    <Clock className={`w-4 h-4 mr-1.5`} style={cardMetaIconStyles} />
                    {post.readTime}
                  </div>
                  <div className="flex items-center" style={cardMetaTextStyles}>
                    <User className={`w-4 h-4 mr-1.5`} style={cardMetaIconStyles} />
                    {post.author}
                  </div>
                </div>
                <Button 
                  asChild
                  variant="outline"
                  className={`w-full mt-auto !font-semibold !text-sm ${isPage ? 'secondary-cta' : 'secondary-cta-dark'}`}
                  style={cardButtonStyles}
                >
                  <Link to={`/blog/${post.slug}`}>
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
         {!isPage && (
            <div className="text-center mt-16">
                <Button 
                    asChild
                    className="primary-cta !text-lg !px-8 !py-4"
                >
                    <Link to="/blog">
                        Explore All Articles <Rss className="w-5 h-5 ml-2" />
                    </Link>
                </Button>
            </div>
        )}
        {isPage && postsToDisplay.length === 0 && (
          <p className="text-center text-brand-gray-medium text-lg col-span-full mt-10">No blog posts available yet. Check back soon!</p>
        )}
      </div>
    </section>
  );
}