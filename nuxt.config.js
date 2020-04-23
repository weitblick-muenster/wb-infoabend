import groups from './data/groups';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'de',
    },
    title: 'Weitblick Infoveranstaltung' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'Weitblick Infoveranstaltung' },
      { name: 'description', content: 'Informationen zur Infoveranstaltung von Weitblick Münster am 7. Mai 2020.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'de_DE' },
      { property: 'og:url', content: 'https://infoabend.weitblicker.live' },
      { property: 'og:title', content: 'Weitblick Infoveranstaltung' },
      { property: 'og:description', content: 'Informationen zur Infoveranstaltung von Weitblick Münster am 7. Mai 2020.' },
      { property: 'og:image', content: 'https://infoabend.weitblicker.live/_nuxt/img/hero-1200.jpg' },
      { property: 'og:site_name', content: 'Weitblick Infoveranstaltung' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-96x96.png' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/sass/main.scss',
    '@fortawesome/fontawesome-free/css/all.min.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/lazysizes.client.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@aceforth/nuxt-optimized-images',
  ],

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
    mozjpeg: {
      quality: 20,
    },
    webp: {
      quality: 50,
    },
    responsive: {
      name: 'img/[name]-[width].[ext]',
      sizes: [300, 600, 1200],
      adapter: require('responsive-loader/sharp'),
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src'];
        vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
      }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  generate: {
    routes() {
      const groupRoutes = groups.map((group) => `/gruppe/${group.slug}`);

      return [
        '/',
        '/form',
        ...groupRoutes,
      ];
    },
  },
};
