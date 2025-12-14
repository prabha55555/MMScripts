import { motion } from 'framer-motion';
import Button from '../components/Button';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: '✍️',
      title: 'Editing & Proofreading',
      description: 'Professional editing services to polish your manuscript to perfection.'
    },
    {
      icon: '📚',
      title: 'Publishing',
      description: 'Complete publishing solutions for eBooks, paperbacks, and hardcovers.'
    },
    {
      icon: '🎨',
      title: 'Design',
      description: 'Eye-catching cover designs and professional formatting services.'
    },
    {
      icon: '📢',
      title: 'Marketing',
      description: 'Strategic marketing support to help your book reach the right audience.'
    },
    {
      icon: '👥',
      title: 'Community',
      description: 'Join a vibrant writing community and grow together with fellow authors.'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Publishing emotions,<br />not just pages.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg lg:text-xl mb-8 leading-relaxed text-blue-100"
            >
              MMSCRIPTS is where stories come alive. We empower authors, nurture creativity, 
              and build a community of passionate storytellers committed to sharing their voice with the world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button to="/services" variant="secondary">
                Explore Services
              </Button>
              <Button to="/contact" className="bg-white text-primary hover:bg-gray-100">
                Join Writing Community
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              MMSCRIPTS was born from a simple belief: every story deserves to be told, 
              and every voice deserves to be heard. As an MSME-registered publishing house, 
              we combine professional expertise with personal care to help authors transform 
              their manuscripts into published works they can be proud of.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our vision is to create a supportive ecosystem where writers don't just publish books—they 
              build careers, form lasting connections, and inspire readers around the world.
            </p>
            <Button to="/about" variant="primary">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive publishing solutions tailored to bring your literary dreams to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="text-center mt-12"
          >
            <Button to="/services" variant="primary">
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Achievements Highlight */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-3">InkStreak Writing Challenge</h3>
                <p className="text-blue-100 leading-relaxed">
                  Our flagship initiative encouraging writers to maintain consistency 
                  and develop their craft through daily writing practice.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-2xl font-bold mb-3">Amazon eBook Milestone</h3>
                <p className="text-blue-100 leading-relaxed">
                  Successfully helping authors publish and reach readers worldwide 
                  through Amazon's global platform.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Button to="/achievements" className="bg-white text-primary hover:bg-gray-100">
                Explore Our Journey
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Focus */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Join Our Writing Community
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At MMSCRIPTS, we believe that writing is not a solitary journey. 
              Our community brings together aspiring and established authors who support, 
              inspire, and learn from each other. Whether you're working on your first draft 
              or your tenth book, you'll find a home here.
            </p>
            <blockquote className="text-xl italic text-primary mb-8 border-l-4 border-primary pl-6 py-4 bg-white rounded-r-lg shadow-md">
              "Every writer has a unique voice. Our mission is to help you find yours 
              and share it with confidence."
            </blockquote>
            <p className="text-gray-600 mb-8">— Founder, MMSCRIPTS</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/team" variant="primary">
                Meet Our Team
              </Button>
              <Button to="/contact" variant="secondary">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
