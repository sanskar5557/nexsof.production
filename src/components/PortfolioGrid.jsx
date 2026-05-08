import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaImage } from 'react-icons/fa';

const categories = ['All', 'Video', 'Social Media', 'Ads'];

const projects = [
  { 
    id: 1, 
    title: 'Featured Reel', 
    category: 'Video', 
    type: 'video',
    link: 'https://www.instagram.com/reel/DX9qfiAhseZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D'
  },
  { 
    id: 2, 
    title: 'Creative Reel', 
    category: 'Social Media', 
    type: 'video',
    link: 'https://www.instagram.com/reel/DTGGnpTDAD3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D' 
  },
  { 
    id: 3, 
    title: 'Commercial Project', 
    category: 'Ads', 
    type: 'video',
    link: 'https://www.instagram.com/reel/DUQNmNoEjc5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D' 
  },
  { 
    id: 4, 
    title: 'Corporate Video', 
    category: 'Video', 
    type: 'video',
    link: 'https://www.instagram.com/reel/DRKkUsqEqnc/?igsh=MWp0MDl2YXIzaDVuYg==' 
  },
  { 
    id: 5, 
    title: 'TikTok Reel', 
    category: 'Social Media', 
    type: 'video',
    link: 'https://www.instagram.com/reel/DN0WP4i2JxL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' 
  },
  { id: 6, title: 'Summer Sale Ad', category: 'Ads', type: 'video' },
];

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-neon-blue text-black'
                : 'bg-navy-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.a
              href={project.link || '#'}
              target={project.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer bg-navy-900 border border-gray-800 hover:border-neon-blue/50 transition-colors duration-300 block"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-black opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-14 h-14 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mb-4 group-hover:bg-neon-blue group-hover:border-neon-blue transition-all duration-300">
                  {project.type === 'video' ? (
                    <FaPlay className="text-neon-blue group-hover:text-black ml-1 transition-colors duration-300" />
                  ) : (
                    <FaImage className="text-neon-blue group-hover:text-black transition-colors duration-300" />
                  )}
                </div>
                <h4 className="text-white text-xl font-bold mb-2 transition-transform duration-300 group-hover:scale-105">{project.title}</h4>
                <p className="text-gray-400 text-sm font-medium group-hover:text-neon-blue transition-colors duration-300">{project.category}</p>
                
                {/* Visual Accent */}
                <div className="mt-4 w-12 h-1 bg-gray-800 group-hover:w-20 group-hover:bg-neon-blue transition-all duration-500 rounded-full" />
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PortfolioGrid;
