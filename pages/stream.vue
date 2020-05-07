<template>
  <div>
    <Stream />
    <StreamInfo />

    <Groups
      :groups="groups"
      :with-teams-urls="true"
    />
    <Random
      :items="groups"
      @randomize="redirectToTeams"
    >
      <template #title>
        Blind Date
      </template>
    </Random>

    <Groups
      :groups="pubs"
      :with-teams-urls="true"
    />
    <Random
      :items="pubs"
      @randomize="redirectToTeams"
    >
      <template #title>
        Mitläufer
      </template>
      <template #text>
        Keine Lieblingskneipe? Dir ist es egal wo hin es geht, hauptsache du bist dabei?
        Dann laufe einfach mit und suche "auf gut Glück" eine Kneipe!
      </template>
    </Random>
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
  methods: {
    redirectToTeams(item) {
      setTimeout(() => {
        window.open(item.teams, '_blank');
      }, 1500);
    },
  },
};
</script>
