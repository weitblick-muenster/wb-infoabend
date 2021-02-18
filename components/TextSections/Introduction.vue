<template>
  <section class="is-vertical">
    <div class="row">
      <!-- eslint-disable max-len -->
      <div class="column">
        <h1>{{ introduction.title }}</h1>
        <div v-html="$md.render(introduction.introText)" />
      </div>
      <div class="column">
        <img :src="introduction.image.src" :alt="introduction.image.alt" class="hero-image">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    introduction: {
      type: Object,
      required: true,
    },
  }
};
</script>
