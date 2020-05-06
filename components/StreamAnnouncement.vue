<template>
  <div class="section is-lightgrey">
    <section class="container">
      <div
        v-if="showStream"
        class="text-align-center"
      >
        <NuxtLink to="/stream">
          <img
            srcset="~/assets/images/stream.gif"
            class="stream-thumbnail"
          >
        </NuxtLink>
      </div>

      <template v-else>
        <p class="stream-info-text no-margin-bottom">
          Der Live-Stream ist zwar noch nicht gestartet, aber bleib dran!
        </p>
        <p class="stream-info-text">
          Schau' dir doch noch einmal unsere
          <a
            href="#unsere-gruppen"
            class="is-underlined"
          >
            Projektgruppen
          </a> in der Zwischenzeit an.
        </p>

        <div class="countdown-holder">
          <ClientOnly>
            <Countdown
              :deadline="streamStartingAt"
              @deadlineEnd="onCountdownFinish"
            />
          </ClientOnly>
          <div
            ref="countdownConfetti"
            class="confetti-holder"
          />
        </div>
      </template>
    </section>
  </div>
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
      streamStartingAt: '2020-05-07T20:00:00',
      showStream: false,
    };
  },
  computed: {
    liveChatSrc() {
      const host = process.env.NODE_ENV === 'development' ? 'localhost' : 'infoabend.weitblicker.live';
      return `https://www.youtube.com/live_chat?v=kr91LP4ecDk&embed_domain=${host}`;
    },
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

<style lang="scss">
.no-margin-bottom {
  margin-bottom: 0 !important;
}

.stream-thumbnail {
  max-width: 100%;
  opacity: 0.9;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
}

.countdown-holder {
  text-align: center;
}

.confetti-holder {
  width: fit-content;
  margin: auto;

  &::before {
    content: ' ';
    white-space: pre;
  }
}

.text-align-center {
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .stream-thumbnail {
    width: 70%;
  }
}
</style>
