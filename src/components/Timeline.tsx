
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const timelineData = [
    {
      year: "2024",
      title: "0 KELVIN™ Technology",
      description: "Revolutionary zero-compromise battery technology with unparalleled safety standards and performance metrics.",
      specs: ["15 Min Charging", "3000+ Cycles", "Type 6 Charging", "176 Wh/Kg"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      year: "2025",
      title: "INSTA Series Launch",
      description: "Compact, portable and swappable batteries with seamless two-minute swaps for continuous mobility.",
      specs: ["2.5 kWh Capacity", "50V Output", "Rapid Deployment", "Ultra-Portable"],
      color: "from-blue-500 to-purple-600"
    },
    {
      year: "2026",
      title: "FLO Technology",
      description: "Super safe fireproof technology with extended life cycles and cost-effective LFP chemistry.",
      specs: ["Fireproof Design", "10+ Year Life", "Cost Effective", "Sustainable"],
      color: "from-purple-600 to-pink-500"
    },
    {
      year: "2027",
      title: "MACH Innovation",
      description: "Rapid fast charging within minutes with extended life warranty and premium performance.",
      specs: ["12 Min Charging", "3 Year Warranty", "Premium Build", "High Performance"],
      color: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <div className="bg-black py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6">
            THE TECH STACK
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey through breakthrough innovations in battery technology
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-800">
            <motion.div 
              className="w-full bg-gradient-to-b from-cyan-400 to-purple-600 origin-top"
              style={{ 
                height: `${timelineProgress.get()}%`,
                scaleY: useTransform(scrollYProgress, [0, 1], [0, 1])
              }}
            />
          </div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-20 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content Card */}
              <motion.div 
                className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                  <motion.div 
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold mb-4`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.year}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {item.specs.map((spec, specIndex) => (
                      <motion.div
                        key={specIndex}
                        className="bg-black/30 rounded-lg p-3 text-center"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 211, 238, 0.1)" }}
                      >
                        <div className="text-cyan-400 font-semibold text-sm">{spec}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Center Circle */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center z-10"
                whileHover={{ scale: 1.2 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-white rounded-full" />
              </motion.div>

              {/* Empty space for opposite side */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Electric Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
