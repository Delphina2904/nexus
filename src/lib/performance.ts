// Performance optimization utilities for smooth animations

/**
 * Debounce function to limit the rate of function calls
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function to limit function calls to once per specified time period
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Request animation frame wrapper for smooth animations
 */
export const rafThrottle = <T extends (...args: any[]) => any>(func: T) => {
  let ticking = false;
  return (...args: Parameters<T>) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        func(...args);
        ticking = false;
      });
      ticking = true;
    }
  };
};

/**
 * Optimized easing curves for smooth animations
 */
export const easingCurves = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  snappy: [0.4, 0, 0.2, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  gentle: [0.25, 0.1, 0.25, 1] as const,
};

/**
 * Spring configurations for framer-motion
 */
export const springConfigs = {
  snappy: { type: "spring", stiffness: 400, damping: 25 } as const,
  smooth: { type: "spring", stiffness: 300, damping: 30 } as const,
  gentle: { type: "spring", stiffness: 200, damping: 20 } as const,
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get optimized animation duration based on user preferences
 */
export const getAnimationDuration = (duration: number) => {
  return prefersReducedMotion() ? 0.01 : duration;
};
