import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaImage } from 'react-icons/fa';

const categories = ['All', 'Video', 'Social Media', 'Ads'];

const projects = [
  { id: 1, title: 'Brand Story', category: 'Video', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1000', type: 'video' },
  { id: 2, title: 'Instagram Campaign', category: 'Social Media', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000', type: 'image' },
  { id: 3, title: 'Product Launch', category: 'Ads', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000', type: 'video' },
  { id: 4, title: 'Corporate Reel', category: 'Video', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000', type: 'video' },
  { id: 5, title: 'TikTok Growth', category: 'Social Media', image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1000', type: 'image' },
  { id: 6, title: 'Summer Sale Ad', category: 'Ads', image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?auto=format&fit=crop&q=80&w=1000', type: 'video' },
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
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer bg-gray-900"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                <div className="w-12 h-12 bg-neon-blue rounded-full flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.type === 'video' ? (
                    <FaPlay className="text-black ml-1" />
                  ) : (
                    <FaImage className="text-black" />
                  )}
                </div>
                <h4 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h4>
                <p className="text-neon-blue mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PortfolioGrid;
