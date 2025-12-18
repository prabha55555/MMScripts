import { motion } from 'framer-motion';
import Button from '../components/Button';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">About MMSCRIPTS</h1>
                    <p className="text-xl text-blue-100 leading-relaxed">
                        Where stories find their voice and authors find their community.
                    </p>
                </motion.div>
            </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fadeInUp}>
                        <h2 className="relative inline-block text-3xl lg:text-4xl font-bold text-gray-800 mb-8 pb-3">
                            Our Story
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
                        </h2>
                        
                        <div className="prose prose-lg max-w-none text-gray-600 space-y-6 leading-relaxed">
                            <p>
                                MMSCRIPTS was founded with a singular vision: to democratize publishing and make 
                                it accessible to every writer with a story to tell. In an industry often dominated 
                                by gatekeepers, we saw the need for a publishing house that truly puts authors first.
                            </p>
                            <p>
                                As a registered MSME (Micro, Small & Medium Enterprise), we take pride in being 
                                a nimble, author-centric organization. We're not just a service provider—we're 
                                your publishing partner, invested in your success as much as you are.
                            </p>
                            <p>
                                What sets us apart is our holistic approach. We don't just help you publish a book; 
                                we help you build a writing career. From the first draft to the final marketing push, 
                                from manuscript development to reader engagement, we're with you every step of the way.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 lg:p-10 rounded-xl shadow-lg"
                        >
                            <h3 className="relative inline-block text-2xl lg:text-3xl font-bold text-gray-800 mb-6 pb-3">
                                Our Vision
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                               To build a thriving ecosystem where every writer regardless of background, experience, or genre has the tools, guidance, and community needed to refine their ideas and share their stories with the world. We believe publishing should not be a privilege, but an accessible journey where every storyteller is supported in turning manuscripts into masterpieces.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 lg:p-10 rounded-xl shadow-lg"
                        >
                            <h3 className="relative inline-block text-2xl lg:text-3xl font-bold text-gray-800 mb-6 pb-3">
                                Our Mission
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                To empower writers by providing accessible, transparent, and high-quality publishing services that transform their stories into meaningful, professionally crafted books. We aim to simplify the publishing journey, support creative voices, and help authors reach readers with confidence.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        {/* MSME Registration */}
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    {...fadeInUp}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-blue-50 border-l-4 border-primary p-8 lg:p-10 rounded-r-xl">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                            MSME Registered & Certified 
                        </h3> 
                         <h2 className="text-1xl lg:text-2xl font-bold text-gray-800 mb-4">
                            UDYAM-TN-03-0287743
                        </h2> 

                        <p className="text-gray-600 leading-relaxed mb-4">
                            MMSCRIPTS is officially registered as a Micro, Small & Medium Enterprise (MSME) 
                            with the Government of India. This certification reflects our commitment to 
                            maintaining high standards of business ethics, transparency, and service excellence.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our MSME status enables us to provide cost-effective solutions to our authors 
                            while maintaining the highest quality standards. We're proud to contribute to 
                            India's growing publishing ecosystem and support the nation's literary community.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Publishing Philosophy */}
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    {...fadeInUp}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center">
                        <h2 className="relative inline-block text-3xl lg:text-4xl font-bold text-gray-800 mb-8 pb-3">
                            Our Publishing Philosophy
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
                        </h2>
                    </div>
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-primary mb-3">Author-Centric Approach</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Your book, your vision, your voice. We believe authors should retain full 
                                creative control and ownership of their work. Our role is to enhance, not 
                                dictate.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-primary mb-3">Quality Over Quantity</h4>
                            <p className="text-gray-600 leading-relaxed">
                                We don't chase volume; we chase excellence. Each project receives personalized 
                                attention and care, ensuring your book meets professional publishing standards.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-primary mb-3">Community Building</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Writing doesn't have to be lonely. Through workshops, challenges, and events, 
                                we foster connections between authors, creating a supportive network that lasts 
                                beyond publication.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-primary mb-3">Transparent Partnerships</h4>
                            <p className="text-gray-600 leading-relaxed">
                                No hidden fees, no surprises. We believe in clear communication, fair pricing, 
                                and honest timelines. You'll always know exactly what to expect.
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
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <motion.div
                    {...fadeInUp}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Ready to Publish Your Story?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Join hundreds of authors who have trusted MMSCRIPTS with their literary dreams.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button to="/services" variant="outline" className="bg-white">
                            Explore Services
                        </Button>
                        <Button to="/contact" variant="outline" className="bg-white">
                            Contact Us Today
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    </div>
);
};

export default About;
