<template>
  <div>
    <Introduction />
    <EventInfo />
    <StreamReplay />
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
  StreamReplay,
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
    StreamReplay,
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
