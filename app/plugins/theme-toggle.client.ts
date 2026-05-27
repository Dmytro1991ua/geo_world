// export default defineNuxtPlugin(() => {
//   const store = useToggleThemeStore();

//   const applyTheme = (mode: 'dark' | 'light') => {
//     if (!import.meta.client) return;
//     document.documentElement.classList.toggle('dark', mode === 'dark');
//   };

//   // Apply immediately (important for refresh / hydration)
//   applyTheme(store.themeMode);

//   // Watch changes
//   watch(
//     () => store.themeMode,
//     (mode) => {
//       applyTheme(mode);
//     },
//   );
// });
