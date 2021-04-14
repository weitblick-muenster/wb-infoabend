<template>
  <section key="more">
    <h1>{{ more.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="$md.render(more.text)" />
  </section>
</template>
<script>
export default {
  props: {
    more: {
      type: Object,
      required: true,
    },
  },
};
</script>
