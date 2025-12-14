import { motion } from 'framer-motion';

const Team = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const team = [
    {
      name: 'Founder & CEO',
      role: 'Visionary Leader',
      photo: 'https://via.placeholder.com/400x400/014aad/ffffff?text=Founder',
      bio: 'A passionate advocate for writers and storytellers, our founder established MMSCRIPTS with a vision to democratize publishing and build a supportive author community.',
      expertise: ['Publishing Strategy', 'Author Relations', 'Business Development']
    },
    {
      name: 'Lead Editor',
      role: 'Editorial Director',
      photo: 'https://via.placeholder.com/400x400/014aad/ffffff?text=Editor',
      bio: 'With over 10 years of editorial experience, our Lead Editor ensures every manuscript meets professional standards while preserving the author\'s unique voice.',
      expertise: ['Developmental Editing', 'Copy Editing', 'Manuscript Critique']
    },
    {
      name: 'Design Head',
      role: 'Creative Director',
      photo: 'https://via.placeholder.com/400x400/014aad/ffffff?text=Designer',
      bio: 'Our Creative Director brings stories to visual life through stunning cover designs and professional formatting that captures readers\' attention.',
      expertise: ['Cover Design', 'Book Formatting', 'Brand Identity']
    },
    {
      name: 'Marketing Manager',
      role: 'Marketing & Outreach',
      photo: 'https://via.placeholder.com/400x400/014aad/ffffff?text=Marketing',
      bio: 'Specializing in book marketing and author branding, our Marketing Manager helps authors connect with their target audience and build lasting reader relationships.',
      expertise: ['Digital Marketing', 'Social Media Strategy', 'Launch Campaigns']
    },
    {
      name: 'Community Manager',
      role: 'Community Engagement',
      photo: 'https://via.placeholder.com/400x400/014aad/ffffff?text=Community',
      bio: 'Dedicated to fostering connections and organizing events, our Community Manager ensures every author feels supported and valued within the MMSCRIPTS family.',
      expertise: ['Community Building', 'Event Planning', 'Author Support']
    },
    {
      name: 'Publishing Coordinator',
      role: 'Operations & Logistics',
      photo: 'https://via.placeholder.com/400x400/014aad/ffffff?text=Coordinator',
      bio: 'Managing the technical aspects of publishing from ISBN registration to distribution, our coordinator ensures a smooth and timely publishing process.',
      expertise: ['Publishing Operations', 'Distribution Management', 'Quality Control']
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              The passionate professionals dedicated to bringing your stories to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              The People Behind MMSCRIPTS
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At MMSCRIPTS, we're more than a publishing house—we're a family of book lovers, 
              storytellers, and creative professionals united by a common goal: to help authors 
              share their stories with the world. Each team member brings unique expertise and 
              unwavering dedication to every project we undertake.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-80 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-blue-200">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {member.bio}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The principles that guide everything we do at MMSCRIPTS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🤝', title: 'Integrity', desc: 'Honest, transparent partnerships with every author' },
              { icon: '⭐', title: 'Excellence', desc: 'Professional quality in every aspect of publishing' },
              { icon: '💙', title: 'Empathy', desc: 'Understanding and supporting each author\'s journey' },
              { icon: '🌱', title: 'Growth', desc: 'Continuous learning and improvement for all' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We're always looking for passionate professionals who share our vision of 
              empowering authors and building a thriving literary community.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team is here to support you every step of your publishing journey. 
              Let's bring your story to life together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                View Our Services
              </a>
              <a
                href="/contact"
                className="inline-block bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
