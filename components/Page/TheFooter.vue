<template>
  <footer id="footer">
    <ul class="vertical">
      <li
        v-for="(link, index) in footerLinks"
        :key="`footer-link-${index}`"
      >
        <component
          :is="footerLinkTag(link)"
          v-bind="footerLinkProps(link)"
          class="is-underlined"
        >
          {{ link.text }}
        </component>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: [
        {
          href: '/',
          text: 'Home',
        },
        {
          href: '/datenschutz',
          text: 'Impressum & Datenschutz',
        },
        {
          href: 'https://weitblicker.org/muenster/transparency',
          text: 'Transparenz',
          external: true,
        },
      ],
    };
  },
  methods: {
    footerLinkTag(link) {
      return link.external ? 'a' : 'nuxt-link';
    },
    footerLinkProps(link) {
      if (link.external) {
        return {
          href: link.href,
          target: '_blank',
          rel: 'noreferrer',
        };
      }

      return { to: link.href };
    },
  },
};
</script>
