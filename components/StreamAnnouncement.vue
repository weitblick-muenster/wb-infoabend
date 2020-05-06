<template>
  <div class="section has-background-grey">
    <section class="container stream-container">
      <div
        v-if="showStream"
        class="text-align-center"
      >
        <NuxtLink to="/stream">
          <img
            srcset="~/assets/images/stream.jpg?responsive"
            class="stream-thumbnail"
          >
        </NuxtLink>
      </div>

      <template v-else>
        <p class="stream-info-text">
          Der Live-Stream ist zwar noch nicht gestartet, aber bleib dran!
          In der Zwischenzeit schau' dir doch noch einmal unsere
          <a
            href="#unsere-gruppen"
            class="is-underlined"
          >
            Projektgruppen
          </a> an.
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
      // streamStartingAt: '2020-05-07T20:00:00',
      streamStartingAt: '2020-05-06T18:45:15',
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
.stream-container {
  max-width: 1400px;
}

.stream-info-text {
  font-size: 15px;
}

.stream-thumbnail {
  max-width: 100%;
  opacity: 0.9;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.6;
    transform: scale(1.05);
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

.has-background-grey {
  background-color: lightgrey;
}
</style>
