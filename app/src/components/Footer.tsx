import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/emi-calculator', label: 'EMI Calculator' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    'Business Loan',
    'Personal Loan',
    'Home Loan',
    'Education Loan',
    'Car Loan',
    'Project Funding',
  ];

  return (
    <footer className="bg-[#1F2937] text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#25477B]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/logo.jpeg" 
                alt="Fin4 Capital Solution" 
                className="h-16 w-auto object-contain bg-white rounded-xl p-2"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted financial partner for all loan and funding needs. 
              We provide fast, reliable, and transparent financial solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/?sk=welcome"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#25477B] hover:to-[#2C78B7] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/salmankhanfin4?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#25477B] hover:to-[#2C78B7] transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#25477B] hover:to-[#2C78B7] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/fin4capitalsolution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#25477B] hover:to-[#2C78B7] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#2C78B7] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+918268101093" className="text-white hover:text-[#2C78B7] transition-colors">
                    +91 82681 01093
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#2C78B7] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@fin4capitalsolution.com" className="text-white hover:text-[#2C78B7] transition-colors text-sm">
                    info@fin4capitalsolution.com
                  </a>
                  <a href="mailto:salman.khan@fin4capitalsolution.com" className="text-white hover:text-[#2C78B7] transition-colors text-sm block">
                    salman.khan@fin4capitalsolution.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2C78B7] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-white text-sm leading-relaxed">
                    Sai Paradise Bldg Office No.304,<br />
                    3rd Floor, Gupte Road,<br />
                    Vishnu Nagar, Dombivli West – 421202
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-14 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Fin4 Capital Solution. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
