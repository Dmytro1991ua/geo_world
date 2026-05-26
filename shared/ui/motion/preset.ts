import { motionTokens } from './tokens';

export const motionPresets = {
  fadeSlide: {
    initial: {
      opacity: 0,
      x: -10,
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 250,
        ease: 'ease-out',
      },
    },
  },
  slideInLeft: {
    initial: {
      opacity: 0,
      x: -24,
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2000,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  fadeUp: {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: motionTokens.duration.base,
        ease: motionTokens.easing.standard,
      },
    },
  },
  staggerContainer: {
    initial: {},
    enter: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  },

  // ✅ NEW: card variant (reuses fadeUp internally)
  staggerItem: {
    initial: {
      opacity: 0,
      y: 16,
      scale: 0.98,
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 350,
        ease: 'ease-out',
      },
    },
  },
} as const;
