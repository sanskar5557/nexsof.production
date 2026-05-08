import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src="/Nexsof Production Final White.png" alt="Nexsof Production" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              A creative IT and media agency specializing in content that converts and captivates. We bring your vision to life with modern digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nexsof.production?igsh=MTdjNjRsaW50YWRrdA%3D%3D" className="text-gray-400 hover:text-neon-blue transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/nexsof-production/about/" className="text-gray-400 hover:text-neon-blue transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.youtube.com/@nexsof.production" className="text-gray-400 hover:text-neon-blue transition-colors">
                <FaYoutube size={24} />
              </a>
              {/*} <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <FaTwitter size={24} />
              </a>*/}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-neon-blue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-neon-blue transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-neon-blue transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-neon-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>admin@nexsof.tech</li>
              <li>+91 8090598976</li>
              <li>315/c Nyay Vihar Colony,<br />lucknow, UttarPradesh 226020</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Nexsof.tech. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
