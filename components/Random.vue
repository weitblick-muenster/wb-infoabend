<template>
  <section>
    <h1>Glücksrad</h1>
    <p>
      Puh, ganz schön viel Auswahl! Gar keine Ahnung, welche Gruppe du dir ansehen möchtest?
      Wir haben uns etwas für dich überlegt. Klicke unten auf den Button und wir bringen dich
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
  props: {
    withTeamsUrls: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    randomGroup() {
      const randGroup = groups[Math.floor(Math.random() * groups.length)];
      const button = document.querySelector('.random');

      confetti(button);
      setTimeout(() => {
        debugger;
        if (this.withTeamsUrls) {
          window.open(randGroup.teams, '_blank');
        } else {
          window.location.href = `/gruppe/${randGroup.slug}`;
        }
      }, 1500);
    },
  },
};
</script>
