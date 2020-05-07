<template>
  <div>
    <Stream />
    <StreamInfo />
    <Groups
      :groups="groups"
      :with-teams-urls="true"
    >
      <template #headline>
        <h1>Unsere Gruppen</h1>
      </template>
      <template #randomizer-heading>
        <h3>Blind Date</h3>
      </template>
    </Groups>
    <Groups
      :groups="pubs"
      :with-teams-urls="true"
    >
      <template #headline>
        <h1>Die Kneipen</h1>
      </template>
      <template #randomizer-heading>
        <h3>Mitläufer</h3>
      </template>
      <template #randomizer-text>
        Keine Lieblingskneipe? Dir ist es egal wo hin es geht, hauptsache du bist dabei?
        Dann laufe einfach mit und suche "auf gut Glück" eine Kneipe!
      </template>
    </Groups>
  </div>
</template>

<script>
import {
  Stream,
  StreamInfo,
  Groups,
} from '~/components';
import groups from '~/data/groups';
import pubs from '~/data/pubs';

export default {
  components: {
    Stream,
    StreamInfo,
    Groups,
  },
  data() {
    return {
      groups: groups.map((group) => ({ ...group, description: 'Zum Speed Dating 🕒' })),
      pubs,
    };
  },
};
</script>
