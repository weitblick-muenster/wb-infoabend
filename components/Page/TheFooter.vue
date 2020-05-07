<template>
  <footer
    id="footer"
    class="footer"
  >
    <div class="container">
      <ul class="vertical">
        <li
          v-for="link in footerLinks"
          :key="link.text"
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
    </div>
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

<style lang="scss" scoped>
.vertical {
  margin: 0;
}
</style>
