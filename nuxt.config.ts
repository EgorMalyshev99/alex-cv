import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['shadcn-nuxt', '@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/seo', '@nuxt/eslint', '@vueuse/nuxt'],

  devServer: {
    host: process.env.NUXT_SERVER_HOST || 'localhost',
    port: parseInt(process.env.NUXT_SERVER_PORT || '3000'),
  },

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  site: {
    url: process.env.NUXT_SITE_URL || 'https://example.com',
    name: 'Alex CV',
    description: 'Senior Product Designer portfolio — mobile, B2B and B2C digital products.',
    defaultLocale: 'en',
  },

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
      { code: 'ru', language: 'ru-RU', file: 'ru.json', name: 'Русский' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    compilation: {
      strictMessage: false,
    },
    detectBrowserLanguage: false,
    vueI18n: 'i18n.config.ts',
  },

  eslint: {
    config: {
      stylistic: false,
    },
  },

  shadcn: {
    prefix: 'Ui',
    componentDir: '@/components/ui',
  },

  ogImage: {
    enabled: false,
  },

  app: {
    head: {
      title: 'Alex CV',
      titleTemplate: '%s · Alex CV',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
      ],
    },
  },
})
