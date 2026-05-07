import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out";
  
  const variants = {
    primary: "bg-neon-blue text-black hover:bg-opacity-90 hover:shadow-[0_0_15px_rgba(0,240,255,0.6)]",
    secondary: "bg-transparent border-2 border-subtle-yellow text-subtle-yellow hover:bg-subtle-yellow hover:text-black hover:shadow-[0_0_15px_rgba(250,204,21,0.6)]",
    outline: "bg-transparent border-2 border-gray-600 text-white hover:border-white",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
