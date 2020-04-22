<template>
  <section>
    <img
      :srcSet="imageSrc.srcSet"
      class="hero-image"
    >
    <h1>{{ group.name }}</h1>
    <p>{{ group.text }}</p>
    <div
      v-if="group.videoSrc"
      class="group-video lazyload"
    >
      <iframe
        :src="group.videoSrc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowfullscreen
      />
    </div>
    <Random />
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
  Random,
} from '~/components';
import groups from '~/data/groups';

export default {
  components: {
    Follow,
    Random,
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
      return require(`~/assets/images/${this.group.imgSrc}?resize`);
    },
  },
};
</script>
