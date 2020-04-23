<template>
  <section>
    <img
      :srcSet="require('~/assets/images/hero.jpg?resize').srcSet"
      class="hero-image"
    >
    <h1>Hey, willkommen zur Infoveranstaltung!</h1>
    <p>
      Schön dass du zu uns gefunden hast! Da Veranstaltungen aufgrund des aktuellen Kontaktverbotes
      nur eingeschränkt stattfinden können, halten wir die diesjährige Infoveranstaltung online ab.
      du fragst dich wie? Auf dieser Seite findest du vorab eine Informationssammlung zu Weitblick
      und allen Gruppen in Form von kurzen Texten und Videos. So kannst du dich schonmal vertraut
      machen mit unseren Gruppen.<br>
      Am 7. Mai 2020 um 20 Uhr
      findet dann die eigentliche Infoveranstaltung als Online-Videokonferenz statt. Da hast du
      dann die Möglichkeit die Gruppen kennenzulernen und direkt deine Fragen zu stellen. Unten
      befindet sich ein Formular, über welches du den Gruppen deine Kontaktdaten hinterlassen
      kannst. Diese melden sich dann bei dir.
      Teilnehmen kannst du direkt über den Webbrowser ohne Installation eines Programmes.
      Wir empfehlen dir aber dies mit deinem Computer zu machen.
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
          <span class="label">Teilnehmen</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          tag="button"
          :disabled="true"
          to="/form"
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
