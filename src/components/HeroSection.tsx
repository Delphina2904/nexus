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
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Enhanced water ripple effect on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePosition({ x, y });
      
      // Create ripple effect
      const newRipple = {
        x,
        y,
        id: Date.now() + Math.random(),
        time: Date.now()
      };
      
      setRipples(prev => [...prev.slice(-10), newRipple]);
    }
  };

  // Clean up old ripples
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setRipples(prev => prev.filter(ripple => now - ripple.time < 2000));
    }, 100);
    
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

    // Create enhanced water particles
    for (let i = 0; i < 120; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push({
        x,
        y,
        originalX: x,
        originalY: y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 0.5,
        color: Math.random() > 0.7 ? '#00ffff' : Math.random() > 0.4 ? '#0080ff' : '#4dd0e1',
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

    const handleMouseLeave = () => {
      isMouseActive = false;
    };

    canvas.addEventListener('mousemove', handleCanvasMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Enhanced liquid water effect
        if (isMouseActive) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 250) {
            const force = (250 - distance) / 250;
            const angle = Math.atan2(dy, dx);
            
            // Create stronger ripple effect with wave propagation
            const waveForce = Math.sin(distance * 0.05 - Date.now() * 0.01) * force;
            particle.vx += Math.cos(angle) * force * 0.3 + Math.cos(angle + Math.PI/2) * waveForce * 0.1;
            particle.vy += Math.sin(angle) * force * 0.3 + Math.sin(angle + Math.PI/2) * waveForce * 0.1;
            
            // Add organic turbulence
            particle.vx += (Math.random() - 0.5) * 0.05;
            particle.vy += (Math.random() - 0.5) * 0.05;
            
            // Enhance particle life near mouse
            particle.life = Math.min(1, particle.life + 0.02);
          }
        }

        // Update particle position with fluid dynamics
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary physics with elastic collision
        if (particle.x <= particle.radius || particle.x >= canvas.width - particle.radius) {
          particle.vx *= -0.7;
          particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));
        }
        if (particle.y <= particle.radius || particle.y >= canvas.height - particle.radius) {
          particle.vy *= -0.7;
          particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y));
        }

        // Gentle return to original position (liquid settling)
        const returnForceX = (particle.originalX - particle.x) * 0.002;
        const returnForceY = (particle.originalY - particle.y) * 0.002;
        particle.vx += returnForceX;
        particle.vy += returnForceY;

        // Enhanced friction for realistic liquid movement
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Natural life decay
        particle.life *= 0.998;

        // Draw particle with enhanced glow and transparency
        const velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        const alpha = Math.max(0.2, Math.min(1, particle.life * (1 - velocity * 0.5)));
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * (0.8 + velocity * 0.4), 0, Math.PI * 2);
        
        // Enhanced glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.restore();

        // Connect nearby particles with fluid connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            const connectionAlpha = (1 - distance / 100) * 0.3 * Math.min(particle.life, otherParticle.life);
            ctx.strokeStyle = `rgba(0, 255, 255, ${connectionAlpha})`;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();
          }
        });
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
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ y, opacity }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Enhanced water ripple effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 3, opacity: 0 }}
          exit={{ scale: 4, opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="w-20 h-20 rounded-full border-2 border-cyan-400/40" />
          <motion.div 
            className="absolute inset-2 rounded-full border border-blue-500/30"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute inset-4 rounded-full border border-cyan-300/20"
            initial={{ scale: 0.3 }}
            animate={{ scale: 2 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
        </motion.div>
      ))}
      
      {/* Cursor follow effect */}
      {isHovering && (
        <motion.div
          className="absolute pointer-events-none z-20"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-sm" />
        </motion.div>
      )}
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          NEXUS
        </motion.h1>
        
        <motion.h2 
          className="text-6xl md:text-8xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          POWERING TOMORROW
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Revolutionary electric batteries transforming the future of energy storage 
          with zero-compromise technology and unparalleled performance.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg liquid-hover"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)",
              background: "linear-gradient(45deg, #00ffff, #0080ff)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Technology
          </motion.button>
          
          <motion.button 
            className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-medium text-lg hover:bg-cyan-400 hover:text-black transition-all liquid-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>
      </div>
      
      {/* Floating electric elements with enhanced movement */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border-2 border-cyan-400/30 rounded-lg"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-cyan-400 rounded-md opacity-60" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroSection;
