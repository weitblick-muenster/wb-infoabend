<template>
  <div id="wrapper">
    <TheHeader />
    <div id="main">
      <div class="inner">
        <nuxt />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import { TheHeader, TheFooter } from '~/components/Page';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  watch: {
    $route() {
      this.fetchSchedule();
    },
  },
  async created() {
    await this.fetchSchedule();
  },
  methods: {
    async fetchSchedule() {
      const { items: [schedule] } = await this.$contentfulClient.fetchItems({ type: 'schedule' });
      this.$store.dispatch('setSchedule', schedule);
    },
  },
};
</script>
