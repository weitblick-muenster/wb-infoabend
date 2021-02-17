<template>
  <div>
    <Stream />
    <StreamInfo />

    <Groups :groups="groups" use-meetings />
    <Random :items="groups" @randomize="redirectToTeams">
      <template #title>
        Blind Date
      </template>
    </Random>

    <Pubs :pubs="pubs" />
    <Random :items="pubs" @randomize="redirectToTeams">
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
import { Stream, StreamInfo } from '~/components/Stream';
import Groups from '~/components/Groups.vue';
import Pubs from '~/components/Pubs.vue';
import Random from '~/components/Random.vue';

export default {
  components: {
    Stream,
    StreamInfo,
    Groups,
    Pubs,
    Random,
  },
  async asyncData({ payload, $contentfulClient }) {
    if (payload) {
      return {
        groups: payload.groups,
        pubs: payload.pubs,
      };
    }

    const { items: groups } = await $contentfulClient.fetchItems({ type: 'group' });
    const { items: pubs } = await $contentfulClient.fetchItems({ type: 'pub' });

    return {
      groups: groups.map((group) => ({ ...group, shortDescription: 'Zum Speed Dating 🕒' })),
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
