<template>
  <BaseTile :link="pub.teamsMeetingUrl">
    <template #image>
      <img
        :src="pub.image.src"
        :alt="pub.image.alt"
        class="lazyload"
      >
    </template>

    <template #title>
      <h2>{{ pub.name }}</h2>
    </template>
  </BaseTile>
</template>

<script>
import BaseTile from './BaseTile.vue';

export default {
  components: {
    BaseTile,
  },
  props: {
    pub: {
      type: Object,
      required: true,
    },
  },
};
</script>
