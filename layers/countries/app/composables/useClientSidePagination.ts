import type { WatchSource } from 'vue';

type UsePaginationOptions = {
  initialCount?: number;
  stepCount?: number;
  resetSources?: WatchSource[];
};

export type UseClientSidePagination<T> = {
  visibleItems: ComputedRef<T[]>;
  hasMoreItems: ComputedRef<boolean>;
  loadMore: () => void;
};

export const DEFAULT_LOAD_MORE_STEP = 40;
export const DEFAULT_INITIAL_COUNT = 40;

export function useClientSidePagination<T>(source: Ref<T[]>, options: UsePaginationOptions = {}): UseClientSidePagination<T> {
  const initialCount = options.initialCount ?? DEFAULT_INITIAL_COUNT;
  const stepCount = options.stepCount ?? DEFAULT_LOAD_MORE_STEP;

  const visibleCount = ref(initialCount);

  const visibleItems = computed(() => source.value.slice(0, visibleCount.value));

  const hasMoreItems = computed(() => visibleCount.value < source.value.length);

  const loadMore = () => {
    visibleCount.value += stepCount;
  };

  const reset = () => {
    visibleCount.value = initialCount;
  };

  if (options.resetSources?.length) {
    watch(options.resetSources, reset);
  }

  return { visibleItems, hasMoreItems, loadMore };
}
