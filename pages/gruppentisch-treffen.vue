<template>
  <div>
    <GroupMeetingInfo :info="info[0]" />
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
import { GroupMeetingInfo } from '~/components/TextSections';
import Groups from '~/components/Groups.vue';
import Pubs from '~/components/Pubs.vue';
import Random from '~/components/Random.vue';

export default {
  components: {
    GroupMeetingInfo,
    Groups,
    Random,
    Pubs,
  },
  computed: {
    groups() {
      return this.$store.getters.groups.map((group) => ({ ...group, shortDescription: 'Zum Gruppentisch ☎️' }));
    },
    pubs: get('pubs'),
    info: get('groupMeetingInfo'),
  },
  methods: {
    redirectToTeams(item) {
      setTimeout(() => {
        window.open(item.teamsMeetingUrl, '_blank');
      }, 1500);
    },
  },
};
</script>
