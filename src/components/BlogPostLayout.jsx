import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, ArrowLeft } from 'lucide-react';
import { blogPostsData } from '@/lib/blogData';

const EMERGENCY_NUMBER = "07375064619";

const RecommendedPostCard = ({ post }) => (
  <Link to={`/blog/${post.slug}`} className="block p-4 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors duration-200">
    <h4 className="font-bold text-brand-black-text">{post.title}</h4>
    <p className="text-sm text-brand-gray-text mt-1">{post.excerpt.substring(0, 70)}...</p>
    <span className="text-xs text-brand-red font-semibold mt-2 inline-block">Read More &rarr;</span>
  </Link>
);

const BlogPostLayout = ({ children }) => {
  const currentPath = window.location.pathname;
  const recommendedPosts = blogPostsData.filter(p => !currentPath.includes(p.slug)).slice(0, 3);

  return (
    <div className="bg-brand-slate-background page-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button asChild variant="outline" className="secondary-cta">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Articles
            </Link>
          </Button>
        </motion.div>
        <div className="grid lg:grid-cols-12 lg:gap-16">
          <main className="lg:col-span-8">
            <div className="prose-styles">
              {children}
            </div>
          </main>
          <aside className="lg:col-span-4 mt-12 lg:mt-0">
            <div className="sticky top-28 space-y-8">
              <div className="p-6 rounded-2xl bg-brand-red text-white emergency-gradient shadow-lg">
                <h3 className="text-2xl font-bold mb-3">Dental Emergency?</h3>
                <p className="text-red-200 text-red-200-alpha-70 mb-5">We're available 24/7 for immediate assistance.</p>
                <div className="space-y-3">
                   <Button asChild size="lg" className="w-full bg-white text-red-600 hover:bg-gray-200">
                      <a href={`tel:${EMERGENCY_NUMBER}`}>
                        <Phone className="w-5 h-5 mr-2" /> Call Now
                      </a>
                   </Button>
                   <Button asChild size="lg" className="w-full bg-slate-800/80 hover:bg-slate-800/90 text-white">
                     <Link to="/contact">
                        <Calendar className="w-5 h-5 mr-2" /> Book Online
                      </Link>
                   </Button>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-white shadow-md border border-slate-200">
                <h3 className="text-xl font-bold text-brand-black-text mb-4">You might also like...</h3>
                <div className="space-y-4">
                  {recommendedPosts.map(post => (
                    <RecommendedPostCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPostLayout;