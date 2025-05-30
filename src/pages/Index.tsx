
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
      // Show button only when scrolled down more than 300px
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      
      {/* Scroll to top button - only shows when scrolled down */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ 
          scale: 1.1, 
          boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)" 
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
      >
        ↑
      </motion.button>
    </motion.div>
  );
};

export default Index;
