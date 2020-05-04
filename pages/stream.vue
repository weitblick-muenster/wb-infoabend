<template>
  <div>
    <Stream />
    <Fick />
    <Groups
      :groups="groups"
      :with-teams-urls="true"
    />
    <Random
      :with-teams-urls="true"
    />
  </div>
</template>

<script>
import {
  Stream,
  Fick,
  Groups,
  Random,
} from '~/components';

import groups from '~/data/groups';

export default {
  components: {
    Stream,
    Fick,
    Groups,
    Random,
  },
  data() {
    return {
      groups,
    };
  },
};
</script>
