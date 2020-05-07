<template>
  <div>
    <Stream />
    <StreamInfo />
    <Groups
      :groups="groups"
      :with-teams-urls="true"
    />
    <Random
      :with-teams-urls="true"
      title="Blind Date"
    />
    <Groups
      :groups="pubs"
      :with-teams-urls="true"
      :with-pubs="true"
    />
    <Random
      :with-teams-urls="true"
      title="Mitläufer"
      :with-pubs="true"
    />
  </div>
</template>

<script>
import {
  Stream,
  StreamInfo,
  Groups,
  Random,
} from '~/components';

import groups from '~/data/groups';
import pubs from '~/data/pubs';

export default {
  components: {
    Stream,
    StreamInfo,
    Groups,
    Random,
  },
  data() {
    return {
      groups: groups.map((group) => ({ ...group, description: 'Zum Speed Dating 🕒' })),
      pubs,
    };
  },
};
</script>
