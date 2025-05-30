
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      value: "15",
      label: "Minute Charging",
      icon: "⚡",
      description: "Ultra-fast charging technology"
    },
    {
      value: "3000",
      label: "Cycles",
      icon: "🔋",
      description: "Extended battery lifespan"
    },
    {
      value: "Type 6",
      label: "Open Network Charging",
      icon: "🔌",
      description: "Universal compatibility"
    },
    {
      value: "176",
      label: "Wh/Kg",
      icon: "⚖️",
      description: "Energy density ratio"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              0 KELVIN™
            </span>
          </h2>
          <p className="text-2xl text-white font-semibold mb-4">
            A ZERO-COMPROMISE BATTERY TECHNOLOGY
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Revolutionary battery technology setting new benchmarks in safety, performance, and reliability
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl p-8 text-center hover:border-cyan-400/50 transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Value */}
                <motion.div 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {stat.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Discover the Technology
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;
