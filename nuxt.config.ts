// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Online Stopwatch & Timer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { 
          name: 'description', 
          content: 'Free online stopwatch and countdown timer with lap timing, customizable alerts, and dark mode support. Perfect for sports, cooking, studying, and time management.'
        },
        { name: 'keywords', content: 'stopwatch, timer, countdown, online timer, digital stopwatch, lap timer, time management, productivity tool' },
        { property: 'og:title', content: 'Online Stopwatch & Timer' },
        { property: 'og:description', content: 'Free online stopwatch and countdown timer with lap timing, customizable alerts, and dark mode support.' },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  site: {
    url: 'https://yourdomain.com'
  },
  sitemap: {
    urls: [
      '/',
      '/about',
      '/privacy-policy',
      '/terms-of-service'
    ]
  },  
  typescript: {
    strict: true,
    typeCheck: true
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
