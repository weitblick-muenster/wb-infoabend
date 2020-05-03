<template>
  <div>
    <Stream />
    <Fick />
    <Speeddating :groups="groups" />
  </div>
</template>

<script>
import { Stream, Fick, Speeddating } from '~/components';
import groups from '~/data/groups';

export default {
  components: {
    Stream,
    Fick,
    Speeddating,
  },
  data() {
    return {
      groups,
    };
  },
};
</script>
