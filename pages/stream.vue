<template>
  <div>
    <Stream />
    <Fick />
    <Groups
      :groups="groups"
      :with-teams-urls="true"
    />
  </div>
</template>

<script>
import { Stream, Fick, Groups } from '~/components';
import groups from '~/data/groups';

export default {
  components: {
    Stream,
    Fick,
    Groups,
  },
  data() {
    return {
      groups,
    };
  },
};
</script>
