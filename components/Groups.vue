<template>
  <div>
    <section
      class="tiles"
      id="groups"
      key="groups"
    >
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
        slug: group.slug,
      };

      if (this.withTeamsUrls) {
        tileProps.teamsUrl = group.teams;
      } else {
        tileProps.styleNumber = group.styleNumber;
      }

      return tileProps;
    },
  },
};
</script>
