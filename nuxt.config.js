/* eslint-disable import/no-extraneous-dependencies */
import responsiveLoader from 'responsive-loader/sharp';
import groups from './data/groups';

export default {
  target: 'static',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'de',
    },
    title: 'Weitblick Infoabend' || process.env.npm_package_name,
    /* eslint-disable max-len */
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'Weitblick Münster Infoabend' },
      { name: 'description', content: 'Werde ein Teil von unserer Initiative! Erfahre hier mehr über unsere vielfältigen Projekte und Gruppen.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'de_DE' },
      { property: 'og:url', content: 'https://infoabend.weitblicker.live' },
      { property: 'og:title', content: 'Weitblick Münster Infoabend' },
      { property: 'og:description', content: 'Werde ein Teil von unserer Initiative! Erfahre hier mehr über unsere vielfältigen Projekte und Gruppen.' },
      { property: 'og:image', content: 'https://infoabend.weitblicker.live/_nuxt/img/hero-1200.jpg' },
      { property: 'og:site_name', content: 'Weitblick Infoabend' },
    ],
    /* eslint-enable max-len */
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-96x96.png' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  /*
  ** Global CSS
  */
  css: [
    '~/assets/sass/main.scss',
    '@fortawesome/fontawesome-free/css/all.min.css',
    'hamburgers/dist/hamburgers.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/lazysizes.js', mode: 'client' },
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
    '@nuxtjs/markdownit',
  ],

  publicRuntimeConfig: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    baseURL: process.env.CTF_CDA_ACCESS_TOKEN,
  },
  privateRuntimeConfig: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    baseURL: process.env.CTF_CDA_ACCESS_TOKEN,
  },

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 20,
    },
    webp: {
      quality: 50,
    },
    responsive: {
      name: 'img/[name]-[width].[ext]',
      sizes: [300, 600, 1200],
      adapter: responsiveLoader,
    },
  },

  markdownit: {
    runtime: true,
    linkify: true,
    breaks: true,
  },

  router: {
    linkActiveClass: 'is-active',
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, { isClient, loaders: { vue } }) {
      if (isClient) {
        /* eslint-disable no-param-reassign */
        vue.transformAssetUrls.img = ['data-src', 'src'];
        vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
        /* eslint-enable no-param-reassign */
      }
    },
  },

  generate: {
    routes() {
      const groupRoutes = groups.map((group) => `/gruppe/${group.slug}`);

      return [
        '/',
        '/mitmachen',
        // '/stream',
        '/datenschutz',
        '/hilfe',
        '/gruppentisch-treffen',
        ...groupRoutes,
      ];
    },
  },
};
