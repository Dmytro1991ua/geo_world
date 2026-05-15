export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  extends: ['./layers/countries', './layers/weather'],
  devtools: {
    enabled: true,
  },
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@primevue/nuxt-module'],
  primevue: {
    options: {
      ripple: true,
    },
  },
  routeRules: {
    '/': { redirect: '/countries' },
  },
});
