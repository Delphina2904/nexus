
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
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-500/10"
    },
    {
      year: "2025",
      title: "INSTA Series Launch",
      description: "Compact, portable and swappable batteries with seamless two-minute swaps for continuous mobility.",
      specs: ["2.5 kWh Capacity", "50V Output", "Rapid Deployment", "Ultra-Portable"],
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-500/10"
    },
    {
      year: "2026",
      title: "FLO Technology",
      description: "Super safe fireproof technology with extended life cycles and cost-effective LFP chemistry.",
      specs: ["Fireproof Design", "10+ Year Life", "Cost Effective", "Sustainable"],
      color: "from-purple-600 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      year: "2027",
      title: "MACH Innovation",
      description: "Rapid fast charging within minutes with extended life warranty and premium performance.",
      specs: ["12 Min Charging", "3 Year Warranty", "Premium Build", "High Performance"],
      color: "from-pink-500 to-orange-500",
      bgColor: "bg-pink-500/10"
    }
  ];

  return (
    <div className="bg-black py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6">
            THE EVOLUTION
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey through breakthrough innovations in battery technology
          </p>
          
          {/* Progress indicator */}
          <motion.div 
            className="mt-8 mx-auto w-64 h-2 bg-gray-800 rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full origin-left"
              style={{ 
                scaleX: scrollYProgress,
                opacity: progressOpacity
              }}
            />
          </motion.div>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Enhanced Vertical Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-full shadow-lg">
            <motion.div 
              ref={progressRef}
              className="w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full origin-top shadow-cyan-400/50 shadow-lg"
              style={{ 
                height: progressHeight,
                opacity: progressOpacity
              }}
            />
            
            {/* Glowing top indicator */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
              style={{ opacity: progressOpacity }}
              animate={{
                boxShadow: ["0 0 10px rgba(34, 211, 238, 0.5)", "0 0 20px rgba(34, 211, 238, 0.8)", "0 0 10px rgba(34, 211, 238, 0.5)"]
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
              className={`relative flex items-center mb-24 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Enhanced Content Card */}
              <motion.div 
                className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`${item.bgColor} backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-400/20`}>
                  <motion.div 
                    className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${item.color} text-white font-bold mb-6 text-lg shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      boxShadow: ["0 0 10px rgba(34, 211, 238, 0.3)", "0 0 20px rgba(34, 211, 238, 0.5)", "0 0 10px rgba(34, 211, 238, 0.3)"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {item.year}
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-white mb-6">{item.title}</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">{item.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {item.specs.map((spec, specIndex) => (
                      <motion.div
                        key={specIndex}
                        className="bg-black/40 rounded-xl p-4 text-center border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "rgba(34, 211, 238, 0.1)",
                          boxShadow: "0 0 15px rgba(34, 211, 238, 0.3)"
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + specIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-cyan-400 font-semibold">{spec}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Center Circle */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center z-10 shadow-lg shadow-cyan-400/50"
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
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(34, 211, 238, 0.5)",
                    "0 0 30px rgba(34, 211, 238, 0.8)",
                    "0 0 20px rgba(34, 211, 238, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-8 h-8 bg-white rounded-full shadow-inner" />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-white/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Empty space for opposite side */}
              <div className="w-5/12" />
              
              {/* Connection line to progress bar */}
              <motion.div
                className={`absolute top-1/2 ${index % 2 === 0 ? 'left-1/2 ml-8' : 'right-1/2 mr-8'} w-12 h-px bg-gradient-to-r from-cyan-400/50 to-transparent`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Background Electric Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
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
        className="fixed right-8 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gray-800 rounded-full z-20"
        style={{ opacity: progressOpacity }}
      >
        <motion.div
          className="w-full bg-gradient-to-t from-cyan-400 to-purple-600 rounded-full origin-bottom"
          style={{ height: progressHeight }}
        />
      </motion.div>
    </div>
  );
};

export default Timeline;
