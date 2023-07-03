// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    // '@nuxtjs/tailwindcss',
    // 'latex.css'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://latex.now.sh/style.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://latex.now.sh/prism/prism.css'
        }
      ]
    }
  }
})
