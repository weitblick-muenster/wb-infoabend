<template>
  <section>
    <h1>{{ info.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="$md.render(info.titleText)" />
    <h1>{{ info.subtitle }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="$md.render(info.subtitleText)" />
    <a
      :href="info.meetingUrl"
    >
      <img
        :src="info.image.src"
        :alt="info.image.alt"
        class="center outset"
      >
    </a>
  </section>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style media="screen">
  .outset {
    box-shadow: rgba(0, 0, 0, 0.44) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius: 4px;
  }
</style>
