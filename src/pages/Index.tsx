
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import Timeline from '../components/Timeline';
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    const handleScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
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
      
      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ 
          scale: 1.1, 
          boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)" 
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </motion.button>
    </motion.div>
  );
};

export default Index;
