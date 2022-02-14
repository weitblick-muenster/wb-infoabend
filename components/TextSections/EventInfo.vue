<template>
  <section>
    <h1>So funktioniert es</h1>
    <ul class="explanation">
      <li class="explanation-list-element">
        <!-- eslint-disable-next-line max-len -->
        {{ streamIsOver ? '💻 Aufzeichung vom Infoabend anschauen' : '💻 Hybrid Infoabend in Präsenz im Hörsaal S1, Schloss oder als Zoom Call (ab 18:50)' }}
      </li>
      <li class="explanation-list-element">
        💌 Hinterlasse der Gruppe, die du interessant findest,
        <NuxtLink
          to="/mitmachen"
        >
          <span class="label is-underlined">hier</span>
        </NuxtLink>
        deine Kontaktdaten
      </li>
      <li class="explanation-list-element">
        🎉 Unsere Gruppen melden sich bei dir und du kannst direkt loslegen
      </li>
    </ul>
  </section>
</template>

<script>
import { get } from 'vuex-pathify';

export default {
  computed: {
    streamIsOver: get('streamIsOver'),
  },
};
</script>
