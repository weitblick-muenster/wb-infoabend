<template>
  <section
    id="about"
    key="about"
  >
    <h1>{{ about.title }}</h1>
    <!-- eslint-disable vue/no-v-html -->
    <div v-html="$md.render(about.textAboveVideo)" />
    <div v-if="about.videoSource" class="yt-video lazyload group-video">
      <iframe
        title="Weitblick Vorstellungsvideo"
        :src="about.videoSource"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowfullscreen
      />
    </div>
    <div v-html="$md.render(about.textBelowVideo)" />
  </section>
</template>

<script>
export default {
  props: {
    about: {
      type: Object,
      required: true,
    },
  },
};
</script>
