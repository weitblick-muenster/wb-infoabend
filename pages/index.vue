<template>
  <div>
    <Introduction />
    <About />
    <Follow />
    <Groups :groups="groups" />
    <Random />
    <More />
  </div>
</template>

<script>
import {
  Introduction,
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
