
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import Timeline from '../components/Timeline';
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button only when scrolled down more than 400px and prevent glitching
      const scrolled = window.scrollY > 400;
      setShowScrollTop(scrolled);
    };
    
    // Add throttling to prevent excessive updates
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
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <motion.div 
      className="min-h-screen bg-black overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      
      <main>
        <HeroSection />
        <StatsSection />
        <Timeline />
        <ProductShowcase />
      </main>
      
      <Footer />
      
      {/* Enhanced Scroll to top button with better visibility control */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold z-50 shadow-lg shadow-cyan-400/50"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
        whileHover={{ 
          scale: showScrollTop ? 1.1 : 0, 
          boxShadow: "0 0 25px rgba(34, 211, 238, 0.8)",
          background: "linear-gradient(45deg, #00ffff, #0080ff)"
        }}
        whileTap={{ scale: showScrollTop ? 0.95 : 0 }}
        onClick={scrollToTop}
        style={{ 
          pointerEvents: showScrollTop ? 'auto' : 'none',
          visibility: showScrollTop ? 'visible' : 'hidden'
        }}
      >
        <motion.span
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↑
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default Index;
