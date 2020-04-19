<template>
  <article :class="`style${styleNumber}`">
    <span class="image">
      <img
        :src="imageSrc"
        :alt="imageText"
      >
    </span>
    <a>
      <h2>{{ title }}</h2>
      <div class="content">
        <p>{{ text }}</p>
      </div>
    </a>
  </article>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

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
    styleNumber: {
      type: Number,
      required: false,
      default: 1,
    },
  },
  computed: {
    imageSrc() {
      return require(`~/assets/images/${this.image}`);
    },
  },
};
</script>
