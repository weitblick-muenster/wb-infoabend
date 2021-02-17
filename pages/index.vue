<template>
  <div>
    <Introduction />
    <EventInfo />
    <StreamReplay />
    <Groups :groups="groups" />
    <Random :items="groups" @randomize="redirectToGroup" />
    <About />
    <Follow />
    <More />
  </div>
</template>

<script>
import {
  Introduction,
  EventInfo,
  About,
  Follow,
  More,
} from '~/components/TextSections';
import { StreamReplay } from '~/components/Stream';
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
    Groups,
    Random,
  },
  async asyncData({ payload, $contentfulClient }) {
    if (payload) {
      return {
        groups: payload.groups,
      };
    }

    const { items: groups } = await $contentfulClient.fetchItems({ type: 'group' });

    return {
      groups,
    };
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
