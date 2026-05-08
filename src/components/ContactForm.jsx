import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`New Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:admin@nexsof.tech?subject=${subject}&body=${body}`;
    
    // Optional: Clear form after opening mail client
    setFormData({ name: '', email: '', message: '' });
  };

  const inputClass = "w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-white transition-colors placeholder:text-gray-600";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-navy-900/50 border border-gray-800 p-8 rounded-2xl"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-neon-blue text-black font-semibold rounded-lg hover:bg-opacity-90 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300"
      >
        Send Message
      </button>
    </motion.form>
  );
};

export default ContactForm;
