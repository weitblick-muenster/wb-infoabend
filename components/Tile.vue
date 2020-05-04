<template>
  <article :class="cssClasses">
    <span
      v-if="teamsUrl"
      class="image image-stack item-top"
    >
      <img
        src="~/assets/images/teams.jpg"
        alt="Teams"
      >
    </span>
    <span :class="imageCssClasses">
      <img
        :data-srcset="imageSrc.srcSet"
        :alt="imageText"
        class="lazyload"
      >
    </span>
    <component
      :is="tileLinkComponent"
      v-bind="tileLinkProps"
    >
      <h2>{{ title }}</h2>
      <div class="content">
        <p>{{ text }}</p>
      </div>
    </component>
  </article>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { inRange } from 'lodash';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imageText: {
      type: String,
      required: false,
      default: '',
    },
    slug: {
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
    teamsUrl: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
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
    imageCssClasses() {
      return [
        'image',
        {
          'image-stack': this.teamsUrl,
          'item-bottom': this.teamsUrl,
        },
      ];
    },
    imageSrc() {
      return require(`~/assets/images/${this.image}?size=300`);
    },
    tileLinkComponent() {
      return this.teamsUrl ? 'a' : 'nuxt-link';
    },
    tileLinkProps() {
      if (this.teamsUrl) {
        return {
          href: this.teamsUrl,
          target: '_blank',
        };
      }
      return { to: `/gruppe/${this.slug}` };
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
  // width: 100%;

  .item-bottom {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  .item-top {
    padding-left: 50%;
    z-index: 1;
    overflow: hidden;
  }
}

</style>
