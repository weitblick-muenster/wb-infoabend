<template>
  <div>
    <Introduction :introduction="introduction[0]" />
    <EventInfo />
    <component :is="streamComponent" v-if="streamStartingAt" :stream-starting-at="streamStartingAt" />
    <Groups :groups="groups" />
    <Random :items="groups" @randomize="redirectToGroup" />
    <About :about="about[0]" />
    <Follow />
    <More :more="more[0]" />
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
    about: get('about'),
    introduction: get('introduction'),
    more: get('more'),
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
