<template>
  <section>
    <h1>Glücksrad</h1>
    <p>
      Puh, ganz schön Auswahl! Gar keine Ahnung welche Gruppe du dir ansehen möchtest?
      Wir haben uns was für dich überlegt. Klicke unten auf den Button und wir bringen dich
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
import { confetti } from 'dom-confetti';
import groups from '~/data/groups';

export default {
  methods: {
    randomGroup() {
      const randGroup = groups[Math.floor(Math.random() * groups.length)];
      const button = document.querySelector('.random');

      confetti(button);
      setTimeout(() => {
        window.location.href = `/gruppe/${randGroup.slug}`;
      }, 1500);
    },
  },
};
</script>
