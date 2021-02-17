<template>
  <section>
    <h1>
      <slot name="title">
        Glücksrad
      </slot>
    </h1>

    <p>
      <slot name="text">
        Puh, ganz schön viel Auswahl! Gar keine Ahnung, welche Gruppe du dir ansehen möchtest?
        Wir haben uns etwas für dich überlegt. Klicke unten auf den Button und wir bringen dich
        zu einer zufälligen Gruppe.
      </slot>
    </p>

    <button
      ref="randomizer"
      class="random button primary"
      @click="randomize"
    >
      Auf gut Glück
    </button>
  </section>
</template>

<script>
import { confetti } from 'dom-confetti';

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    randomize() {
      const randomItem = this.items[Math.floor(Math.random() * this.items.length)];
      const button = this.$refs.randomizer;

      confetti(button);
      this.$emit('randomize', randomItem);
    },
  },
};
</script>
