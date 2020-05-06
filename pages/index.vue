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
  </div>
</template>

<script>
import {
  Introduction,
  Schedule,
  StreamAnnouncement,
  Groups,
} from '~/components';
import groups from '~/data/groups';

export default {
  components: {
    Introduction,
    Schedule,
    StreamAnnouncement,
    Groups,
  },
  data() {
    return {
      groups,
    };
  },
};
</script>
