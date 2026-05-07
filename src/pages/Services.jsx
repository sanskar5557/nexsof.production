import PageTransition from '../components/PageTransition';
import ServiceCard from '../components/ServiceCard';
import { FaVideo, FaHashtag, FaBullhorn, FaFilm, FaPenNib, FaBullseye } from 'react-icons/fa';

const Services = () => {
  const servicesList = [
    {
      icon: FaHashtag,
      title: 'Social Media Management',
      description: 'We handle your brand\'s presence across all platforms, creating engaging content and building strong communities.'
    },
    {
      icon: FaPenNib,
      title: 'Content Creation',
      description: 'From compelling copywriting to striking visuals, we create content that tells your brand\'s unique story.'
    },
    {
      icon: FaVideo,
      title: 'Video Production',
      description: 'Full-scale production services including commercial shoots, corporate videos, and promotional content.'
    },
    {
      icon: FaFilm,
      title: 'Video Editing',
      description: 'Professional post-production services to polish your footage into captivating final products.'
    },
    {
      icon: FaBullhorn,
      title: 'Digital Marketing',
      description: 'Comprehensive digital strategies including SEO, PPC, and email marketing to drive targeted traffic and conversions.'
    },
    {
      icon: FaBullseye,
      title: 'Google & Meta Ads',
      description: 'Targeted advertising campaigns across Google and Meta platforms to maximize your ROI and reach your ideal customers.'
    }
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Expertise</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital services designed to elevate your brand, engage your audience, and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;
