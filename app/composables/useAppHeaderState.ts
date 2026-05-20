type UseHeaderState = {
  isMenuOpen: Ref<boolean>;
  onToggleMenu: () => void;
};

export const useAppHeaderState = (): UseHeaderState => {
  const route = useRoute();

  const isMenuOpen = ref(false);

  const onToggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  watch(
    () => route.fullPath,
    () => {
      isMenuOpen.value = false;
    },
  );

  return {
    isMenuOpen,
    onToggleMenu,
  };
};
