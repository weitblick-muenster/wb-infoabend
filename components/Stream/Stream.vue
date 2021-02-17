<template>
  <section class="is-vertical">
    <div class="stream">
      <div class="yt-video lazyload stream-left">
        <iframe
          title="Weitblick Live Stream"
          src="https://www.youtube.com/embed/ISXUrm_XIs4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowfullscreen
        />
      </div>
      <div class="chat lazyload stream-right">
        <iframe
          title="Weitblick Live Stream"
          :src="liveChatSrc"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowfullscreen
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    liveChatSrc() {
      const baseURL = new URL(this.$config.baseURL);
      const host = process.env.NODE_ENV === 'development' ? 'localhost' : baseURL.hostname;
      return `https://www.youtube.com/live_chat?v=ISXUrm_XIs4&embed_domain=${host}`;
    },
  },
};
</script>
