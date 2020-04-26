<template>
  <section>
    <img
      :srcSet="require('~/assets/images/hero.jpg?resize').srcSet"
      class="hero-image"
      alt="Collage von Weitblickern"
    >
    <!-- eslint-disable max-len -->
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
      Am 7. Mai 2020 um 20 Uhr findet dann unser Infoabend als Videokonferenz statt.
      Da hast du dann die Möglichkeit die  Gruppen und Projekte kennenzulernen und direkt deine
      Fragen zu stellen. Am Ende der Seite befindet sich ein Formular, über welches du deine Kontaktdaten
      hinterlassen kannst, damit sich die jeweiligen Projektverantwortlichen bei dir melden können.
      <br><br>
      Teilnehmen am Online-Infoabend kannst du direkt über den Webbrowser ohne ein Programm zu installieren.
      Am besten funktioniert dies über den Computer. Der Link unten wird dazu dann freigeschaltet.
    </p>
    <table>
      <tbody>
        <tr>
          <td>
            Donnerstag, 7. Mai 2020 ab 20 Uhr
          </td>
        </tr>
        <tr>
          <td>
            Bei dir zu Hause
          </td>
        </tr>
        <tr>
          <td>
            <a
              class="is-underlined"
              href="https://www.facebook.com/events/3625732604168833"
              target="_blank"
              rel="noreferrer"
            >
              Zur Facebook Veranstaltung
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <ul class="vertical">
      <li>
        <NuxtLink
          tag="button"
          :disabled="true"
          to="/"
          class="button primary"
        >
          <span class="label">Stream</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          tag="button"
          :disabled="false"
          to="/join"
          class="button primary"
        >
          <span class="label">mitmachen</span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>
