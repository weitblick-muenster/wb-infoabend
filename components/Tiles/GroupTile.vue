<template>
  <BaseTile
    :link="link"
    :style-number="useMeetings ? 0 : group.styleNumber"
  >
    <template #image>
      <img
        :src="group.image.src"
        :alt="group.image.alt"
        class="lazyload"
      >
    </template>

    <template #title>
      <h2>{{ group.name }}</h2>
    </template>

    <template #content>
      <p>{{ group.shortDescription }}</p>
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
    group: {
      type: Object,
      required: true,
    },

    useMeetings: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    link() {
      return this.useMeetings ? this.group.teamsMeetingUrl : `/gruppe/${this.group.slug}`;
    },
  },
};
</script>
