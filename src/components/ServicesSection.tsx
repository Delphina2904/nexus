
import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const productEcosystem = [
    {
      id: "01",
      title: "Quick Commerce Solutions",
      description: "Ultra-fast charging batteries for delivery vehicles and micro-fulfillment centers. Supporting 0.5C to 6C charge rates with advanced thermal management.",
      image: "/lovable-uploads/5b29159e-f501-4d98-85af-92e00a38f4da.png",
      category: "Last-Mile Delivery",
      features: ["10-minute charging", "Temperature optimization", "High cycle life"]
    },
    {
      id: "02", 
      title: "Mobility Solutions",
      description: "Comprehensive battery systems for electric vehicles, e-bikes, and public transportation with AI-powered Battery Management Systems.",
      image: "/lovable-uploads/5b29159e-f501-4d98-85af-92e00a38f4da.png",
      category: "Transportation",
      features: ["Smart BMS", "Range optimization", "Safety certified"]
    },
    {
      id: "03",
      title: "Grid-Scale ESS", 
      description: "Large-scale energy storage systems with immersion cooling technology for utility applications and renewable energy integration.",
      image: "/lovable-uploads/5b29159e-f501-4d98-85af-92e00a38f4da.png",
      category: "Utility Scale",
      features: ["Immersion cooling", "Grid stabilization", "Scalable design"]
    },
    {
      id: "04",
      title: "Residential & Commercial",
      description: "Home and business energy storage solutions with life extension algorithms and seamless integration capabilities.",
      image: "/lovable-uploads/5b29159e-f501-4d98-85af-92e00a38f4da.png", 
      category: "Distributed Energy",
      features: ["Home integration", "Peak shaving", "Backup power"]
    }
  ];

  const coreEnablers = [
    {
      number: "",
      title: "Active Thermal Management",
      description: "•	Precision control of battery temperatures ensures optimal performance and safety even during rapid charging or discharging.",
      image: "/lovable-uploads/d919c625-62a6-496f-84eb-06742a6b9e91.png",
      benefits: ["Enhanced safety", "Longer lifespan", "Higher performance"]
    },
    {
      number:"", 
      title: "•	AI-Powered Battery Management System (BMS)",
      description: "Real-time data analytics optimize every cell for peak efficiency and longevity.",
      image: "/lovable-uploads/d919c625-62a6-496f-84eb-06742a6b9e91.png",
      benefits: ["Predictive analytics", "Smart optimization", "Real-time monitoring"]
    },
    {
      number: "",
      title: "Life Extension Algorithm",
      description: "Smart software predicts and mitigates cell degradation, extending useful life to five years and beyond—all chemistries supported.",
      image: "/lovable-uploads/d919c625-62a6-496f-84eb-06742a6b9e91.png",
      benefits: ["Extended lifespan", "Cost optimization", "Predictive maintenance"]
    },
    {
      number: "",
      title: "Ultra-Fast Charging", 
      description: "Proprietary Liquid Immersion Technology enables reliable 20-minute ultra charging for all product categories.",
      image: "/lovable-uploads/d919c625-62a6-496f-84eb-06742a6b9e91.png",
      benefits: ["Rapid charging", "Maintained safety", "Flexible rates"]
    }
  ];

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      {/* Product Ecosystem Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24 lg:mb-32">
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 h-1 bg-green-500 mr-3 sm:mr-4"></div>
            <span className="text-green-500 font-medium text-base sm:text-lg">Nexus Energy Product Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 max-w-3xl leading-tight">
            Transition to a {" "}
            <span className="relative">
              net-zero Future
              <motion.div
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-green-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Nexus Energy’s product ecosystem is engineered to accelerate the transition to a net-zero future, delivering next-generation battery-powered solutions across diverse sectors—including quick commerce, mobility, and scalable energy storage. Our integrated approach harnesses the power of our unique technological innovations:
          </p>
          <div className="w-16 sm:w-20 h-2 bg-green-500"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {productEcosystem.map((product, index) => (
            <motion.div
              key={product.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 sm:mb-6 aspect-[4/5]">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/40 z-10"></div>
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">{product.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <motion.div
                    className="mt-3 sm:mt-4 flex items-center text-green-400"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xl sm:text-2xl">→</span>
                  </motion.div>
                </div>
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-green-600 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Technology Enablers Section */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 sm:w-16 h-1 bg-green-500 mr-3 sm:mr-4"></div>
              <span className="text-green-500 font-medium text-base sm:text-lg">Core Technology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 max-w-4xl leading-tight">
              Core Technology{" "}
              <span className="relative">
                Enablers
                <motion.div
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-green-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
            <div className="max-w-3xl">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Our proprietary technology stack combines cutting-edge thermal management, artificial intelligence, and advanced algorithms to deliver unmatched performance and reliability.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                From immersion cooling systems that enhance safety and extend battery life to AI-powered management systems that optimize performance in real-time, our technology enablers set the foundation for next-generation energy storage solutions.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreEnablers.map((item, index) => (
              <motion.div
                key={item.number}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 sm:mb-6 aspect-[4/5]">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/40 z-10"></div>
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                    <motion.div
                      className="flex items-center text-green-400"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-xl sm:text-2xl">→</span>
                    </motion.div>
                  </div>
                  <div className="w-full h-full bg-gradient-to-br from-orange-600 to-red-600 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                
                <div className="px-2">
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.benefits.map((benefit, idx) => (
                      <span key={idx} className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
