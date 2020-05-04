/* eslint-disable import/no-extraneous-dependencies */
import responsiveLoader from 'responsive-loader/sharp';
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
    title: 'Weitblick Infoabend' || process.env.npm_package_name,
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

        if (isDev) {
          // Run ESLint on save
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
          });
        }
      }
    },
  },
  generate: {
    routes() {
      const groupRoutes = groups.map((group) => `/gruppe/${group.slug}`);

      return [
        '/',
        '/join',
        '/stream',
        '/privacy',
        ...groupRoutes,
      ];
    },
  },
};
