<template>
  <header
    id="header"
  >
    <div class="wrapper">
      <div>
        <NuxtLink
          to="/"
          class="logo"
        >
          <img
            :src="require('~/assets/images/logos/WBCD_Logo_standard.png?resize')"
            alt="Weitblick Münster Logo"
          >
        </NuxtLink>
      </div>
      <div class="nav">
        <NuxtLink
          v-for="link in allowedNavLinks"
          :key="link.name"
          :to="link.href"
          class="nav-link is-underlined"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
    </div>

    <button
      :class="burgerCssClasses"
      type="button"
      @click="burgerMenuClicked = !burgerMenuClicked"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner" />
      </span>
    </button>

    <nav
      v-show="burgerMenuClicked"
      class="nav-burger-menu"
    >
      <ul class="list-style-none">
        <li
          v-for="link in allowedNavLinks"
          :key="link.name"
        >
          <NuxtLink
            :to="link.href"
            class="nav-burger-link is-underlined"
          >
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { get } from 'vuex-pathify';

export default {
  data() {
    return {
      burgerMenuClicked: false,
      navLinks: [
        {
          href: '/#about',
          name: 'ueber-uns',
          text: 'Über uns',
        },
        {
          href: '/stream',
          name: 'stream',
          text: 'Live-Stream',
          condition: () => !this.streamIsOver,
        },
        {
          href: '/mitmachen',
          name: 'mitmachen',
          text: 'Mitmachen',
        },
        {
          href: '/gruppentisch-treffen',
          name: 'gruppentisch-treffen',
          text: 'Gruppentisch-Treffen',
        },
        {
          href: '/hilfe',
          name: 'hilfe',
          text: 'Hilfe',
        },
      ],
    };
  },
  computed: {
    streamIsOver: get('streamIsOver'),

    burgerCssClasses() {
      return [
        'hamburger',
        'hamburger--squeeze',
        'nav-burger',
        { 'is-active': this.burgerMenuClicked },
      ];
    },
    allowedNavLinks() {
      return this.navLinks.filter((link) => !Object.keys(link).includes('condition') || link.condition());
    },
  },
};
</script>
