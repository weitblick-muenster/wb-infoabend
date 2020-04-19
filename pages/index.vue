<template>
  <div>
    <Introduction />
    <About />
    <Follow />
    <Groups :groups="groups" />
    <More />
  </div>
</template>

<script>
import {
  Introduction,
  About,
  Follow,
  Groups,
  More,
} from '~/components';
import groups from '~/data/groups';

export default {
  components: {
    Introduction,
    Follow,
    About,
    Groups,
    More,
  },
  data() {
    return {
      groups,
    };
  },
};
</script>
