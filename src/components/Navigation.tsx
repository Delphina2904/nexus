
import React, { useState, useEffect, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    if (isScrolled !== scrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-white font-bold text-xl">NEXUS</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Products', 'Technology', 'About'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200 relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </motion.a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Desktop CTA Button */}
            <motion.button 
              className="hidden sm:block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)" 
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Get In Touch
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className={`w-full h-0.5 bg-white transform transition-all duration-200 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <motion.span
                  className={`w-full h-0.5 bg-white transition-all duration-200 mt-1 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <motion.span
                  className={`w-full h-0.5 bg-white transform transition-all duration-200 mt-1 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex flex-col space-y-4">
                {['Home', 'Products', 'Technology', 'About'].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-white/80 hover:text-white transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button 
                  className="sm:hidden bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-medium text-center mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
