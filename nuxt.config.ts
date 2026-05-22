import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  extends: ['./layers/countries', './layers/weather'],
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@primevue/nuxt-module', '@nuxt/icon'],
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    openweatherApiKeyBase: process.env.NUXT_OPENWEATHER_API_KEY_BASE || '',
    public: {
      openweatherApiUrlBase: process.env.NUXT_PUBLIC_OPENWEATHER_API_URL_BASE || '',
      countriesApiBase: process.env.NUXT_PUBLIC_COUNTRIES_API_BASE || '',
      openweatherApiIcon: process.env.NUXT_PUBLIC_OPENWEATHER_API_ICON || '',
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
      include: ['@vue/devtools-core', '@vue/devtools-kit', 'clsx', 'tailwind-merge'],
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
        forceConsistentCasingInFileNames: true,
        noUncheckedIndexedAccess: false,
      },
    },
    sharedTsConfig: {
      compilerOptions: {
        noImplicitAny: true,
        noImplicitReturns: true,
        exactOptionalPropertyTypes: true,
        forceConsistentCasingInFileNames: true,
        noUncheckedIndexedAccess: false,
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
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false,
        },
      },
    },
  },
  css: ['./app/assets/css/main.css'],
  icon: {
    // Force server-side local rendering (removes client fetching lag)
    serverBundle: 'local',
    fallbackToApi: false,
    clientBundle: {
      scan: {
        globInclude: [
          './app/**/*.{vue,ts,js}',
          './layers/countries/**/*.{vue,ts,js}',
          './layers/weather/**/*.{vue,ts,js}',
        ],
        globExclude: ['**/.nuxt/**', '**/dist/**', '**/node_modules/**'],
      },
    },
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
});
