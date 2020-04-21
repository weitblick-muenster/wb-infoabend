<template>
  <article :class="cssClasses">
    <span class="image">
      <img
        :data-srcset="imageSrc.srcSet"
        :alt="imageText"
        class="lazyload"
      >
    </span>
    <NuxtLink :to="`/gruppe/${slug}`">
      <h2>{{ title }}</h2>
      <div class="content">
        <p>{{ text }}</p>
      </div>
    </NuxtLink>
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
      default: 1,
      validator(value) {
        return inRange(value, 1, 7);
      },
    },
  },
  computed: {
    cssClasses() {
      return [
        'tile',
        { style1: this.styleNumber === 1 },
        { style2: this.styleNumber === 2 },
        { style3: this.styleNumber === 3 },
        { style4: this.styleNumber === 4 },
        { style5: this.styleNumber === 5 },
        { style6: this.styleNumber === 6 },
      ];
    },
    imageSrc() {
      return require(`~/assets/images/${this.image}?size=300`);
    },
  },
};
</script>

<style lang="scss" scoped>
.tile {
  cursor: pointer;
}
</style>
