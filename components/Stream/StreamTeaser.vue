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
      <h2 class="countdown-header">
        {{ streamStartingAt | asDate }}
      </h2>

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
    </template>
    <!-- <div>
      <a
        href="https://wwu.zoom.us/j/67412027723"
        class="button primary"
        target="_blank"
        rel="noreferrer"
      >
        <span class="label">Zum Zoomcall</span>
      </a>
    </div> -->
  </section>
</template>

<script>
import { confetti } from 'dom-confetti';
// import Countdown from './Countdown.vue';

export default {
  components: {
    // Countdown,
  },
  filters: {
    asDate(isoDateString) {
      const parsedDate = new Date(isoDateString);

      const day = parsedDate.getDate() < 10 ? `0${parsedDate.getDate()}` : parsedDate.getDate();
      const month = (parsedDate.getMonth() + 1) < 11 ? `0${parsedDate.getMonth() + 1}` : parsedDate.getMonth() + 1;
      const year = parsedDate.getFullYear();
      const hours = parsedDate.getHours() < 10 ? `0${parsedDate.getHours()}` : parsedDate.getHours();
      const minutes = parsedDate.getMinutes() < 10 ? `0${parsedDate.getMinutes()}` : parsedDate.getMinutes();

      const time = parsedDate.getMinutes() === 0 ? `${hours} Uhr` : `${hours}:${minutes} Uhr`;
      const date = `${day}.${month}.${year}`;

      return `${date} | ${time}`;
    },
  },
  props: {
    streamStartingAt: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
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
