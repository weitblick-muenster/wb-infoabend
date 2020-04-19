<template>
  <div>
    <h1>{{ group.name }}</h1>

    <span class="image main">
      <img :src="imageSrc">
    </span>

    <p>{{ group.description }}</p>

    <iframe
      :src="group.videoSrc"
      width="560"
      height="315"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import groups from '~/data/groups';

export default {
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
