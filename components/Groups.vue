<template>
  <div>
    <section id="groups" class="tiles">
      <GroupTile
        v-for="group in groups"
        :key="group.name"
        :group="group"
        :use-meetings="useMeetings"
      />
    </section>
  </div>
</template>

<script>
import { GroupTile } from './Tiles';

export default {
  components: {
    GroupTile,
  },
  props: {
    groups: {
      type: Array,
      required: true,
    },

    useMeetings: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
