import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' }); // 'success' | 'error' | 'loading'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: '✅ Message sent! We\'ll get back to you within 24–48 hours.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: `❌ ${data.error || 'Something went wrong. Please try again.'}` });
      }
    } catch {
      setStatus({ type: 'error', message: '❌ Could not reach the server. Please try again later.' });
    }
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

      {/* Status Message */}
      {status.message && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg text-sm font-medium ${
            status.type === 'success'
              ? 'bg-green-500/10 text-green-400 border border-green-500/30'
              : status.type === 'error'
              ? 'bg-red-500/10 text-red-400 border border-red-500/30'
              : 'bg-neon-blue/10 text-neon-blue border border-neon-blue/30'
          }`}
        >
          {status.message}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={status.type === 'loading'}
        className="w-full px-6 py-3 bg-neon-blue text-black font-semibold rounded-lg hover:bg-opacity-90 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status.type === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </motion.form>
  );
};

export default ContactForm;
