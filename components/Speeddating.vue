<template>
  <div>
    <section class="tiles">
      <Speedtile
        v-for="group in groups"
        :key="group.name"
        :title="group.name"
        :text="group.description"
        :image="group.imgSrc"
        :style-number="group.styleNumber"
        :teams="group.teams"
      />
    </section>
  </div>
</template>

<script>
import Speedtile from '~/components/Speedtile.vue';

export default {
  components: {
    Speedtile,
  },
  props: {
    groups: {
      type: Array,
      required: true,
    },
  },
};
</script>
