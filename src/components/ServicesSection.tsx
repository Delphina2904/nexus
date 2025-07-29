
import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      id: "01",
      title: "E-Mobility",
      description: "Spanish mackerel yellow weaver sixgill sandperch flyingfish yellowfin cutthroat trout",
      image: "/lovable-uploads/5b29159e-f501-4d98-85af-92e00a38f4da.png",
      category: "Transportation"
    },
    {
      id: "02", 
      title: "Renewable Energy",
      description: "Yellow weaver sixgill sandperch flyingfish yellowfin cutthroat trout",
      image: "/lovable-uploads/5b29159e-f501-4d98-85af-92e00a38f4da.png",
      category: "Power Solutions"
    },
    {
      id: "03",
      title: "UPS Solutions", 
      description: "Mackerel yellow weaver sixgill sandperch flyingfish yellowfin cutthroat trout",
      image: "/lovable-uploads/5b29159e-f501-4d98-85af-92e00a38f4da.png",
      category: "Infrastructure"
    },
    {
      id: "04",
      title: "Logistics and Delivery",
      description: "Yellow weaver sixgill sandperch flyingfish yellowfin cutthroat trout",
      image: "/lovable-uploads/5b29159e-f501-4d98-85af-92e00a38f4da.png", 
      category: "Operations"
    }
  ];

  const specializations = [
    {
      number: "01",
      title: "Public Infrastructure",
      description: "Advanced energy solutions for public transportation and municipal infrastructure projects.",
      image: "/lovable-uploads/d919c625-62a6-496f-84eb-06742a6b9e91.png"
    },
    {
      number: "02", 
      title: "Customized Applications",
      description: "Tailored battery solutions designed specifically for your unique energy requirements.",
      image: "/lovable-uploads/d919c625-62a6-496f-84eb-06742a6b9e91.png"
    },
    {
      number: "03",
      title: "Agriculture",
      description: "Sustainable energy solutions for modern agricultural equipment and smart farming systems.",
      image: "/lovable-uploads/d919c625-62a6-496f-84eb-06742a6b9e91.png"
    },
    {
      number: "04",
      title: "Logistics and Delivery", 
      description: "High-performance batteries optimized for logistics vehicles and delivery fleet operations.",
      image: "/lovable-uploads/d919c625-62a6-496f-84eb-06742a6b9e91.png"
    }
  ];

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      {/* Services Section */}
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
            <span className="text-green-500 font-medium text-base sm:text-lg">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 max-w-2xl leading-tight">
            We provide one of the{" "}
            <span className="relative">
              best services
              <motion.div
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-green-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-2 bg-green-500"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 sm:mb-6 aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/40 z-10"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{service.description}</p>
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

      {/* Specializations Section */}
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
              <span className="text-green-500 font-medium text-base sm:text-lg">Specializations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 max-w-4xl leading-tight">
              We specialize in{" "}
              <span className="relative">
                state-of-the-art energy solutions
                <motion.div
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-green-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
            <div className="max-w-2xl">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper whitebait horsefish bullhead shark California smoothtongue, striped burrfish threadtail saber-toothed blenny Red
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {specializations.map((item, index) => (
              <motion.div
                key={item.number}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 sm:mb-6 aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/40 z-10"></div>
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
                    <span className="text-white text-6xl sm:text-7xl lg:text-8xl font-bold opacity-80">{item.number}</span>
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
