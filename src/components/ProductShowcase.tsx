
import React from 'react';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  const products = [
    {
      name: "INSTA 250",
      category: "Compact Power",
      description: "Packed with energy, low on weight. Compact, portable and swappable batteries for seamless mobility.",
      specs: {
        "Energy Capacity": "2.5 kWh",
        "Voltage": "50 V",
        "Operating Voltage": "42 V to 58 V"
      },
      image: "/lovable-uploads/de1b9c42-8410-44f6-a947-502d1d0f46e1.png",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      name: "FLO Series",
      category: "Safety First",
      description: "Super safe fireproof technology with long life and fast charging. Cost effective LFP chemistry.",
      specs: {
        "Safety Rating": "Fireproof",
        "Life Cycle": "10+ Years",
        "Chemistry": "LFP"
      },
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "MACH Pro",
      category: "Performance",
      description: "Rapid fast charging within 12 minutes. Long life with 3-year warranty. Premium performance.",
      specs: {
        "Charging Time": "12 Minutes",
        "Warranty": "3 Years",
        "Performance": "Premium"
      },
      gradient: "from-purple-600 to-pink-500"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6">
            PRODUCTS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge battery solutions for every application
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gray-900/50 backdrop-blur-md border border-gray-800 hover:border-cyan-400/50 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Background Gradient on Hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="mb-6">
                  <motion.div 
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${product.gradient} text-white font-bold text-sm mb-4`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {product.category}
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4">Specifications</h4>
                  <div className="space-y-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <motion.div 
                        key={key}
                        className="flex justify-between items-center p-3 bg-black/30 rounded-lg group-hover:bg-black/50 transition-all"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-gray-400 text-sm">{key}</span>
                        <span className="text-white font-semibold">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button 
                  className="mt-6 w-full py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-medium hover:bg-cyan-400 hover:text-black transition-all group-hover:shadow-lg group-hover:shadow-cyan-400/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
