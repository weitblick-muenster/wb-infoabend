<template>
  <div>
    <Fick />
    <Stream />
    <Fick />
  </div>
</template>

<script>
import { Stream, Fick } from '~/components';

export default {
  components: {
    Stream,
    Fick,
  },
};
</script>
