import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const VisionMission = memo(() => {
  return (
    <motion.div 
      className="min-h-screen bg-black overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      
      <main className="pt-14">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Our{" "}
                <span className="relative">
                  Vision & Mission
                  <motion.div
                    className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </span>
              </h1>
              <motion.p
                className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Powering Tomorrow's Sustainable World Through Revolutionary Energy Solutions
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
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
                <div className="w-12 sm:w-16 h-1 bg-blue-500 mr-3 sm:mr-4"></div>
                <span className="text-blue-500 font-medium text-base sm:text-lg">Vision</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 max-w-4xl leading-tight">
                Envisioning a{" "}
                <span className="relative">
                  Sustainable Future
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-12 border border-blue-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-white text-3xl">🌍</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    To be the global leader in advanced energy storage solutions, enabling a world where clean, efficient, and sustainable energy powers every aspect of human life.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We envision a future where energy storage is seamlessly integrated into every facet of society—from personal mobility to industrial operations—creating a carbon-neutral world powered by innovation and responsibility.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: "🚀",
                    title: "Innovation Leadership",
                    description: "Pioneering breakthrough technologies that redefine energy storage possibilities.",
                    color: "from-blue-500 to-indigo-500"
                  },
                  {
                    icon: "🌱",
                    title: "Environmental Stewardship",
                    description: "Creating solutions that protect and preserve our planet for future generations.",
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    icon: "🤝",
                    title: "Global Impact",
                    description: "Empowering communities worldwide with accessible, reliable energy solutions.",
                    color: "from-purple-500 to-pink-500"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  >
                    <div className="flex items-start">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                        <span className="text-white text-xl">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
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
                <div className="w-12 sm:w-16 h-1 bg-red-500 mr-3 sm:mr-4"></div>
                <span className="text-red-500 font-medium text-base sm:text-lg">Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 max-w-4xl leading-tight">
                Driving{" "}
                <span className="relative">
                  Innovation Forward
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    number: "01",
                    title: "Advanced Technology Development",
                    description: "Continuously innovating cutting-edge energy storage technologies, including immersion cooling systems, smart battery management, and AI-driven optimization platforms.",
                    color: "from-red-500 to-orange-500"
                  },
                  {
                    number: "02",
                    title: "Sustainable Manufacturing",
                    description: "Implementing eco-friendly production processes and circular economy principles to minimize environmental impact while maximizing product quality and performance.",
                    color: "from-orange-500 to-yellow-500"
                  },
                  {
                    number: "03",
                    title: "Strategic Partnerships",
                    description: "Building collaborative relationships with industry leaders, research institutions, and communities to accelerate the adoption of clean energy solutions.",
                    color: "from-yellow-500 to-green-500"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  >
                    <div className="flex items-start">
                      <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                        <span className="text-white font-bold text-lg">{item.number}</span>
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 sm:p-12 border border-red-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-white text-3xl">🎯</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    To revolutionize energy storage through innovative thermal management solutions, making clean energy more efficient, accessible, and reliable for all.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We are committed to developing breakthrough technologies that solve real-world energy challenges while fostering sustainable growth and environmental responsibility.
                  </p>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Core Commitments</h4>
                    <ul className="space-y-3">
                      {[
                        "Delivering superior performance and safety",
                        "Reducing environmental footprint",
                        "Enabling energy independence",
                        "Supporting sustainable development goals"
                      ].map((commitment, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{commitment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-1 bg-purple-500 mr-3 sm:mr-4"></div>
                <span className="text-purple-500 font-medium text-base sm:text-lg">Values</span>
                <div className="w-12 sm:w-16 h-1 bg-purple-500 ml-3 sm:ml-4"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                Our Core{" "}
                <span className="relative">
                  Values
                  <motion.div
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-purple-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Innovation",
                  description: "We constantly push boundaries to create groundbreaking solutions that transform industries.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: "🛡️",
                  title: "Integrity",
                  description: "We operate with transparency, honesty, and ethical practices in all our relationships.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: "🌟",
                  title: "Excellence",
                  description: "We strive for the highest quality in everything we do, from products to customer service.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: "🤝",
                  title: "Collaboration",
                  description: "We believe in the power of partnerships and teamwork to achieve greater impact.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: "🌱",
                  title: "Sustainability",
                  description: "We are committed to environmental responsibility and creating a sustainable future.",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: "🎯",
                  title: "Customer Focus",
                  description: "We prioritize our customers' needs and success in every decision we make.",
                  color: "from-red-500 to-pink-500"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <span className="text-white text-2xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
});

VisionMission.displayName = 'VisionMission';

export default VisionMission;
