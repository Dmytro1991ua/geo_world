import type { Ref } from 'vue';

export const useEarthRotation = (earthRef: Ref<HTMLDivElement | null>) => {
  let position = 0;
  let animationId: number;

  const animate = () => {
    position -= 0.15;

    if (earthRef.value) {
      earthRef.value.style.backgroundPositionX = `${position}px`;
    }

    animationId = requestAnimationFrame(animate);
  };

  onMounted(() => {
    animationId = requestAnimationFrame(animate);
  });

  onUnmounted(() => {
    cancelAnimationFrame(animationId);
  });
};
