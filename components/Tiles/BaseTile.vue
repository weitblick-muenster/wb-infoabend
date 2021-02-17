<template>
  <article :class="cssClasses">
    <span v-if="hasTeamsMeetingLink" class="image image-stack item-top">
      <img src="~/assets/images/teams.jpg" alt="Teams">
    </span>
    <span :class="['image', { 'image-stack': hasTeamsMeetingLink, 'item-bottom': hasTeamsMeetingLink }]">
      <slot name="image" />
    </span>

    <component
      :is="linkComponent"
      v-bind="linkComponentProps"
    >
      <slot name="title" />

      <div class="content">
        <slot name="content" />
      </div>
    </component>
  </article>
</template>

<script>
import { inRange } from 'lodash';

export default {
  props: {
    link: {
      type: String,
      required: true,
    },

    styleNumber: {
      type: Number,
      required: false,
      default: 0,
      validator(value) {
        return inRange(value, 1, 7) || value === 0;
      },
    },
  },
  computed: {
    hasExternalLink() {
      const { baseURL } = this.$config;
      const parsedURL = new URL(this.link, baseURL);

      return parsedURL.hostname !== new URL(baseURL).hostname;
    },
    hasTeamsMeetingLink() {
      const { baseURL } = this.$config;
      const parsedURL = new URL(this.link, baseURL);

      return parsedURL.hostname === 'teams.microsoft.com';
    },

    cssClasses() {
      return [
        'image-stack',
        'tile',
        {
          style1: this.styleNumber === 1,
          style2: this.styleNumber === 2,
          style3: this.styleNumber === 3,
          style4: this.styleNumber === 4,
          style5: this.styleNumber === 5,
          style6: this.styleNumber === 6,
        },
      ];
    },

    linkComponent() {
      return this.hasExternalLink ? 'a' : 'nuxt-link';
    },
    linkComponentProps() {
      if (this.hasExternalLink) {
        return {
          href: this.link,
          target: '_blank',
        };
      }
      return { to: this.link };
    },
  },
};
</script>

<style lang="scss" scoped>
.tile {
  cursor: pointer;
}

.image-stack {
  position: relative;

  .item-bottom {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  .item-top {
    padding-left: 50%;
    z-index: 1;
  }
}
</style>
