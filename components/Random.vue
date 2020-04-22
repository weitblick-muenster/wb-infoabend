<template>
  <section>
    <p>
      Puh, ganz schön Auswahl! Gar keine Ahnung welche Gruppe Du Dir zuerst ansehen möchtest?
      Wir haben uns was für Dich überlegt. Klicke unten auf den Button und wir bringen Dich
      zu einer zufälligen Gruppe.
    </p>
    <a
      tag="button"
      class="random button primary"
      @click="randomGroup"
    >
      Auf gut Glück
    </a>
  </section>
</template>

<script>
import groups from '~/data/groups';

export default {
  methods: {
    randomGroup() {
      const randGroup = groups[Math.floor(Math.random() * groups.length)];
      window.location.href = `${window.location.origin}/gruppe/${randGroup.slug}`;
    },
  },
};
</script>
