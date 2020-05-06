<template>
  <div class="section has-background-grey">
    <div class="container stream-container">
      <div class="stream">
        <div class="lazyload stream-left">
          <iframe
            title="Weitblick Live Stream"
            src="https://www.youtube-nocookie.com/embed/kr91LP4ecDk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
            allowfullscreen
          />
        </div>
        <div
          v-if="showChat"
          class="lazyload stream-right"
        >
          <iframe
            title="Weitblick Live Stream"
            :src="liveChatSrc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isMobile, isTablet } from '~/lib/userAgent';

export default {
  data() {
    return {
      showChat: false,
    };
  },
  computed: {
    liveChatSrc() {
      const host = process.env.NODE_ENV === 'development' ? 'localhost' : 'infoabend.weitblicker.live';
      return `https://www.youtube.com/live_chat?v=kr91LP4ecDk&embed_domain=${host}`;
    },
  },
  mounted() {
    if (!isMobile(navigator.userAgent) && !isTablet(navigator.userAgent)) {
      this.showChat = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.has-background-grey {
  background-color: lightgrey;
}

.stream-container {
  max-width: 1400px;
  margin-bottom: 20px;
}
</style>
