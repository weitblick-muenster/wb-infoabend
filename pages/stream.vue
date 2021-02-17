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
import { get } from 'vuex-pathify';
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
  middleware({ store, redirect }) {
    if (store.getters.streamIsOver) {
      redirect({ path: '/', replace: true });
    }
  },
  computed: {
    groups() {
      return this.$store.getters.groups.map((group) => ({ ...group, shortDescription: 'Zum Speed Dating 🕒' }));
    },
    pubs: get('pubs'),
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
