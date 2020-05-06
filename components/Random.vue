<template>
  <section class="random">
    <p class="text">
      <slot name="text">
        Puh, ganz schön viel Auswahl! Gar keine Ahnung, welche Gruppe du dir ansehen möchtest?
        Wir haben uns etwas für dich überlegt. Klicke unten auf den Button und wir bringen dich
        zu einer zufälligen Gruppe.
      </slot>
    </p>
    <a
      ref="randomizer"
      tag="button"
      class="random-button button button-primary"
      @click="randomGroup"
    >
      Auf gut Glück
    </a>
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
    randomGroup() {
      const randomItem = this.items[Math.floor(Math.random() * this.items.length)];
      const button = this.$refs.randomizer;
      this.$emit('randomized', randomItem);
      confetti(button);
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  font-size: 15px;
}

.random {
  display: flex;
  align-items: center;
}

.random-button {
  margin-left: 30px;
  margin-right: 20px;
}
</style>
