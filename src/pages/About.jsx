import PageTransition from '../components/PageTransition';
import { FaLightbulb, FaRocket, FaHandshake } from 'react-icons/fa';

const About = () => {
  const reasons = [
    {
      icon: FaLightbulb,
      title: 'Innovative Ideas',
      description: 'We bring fresh, creative perspectives to every project, ensuring your brand stands out in a crowded digital landscape.'
    },
    {
      icon: FaRocket,
      title: 'Result Driven',
      description: 'Our strategies are focused on measurable outcomes. We do not just make things look good; we make them perform.'
    },
    {
      icon: FaHandshake,
      title: 'Collaborative Approach',
      description: 'We consider ourselves an extension of your team, working closely with you to realize your vision.'
    }
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We are <span className="text-neon-blue">Nexsof</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              A forward-thinking creative agency born from the desire to build digital experiences that matter. We combine strategy, design, and technology to help brands connect with their audiences in meaningful ways.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From our humble beginnings as a small production crew, we have grown into a full-service media powerhouse. Whether it is a high-end commercial, a comprehensive social media strategy, or a full rebrand, we approach every project with the same passion and dedication to excellence.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-neon-blue/20 translate-x-4 translate-y-4 rounded-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Our Team" 
              className="relative rounded-2xl w-full h-auto object-cover z-10 border border-gray-800"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-navy-900/40 border border-gray-800 p-10 rounded-2xl hover:border-neon-blue/30 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To empower businesses through compelling storytelling and innovative digital solutions, transforming their ideas into impactful realities that resonate globally.
            </p>
          </div>
          <div className="bg-navy-900/40 border border-gray-800 p-10 rounded-2xl hover:border-subtle-yellow/30 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400">
              To be the premier creative partner for forward-thinking brands, setting new standards in digital media, design, and content production.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">What sets us apart in the creative industry.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800 text-center hover:bg-gray-800/50 transition-colors">
                <div className="w-16 h-16 bg-neon-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 text-neon-blue">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-4">{reason.title}</h4>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
