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
    <Groups
      :groups="pubs"
      :with-teams-urls="true"
      :with-pubs="true"
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
import pubs from '~/data/pubs';

export default {
  components: {
    Stream,
    Fick,
    Groups,
    Random,
  },
  data() {
    return {
      groups: groups.map((group) => ({ ...group, description: 'Zum Speeddating 🕒' })),
      pubs,
    };
  },
};
</script>
