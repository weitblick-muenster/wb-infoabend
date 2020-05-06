<template>
  <div>
    <div class="section">
      <div class="container">
        <img
          :srcset="imageSrc.srcSet"
          class="hero-image"
        >

        <h1>{{ group.name }}</h1>
        <p>{{ group.text }}</p>
        <div
          v-if="group.videoSrc"
          class="group-video lazyload"
        >
          <iframe
            title="Gruppen Vorstellungsvideo"
            :src="group.videoSrc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
            allowfullscreen
          />
        </div>
      </div>
    </div>

    <Follow />

    <div class="container">
      <NuxtLink
        to="/"
        class="is-underlined"
      >
        Zurück
      </NuxtLink>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { Follow } from '~/components';
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
      return require(`~/assets/images/${this.group.imgSrc}?resize`);
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-image {
  max-height: 540px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 50px;
}

.group-video {
  margin-bottom:50px;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0;
  height: 0;
  overflow: hidden;

  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
