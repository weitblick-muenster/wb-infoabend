<template>
  <div>
    <About />
    <Groups :groups="groups" />
  </div>
</template>

<script>
import { About, Groups } from '~/components';
import groups from '~/data/groups';

export default {
  components: {
    About,
    Groups,
  },
  data() {
    return {
      groups,
    };
  },
};
</script>
