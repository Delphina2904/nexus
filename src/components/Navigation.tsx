
import React, { useState, useEffect, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navigation = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '#products' },
    { name: 'Technology', path: '#technology' },
    { name: 'About', path: '/vision-mission' }
  ];

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 9999,
        transform: 'translateZ(0)', // Force hardware acceleration
        willChange: 'transform' // Optimize for animations
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-black backdrop-blur-sm overflow-hidden">
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Energy wave effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(34,211,238,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(147,51,234,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(34,211,238,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(34,211,238,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(147,51,234,0.1) 100%)",
              "linear-gradient(90deg, rgba(147,51,234,0.1) 0%, rgba(34,211,238,0.1) 50%, rgba(59,130,246,0.1) 100%)",
              "linear-gradient(90deg, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 50%, rgba(34,211,238,0.1) 100%)",
              "linear-gradient(90deg, rgba(34,211,238,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(147,51,234,0.1) 100%)"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Scanning line effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Glowing border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            boxShadow: [
              "0 0 10px rgba(34,211,238,0.3)",
              "0 0 20px rgba(34,211,238,0.6)",
              "0 0 10px rgba(34,211,238,0.3)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Corner accent lights */}
        <motion.div
          className="absolute top-0 left-0 w-20 h-20 bg-gradient-radial from-cyan-400/20 to-transparent rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-radial from-purple-400/20 to-transparent rounded-full"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 relative z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2
        }}
      >
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            style={{ 
              transition: "all 0.5s ease-out",
              transitionDelay: "0.4s"
            }}
          >
            <motion.div 
              className="relative w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
              animate={{
                background: [
                  "linear-gradient(45deg, #22d3ee, #3b82f6)",
                  "linear-gradient(45deg, #3b82f6, #9333ea)",
                  "linear-gradient(45deg, #9333ea, #22d3ee)",
                  "linear-gradient(45deg, #22d3ee, #3b82f6)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.1,
                rotate: 180
              }}
            >
              <motion.span 
                className="text-white font-bold text-xl z-10 relative"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(34,211,238,0.8)",
                    "0 0 10px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                N
              </motion.span>
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(34,211,238,0.4)",
                    "0 0 30px rgba(59,130,246,0.6)",
                    "0 0 20px rgba(147,51,234,0.4)",
                    "0 0 30px rgba(34,211,238,0.6)"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <motion.span 
              className="text-white font-bold text-xl"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.3)",
                  "0 0 15px rgba(34,211,238,0.6)",
                  "0 0 10px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              NEXUS ENERGY
            </motion.span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {/* Energy field behind nav links */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-purple-400/5 rounded-full blur-sm"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {navigationItems.map((item, index) => {
              const isExternal = item.path.startsWith('#');
              
              return (
                <motion.div key={item.name} className="relative">
                  {isExternal ? (
                    <motion.a
                      href={item.path}
                      className="text-white/90 hover:text-white transition-colors duration-200 relative font-medium z-10"
                      whileHover={{ 
                        scale: 1.05,
                        textShadow: "0 0 8px rgba(255,255,255,0.8)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ 
                        animationDelay: `${0.8 + index * 0.1}s`,
                        transition: "all 0.4s ease-out"
                      }}
                    >
                      {item.name}
                    </motion.a>
                  ) : (
                    <Link to={item.path}>
                      <motion.span
                        className="text-white/90 hover:text-white transition-colors duration-200 relative font-medium z-10 block"
                        whileHover={{ 
                          scale: 1.05,
                          textShadow: "0 0 8px rgba(255,255,255,0.8)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ 
                          animationDelay: `${0.8 + index * 0.1}s`,
                          transition: "all 0.4s ease-out"
                        }}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  )}
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                  {/* Glowing dot effect */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 opacity-0"
                    whileHover={{ 
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.2, 0.5]
                    }}
                    transition={{ 
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Hover energy ripple */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-cyan-400/10 opacity-0"
                    whileHover={{
                      opacity: [0, 0.3, 0],
                      scale: [0.8, 1.2, 1.4]
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {/* Desktop CTA Button */}
            <motion.button 
              className="hidden sm:block relative px-6 py-3 rounded-full font-medium text-sm sm:text-base text-white overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(34,211,238,0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              style={{
                transition: "all 0.8s ease-out",
                transitionDelay: "1.2s"
              }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    "linear-gradient(45deg, #22d3ee, #3b82f6)",
                    "linear-gradient(45deg, #3b82f6, #9333ea)",
                    "linear-gradient(45deg, #9333ea, #22d3ee)",
                    "linear-gradient(45deg, #22d3ee, #3b82f6)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                    "linear-gradient(225deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="relative z-10">Get In Touch</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
              whileHover={{ 
                backgroundColor: "rgba(34,211,238,0.1)",
                boxShadow: "0 0 15px rgba(34,211,238,0.3)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              animate={{
                rotate: isMobileMenuOpen ? 180 : 0
              }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="w-full h-0.5 bg-white transform transition-all duration-300 shadow-sm"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 2 : 0,
                    boxShadow: isMobileMenuOpen ? "0 0 8px rgba(34,211,238,0.6)" : "0 0 4px rgba(255,255,255,0.3)"
                  }}
                />
                <motion.span
                  className="w-full h-0.5 bg-white transition-all duration-300 mt-1 shadow-sm"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    scaleX: isMobileMenuOpen ? 0 : 1,
                    boxShadow: "0 0 4px rgba(255,255,255,0.3)"
                  }}
                />
                <motion.span
                  className="w-full h-0.5 bg-white transform transition-all duration-300 mt-1 shadow-sm"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -2 : 0,
                    boxShadow: isMobileMenuOpen ? "0 0 8px rgba(34,211,238,0.6)" : "0 0 4px rgba(255,255,255,0.3)"
                  }}
                />
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 relative"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Mobile menu gradient background */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm border border-cyan-400/20"></div>
              
              <div className="flex flex-col space-y-2 relative z-10 p-4">
                {navigationItems.map((item, index) => {
                  const isExternal = item.path.startsWith('#');
                  
                  return isExternal ? (
                    <motion.a
                      key={item.name}
                      href={item.path}
                      className="text-white/90 hover:text-white transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-500/10 font-medium"
                      onClick={closeMobileMenu}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ 
                        delay: index * 0.1, 
                        ease: [0.25, 0.46, 0.45, 0.94],
                        duration: 0.3
                      }}
                      whileHover={{
                        scale: 1.02,
                        textShadow: "0 0 8px rgba(34,211,238,0.8)",
                        boxShadow: "0 0 15px rgba(34,211,238,0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.a>
                  ) : (
                    <Link key={item.name} to={item.path} onClick={closeMobileMenu}>
                      <motion.div
                        className="text-white/90 hover:text-white transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-500/10 font-medium"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ 
                          delay: index * 0.1, 
                          ease: [0.25, 0.46, 0.45, 0.94],
                          duration: 0.3
                        }}
                        whileHover={{
                          scale: 1.02,
                          textShadow: "0 0 8px rgba(34,211,238,0.8)",
                          boxShadow: "0 0 15px rgba(34,211,238,0.2)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  );
                })}
                <motion.button 
                  className="sm:hidden relative px-6 py-3 rounded-full font-medium text-center mt-4 text-white overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated gradient background for mobile button */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #22d3ee, #3b82f6)",
                        "linear-gradient(45deg, #3b82f6, #9333ea)",
                        "linear-gradient(45deg, #9333ea, #22d3ee)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="relative z-10">Get In Touch</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
