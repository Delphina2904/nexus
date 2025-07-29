
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progressOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const timelineData = [
    {
      year: "2024",
      title: "0 KELVIN™ Technology",
      description: "Revolutionary zero-compromise battery technology with unparalleled safety standards and performance metrics.",
      specs: ["15 Min Charging", "3000+ Cycles", "Type 6 Charging", "176 Wh/Kg"],
      color: "from-green-400 to-blue-500",
      bgColor: "bg-green-500/10"
    },
    {
      year: "2025",
      title: "INSTA Series Launch",
      description: "Compact, portable and swappable batteries with seamless two-minute swaps for continuous mobility.",
      specs: ["2.5 kWh Capacity", "50V Output", "Rapid Deployment", "Ultra-Portable"],
      color: "from-blue-500 to-green-600",
      bgColor: "bg-blue-500/10"
    },
    {
      year: "2026",
      title: "FLO Technology",
      description: "Super safe fireproof technology with extended life cycles and cost-effective LFP chemistry.",
      specs: ["Fireproof Design", "10+ Year Life", "Cost Effective", "Sustainable"],
      color: "from-green-600 to-teal-500",
      bgColor: "bg-green-500/10"
    },
    {
      year: "2027",
      title: "MACH Innovation",
      description: "Rapid fast charging within minutes with extended life warranty and premium performance.",
      specs: ["12 Min Charging", "3 Year Warranty", "Premium Build", "High Performance"],
      color: "from-teal-500 to-blue-500",
      bgColor: "bg-teal-500/10"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            THE EVOLUTION
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our journey through breakthrough innovations in battery technology
          </p>
          
          {/* Progress indicator */}
          <motion.div 
            className="mt-6 sm:mt-8 mx-auto w-48 sm:w-64 h-2 bg-gray-200 rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full origin-left"
              style={{ 
                scaleX: scrollYProgress,
                opacity: progressOpacity
              }}
            />
          </motion.div>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Enhanced Vertical Progress Line - Hidden on mobile, visible on tablet+ */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 rounded-full shadow-lg hidden md:block">
            <motion.div 
              ref={progressRef}
              className="w-full bg-gradient-to-b from-green-400 via-blue-500 to-teal-500 rounded-full origin-top shadow-green-400/50 shadow-lg"
              style={{ 
                height: progressHeight,
                opacity: progressOpacity
              }}
            />
            
            {/* Glowing top indicator */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
              style={{ opacity: progressOpacity }}
              animate={{
                boxShadow: ["0 0 10px rgba(34, 197, 94, 0.5)", "0 0 20px rgba(34, 197, 94, 0.8)", "0 0 10px rgba(34, 197, 94, 0.5)"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 sm:mb-16 lg:mb-24 ${
                index % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Enhanced Content Card */}
              <motion.div 
                className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} text-center md:text-left`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`${item.bgColor} backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-green-400/50 transition-all duration-500 shadow-xl hover:shadow-green-400/20 bg-white/80`}>
                  <motion.div 
                    className={`inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r ${item.color} text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      boxShadow: ["0 0 10px rgba(34, 197, 94, 0.3)", "0 0 20px rgba(34, 197, 94, 0.5)", "0 0 10px rgba(34, 197, 94, 0.3)"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {item.year}
                  </motion.div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">{item.title}</h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">{item.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {item.specs.map((spec, specIndex) => (
                      <motion.div
                        key={specIndex}
                        className="bg-white/60 rounded-xl p-3 sm:p-4 text-center border border-gray-200 hover:border-green-400/50 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "rgba(34, 197, 94, 0.1)",
                          boxShadow: "0 0 15px rgba(34, 197, 94, 0.3)"
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + specIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-green-600 font-semibold text-xs sm:text-sm">{spec}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Center Circle - Hidden on mobile */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-500 items-center justify-center z-10 shadow-lg shadow-green-400/50 hidden md:flex"
                whileHover={{ scale: 1.3 }}
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                viewport={{ once: true }}
              >
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-full shadow-inner" />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-white/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Empty space for opposite side - Hidden on mobile */}
              <div className="w-5/12 hidden md:block" />
              
              {/* Connection line to progress bar - Hidden on mobile */}
              <motion.div
                className={`absolute top-1/2 ${index % 2 === 0 ? 'left-1/2 ml-6 sm:ml-8' : 'right-1/2 mr-6 sm:mr-8'} w-8 sm:w-12 h-px bg-gradient-to-r from-green-400/50 to-transparent hidden md:block`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Scroll progress indicator */}
      <motion.div 
        className="fixed right-8 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gray-200 rounded-full z-20"
        style={{ opacity: progressOpacity }}
      >
        <motion.div
          className="w-full bg-gradient-to-t from-green-400 to-blue-500 rounded-full origin-bottom"
          style={{ height: progressHeight }}
        />
      </motion.div>
    </div>
  );
};

export default Timeline;
