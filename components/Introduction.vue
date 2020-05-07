<template>
  <section class="is-vertical">
    <div class="row">
      <!-- eslint-disable max-len -->
      <div class="column">
        <h1>Hey! Willkommen zum Infoabend!</h1>
        <p>
          Schön, dass du zu uns gefunden hast! Da Veranstaltungen aktuell nur eingeschränkt
          stattfinden können, halten wir den diesjährigen Infoabend online ab, damit
          du trotzdem dieses Semester deinen Einstieg bei Weitblick nicht verpasst!
          <br>
          Du fragst dich, wie? Hier findest du einen Überblick zu Weitblick und unserem vielfältigen
          Engagement, das auf viele verschiedene Projektgruppen verteilt wird. Wenn du jetzt schon vor
          Interesse brennst, findest du weiter unten bereits eine Vorstellung der verschiedenen
          Untergruppen in Form von kurzen Texten und Videos.
          <br>
        </p>
      </div>
      <div class="column">
        <img
          :srcSet="require('~/assets/images/hero.jpg?resize').srcSet"
          class="hero-image"
          alt="Collage von Weitblickern"
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
