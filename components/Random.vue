<template>
  <section>
    <h1>{{ title }}</h1>
    <p
      v-if="title === 'Mitläufer'"
    >
      Keine Lieblingskneipe? Dir ist es egal wo hin es geht, hauptsache du bist dabei?
      Dann laufe einfach mit und suche "auf gut Glück" eine Kneipe!
    </p>
    <p v-else>
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
import pubs from '~/data/pubs';

export default {
  props: {
    withTeamsUrls: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false,
      default: 'Glücksrad',
    },
    withPubs: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    randomGroup() {
      const group = this.withPubs ? pubs : groups;
      const random = group[Math.floor(Math.random() * group.length)];
      const button = document.querySelector('.random');

      confetti(button);
      setTimeout(() => {
        debugger;
        if (this.withTeamsUrls) {
          window.open(random.teams, '_blank');
        } else {
          window.location.href = `/gruppe/${random.slug}`;
        }
      }, 1500);
    },
  },
};
</script>
