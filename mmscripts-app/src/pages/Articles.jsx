import { motion } from 'framer-motion';
import { useState } from 'react';

const Articles = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Sample articles - Replace with Firebase data in production
  const [articles] = useState([
    {
      id: 1,
      title: 'Welcome to MMSCRIPTS: Our Journey Begins',
      author: 'Founder, MMSCRIPTS',
      date: 'December 1, 2025',
      excerpt: 'Today marks the beginning of an exciting journey. MMSCRIPTS was born from a simple belief: every story deserves to be told, and every voice deserves to be heard...',
      content: `Today marks the beginning of an exciting journey. MMSCRIPTS was born from a simple belief: every story deserves to be told, and every voice deserves to be heard.

In an era where publishing has become more accessible yet more competitive than ever, we saw a need for a different kind of publishing house—one that puts authors first, values quality over quantity, and builds genuine community over mere transactions.

Our mission is not just to help you publish a book. It's to help you build a writing career, find your unique voice, and connect with readers who will cherish your work. We're here to demystify the publishing process, provide professional guidance, and support you every step of the way.

As we embark on this journey together, I'm filled with excitement about the stories we'll help bring to life, the authors we'll empower, and the community we'll build. Publishing is more than just printing pages—it's about giving emotions, ideas, and experiences a permanent home in the world.

Thank you for being part of our story. Let's write the next chapter together.`,
      image: 'public/MMSCRIPTS_Transparent.png',
      category: 'Founders Note'
    },
    {
      id: 2,
      title: 'The Power of Consistent Writing: Introducing InkStreak',
      author: 'Editorial Team',
      date: 'December 5, 2025',
      excerpt: 'Writing is not just about talent—it\'s about consistency. That\'s why we\'re launching the InkStreak Writing Challenge, a community initiative designed to help writers develop...',
      content: `Writing is not just about talent—it's about consistency. That's why we're launching the InkStreak Writing Challenge, a community initiative designed to help writers develop a sustainable writing practice.

The concept is simple: write every day, no matter how much or how little. Whether it's 100 words or 10,000, what matters is showing up. Over time, this consistency builds momentum, develops your craft, and transforms writing from an occasional hobby into a daily habit.

Studies show that writers who maintain a consistent practice are more likely to complete manuscripts, improve their skills faster, and find satisfaction in their creative journey. InkStreak provides the accountability and community support you need to make writing a non-negotiable part of your day.

Join us in this challenge and discover what consistent writing can do for your creativity, productivity, and confidence as an author.`,
      image: 'public/Ink.png',
      category: 'Writing Tips'
    },
    {
      id: 3,
      title: '5 Common Mistakes First-Time Authors Make',
      author: 'Editorial Team',
      date: 'December 10, 2025',
      excerpt: 'Publishing your first book is an exciting milestone, but it\'s easy to stumble along the way. Here are five common mistakes we see first-time authors make...',
      content: `Publishing your first book is an exciting milestone, but it's easy to stumble along the way. Here are five common mistakes we see first-time authors make—and how to avoid them.

1. Skipping Professional Editing
Many first-time authors underestimate the importance of professional editing. Your book is your calling card as a writer, and typos or structural issues can undermine even the best story.

2. Rushing the Publishing Process
Quality takes time. Rushing through design, formatting, or marketing can result in a subpar product that doesn't do your work justice.

3. Ignoring Cover Design
Readers do judge books by their covers. Investing in professional cover design significantly impacts how your book is perceived and can directly affect sales.

4. Neglecting Marketing
Writing the book is only half the battle. Without a marketing plan, even the best books struggle to find readers. Start building your author platform early.

5. Not Understanding Publishing Options
Traditional, self-publishing, hybrid—each has pros and cons. Understanding your options helps you make informed decisions aligned with your goals.

At MMSCRIPTS, we guide authors through these challenges, ensuring your publishing journey is smooth, professional, and successful.`,
      image: 'public/mistake.png',
      category: 'Publishing Advice'
    },
  ]);

  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-700 text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('public/BooksBackground.jpg')",
            opacity: 0.75
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-700/80"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Articles & Insights</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Thoughts on writing, publishing, and building a thriving author community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles List */}
      {!selectedArticle ? (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-12">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-semibold text-primary">{article.category}</span>
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3 hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-4">by {article.author}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {article.excerpt}
                      </p>
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                      >
                        Read Full Article
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Single Article View */
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex items-center text-primary hover:text-blue-700 mb-8 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Articles
              </button>

              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-semibold text-primary">{selectedArticle.category}</span>
                    <span className="text-sm text-gray-500">{selectedArticle.date}</span>
                  </div>
                  <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
                    {selectedArticle.title}
                  </h1>
                  <p className="text-gray-600">by {selectedArticle.author}</p>
                </div>

                <div className="lg:flex lg:gap-8 mb-8">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full lg:w-1/3 h-[300px] lg:h-[300px] object-cover object-center rounded-xl mb-6 lg:mb-0 lg:float-left lg:mr-8"
                  />
                  
                  <div className="prose prose-lg max-w-none flex-1">
                    {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {!selectedArticle && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              {...fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Want to Contribute?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We welcome guest articles from our author community. Share your insights, experiences, 
                and expertise with fellow writers.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Submit Your Article
              </a>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Articles;
