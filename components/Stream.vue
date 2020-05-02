<template>
  <section style="max-width: 80%;">
    <div class="stream">
      <div class="group-video lazyload stream-left">
        <iframe
          title="Weitblick Live Stream"
          src="https://www.youtube-nocookie.com/embed/wbm2OwbthGM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowfullscreen
        />
      </div>
      <div class="group-video lazyload stream-right">
        <iframe
          title="Weitblick Live Stream"
          src="https://www.youtube.com/live_chat?v=YYJkwrxPW9A&amp;embed_domain=localhost"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowfullscreen
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
  iframe {
    max-height: 500px;
  }

  .stream {
    display: flex;
    justify-content: space-around;

    .stream-left {
      width: 60%;
    }

    .stream-right {
      width: 30%;
    }
  }
</style>
