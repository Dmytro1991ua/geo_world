type UseThemeToggle = {
  isDarkTheme: ComputedRef<boolean>;
  toggleTheme: () => void;
};

export const useThemeToggle = (): UseThemeToggle => {
  const themeMode = useColorMode();

  const isDarkTheme = computed(() => themeMode.value === 'dark');

  const toggleTheme = () => {
    themeMode.preference = themeMode.value === 'dark' ? 'light' : 'dark';
  };

  return { isDarkTheme, toggleTheme };
};
