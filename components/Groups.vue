<template>
  <div>
    <section class="tiles">
      <Tile
        v-for="group in groups"
        :key="group.name"
        v-bind="groupTileProps(group)"
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
    withTeamsUrls: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    groupTileProps(group) {
      const tileProps = {
        title: group.name,
        text: group.description,
        image: group.imgSrc,
        styleNumber: group.styleNumber,
        slug: group.slug,
      };

      if (this.withTeamsUrls) {
        tileProps.teamsUrl = group.teams;
      }

      return tileProps;
    },
  },
};
</script>
