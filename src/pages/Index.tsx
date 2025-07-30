
import React, { useEffect, useState, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import ThermalManagement from '../components/ThermalManagement';
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
      className="min-h-screen bg-black overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      
      <main className="pt-14">
        <HeroSection />
        <ServicesSection />
        
        {/* Product Details Section */}
        <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-1 bg-blue-500 mr-3 sm:mr-4"></div>
                <span className="text-blue-500 font-medium text-base sm:text-lg">Product Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 max-w-4xl leading-tight">
                Comprehensive Energy{" "}
                <span className="relative">
                  Solutions
                  <motion.div
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-blue-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Quick Commerce */}
              <motion.div
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-3">
                    1
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Quick Commerce</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">•</span>
                    <span>Ultra-fast charging, compact form-factors.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">•</span>
                    <span>Rugged design for high throughput and reliability in last-mile delivery and logistics fleets.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">•</span>
                    <span>Plug-and-play compatibility with e-cargo Vehicles & Scooters</span>
                  </li>
                </ul>
              </motion.div>

              {/* Mobility Solutions */}
              <motion.div
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-3">
                    2
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Mobility Solutions</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    <span>Swappable battery modules for electric two/three-wheelers and urban EVs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    <span>Seamless BMS integration for real-time health monitoring, range prediction, and OTA updates.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    <span>Safety-first architecture exceeding global standards.</span>
                  </li>
                </ul>
              </motion.div>

              {/* Grid-Scale ESS */}
              <motion.div
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-3">
                    3
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Grid-Scale Energy Storage Systems (ESS)</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 font-bold mr-2">•</span>
                    <span>Modular battery racks supporting renewable integration, grid balancing, and backup applications.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 font-bold mr-2">•</span>
                    <span>Smart fleet management powered by AI for predictive maintenance and lifecycle optimization.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 font-bold mr-2">•</span>
                    <span>Flexible configurations: from microgrid installations to large utility-scale storage.</span>
                  </li>
                </ul>
              </motion.div>

              {/* Residential & Commercial */}
              <motion.div
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-3">
                    4
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Residential & Commercial Storage</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-500 font-bold mr-2">•</span>
                    <span>Wall-mounted and stackable systems for homes and businesses.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 font-bold mr-2">•</span>
                    <span>Intelligent load-shifting and backup power management.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 font-bold mr-2">•</span>
                    <span>Solar integration for full off-grid capability.</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Ecosystem Benefits Section */}
            <motion.div
              className="mt-16 sm:mt-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 sm:p-12 border border-blue-200">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                  Ecosystem Benefits
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start mb-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Rapid Deployment</h4>
                        <p className="text-gray-600 text-sm">Standardized, interoperable modules simplify installation and scaling.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Sustainability</h4>
                        <p className="text-gray-600 text-sm">Prolonged cell life reduces waste and total lifecycle emissions.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start mb-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Advanced BMS and thermal controls drastically reduce failure rates.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start mb-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Versatility</h4>
                        <p className="text-gray-600 text-sm">Solutions are chemistry-agnostic, supporting innovations from LFP to solid-state.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* End-to-End Platform */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
                    End-to-End Platform
                  </h4>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/70 mb-8">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-center">
                      From connected batteries feeding performance data to a unified cloud, to AI-driven optimization for operators and users, Nexus Energy's ecosystem delivers maximum value throughout the product lifecycle, supporting partners with:
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        API Access & Integration Tools
                      </motion.div>
                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        Remote Diagnostics & Updates
                      </motion.div>
                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        Circularity & Second-Life Programs
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-lg sm:text-xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Nexus Energy ecosystem: innovating today, powering tomorrow's sustainable, electrified world.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-1 bg-red-500 mr-3 sm:mr-4"></div>
                <span className="text-red-500 font-medium text-base sm:text-lg">Technology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 max-w-4xl leading-tight">
                Advanced Thermal{" "}
                <span className="relative">
                  Management
                  <motion.div
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-red-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h2>
            </motion.div>

            {/* The Challenge Section */}
            <motion.div
              className="mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 sm:p-12 border border-red-200">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  The Challenge of Heat Management in Battery Systems
                </h3>
                
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                  Effective heat management is essential for the safety, reliability, and efficiency of battery systems used in electric vehicles (EVs) and energy storage systems (ESS). Without proper thermal control, batteries are vulnerable to:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-white text-xl">🔥</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Overheating</h4>
                    <p className="text-gray-600 text-sm">Can cause device failure and reduce performance significantly.</p>
                  </motion.div>

                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Accelerated Degradation</h4>
                    <p className="text-gray-600 text-sm">Shortening battery lifespan and reducing overall efficiency.</p>
                  </motion.div>

                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-white text-xl">⚠️</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Thermal Runaway</h4>
                    <p className="text-gray-600 text-sm">Dangerous chain reaction that can lead to fire or explosion.</p>
                  </motion.div>
                </div>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Traditional thermal management systems—such as air or liquid cooling with external channels, cold plates, and pumps—are often complex, bulky, and expensive to implement, particularly as battery sizes and power densities increase. Immersion cooling is an innovative approach emerging as a superior alternative to conventional methods, offering several key advantages for battery thermal management.
                </p>
              </div>
            </motion.div>

            {/* How Immersion Cooling Works */}
            <motion.div
              className="mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-12 border border-blue-200">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                  How Immersion Cooling Works
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">💧</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Direct Contact</h4>
                    <p className="text-gray-600">Battery cells are submerged in a dielectric (non-conductive) coolant fluid, which is in direct contact with all surfaces of the cells.</p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🔧</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Integrated Design</h4>
                    <p className="text-gray-600">The cooling system is built into the battery housing, eliminating the need for extensive plumbing, cold plates, or external channels.</p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🌡️</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Efficient Heat Removal</h4>
                    <p className="text-gray-600">The coolant absorbs heat directly from the cells and transports it away, providing uniform temperature control.</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Advantages of Immersion Cooling */}
            <motion.div
              className="mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 sm:p-12 border border-green-200">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                  Advantages of Immersion Cooling
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: "🛡️",
                      title: "Prevents Thermal Runaway",
                      description: "By maintaining lower and more even cell temperatures, immersion cooling significantly reduces the risk of thermal runaway events.",
                      color: "from-green-500 to-emerald-500"
                    },
                    {
                      icon: "🔒",
                      title: "Enhances Safety",
                      description: "The dielectric fluid acts as a fire suppressant and insulator, further improving battery safety.",
                      color: "from-emerald-500 to-teal-500"
                    },
                    {
                      icon: "⏱️",
                      title: "Improves Battery Lifespan",
                      description: "Consistent thermal conditions slow down cell degradation, extending the operational life of the battery.",
                      color: "from-teal-500 to-cyan-500"
                    },
                    {
                      icon: "⚙️",
                      title: "Simplifies System Complexity",
                      description: "Integrated cooling reduces the number of components, lowering the risk of leaks and mechanical failures.",
                      color: "from-cyan-500 to-blue-500"
                    },
                    {
                      icon: "🔧",
                      title: "Adaptable Design",
                      description: "Modular and scalable, immersion cooling can be tailored for various battery sizes and applications.",
                      color: "from-blue-500 to-indigo-500",
                      span: "md:col-span-2"
                    }
                  ].map((advantage, index) => (
                    <motion.div
                      key={index}
                      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50 ${advantage.span || ''}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center mb-4`}>
                        <span className="text-white text-xl">{advantage.icon}</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{advantage.title}</h4>
                      <p className="text-gray-600 text-sm">{advantage.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Design Considerations */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 sm:p-12 border border-purple-200">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                  Key Design Considerations
                </h3>
                
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 text-center">
                  Immersion-cooling battery systems represent a significant shift from traditional liquid-cooling approaches, offering both simplification and unique engineering requirements:
                </p>

                <div className="space-y-8">
                  {[
                    {
                      number: "1",
                      title: "Integrated Cooling Architecture",
                      points: [
                        "Direct Immersion: The coolant is in direct contact with battery cells, eliminating the need for separate coolant channels, cold plates, or external piping.",
                        "Simplified Layout: The cooling system is built into the battery housing, reducing system complexity and potential failure points."
                      ],
                      color: "from-purple-500 to-indigo-500"
                    },
                    {
                      number: "2",
                      title: "Battery Housing Requirements",
                      points: [
                        "Leak-Tight Construction: The housing must be meticulously sealed to prevent any ingress of moisture or air, as these can degrade the dielectric fluid's thermal performance and compromise safety.",
                        "Material Compatibility: All housing materials and seals must be compatible with the immersion coolant to avoid chemical degradation or swelling."
                      ],
                      color: "from-indigo-500 to-blue-500"
                    },
                    {
                      number: "3",
                      title: "Pressure Relief and Safety",
                      points: [
                        "Integrated Pressure Relief: Unlike conventional systems where pressure relief is often a feature of the cooling circuit, immersion-cooled systems require pressure relief mechanisms to be part of the battery housing itself.",
                        "Robust Venting: Pressure relief devices must be designed to handle both thermal expansion and potential gas generation within the sealed environment."
                      ],
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      number: "4",
                      title: "Coolant Management",
                      points: [
                        "Dielectric Fluid Selection: The coolant must be non-conductive, chemically stable, and have excellent thermal properties to ensure safe and effective heat transfer.",
                        "Coolant Circulation: Flow paths within the housing must be optimized to ensure even coolant distribution and avoid hotspots."
                      ],
                      color: "from-cyan-500 to-teal-500"
                    },
                    {
                      number: "5",
                      title: "Thermal Performance",
                      points: [
                        "Uniform Cooling: Direct immersion allows for more uniform temperature control across all cells, improving performance and lifespan.",
                        "Heat Dissipation: The system must be designed to efficiently transfer heat from the cells to the coolant and then out of the battery pack."
                      ],
                      color: "from-teal-500 to-green-500"
                    },
                    {
                      number: "6",
                      title: "Maintenance and Serviceability",
                      points: [
                        "Coolant Monitoring: Systems should include sensors to monitor coolant level, quality, and potential contamination.",
                        "Ease of Access: The design should allow for safe inspection and replacement of coolant without compromising the housing's integrity."
                      ],
                      color: "from-green-500 to-emerald-500"
                    }
                  ].map((section, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm border border-white/50"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0`}>
                          {section.number}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{section.title}</h4>
                      </div>
                      <div className="ml-14 space-y-3">
                        {section.points.map((point, pointIndex) => {
                          const [boldPart, ...restParts] = point.split(': ');
                          return (
                            <div key={pointIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <p className="text-gray-600 text-sm">
                                <span className="font-semibold text-gray-900">{boldPart}:</span>
                                {restParts.length > 0 && ` ${restParts.join(': ')}`}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Comparison Table */}
            <motion.div
              className="mt-16 sm:mt-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl p-8 sm:p-12 border border-gray-200">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                  Comparison: Immersion vs. Conventional Liquid Cooling
                </h3>
                
                <div className="overflow-x-auto">
                  <motion.table
                    className="w-full bg-white rounded-2xl shadow-sm overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <thead>
                      <tr className="bg-gradient-to-r from-slate-800 to-gray-900">
                        <th className="px-6 py-4 text-left text-white font-bold text-lg">Feature</th>
                        <th className="px-6 py-4 text-left text-white font-bold text-lg">Immersion Cooling</th>
                        <th className="px-6 py-4 text-left text-white font-bold text-lg">Conventional Liquid Cooling</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        {
                          feature: "Cooling Integration",
                          immersion: "Built into battery housing",
                          conventional: "External channels/plates/pipes",
                          immersionColor: "text-green-700 bg-green-50",
                          conventionalColor: "text-orange-700 bg-orange-50"
                        },
                        {
                          feature: "Pressure Relief",
                          immersion: "Part of battery housing",
                          conventional: "Part of cooling system",
                          immersionColor: "text-blue-700 bg-blue-50",
                          conventionalColor: "text-purple-700 bg-purple-50"
                        },
                        {
                          feature: "Leak-Tight Requirement",
                          immersion: "Critical (housing must be sealed)",
                          conventional: "Important (coolant circuit)",
                          immersionColor: "text-red-700 bg-red-50",
                          conventionalColor: "text-yellow-700 bg-yellow-50"
                        },
                        {
                          feature: "Coolant Contact",
                          immersion: "Direct with cells",
                          conventional: "Indirect (via plates/channels)",
                          immersionColor: "text-emerald-700 bg-emerald-50",
                          conventionalColor: "text-indigo-700 bg-indigo-50"
                        },
                        {
                          feature: "Complexity",
                          immersion: "Lower",
                          conventional: "Higher",
                          immersionColor: "text-green-700 bg-green-50",
                          conventionalColor: "text-red-700 bg-red-50"
                        },
                        {
                          feature: "Maintenance",
                          immersion: "Focus on coolant integrity/housing",
                          conventional: "Focus on external plumbing",
                          immersionColor: "text-cyan-700 bg-cyan-50",
                          conventionalColor: "text-pink-700 bg-pink-50"
                        }
                      ].map((row, index) => (
                        <motion.tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors duration-200"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                            {row.feature}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-block px-3 py-1 rounded-lg text-sm font-medium ${row.immersionColor}`}>
                              {row.immersion}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-block px-3 py-1 rounded-lg text-sm font-medium ${row.conventionalColor}`}>
                              {row.conventional}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </motion.table>
                </div>

                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-600 text-sm sm:text-base">
                    This comparison highlights the key differences between immersion cooling and conventional liquid cooling approaches, 
                    demonstrating how immersion cooling simplifies design while enhancing performance and safety.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <StatsSection />
        <ThermalManagement />
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
