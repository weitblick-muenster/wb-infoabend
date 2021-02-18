<template>
  <section>
    <h1>{{ join.interestedTitle }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="$md.render(join.interestedText)" />
    <div class="ms-form">
      <ClientOnly>
        <iframe
          :data-src="join.interestedForm"
          width="100%"
          height="2550px"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          style="border: none; max-width:100%; max-height:100%"
          allowfullscreen=""
          webkitallowfullscreen=""
          mozallowfullscreen=""
          msallowfullscreen=""
          class="lazyload"
        />
      </ClientOnly>
      <a
        :href="join.interestedForm"
        class="button primary"
      >
        Kontaktformular
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    join: {
      type: Object,
      required: true,
    },
  },
};
</script>
