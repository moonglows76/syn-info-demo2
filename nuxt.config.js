export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '鹿児島のプロバイダSYNAPSE（シナプス）',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'viewport-fit=cover, width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      // { name: 'google-site-verification', content: '' },
      // { name: 'msvalidate.01', content: '' },
      { property: 'og:locale', content: 'ja_JP' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:site_name', content: '鹿児島のプロバイダSYNAPSE（シナプス）' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      // ここはそのままコピーしない
      { hid: 'og:image', property: 'og:image', content: '/ogp.png' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css',
        integrity: 'sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==',
        crossorigin: 'anonymous',
        referrerpolicy: 'no-referrer',
      },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      // { rel: 'manifest', href: '/site.webmanifest' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'normalize.css' },
    { src: '~/assets/sass/style.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/common.js',
    '~/plugins/day.js',
    '~/plugins/constants.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-microcms-module"],
  microcms: {
    options: {
      serviceDomain: "shp-1",
      apiKey: "2b126e2bad51428eb409e148842043988244",
    },
    mode: process.env.NODE_ENV === "production" ? "server" : "all",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '~/assets/sass/common/base/_variable.scss',
      '~/assets/sass/common/base/_mixin.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/info/page/:p',
        component: resolve(__dirname, 'pages/info/index.vue'),
        name: 'information list page',
      })
      // routes.push({
      //   path: '/info/archives/:yearMonth/page/:p',
      //   component: resolve(__dirname, 'pages/info/archives/_yearMonth.vue'),
      //   name: 'information month archive list page',
      // })
    },
  },

}
