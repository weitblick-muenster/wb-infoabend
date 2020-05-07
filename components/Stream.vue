<template>
  <section class="is-vertical">
    <div class="stream">
      <div class="yt-video lazyload stream-left">
        <iframe
          title="Weitblick Live Stream"
          src="https://www.youtube-nocookie.com/embed/kr91LP4ecDk"
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
      const host = process.env.NODE_ENV === 'development' ? 'localhost' : 'infoabend.weitblicker.live';
      return `https://www.youtube.com/live_chat?v=kr91LP4ecDk&embed_domain=${host}`;
    },
  },
};
</script>
