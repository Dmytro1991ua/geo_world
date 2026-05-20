const SCROLL_THRESHOLD = 20;

type UseScrollPosition = {
  isHeaderScrolled: Ref<boolean>;
};

export const useScrollPosition = (): UseScrollPosition => {
  const isHeaderScrolled = ref<boolean>(false);

  const updatePosition = () => {
    if (typeof window === 'undefined') return;
    isHeaderScrolled.value = window.scrollY > SCROLL_THRESHOLD;
  };

  onMounted(() => {
    window.addEventListener('scroll', updatePosition, { passive: true });

    updatePosition();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', updatePosition);
  });

  return { isHeaderScrolled };
};
