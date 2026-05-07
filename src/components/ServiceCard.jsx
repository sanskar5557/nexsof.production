import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="group bg-navy-900/50 border border-gray-800 rounded-2xl p-8 hover:bg-gray-800/50 hover:border-neon-blue/50 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-gray-800/80 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-blue/10 transition-colors duration-300">
        <Icon className="text-3xl text-gray-400 group-hover:text-neon-blue transition-colors duration-300" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
