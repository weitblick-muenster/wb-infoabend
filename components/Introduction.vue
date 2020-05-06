<template>
  <div class="section is-lightgrey">
    <section class="container">
      <div class="row introduction-row">
        <div class="one-half column">
          <!-- eslint-disable max-len -->
          <h1>Hey! Willkommen zum Infoabend!</h1>
          <p>
            Schön, dass du zu uns gefunden hast! Da Veranstaltungen aktuell nur eingeschränkt
            stattfinden können, halten wir den diesjährigen Infoabend online ab, damit
            du trotzdem dieses Semester deinen Einstieg bei Weitblick nicht verpasst!

            Du fragst dich, wie? Hier findest du einen Überblick zu Weitblick und unserem vielfältigen
            Engagement, das auf viele verschiedene Projektgruppen verteilt wird. Wenn du jetzt schon vor
            Interesse brennst, findest du weiter unten bereits eine Vorstellung der verschiedenen
            Untergruppen in Form von kurzen Texten und Videos.
          </p>
        </div>
        <div class="one-half column">
          <img
            :srcset="require('~/assets/images/hero.jpg?resize').srcSet"
            class="hero-image"
            alt="Collage von Weitblickern"
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-image {
  max-width: 100%;
}

.introduction-row {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 549px) {
  .introduction-row {
    display: block;
  }
}
</style>
