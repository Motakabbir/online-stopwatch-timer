// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Online Stopwatch & Timer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A modern digital stopwatch and countdown timer with advanced features' },
        { property: 'og:title', content: 'Online Stopwatch & Timer' },
        { property: 'og:description', content: 'A modern digital stopwatch and countdown timer with advanced features' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
