const DEFAULT_INTERVAL_IN_MILLISECONDS = 1000;

type useCurrentTime  = {
  currentTime: Ref<number>;
};

export const useCurrentTime = (intervalMs = DEFAULT_INTERVAL_IN_MILLISECONDS): useCurrentTime  => {
  const currentTime = ref(Date.now());

  let timer: ReturnType<typeof setInterval>;

  onMounted(() => {
    timer = globalThis.setInterval(() => {
      currentTime.value = Date.now();
    }, intervalMs);
  });

  onUnmounted(() => {
    if (timer) clearInterval(timer);
  });

  return { currentTime };
};
