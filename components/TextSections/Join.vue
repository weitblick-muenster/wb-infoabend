<template>
  <section>
    <h1>{{ join.title }}</h1>
    <!-- eslint-disable vue/no-v-html -->
    <div v-html="$md.render(join.titleText)" />
    <h1>{{ join.subtitle }}</h1>
    <div v-html="$md.render(join.subtitleText)" />
    <a
      :href="join.joinForm"
      class="button primary"
      target="_blank"
      rel="noreferrer"
    >
      <span class="label">Beitrittserklärung</span>
    </a>
  </section>
</template>
<script>
export default {
  props: {
    join: {
      type: Object,
      required: true,
    },
  },
};
</script>
