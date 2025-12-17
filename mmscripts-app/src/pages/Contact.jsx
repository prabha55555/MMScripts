import { motion } from 'framer-motion';
import { useState } from 'react';


const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const contactInfo = [
    {
      icon: '/EmailLogo.png',
      title: 'Email',
      details: 'mmscriptspublishinghouse@gmail.com',
      link: 'mailto:mmscriptspublishinghouse@gmail.com'
    },
    {
      icon: '/PhoneLogo.png',
      title: 'Phone',
      details: '+91 9384935435',
      link: 'tel:+9384935435'
    },
    {
      icon: '/LocationLogo.png',
      title: 'Address',
      details: 'Anaimalai 642104, Pollachi, Coimabatore',
      link: 'https://www.google.com/maps/place/Anaimalai,+Tamil+Nadu+642104/@10.5820878,76.9239589,15z/data=!3m1!4b1!4m6!3m5!1s0x3ba83b9afe4e320f:0xf57279cf79b8e1c4!8m2!3d10.5820882!4d76.9342587!16zL20vMDg4bHl0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      icon: '/InstaLogo.png',
      title: 'Instagram',
      details: '@mmscripts',
      link: 'https://www.instagram.com/mmscripts?igsh=OGhuczhibTFueWNy'
    },
    {
      icon: '/WhatappLogo.png',
      title: 'WhatsApp Community',
      details: 'Join Our Writing Group',
      link: 'https://chat.whatsapp.com/GYbo9v7vDVsLxIqBgfzO3R'
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Have questions? Want to start your publishing journey? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={info.icon} 
                  alt={info.title} 
                  className="w-16 h-16 mb-4 object-contain mx-auto"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-primary hover:text-blue-700 transition-colors font-medium"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.details}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 lg:p-12 rounded-xl shadow-lg"
            >
              <form action="https://formsubmit.co/k.prabhakaran.in@gmail.com" method="POST" className="space-y-6">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Contact Form Submission from MMSCRIPTS" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="publishing">Publishing Inquiry</option>
                        <option value="services">Services Information</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message *
                    </label>
                  <textarea
  id="message"
  name="message"
  required
  rows="6"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
  placeholder="Tell us about your project or inquiry..."
></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white p-8 lg:p-12 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Office Hours
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Monday - Friday</h3>
                  <p className="text-gray-600">9:00 AM - 6:00 PM IST</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Saturday</h3>
                  <p className="text-gray-600">10:00 AM - 4:00 PM IST</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Sunday: Closed
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  * Response times may vary during holidays and peak seasons
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Prefer to Chat Directly?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join our WhatsApp community for instant updates, writing tips, and direct communication with our team.
            </p>
            <a
              href="https://chat.whatsapp.com/D1baHxfuVOY8x5Ab0savze"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Join WhatsApp Community
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
