
import React, { memo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { easingCurves, springConfigs } from '../lib/performance';

const StatsSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      value: "6C",
      label: "Ultra-Fast Charging",
      icon: "⚡",
      description: "Maximum charging rate capability"
    },
    {
      value: "5000+",
      label: "Charge Cycles",
      icon: "🔋",
      description: "Extended battery lifespan with our technology"
    },
    {
      value: "95%",
      label: "Energy Efficiency",
      icon: "�",
      description: "Superior energy conversion and storage"
    },
    {
      value: "-40°C to +60°C",
      label: "Operating Range",
      icon: "🌡️",
      description: "Wide temperature operating capability"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: easingCurves.smooth
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easingCurves.smooth }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              0 KELVIN™
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-white font-semibold mb-3 sm:mb-4">
            A ZERO-COMPROMISE BATTERY TECHNOLOGY
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Revolutionary battery technology setting new benchmarks in safety, performance, and reliability
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={springConfigs.snappy}
            >
              <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl p-6 sm:p-8 text-center hover:border-cyan-400/50 transition-all duration-200 h-full">
                {/* Icon */}
                <motion.div 
                  className="text-3xl sm:text-4xl mb-3 sm:mb-4"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={springConfigs.snappy}
                >
                  {stat.icon}
                </motion.div>

                {/* Value */}
                <motion.div 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.3,
                    ease: easingCurves.smooth
                  }}
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-200">
                  {stat.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easingCurves.smooth }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg"
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 0 25px rgba(34, 211, 238, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={springConfigs.snappy}
          >
            Discover the Technology
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
});

StatsSection.displayName = 'StatsSection';

export default StatsSection;