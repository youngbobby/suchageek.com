// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    // 'latex.css/latex.css'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  app: {
    head: {
      title: "Emmanuel Ibe | Such A Geek",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Articles focused on the beautiful art of landscape painting.",
        }
      ],
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
  },
  css: ['~/assets/css/main.scss'],



})
