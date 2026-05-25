import { motionTokens } from './tokens';

export const motionPresets = {
  fadeSlide: {
    initial: { opacity: 0, x: -30, scale: 0.96 },
    enter: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 500,
        ease: 'easeOut',
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
} as const;
