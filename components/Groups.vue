<template>
  <div class="section">
    <section
      id="unsere-gruppen"
      class="container"
    >
      <slot name="headline" />
      <div class="tiles">
        <Tile
          v-for="group in groups"
          :key="group.name"
          v-bind="groupTileProps(group)"
        />
      </div>

      <Random
        :items="groups"
        @randomized="redirectToGroup"
      >
        <template #heading>
          <slot name="randomizer-heading" />
        </template>
        <template #text>
          <slot name="randomizer-text" />
        </template>
      </Random>
    </section>
  </div>
</template>

<script>
import Random from '~/components/Random.vue';
import Tile from '~/components/Tile.vue';

export default {
  components: {
    Random,
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
    redirectToGroup(group) {
      setTimeout(() => {
        if (this.withTeamsUrls) {
          window.open(group.teams, '_blank');
        } else {
          window.location.href = `/gruppe/${group.slug}`;
        }
      }, 1000);
    },
  },
};
</script>
