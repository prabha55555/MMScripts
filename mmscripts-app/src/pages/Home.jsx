import { motion } from 'framer-motion';
import { BookOpen, Edit3, Palette, TrendingUp, Users, Award, Sparkles } from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: Edit3,
      title: 'Editing & Proofreading',
      description: 'Professional editing services to polish your manuscript to perfection.',
      color: 'text-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Publishing',
      description: 'Complete publishing solutions for eBooks, paperbacks, and hardcovers.',
      color: 'text-primary'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Eye-catching cover designs and professional formatting services.',
      color: 'text-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Marketing',
      description: 'Strategic marketing support to help your book reach the right audience.',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a vibrant writing community and grow together with fellow authors.',
      color: 'text-accent-gold'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Background */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-white">
        {/* Background with overlay */}
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              {/* MSME Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full mb-8 border border-primary/20"
              >
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span className="font-sans text-sm font-medium text-primary">MSME Registered Publishing House</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-6 leading-tight text-gray-800"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Publishing emotions,<br />
                <span className="text-primary">not just pages.</span>
              </motion.h1>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg lg:text-xl mb-10 leading-relaxed text-gray-600"
                style={{ fontFamily: 'Lora, Georgia, serif' }}
              >
                MMSCRIPTS is where stories come alive. We empower authors, nurture creativity, 
                and build a community of passionate storytellers committed to sharing their voice with the world.
              </motion.p>
              
              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button to="/services" variant="primary" className="group hover:shadow-elegant-lg transition-all duration-300">
                  <span className="flex items-center space-x-2">
                    <span>Explore Services</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </Button>
                <Button to="/contact" className="bg-primary text-white  hover:text-white hover:shadow-elegant transition-all duration-300">
                  Join Writing Community
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Large Logo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative">
                {/* Logo */}
                <motion.img
                  src="/MMSCRIPTS_Transparent.png"
                  alt="MMSCRIPTS Logo"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain relative z-10 drop-shadow-2xl"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4 inline-block relative" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Our Story
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
              </h2>
            </motion.div>
            
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg text-gray-700 leading-relaxed mb-6 mt-8"
              style={{ fontFamily: 'Lora, Georgia, serif' }}
            >
              MMSCRIPTS was born from a simple belief: every story deserves to be told, 
              and every voice deserves to be heard. As an MSME-registered publishing house, 
              we combine professional expertise with personal care to help authors transform 
              their manuscripts into published works they can be proud of.
            </motion.p>
            
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg text-gray-700 leading-relaxed mb-10"
              style={{ fontFamily: 'Lora, Georgia, serif' }}
            >
              Our vision is to create a supportive ecosystem where writers don't just publish books—they 
              build careers, form lasting connections, and inspire readers around the world.
            </motion.p>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Button to="/about" variant="primary" className="shadow-elegant hover:shadow-elegant-lg transition-all">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4 inline-block relative" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Our Services
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Lora, Georgia, serif' }}>
              Comprehensive publishing solutions tailored to bring your literary dreams to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 group cursor-pointer"
              >
                <div className={`${service.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-12 h-12" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Lora, Georgia, serif' }}>{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button to="/services" variant="primary" className="shadow-elegant hover:shadow-elegant-lg">
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Achievements Highlight */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-gray-800 inline-block relative"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Our Achievements
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div
                variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-blue-50 p-8 rounded-xl border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Award className="w-16 h-16 mb-4 mx-auto text-primary" />
                <h3 className="text-2xl font-serif font-bold mb-3 text-gray-800" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>InkStreak Writing Challenge</h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                  Our flagship initiative encouraging writers to maintain consistency 
                  and develop their craft through daily writing practice.
                </p>
              </motion.div>
              
              <motion.div
                variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-blue-50 p-8 rounded-xl border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <BookOpen className="w-16 h-16 mb-4 mx-auto text-primary" />
                <h3 className="text-2xl font-serif font-bold mb-3 text-gray-800" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>Amazon eBook Milestone</h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                  Successfully helping authors publish and reach readers worldwide 
                  through Amazon's global platform.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-12"
            >
              <Button to="/achievements" className="bg-primary text-secondary  hover:shadow-elegant transition-all">
                Explore Our Journey
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Community Focus */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-6 inline-block relative"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Join Our Writing Community
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            </motion.h2>
            
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg text-gray-700 leading-relaxed mb-8"
              style={{ fontFamily: 'Lora, Georgia, serif' }}
            >
              At MMSCRIPTS, we believe that writing is not a solitary journey. 
              Our community brings together aspiring and established authors who support, 
              inspire, and learn from each other. Whether you're working on your first draft 
              or your tenth book, you'll find a home here.
            </motion.p>
            
            <motion.blockquote
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
              className="text-xl italic text-primary mb-8 border-l-4 border-primary pl-6 py-4 bg-blue-50 rounded-r-lg shadow-md font-serif"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              "Every writer has a unique voice. Our mission is to help you find yours 
              and share it with confidence."
            </motion.blockquote>
            
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-gray-600 mb-8 font-sans text-sm"
            >
              — Founder, MMSCRIPTS
            </motion.p>
            
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button to="/team" variant="primary" className="shadow-elegant hover:shadow-elegant-lg">
                Meet Our Team
              </Button>
              <Button to="/contact" variant="secondary">
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
