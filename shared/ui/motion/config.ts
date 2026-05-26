import { motionPresets } from './preset';

export const fadeUp = {
  initial: motionPresets.fadeUp.initial,
  enter: motionPresets.fadeUp.enter,
};

export const enterWithDelay = (delay = 0) => ({
  ...fadeUp.enter,
  transition: {
    ...fadeUp.enter.transition,
    delay,
  },
});
