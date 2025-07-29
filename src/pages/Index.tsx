
import React, { useEffect, useState, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import Timeline from '../components/Timeline';
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';

const Index = memo(() => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = useCallback(() => {
    // Show button only when scrolled down more than 400px and prevent glitching
    const scrolled = window.scrollY > 400;
    if (showScrollTop !== scrolled) {
      setShowScrollTop(scrolled);
    }
  }, [showScrollTop]);

  useEffect(() => {
    // Add throttling to prevent excessive updates and improve performance
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

  const scrollToTop = useCallback(() => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Navigation />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <Timeline />
        <ProductShowcase />
      </main>
      
      <Footer />
      
      {/* Optimized Scroll to top button with better performance */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold z-50 shadow-lg shadow-green-400/50"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20
        }}
        transition={{ 
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        whileHover={{ 
          scale: showScrollTop ? 1.05 : 0, 
          boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)",
          background: "linear-gradient(45deg, #22c55e, #3b82f6)"
        }}
        whileTap={{ scale: showScrollTop ? 0.98 : 0 }}
        onClick={scrollToTop}
        style={{ 
          pointerEvents: showScrollTop ? 'auto' : 'none',
          visibility: showScrollTop ? 'visible' : 'hidden'
        }}
      >
        <motion.span
          animate={{ y: [-1, 1, -1] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          ↑
        </motion.span>
      </motion.button>
    </motion.div>
  );
});

Index.displayName = 'Index';

export default Index;
