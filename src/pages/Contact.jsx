import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Connect</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-neon-blue text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <p className="text-gray-400 mt-1">admin@nexsof.tech</p>
                  {/*<p className="text-gray-400">support@nexsof.production</p>*/}                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center shrink-0">
                  <FaPhone className="text-neon-blue text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <p className="text-gray-400 mt-1">+91 8144334267</p>
                  <p className="text-gray-400 mt-1">+91 8090598976</p>
                  {/*<p className="text-gray-400">Mon-Fri 9am to 6pm GMT</p>*/}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-neon-blue text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Visit Us</h4>
                  <p className="text-gray-400 mt-1">315/c Nyay Vihar Colony,<br />lucknow, UttarPradesh 226020</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-navy-900/50 p-6 rounded-2xl border border-[#25D366]/30">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <FaWhatsapp className="text-[#25D366]" /> Direct Message
              </h3>
              <p className="text-gray-400 mb-4">Prefer instant messaging? Reach out to us directly on WhatsApp.</p>
              <a
                href="https://wa.me/918090598976"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#128C7E] transition-colors"
              >
                <FaWhatsapp size={20} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
