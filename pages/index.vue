<template>
  <div>
    <Introduction />
    <EventInfo />
    <StreamTeaser />
    <Groups :groups="groups" />
    <Random />
    <About />
    <Follow />
    <More />
  </div>
</template>

<script>
import {
  Introduction,
  EventInfo,
  StreamTeaser,
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
    StreamTeaser,
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
};
</script>
