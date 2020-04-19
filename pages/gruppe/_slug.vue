<template>
  <section>
    <img
      :src="imageSrc"
      class="hero-image"
    >
    <h1>{{ group.name }}</h1>
    <p>{{ group.text }}</p>
    <!-- <iframe
      v-if="group.videoSrc"
      :src="group.videoSrc"
      width="560"
      height="315"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    /> -->

    <!-- use this as Placeholder until all Videos are uploaded -->
    <iframe
      class="group-video"
      src="https://www.youtube.com/embed/uejS5Az7Xbw"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
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
  },
};
</script>
