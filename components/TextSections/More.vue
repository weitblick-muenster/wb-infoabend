<template>
  <section key="more">
    <h1>{{ more.title }}</h1>
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
