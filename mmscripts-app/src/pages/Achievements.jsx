import { motion } from 'framer-motion';

const Achievements = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const milestones = [
    {
      year: '2025',
      title: 'MMSCRIPTS Founded',
      description: 'Established with a mission to democratize publishing and empower authors.',
      icon: '🚀'
    },
    {
      year: '2025',
      title: 'MSME Registration',
      description: 'Officially registered as a Micro, Small & Medium Enterprise with the Government of India.',
      icon: '📜'
    },
    {
      year: '2025',
      title: 'InkStreak Writing Challenge',
      description: 'Launched our flagship community initiative to promote consistent writing habits.',
      icon: '✍️'
    },
    {
      year: '2025',
      title: 'First Books Published',
      description: 'Successfully published our first collection of books on Amazon and other platforms.',
      icon: '📚'
    },
    {
      year: 'Ongoing',
      title: 'Growing Author Community',
      description: 'Building a vibrant network of writers supporting each other\'s creative journeys.',
      icon: '👥'
    },
  ];

  const stats = [
    { number: '50+', label: 'Authors Supported', icon: '✍️' },
    { number: '30+', label: 'Books Published', icon: '📖' },
    { number: '200+', label: 'Community Members', icon: '👥' },
    { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
  ];

  const successStories = [
    {
      author: 'Sarah Mitchell',
      book: 'The Journey Within',
      quote: 'MMSCRIPTS turned my manuscript into a published book I\'m proud of. Their support throughout the process was invaluable.',
      achievement: 'Bestseller in Personal Growth category'
    },
    {
      author: 'Rajesh Kumar',
      book: 'Whispers of Tomorrow',
      quote: 'The team at MMSCRIPTS understood my vision and helped me bring it to life with professionalism and care.',
      achievement: 'Featured in literary magazines'
    },
    {
      author: 'Priya Sharma',
      book: 'Echoes of Silence',
      quote: 'From editing to marketing, MMSCRIPTS provided comprehensive support that made my publishing journey smooth and enjoyable.',
      achievement: 'Winner of local poetry award'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-700 text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/BooksBackground.jpg')",
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Achievements</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Celebrating milestones, success stories, and the incredible journey we're building together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped MMSCRIPTS into what it is today.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-4 border-primary last:pb-0"
              >
                <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full transform -translate-x-[18px] flex items-center justify-center text-white font-bold text-sm">
                  {milestone.icon}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg ml-6">
                  <div className="text-sm font-bold text-primary mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* InkStreak Challenge Highlight */}
      <section className="relative py-16 lg:py-24 bg-primary text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/BooksBackground.jpg')",
            opacity: 0.75
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl mb-6">🏆</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              InkStreak Writing Challenge
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Our flagship community initiative that has helped hundreds of writers develop consistent 
              writing habits and complete their manuscripts. Join the challenge and be part of a 
              movement that's transforming how writers approach their craft.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Active Participants</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">10M+</div>
                <div className="text-blue-100">Words Written</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Completed Manuscripts</div>
              </div>
            </div>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Join InkStreak Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Author Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from authors who have achieved their publishing dreams with MMSCRIPTS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-gray-600 italic leading-relaxed mb-6">
                  {story.quote}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-800 mb-1">{story.author}</p>
                  <p className="text-sm text-gray-600 mb-2">Author of "{story.book}"</p>
                  <div className="inline-block bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {story.achievement}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Be Part of Our Success Story
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Your achievement could be featured here next. Start your publishing journey with MMSCRIPTS today.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
