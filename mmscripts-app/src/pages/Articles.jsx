import { motion } from 'framer-motion';

const Articles = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Writing Resources</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Tips, guides, and insights to help you on your writing journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600">
              We're working on creating valuable content for writers. Check back soon for articles, guides, and writing tips.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
