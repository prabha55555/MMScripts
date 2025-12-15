import { motion } from 'framer-motion';
import Button from '../components/Button';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: '✍️',
      title: 'Editing & Proofreading',
      description: 'Professional manuscript editing to ensure your story shines. We offer developmental editing, copy editing, and proofreading services tailored to your needs.',
      features: ['Grammar & syntax correction', 'Style consistency', 'Plot & structure feedback', 'Character development suggestions']
    },
    {
      icon: '📐',
      title: 'Formatting',
      description: 'Industry-standard formatting for print and digital publications. We ensure your book looks professional inside and out.',
      features: ['eBook formatting', 'Print layout design', 'Chapter styling', 'Typography optimization']
    },
    {
      icon: '🎨',
      title: 'Cover Design',
      description: 'Eye-catching, genre-appropriate cover designs that capture your story\'s essence and attract readers at first glance.',
      features: ['Custom illustrations', 'Photo-based designs', 'Typography selection', 'Multiple revision rounds']
    },
    {
      icon: '📚',
      title: 'ISBN Assistance',
      description: 'Complete ISBN registration support. We handle all the paperwork and ensure your book has proper identification for distribution.',
      features: ['ISBN procurement', 'Registration guidance', 'Copyright assistance', 'Legal compliance']
    },
    {
      icon: '📖',
      title: 'Publishing Solutions',
      description: 'End-to-end publishing for eBooks, paperbacks, and hardcovers. We support all major platforms including Amazon KDP.',
      features: ['eBook publishing', 'Paperback printing', 'Hardcover options', 'Global distribution']
    },
    {
      icon: '🚚',
      title: 'Printing & Courier',
      description: 'High-quality printing services with reliable courier partnerships for timely delivery of your published books.',
      features: ['Quality printing', 'Bulk order discounts', 'Nationwide shipping', 'Tracking support']
    },
    {
      icon: '📝',
      title: 'Anthology Management',
      description: 'Comprehensive management for anthology projects. Perfect for collaborative works and themed collections.',
      features: ['Submission coordination', 'Content curation', 'Author management', 'Timeline tracking']
    },
    {
      icon: '📢',
      title: 'Marketing Support',
      description: 'Strategic marketing assistance to help your book reach the right readers and build your author platform.',
      features: ['Social media guidance', 'Launch strategy', 'Promotional materials', 'Reader engagement']
    },
    {
      icon: '👥',
      title: 'Writing Community',
      description: 'Access to a vibrant community of writers. Participate in challenges, workshops, and networking events.',
      features: ['Writing challenges', 'Author workshops', 'Peer feedback groups', 'Networking events']
    },
    {
      icon: '💬',
      title: 'Author Consultation',
      description: 'One-on-one consultation sessions to discuss your publishing journey, address concerns, and plan your path forward.',
      features: ['Personalized guidance', 'Publishing roadmap', 'Career planning', 'Query support']
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive publishing solutions designed to bring your literary vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12 text-center">
              Our Publishing Process
            </h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Initial Consultation', desc: 'We discuss your vision, goals, and requirements to create a customized publishing plan.' },
                { step: '02', title: 'Manuscript Preparation', desc: 'Our team works on editing, formatting, and design to prepare your manuscript for publication.' },
                { step: '03', title: 'Review & Refinement', desc: 'You review all materials and provide feedback. We make revisions until you\'re 100% satisfied.' },
                { step: '04', title: 'Publishing & Distribution', desc: 'We publish your book on chosen platforms and handle all distribution logistics.' },
                { step: '05', title: 'Marketing & Support', desc: 'Post-publication support including marketing guidance and ongoing author assistance.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Let's Bring Your Book to Life
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ready to start your publishing journey? Get in touch with us today for a free consultation.
            </p>
            <Button to="/contact" variant="outline" className="bg-white text-primary hover:bg-gray-100">
              Contact Us Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
