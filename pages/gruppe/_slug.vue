<template>
  <section>
    <img :src="group.image.src" :alt="group.image.alt" class="hero-image">
    <h1>{{ group.name }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="$md.render(group.text)" />

    <NuxtLink to="/mitmachen" class="button primary">
      <span class="label">Kontaktformular</span>
    </NuxtLink>

    <div v-if="group.videoSource" class="yt-video lazyload group-video">
      <iframe
        title="Gruppen Vorstellungsvideo"
        :src="group.videoSource"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowfullscreen
      />
    </div>

    <Random :items="groups" @randomize="redirectToGroup" />
    <Follow />

    <NuxtLink to="/" class="is-underlined">
      Zurück
    </NuxtLink>
  </section>
</template>

<script>
import { Follow } from '~/components/TextSections';
import Random from '~/components/Random.vue';
import { NotFoundError } from '~/lib/contentful';

export default {
  components: {
    Follow,
    Random,
  },
  async asyncData({ payload, params, error, $contentfulClient }) {
    if (payload) {
      return {
        group: payload.group,
      };
    }

    let group;
    try {
      group = await $contentfulClient.fetchItemBySlug({ type: 'group', slug: params.slug });
    } catch (err) {
      if (err instanceof NotFoundError) {
        return error({ statusCode: 404, message: 'Gruppe nicht gefunden' });
      }

      throw err;
    }

    return {
      group,
    };
  },
  methods: {
    redirectToGroup(group) {
      setTimeout(() => {
        window.location.href = `/gruppe/${group.slug}`;
      }, 1500);
    },
  },
};
</script>
