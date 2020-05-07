<template>
  <div>
    <Introduction />
    <Schedule />
    <StreamAnnouncement />
    <Groups :groups="groups">
      <template #headline>
        <h1>Unsere Gruppen</h1>
      </template>
    </Groups>
    <Follow />
    <More />
  </div>
</template>

<script>
import {
  Introduction,
  Schedule,
  StreamAnnouncement,
  Groups,
  Follow,
  More,
} from '~/components';
import groups from '~/data/groups';

export default {
  components: {
    Introduction,
    Schedule,
    StreamAnnouncement,
    Groups,
    Follow,
    More,
  },
  data() {
    return {
      groups,
    };
  },
};
</script>
