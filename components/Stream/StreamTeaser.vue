<template>
  <section>
    <!-- <div
      class="countdown"
    > -->
    <NuxtLink to="/stream">
      <img
        src="~/assets/images/wb-stream-cta.gif"
        class="stream-thumbnail"
      >
    </NuxtLink>
    <!-- </div> -->

    <!-- <template v-else>
      <h2 class ="countdown-header">12.11.2020 | 20 Uhr</h2>
      <div class="countdown">
        <ClientOnly>
          <Countdown
            :deadline="streamStartingAt"
            @deadline-end="onCountdownFinish"
          />
        </ClientOnly>
        <div
          ref="countdownConfetti"
          class="countdown-confetti"
        />
        <p>
          Schau dir in der Zwischenzeit doch unsere Gruppen an!<br>
          ⬇️
        </p>
      </div>
    </template> -->
  </section>
</template>

<script>
import { confetti } from 'dom-confetti';
// import Countdown from './Countdown.vue';

export default {
  // components: {
  //   Countdown,
  // },
  data() {
    return {
      streamStartingAt: '2020-11-12T20:00:00',
      showStream: true,
    };
  },
  created() {
    this.showStream = new Date() > new Date(this.streamStartingAt);
  },
  methods: {
    onCountdownFinish() {
      confetti(this.$refs.countdownConfetti);
      const vm = this;
      setTimeout(() => { vm.showStream = true; }, 3000);
    },
  },
};
</script>
