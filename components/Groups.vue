<template>
  <div>
    <h1>Unsere Gruppen</h1>

    <section class="tiles">
      <Tile
        v-for="group in groups"
        :key="group.name"
        :title="group.name"
        :text="group.description"
        :image="group.imgSrc"
        :style-number="group.styleNumber"
        :slug="group.slug"
      />
    </section>
  </div>
</template>

<script>
import Tile from '~/components/Tile.vue';

export default {
  components: {
    Tile,
  },
  props: {
    groups: {
      type: Array,
      required: true,
    },
  },
};
</script>
