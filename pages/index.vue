<template>
  <div>
    <Introduction />
    <Schedule />
    <StreamAnnouncement />
    <Groups :groups="groups">
      <template #heading>
        <h1>Unsere Gruppen</h1>
      </template>
    </Groups>
    <More />
  </div>
</template>

<script>
import {
  Introduction,
  Schedule,
  StreamAnnouncement,
  Groups,
  More,
} from '~/components';
import groups from '~/data/groups';

export default {
  components: {
    Introduction,
    Schedule,
    StreamAnnouncement,
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
