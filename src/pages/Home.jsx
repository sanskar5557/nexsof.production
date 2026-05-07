import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import PageTransition from '../components/PageTransition';
import { FaVideo, FaHashtag, FaBullhorn } from 'react-icons/fa';
import Button from '../components/Button';

const Home = () => {
  const featuredServices = [
    {
      icon: FaVideo,
      title: 'Video Production',
      description: 'High-quality cinematic videos that tell your brand story and engage your audience.',
    },
    {
      icon: FaHashtag,
      title: 'Social Media Management',
      description: 'Strategic content creation and community management to grow your online presence.',
    },
    {
      icon: FaBullhorn,
      title: 'Digital Marketing',
      description: 'Data-driven campaigns that drive traffic, generate leads, and increase conversions.',
    },
  ];

  return (
    <PageTransition>
      <div className="pb-20">
        <HeroSection />

        {/* Services Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We provide comprehensive digital solutions tailored to elevate your brand and drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.2}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
              A glimpse into some of our most successful and creative projects.
            </p>

            <div className="aspect-video w-full max-w-4xl mx-auto bg-gray-800 rounded-2xl overflow-hidden relative group">
              <img
                src="/explore_bg3.jpg"
                alt="Featured Video Project"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button to="/portfolio" variant="primary">
                  Explore Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-navy-900/50 p-8 rounded-2xl border border-gray-800">
              <div className="flex text-subtle-yellow mb-4">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-300 italic mb-6">
                "Nexsof transformed our online presence completely. Their video production team captured our brand perfectly, resulting in a 40% increase in engagement."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden">
                  <img src="ahmareen usmani 1.jpg" alt="Client" />
                </div>
                <div>
                  <h4 className="font-bold">Ahmreen Usmani</h4>
                  <p className="text-sm text-neon-blue">Co-Founder, AM Institute</p>
                </div>
              </div>
            </div>

            <div className="bg-navy-900/50 p-8 rounded-2xl border border-gray-800">
              <div className="flex text-subtle-yellow mb-4">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-300 italic mb-6">
                "The most creative and professional agency we've worked with. They handled everything from our social media to our ad campaigns flawlessly."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden">
                  <img src="rishabh_kacker_1.jpeg" alt="Client" />
                </div>
                <div>
                  <h4 className="font-bold">Dr. Rishabh Kacker</h4>
                  <p className="text-sm text-neon-blue">MBBS, Pulmonologist</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
