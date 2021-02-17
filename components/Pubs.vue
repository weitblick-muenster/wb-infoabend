<template>
  <div>
    <section id="pubs" class="tiles">
      <PubTile
        v-for="pub in pubs"
        :key="pub.slug"
        :pub="pub"
        class="pub"
      />
    </section>
  </div>
</template>

<script>
import { PubTile } from './Tiles';

export default {
  components: {
    PubTile,
  },
  props: {
    pubs: {
      type: Array,
      required: true,
    },
  },
};
</script>
