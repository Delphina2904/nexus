
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
    const particleCount = isMobile ? 60 : 120; // Increased for more complex animation
    
    // Enhanced particle system with battery cells, energy flows, and nexus nodes
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
      type: 'energy' | 'battery' | 'nexus' | 'spark';
      charge: number;
      pulsePhase: number;
      connectionStrength: number;
    }> = [];

    // Energy flow paths - creating nexus network pathways
    const energyPaths: Array<{
      points: Array<{ x: number; y: number }>;
      flow: number;
      intensity: number;
      color: string;
    }> = [];

    // Create nexus network paths
    for (let i = 0; i < (isMobile ? 3 : 6); i++) {
      const pathPoints = [];
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height;
      
      for (let j = 0; j < 8; j++) {
        pathPoints.push({
          x: startX + (Math.random() - 0.5) * 400 + j * 60,
          y: startY + Math.sin(j * 0.5) * 100 + (Math.random() - 0.5) * 50
        });
      }
      
      energyPaths.push({
        points: pathPoints,
        flow: Math.random(),
        intensity: 0.3 + Math.random() * 0.7,
        color: ['#00d4ff', '#0099cc', '#66ccff'][Math.floor(Math.random() * 3)]
      });
    }

    // Create enhanced particle system with different types
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const particleTypes = ['energy', 'battery', 'nexus', 'spark'] as const;
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      
      let color: string;
      let radius: number;
      
      switch (type) {
        case 'battery':
          color = '#00ff88'; // Green for battery cells
          radius = (isMobile ? 2 : 3) + Math.random() * 2;
          break;
        case 'nexus':
          color = '#00d4ff'; // Cyan for nexus nodes
          radius = (isMobile ? 3 : 4) + Math.random() * 3;
          break;
        case 'spark':
          color = '#ffffff'; // White for energy sparks
          radius = (isMobile ? 1 : 1.5) + Math.random() * 1;
          break;
        default: // energy
          color = '#3b82f6'; // Blue for energy particles
          radius = (isMobile ? 1.5 : 2) + Math.random() * 1.5;
      }
      
      particles.push({
        x,
        y,
        originalX: x,
        originalY: y,
        vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.4),
        vy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.4),
        radius,
        color,
        life: 1,
        type,
        charge: Math.random(),
        pulsePhase: Math.random() * Math.PI * 2,
        connectionStrength: 0.3 + Math.random() * 0.7
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
      // Enhanced background with energy grid pattern
      ctx.fillStyle = 'rgba(37, 99, 235, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Pulsating grid pattern overlay
      const time = Date.now() * 0.001;
      const gridSize = isMobile ? 50 : 80;
      const pulseIntensity = (Math.sin(time * 1.5) + 1) * 0.5; // Oscillates between 0 and 1
      
      ctx.save();
      
      // Single grid with pulsing effect
      ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 + pulseIntensity * 0.12})`;
      ctx.lineWidth = 1 + pulseIntensity * 0.3;
      ctx.shadowBlur = 8 + pulseIntensity * 12;
      ctx.shadowColor = 'rgba(0, 212, 255, 0.4)';
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        const lineIntensity = Math.sin(time * 1.5 + x * 0.008) * 0.2 + 0.8;
        ctx.globalAlpha = (0.06 + pulseIntensity * 0.08) * lineIntensity;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        const lineIntensity = Math.sin(time * 1.5 + y * 0.008) * 0.2 + 0.8;
        ctx.globalAlpha = (0.06 + pulseIntensity * 0.08) * lineIntensity;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      ctx.restore();
      
      // Draw animated energy paths
      energyPaths.forEach((path, pathIndex) => {
        path.flow += 0.02;
        if (path.flow > 1) path.flow = 0;
        
        ctx.save();
        ctx.strokeStyle = path.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = path.intensity * 0.6;
        
        // Create flowing energy effect along paths
        for (let i = 0; i < path.points.length - 1; i++) {
          const start = path.points[i];
          const end = path.points[i + 1];
          const flowPos = (path.flow + i * 0.1) % 1;
          
          if (flowPos > 0.8) {
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();
            
            // Energy pulse at flow position
            const pulseX = start.x + (end.x - start.x) * flowPos;
            const pulseY = start.y + (end.y - start.y) * flowPos;
            
            ctx.globalAlpha = (1 - flowPos) * path.intensity;
            ctx.fillStyle = path.color;
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.restore();
      });

      particles.forEach((particle, index) => {
        // Update particle pulse phase
        particle.pulsePhase += 0.05;
        
        // Enhanced particle behavior based on type
        if (isMouseActive) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const interactionRadius = isMobile ? 150 : 250; // Increased interaction radius
          if (distance < interactionRadius) {
            const force = (interactionRadius - distance) / interactionRadius;
            const angle = Math.atan2(dy, dx);
            
            // Different interaction based on particle type
            let forceMultiplier = isMobile ? 0.15 : 0.25;
            if (particle.type === 'nexus') forceMultiplier *= 1.5; // Nexus nodes respond more
            if (particle.type === 'spark') forceMultiplier *= 2; // Sparks are most responsive
            
            particle.vx += Math.cos(angle) * force * forceMultiplier;
            particle.vy += Math.sin(angle) * force * forceMultiplier;
            
            // Charge particles near mouse
            particle.charge = Math.min(1, particle.charge + 0.02);
            
            // Create energy trails for charged particles
            if (particle.charge > 0.7 && particle.type !== 'spark') {
              // Spawn spark particles
              if (Math.random() < 0.1) {
                const sparkParticle = {
                  x: particle.x + (Math.random() - 0.5) * 20,
                  y: particle.y + (Math.random() - 0.5) * 20,
                  originalX: particle.x,
                  originalY: particle.y,
                  vx: (Math.random() - 0.5) * 2,
                  vy: (Math.random() - 0.5) * 2,
                  radius: 1,
                  color: '#ffffff',
                  life: 0.5,
                  type: 'spark' as const,
                  charge: 1,
                  pulsePhase: 0,
                  connectionStrength: 0.1
                };
                if (particles.length < particleCount * 1.5) {
                  particles.push(sparkParticle);
                }
              }
            }
          }
        }

        // Update particle position with enhanced physics
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Enhanced boundary physics with energy reflection
        if (particle.x <= particle.radius || particle.x >= canvas.width - particle.radius) {
          particle.vx *= -0.8;
          particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));
          // Energy burst on boundary collision
          if (particle.type === 'nexus' && Math.random() < 0.3) {
            particle.charge = Math.min(1, particle.charge + 0.3);
          }
        }
        if (particle.y <= particle.radius || particle.y >= canvas.height - particle.radius) {
          particle.vy *= -0.8;
          particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y));
          // Energy burst on boundary collision
          if (particle.type === 'nexus' && Math.random() < 0.3) {
            particle.charge = Math.min(1, particle.charge + 0.3);
          }
        }

        // Particle-specific movement patterns
        if (particle.type === 'battery') {
          // Battery cells have stable, slow movement
          const returnForce = isMobile ? 0.0005 : 0.0008;
          const returnForceX = (particle.originalX - particle.x) * returnForce;
          const returnForceY = (particle.originalY - particle.y) * returnForce;
          particle.vx += returnForceX;
          particle.vy += returnForceY;
        } else if (particle.type === 'nexus') {
          // Nexus nodes orbit slightly
          const time = Date.now() * 0.001;
          const orbitForce = 0.02;
          particle.vx += Math.cos(time + particle.pulsePhase) * orbitForce;
          particle.vy += Math.sin(time + particle.pulsePhase) * orbitForce;
        } else if (particle.type === 'spark') {
          // Sparks fade quickly and move erratically
          particle.life *= 0.98;
          particle.vx += (Math.random() - 0.5) * 0.1;
          particle.vy += (Math.random() - 0.5) * 0.1;
        }

        // Enhanced friction with particle-specific values
        let friction = isMobile ? 0.985 : 0.99;
        if (particle.type === 'spark') friction = 0.95; // Sparks slow down faster
        if (particle.type === 'nexus') friction = 0.995; // Nexus nodes maintain momentum
        
        particle.vx *= friction;
        particle.vy *= friction;

        // Charge decay
        particle.charge *= 0.995;

        // Natural life decay (except for core particles)
        if (particle.type !== 'spark') {
          particle.life *= 0.9999;
        }

        // Enhanced particle rendering with type-specific effects
        const velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        let alpha = Math.max(0.3, Math.min(1, particle.life * (1 - velocity * 0.1)));
        
        // Charge-based brightness
        alpha *= (0.5 + particle.charge * 0.5);
        
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Type-specific rendering
        if (particle.type === 'battery') {
          // Battery cells - rectangular with charge indicator
          const size = particle.radius * 2;
          const chargeHeight = size * particle.charge;
          
          ctx.fillStyle = particle.color;
          ctx.fillRect(particle.x - size/2, particle.y - size/2, size, size);
          
          // Charge level indicator
          ctx.fillStyle = '#00ff00';
          ctx.globalAlpha = alpha * 0.8;
          ctx.fillRect(particle.x - size/2 + 1, particle.y + size/2 - chargeHeight - 1, size - 2, chargeHeight);
          
        } else if (particle.type === 'nexus') {
          // Nexus nodes - pulsing hexagons
          const pulseSize = particle.radius * (1 + Math.sin(particle.pulsePhase) * 0.3);
          
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = particle.x + Math.cos(angle) * pulseSize;
            const y = particle.y + Math.sin(angle) * pulseSize;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Inner glow
          ctx.globalAlpha = alpha * 0.5;
          ctx.shadowBlur = 20;
          ctx.shadowColor = particle.color;
          ctx.fill();
          
        } else if (particle.type === 'spark') {
          // Sparks - bright points with trails
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fill();
          
          // Spark trail
          ctx.globalAlpha = alpha * 0.3;
          ctx.shadowBlur = 10;
          ctx.shadowColor = particle.color;
          ctx.fill();
          
        } else {
          // Energy particles - standard circles with glow
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius * (0.9 + velocity * 0.2), 0, Math.PI * 2);
          
          ctx.fillStyle = particle.color;
          if (!isMobile) {
            ctx.shadowBlur = 15;
            ctx.shadowColor = particle.color;
          }
          ctx.fill();
        }
        
        ctx.restore();

        // Enhanced connection system - nexus network
        const connectionModulo = isMobile ? 4 : 3;
        const connectionDistance = isMobile ? 80 : 120; // Increased connection distance
        
        if (index % connectionModulo === 0) {
          particles.slice(index + 1, index + (isMobile ? 4 : 6)).forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
              // Connection strength based on particle types and charges
              let connectionStrength = 0.1;
              
              if (particle.type === 'nexus' && otherParticle.type === 'nexus') {
                connectionStrength = 0.4; // Strong nexus-to-nexus connections
              } else if (particle.type === 'battery' && otherParticle.type === 'energy') {
                connectionStrength = 0.3; // Battery-energy connections
              } else if (particle.type === 'nexus' || otherParticle.type === 'nexus') {
                connectionStrength = 0.25; // Moderate nexus connections
              }
              
              // Charge-based connection enhancement
              connectionStrength *= (particle.charge + otherParticle.charge) / 2;
              
              ctx.save();
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              
              const baseAlpha = (1 - distance / connectionDistance) * connectionStrength;
              
              // Animated energy flow along connections
              const flowPhase = (Date.now() * 0.003 + index * 0.1) % (Math.PI * 2);
              const flowIntensity = (Math.sin(flowPhase) + 1) * 0.5;
              
              const finalAlpha = baseAlpha * (0.3 + flowIntensity * 0.7);
              
              // Color based on particle types
              let connectionColor = 'rgba(59, 130, 246, ';
              if (particle.type === 'nexus' || otherParticle.type === 'nexus') {
                connectionColor = 'rgba(0, 212, 255, '; // Cyan for nexus connections
              } else if (particle.type === 'battery' || otherParticle.type === 'battery') {
                connectionColor = 'rgba(0, 255, 136, '; // Green for battery connections
              }
              
              ctx.strokeStyle = connectionColor + finalAlpha + ')';
              ctx.lineWidth = connectionStrength * 3;
              ctx.stroke();
              
              // Energy pulses along connections
              if (connectionStrength > 0.2 && Math.random() < 0.05) {
                const pulsePos = Math.random();
                const pulseX = particle.x + (otherParticle.x - particle.x) * pulsePos;
                const pulseY = particle.y + (otherParticle.y - particle.y) * pulsePos;
                
                ctx.globalAlpha = finalAlpha * 2;
                ctx.fillStyle = connectionColor + '1)';
                ctx.beginPath();
                ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
                ctx.fill();
              }
              
              ctx.restore();
            }
          });
        }
      });
      
      // Clean up spark particles that have faded
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].type === 'spark' && particles[i].life < 0.1) {
          particles.splice(i, 1);
        }
      }

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 pb-20"
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
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto mt-8">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 relative"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.3 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {"NEXUS ENERGY".split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block text-white font-black"
              style={{
                textShadow: '0 0 20px rgba(0, 212, 255, 0.6), 0 0 40px rgba(0, 212, 255, 0.4)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                  scale: 0.8,
                  filter: "blur(10px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                  },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-cyan-400"
            style={{
              boxShadow: '0 0 8px #00d4ff, 0 0 16px #00d4ff',
            }}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 1.2, ease: 'easeInOut' }}
          />
        </motion.h1>
        
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          ADVANCED THERMAL MANAGEMENT
        </motion.h2>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Revolutionizing energy storage with our proprietary immersion cooling technology, 
          AI-powered Battery Management Systems, and ultra-fast charging solutions across 
          Quick Commerce, Mobility, Grid-Scale ESS, and Residential applications.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-8"
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
            View Solutions
          </motion.button>
        </motion.div>
        
        {/* Key Features Summary */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl mb-2">🔋</div>
            <div className="text-white font-semibold text-sm">Active Thermal Management</div>
            <div className="text-blue-200 text-xs mt-1">Immersion cooling technology</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl mb-2">🧠</div>
            <div className="text-white font-semibold text-sm">AI-Powered BMS</div>
            <div className="text-blue-200 text-xs mt-1">Smart battery optimization</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-white font-semibold text-sm">Ultra-Fast Charging</div>
            <div className="text-blue-200 text-xs mt-1">0.5C to 6C rates supported</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl mb-2">🔄</div>
            <div className="text-white font-semibold text-sm">Life Extension</div>
            <div className="text-blue-200 text-xs mt-1">Advanced algorithms</div>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced Nexus-themed floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Battery charge indicators */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`battery-${i}`}
            className="absolute"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="w-8 h-12 border-2 border-green-400/30 rounded-sm relative overflow-hidden">
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-400 to-green-300"
                animate={{
                  height: ["20%", "90%", "20%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-green-400/50 rounded-sm" />
            </div>
          </motion.div>
        ))}

        {/* Nexus connection nodes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`nexus-${i}`}
            className="absolute"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${30 + Math.sin(i) * 20}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear",
            }}
          >
            <div className="relative">
              {/* Hexagonal nexus node */}
              <div className="w-6 h-6 border border-cyan-400/40" style={{
                clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
              }}>
                <motion.div
                  className="w-full h-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              </div>
              
              {/* Pulsing center */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            </div>
          </motion.div>
        ))}

        {/* Energy flow lines */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`flow-${i}`}
            className="absolute border-t border-blue-400/20"
            style={{
              left: `${5 + i * 20}%`,
              top: `${40 + i * 15}%`,
              width: '200px',
              transformOrigin: 'left',
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute left-0 top-0 w-2 h-2 bg-blue-400 rounded-full transform -translate-y-1/2"
              animate={{
                x: [0, 200, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}

        {/* Floating energy orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${60 + (i % 2) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm" />
              <motion.div
                className="absolute inset-0 w-4 h-4 border border-blue-300/50 rounded-full"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroSection;
