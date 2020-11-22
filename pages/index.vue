<template>
  <div>
    <Introduction />
    <EventInfo />
    <Stream />
    <StreamTeaser />
    <Groups :groups="groups" />
    <Random
      :items="groups"
      @randomize="redirectToGroup"
    />
    <About />
    <Follow />
    <More />
  </div>
</template>

<script>
import {
  Introduction,
  EventInfo,
  Stream,
  About,
  Follow,
  Groups,
  Random,
  More,
} from '~/components';
import groups from '~/data/groups';

export default {
  components: {
    Introduction,
    EventInfo,
    Stream,
    Follow,
    About,
    Groups,
    Random,
    More,
  },
  data() {
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
