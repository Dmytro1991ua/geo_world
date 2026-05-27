export type ThemeMode = 'light' | 'dark';

export type UseToggleThemeStore = {
  themeMode: Ref<ThemeMode>;
  isDarkTheme: ComputedRef<boolean>;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
};

export const useToggleThemeStore = defineStore('theme', (): UseToggleThemeStore => {
  const themeMode = ref<ThemeMode>('dark');

  const isDarkTheme = computed(() => themeMode.value === 'dark');

  const setThemeMode = (value: 'light' | 'dark') => {
    themeMode.value = value;
  };

  const toggleTheme = () => {
    themeMode.value = themeMode.value === 'dark' ? 'light' : 'dark';
  };

  return { themeMode, isDarkTheme, setThemeMode, toggleTheme };
});
