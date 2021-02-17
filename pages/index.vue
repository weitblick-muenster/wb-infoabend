<template>
  <div>
    <Introduction />
    <EventInfo />
    <component :is="streamComponent" v-if="streamStartingAt" :stream-starting-at="streamStartingAt" />
    <Groups :groups="groups" />
    <Random :items="groups" @randomize="redirectToGroup" />
    <About />
    <Follow />
    <More />
  </div>
</template>

<script>
import { get } from 'vuex-pathify';
import {
  Introduction,
  EventInfo,
  About,
  Follow,
  More,
} from '~/components/TextSections';
import { StreamReplay, StreamTeaser } from '~/components/Stream';
import Groups from '~/components/Groups.vue';
import Random from '~/components/Random.vue';

export default {
  components: {
    Introduction,
    EventInfo,
    About,
    Follow,
    More,
    StreamReplay,
    StreamTeaser,
    Groups,
    Random,
  },
  computed: {
    groups: get('groups'),
    streamStartingAt: get('schedule@streamStartingAt'),
    streamIsOver: get('streamIsOver'),
    streamComponent() {
      return this.streamIsOver ? 'stream-replay' : 'stream-teaser';
    },
  },
  methods: {
    redirectToGroup(group) {
      setTimeout(() => {
        window.location.href = `/gruppe/${group.slug}`;
      }, 1500);
    },
  },
};
</script>
