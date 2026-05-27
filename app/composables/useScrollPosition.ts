import { useWindowScroll } from '@vueuse/core';

const SCROLL_THRESHOLD = 20;

type UseScrollPosition = {
  isHeaderScrolled: Ref<boolean>;
};

export const useScrollPosition = (): UseScrollPosition => {
  const { y } = useWindowScroll();

  const isHeaderScrolled = computed(() => y.value > SCROLL_THRESHOLD);

  return { isHeaderScrolled };
};
