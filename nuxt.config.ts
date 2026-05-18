import  Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  extends: ['./layers/countries', './layers/weather'],
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@primevue/nuxt-module'],
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    openweatherApiKeyBase: '',
    public: {
      openweatherApiUrlBase: '',
      countriesApiBase: '',
      openweatherApiIcon: '',
    },
  },
  routeRules: {
    '/': { redirect: '/countries' },
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    typescript: {
      tsConfig: {
        compilerOptions: {
          noImplicitAny: true,
          noImplicitReturns: true,
          noUncheckedIndexedAccess: false,
          exactOptionalPropertyTypes: true,
          esModuleInterop: true,
          forceConsistentCasingInFileNames: true,
        },
      },
    },
  },
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        noImplicitAny: true,
        noImplicitReturns: true,
        noFallthroughCasesInSwitch: true,
        exactOptionalPropertyTypes: true,
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true,        noUncheckedIndexedAccess: false,
      },
    },
    sharedTsConfig: {
      compilerOptions: {
        noImplicitAny: true,
        noImplicitReturns: true,
        exactOptionalPropertyTypes: true,
        forceConsistentCasingInFileNames: true,        noUncheckedIndexedAccess: false,
      },
    },
    nodeTsConfig: {
      compilerOptions: {
        noImplicitAny: true,
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true,
      },
    },
  },
  eslint: {
    config: {
      stylistic: false,
      standalone: true,
    },
  },
  primevue: {
    options: {
      ripple: true, theme: {
        preset: Aura,
        options: {
          darkModeSelector: false,
        },
      },
    },
  },
});
