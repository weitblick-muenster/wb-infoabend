<template>
  <section>
    <picture>
      <source
        :srcSet="imageSrcWebp"
        type="image/webp"
        class="hero-image"
      >
      <source
        :srcSet="imageSrc"
        class="hero-image"
      >
      <img
        :src="imageSrc"
        class="hero-image"
      >
    </picture>
    <h1>{{ group.name }}</h1>
    <p>{{ group.text }}</p>
    <iframe
      v-if="group.videoSrc"
      class="group-video"
      :src="group.videoSrc"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope;"
      allowfullscreen
    />
    <Follow />
    <a
      class="is-underlined"
      href="/"
    >
      Zurück
    </a>
  </section>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import {
  Follow,
} from '~/components';
import groups from '~/data/groups';

export default {
  components: {
    Follow,
  },
  asyncData({ payload, params, error }) {
    if (payload) return payload;

    const group = groups.find((g) => g.slug === params.slug);
    if (group) {
      return { group };
    }

    return error({ statusCode: 404, message: 'Gruppe nicht gefunden' });
  },
  computed: {
    imageSrc() {
      return require(`~/assets/images/${this.group.imgSrc}`);
    },
    imageSrcWebp() {
      return require(`~/assets/images/${this.group.imgSrc}?webp`);
    },
  },
};
</script>
