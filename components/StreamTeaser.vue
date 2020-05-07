<template>
  <section>
    <div
      v-if="showStream"
      class="countdown"
    >
      <NuxtLink to="/stream">
        <img
          src="~/assets/images/wb-stream-cta.gif"
          class="stream-thumbnail"
        >
      </NuxtLink>
    </div>

    <template v-else>
      <div class="countdown">
        <ClientOnly>
          <Countdown
            :deadline="streamStartingAt"
            @deadlineEnd="onCountdownFinish"
          />
        </ClientOnly>
        <div
          ref="countdownConfetti"
          class="countdown-confetti"
        />
        <p class="stream-info-text">
          Der Live-Stream hat noch nicht gestartet schau<br>
          dir in der Zwischenzeit doch unsere Gruppen an.<br>
          ⬇️
        </p>
      </div>
    </template>
  </section>
</template>

<script>
import { confetti } from 'dom-confetti';
import Countdown from './Countdown.vue';

export default {
  components: {
    Countdown,
  },
  data() {
    return {
      streamStartingAt: '2020-05-07T03:50:00',
      showStream: false,
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
