<template>
  <div>
    <section
      id="groups"
      key="groups"
      class="tiles"
    >
      <Tile
        v-for="group in groups"
        :key="group.name"
        v-bind="groupTileProps(group)"
        :class="pubs ? 'pubs' : ''"
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
    pubs: {
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
