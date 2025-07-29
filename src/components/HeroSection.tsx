
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number; time: number }>>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Enhanced water ripple effect on mouse move with throttling
  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePosition({ x, y });
      
      // Throttle ripple creation to prevent performance issues
      if (ripples.length < 5) {
        const newRipple = {
          x,
          y,
          id: Date.now() + Math.random(),
          time: Date.now()
        };
        
        setRipples(prev => [...prev.slice(-4), newRipple]);
      }
    }
  }, [ripples.length]);

  // Clean up old ripples with optimized interval
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setRipples(prev => {
        const filtered = prev.filter(ripple => now - ripple.time < 1500);
        return filtered.length !== prev.length ? filtered : prev;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 40 : 80; // Reduce particles on mobile
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      originalX: number;
      originalY: number;
      life: number;
    }> = [];

    // Create optimized water particles with blue theme
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push({
        x,
        y,
        originalX: x,
        originalY: y,
        vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3), // Reduce velocity on mobile
        vy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
        radius: Math.random() * (isMobile ? 1 : 1.5) + 0.5, // Smaller particles on mobile
        color: Math.random() > 0.7 ? '#3b82f6' : Math.random() > 0.4 ? '#1d4ed8' : '#60a5fa',
        life: 1
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let isMouseActive = false;

    const handleCanvasMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseActive = true;
    };

    // Touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseX = touch.clientX - rect.left;
      mouseY = touch.clientY - rect.top;
      isMouseActive = true;
    };

    const handleMouseLeave = () => {
      isMouseActive = false;
    };

    canvas.addEventListener('mousemove', handleCanvasMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchstart', handleTouchMove, { passive: false });
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchend', handleMouseLeave);

    const animate = () => {
      // Clear with higher opacity for better performance
      ctx.fillStyle = 'rgba(37, 99, 235, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Optimized liquid water effect with mobile adjustments
        if (isMouseActive) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const interactionRadius = isMobile ? 150 : 200; // Smaller interaction radius on mobile
          if (distance < interactionRadius) {
            const force = (interactionRadius - distance) / interactionRadius;
            const angle = Math.atan2(dy, dx);
            
            // Reduced ripple effect for mobile performance
            const forceMultiplier = isMobile ? 0.15 : 0.2;
            particle.vx += Math.cos(angle) * force * forceMultiplier;
            particle.vy += Math.sin(angle) * force * forceMultiplier;
            
            // Reduced turbulence on mobile
            const turbulence = isMobile ? 0.01 : 0.02;
            particle.vx += (Math.random() - 0.5) * turbulence;
            particle.vy += (Math.random() - 0.5) * turbulence;
            
            // Enhance particle life near interaction
            particle.life = Math.min(1, particle.life + 0.01);
          }
        }

        // Update particle position with fluid dynamics
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Optimized boundary physics
        if (particle.x <= particle.radius || particle.x >= canvas.width - particle.radius) {
          particle.vx *= -0.8;
          particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));
        }
        if (particle.y <= particle.radius || particle.y >= canvas.height - particle.radius) {
          particle.vy *= -0.8;
          particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y));
        }

        // Gentle return to original position
        const returnForce = isMobile ? 0.0008 : 0.001;
        const returnForceX = (particle.originalX - particle.x) * returnForce;
        const returnForceY = (particle.originalY - particle.y) * returnForce;
        particle.vx += returnForceX;
        particle.vy += returnForceY;

        // Enhanced friction for realistic liquid movement
        const friction = isMobile ? 0.985 : 0.99;
        particle.vx *= friction;
        particle.vy *= friction;

        // Natural life decay
        particle.life *= 0.999;

        // Optimized particle rendering
        const velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        const alpha = Math.max(0.3, Math.min(1, particle.life * (1 - velocity * 0.3)));
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * (0.9 + velocity * 0.2), 0, Math.PI * 2);
        
        // Simplified glow effect - reduced on mobile for performance
        ctx.fillStyle = particle.color;
        if (!isMobile) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = particle.color;
        }
        ctx.fill();
        ctx.restore();

        // Optimized connections - reduce frequency on mobile
        const connectionModulo = isMobile ? 4 : 3;
        const connectionDistance = isMobile ? 60 : 80;
        
        if (index % connectionModulo === 0) {
          particles.slice(index + 1, index + (isMobile ? 3 : 4)).forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
              ctx.save();
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              
              const connectionAlpha = (1 - distance / connectionDistance) * 0.2 * Math.min(particle.life, otherParticle.life);
              ctx.strokeStyle = `rgba(59, 130, 246, ${connectionAlpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
              ctx.restore();
            }
          });
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
      // Redistribute particles on resize
      particles.forEach(particle => {
        particle.originalX = Math.random() * canvas.width;
        particle.originalY = Math.random() * canvas.height;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      canvas.removeEventListener('mousemove', handleCanvasMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchstart', handleTouchMove);
      canvas.removeEventListener('touchend', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"
      style={{ opacity }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Optimized water ripple effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 2.5, opacity: 0 }}
          exit={{ scale: 3, opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="w-16 h-16 rounded-full border border-blue-300/30" />
          <motion.div 
            className="absolute inset-1 rounded-full border border-blue-400/20"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>
      ))}
      
      {/* Optimized cursor follow effect */}
      {isHovering && (
        <motion.div
          className="absolute pointer-events-none z-20"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-300/15 to-blue-400/15 blur-sm" />
        </motion.div>
      )}
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          NEXUS
        </motion.h1>
        
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-6 sm:mb-8 text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          POWERING TOMORROW
        </motion.h2>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Revolutionary electric batteries transforming the future of energy storage 
          with zero-compromise technology and unparalleled performance.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.button 
            className="w-full sm:w-auto bg-gradient-to-r from-white to-blue-50 text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg shadow-lg"
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)",
              background: "linear-gradient(45deg, #ffffff, #dbeafe)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Explore Technology
          </motion.button>
          
          <motion.button 
            className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>
      </div>
      
      {/* Optimized floating elements with blue theme */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 border border-blue-300/20 rounded-lg"
            style={{
              left: `${25 + (i * 20)}%`,
              top: `${35 + (i % 2) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 120, 240, 360],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-300/40 rounded-sm" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroSection;
