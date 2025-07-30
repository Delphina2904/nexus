import React from 'react';
import { motion } from 'framer-motion';

const ThermalManagement = () => {
  const advantages = [
    {
      title: "Superior Heat Dissipation",
      description: "Direct contact between coolant and battery cells enables efficient heat transfer, maintaining optimal operating temperatures even during rapid charging and high-power discharge cycles.",
      icon: "🌡️",
      metrics: ["50% better heat transfer", "Uniform temperature distribution", "Reduced thermal gradients"]
    },
    {
      title: "Enhanced Safety",
      description: "Immersion cooling acts as a fire suppressant, significantly reducing fire risk compared to air-cooled systems. The dielectric coolant provides electrical isolation and thermal protection.",
      icon: "🛡️", 
      metrics: ["Inherent fire suppression", "Electrical isolation", "Thermal runaway prevention"]
    },
    {
      title: "Extended Battery Life",
      description: "Optimal temperature control prevents thermal stress and degradation, extending battery lifespan by maintaining cells within ideal operating ranges throughout their lifecycle.",
      icon: "🔋",
      metrics: ["5000+ charge cycles", "Reduced degradation", "Consistent performance"]
    },
    {
      title: "Vibration Dampening", 
      description: "The liquid medium provides mechanical cushioning, protecting battery cells from vibrations and shocks in mobile applications like electric vehicles and delivery systems.",
      icon: "🏗️",
      metrics: ["Shock absorption", "Reduced mechanical stress", "Enhanced durability"]
    }
  ];

  const designConsiderations = [
    {
      aspect: "Coolant Selection",
      details: "Dielectric fluids with high thermal conductivity, chemical stability, and compatibility with battery materials. Must maintain properties across operating temperature range.",
      requirements: ["Non-conductive", "Thermally stable", "Material compatible"]
    },
    {
      aspect: "System Integration",
      details: "Seamless integration with existing battery management systems, thermal sensors, and safety protocols. Modular design for scalability across applications.",
      requirements: ["BMS integration", "Sensor compatibility", "Modular architecture"]
    },
    {
      aspect: "Maintenance & Monitoring", 
      details: "Real-time monitoring of coolant properties, temperature distribution, and system performance. Predictive maintenance algorithms prevent issues before they occur.",
      requirements: ["Real-time monitoring", "Predictive analytics", "Remote diagnostics"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-blue-500 mr-4"></div>
            <span className="text-blue-600 font-medium text-lg">Advanced Technology</span>
            <div className="w-16 h-1 bg-blue-500 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Immersion Cooling
            <span className="block text-blue-600">Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proprietary Active Thermal Management system uses advanced immersion cooling 
            to maintain optimal battery performance, enhance safety, and extend operational lifespan 
            across all environmental conditions.
          </p>
        </motion.div>

        {/* Key Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{advantage.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{advantage.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {advantage.description}
              </p>
              <div className="space-y-2">
                {advantage.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700 font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Specifications */}
        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Design Considerations & Implementation
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {designConsiderations.map((consideration, index) => (
              <motion.div
                key={consideration.aspect}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {consideration.aspect}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {consideration.details}
                  </p>
                  <div className="space-y-2">
                    {consideration.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Proven Performance Metrics
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Real-world data demonstrating the effectiveness of our immersion cooling technology
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "40%", label: "Temperature Reduction", unit: "vs air cooling" },
              { value: "99.9%", label: "Fire Safety", unit: "risk mitigation" },
              { value: "25%", label: "Lifespan Extension", unit: "additional cycles" },
              { value: "60%", label: "Vibration Dampening", unit: "shock absorption" }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {metric.value}
                </div>
                <div className="text-blue-100 font-medium mb-1">
                  {metric.label}
                </div>
                <div className="text-blue-200 text-sm">
                  {metric.unit}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThermalManagement;
