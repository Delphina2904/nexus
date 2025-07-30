
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    "Products": ["INSTA Series.", "FLO Technology.", "MACH Pro", "Custom Solutions"],
    "Technology": ["0 Kelvin™", "Safety Standards", "Charging Tech", "Research"],
    "Company": ["About Us", "Careers", "News", "Contact"],
    "Support": ["Documentation", "FAQ", "Technical Support", "Warranty"]
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-2 mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">N</span>
              </div>
              <span className="text-white font-bold text-xl sm:text-2xl">NEXUS</span>
            </motion.div>
            
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Revolutionizing energy storage with zero-compromise battery technology. 
              Powering the future of sustainable transportation and energy solutions.
            </p>
            
            <div className="flex space-x-3 sm:space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs sm:text-sm font-medium">{social.charAt(0)}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div 
              key={category}
              className="col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">{category}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href={
                        link === 'About Us' ? '/vision-mission' :
                        link === 'Contact' ? '#contact-section' :
                        '#'
                      }
                      onClick={link === 'Contact' ? (e) => {
                        e.preventDefault();
                        const element = document.getElementById('contact-section');
                        if (element) {
                          const navHeight = 80;
                          const elementPosition = element.offsetTop - navHeight;
                          window.scrollTo({
                            top: elementPosition,
                            behavior: 'smooth'
                          });
                        }
                      } : undefined}
                      className="text-gray-400 hover:text-cyan-400 transition-colors relative text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                      <motion.div
                        className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2024 Nexus. All rights reserved. Powering tomorrow, today.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 items-center">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-400 hover:text-cyan-400 text-xs sm:text-sm transition-colors"
                whileHover={{ y: -1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Background */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
