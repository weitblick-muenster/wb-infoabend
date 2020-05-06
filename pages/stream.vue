<template>
  <div>
    <Stream />
    <StreamInfo />
    <Groups
      :groups="groups"
      :with-teams-urls="true"
    />
  </div>
</template>

<script>
import {
  Stream,
  StreamInfo,
  Groups,
} from '~/components';
import groups from '~/data/groups';

export default {
  components: {
    Stream,
    StreamInfo,
    Groups,
  },
  data() {
    return {
      groups,
    };
  },
};
</script>
