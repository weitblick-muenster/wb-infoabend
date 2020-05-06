<template>
  <div class="section">
    <section class="container">
      <h1>Weitere Infos</h1>
      <div class="row">
        <div class="one-half column">
          <p>
            Am 7. Mai 2020 um 20 Uhr findet dann unser Infoabend als Videokonferenz statt.
            Da hast du dann die Möglichkeit, die  Gruppen und Projekte kennenzulernen und direkt
            deine Fragen zu stellen. Am Ende der Seite befindet sich ein Formular, über welches du
            deine Kontaktdaten hinterlassen kannst, damit sich die jeweiligen
            Projektverantwortlichen bei dir melden können.
            <br><br>
            Teilnehmen am Online-Infoabend kannst du direkt über den Webbrowser ohne ein Programm zu
            installieren. Am besten funktioniert dies über den Computer. Der Link unten wird dazu
            dann freigeschaltet.
          </p>
        </div>

        <div class="one-half column">
          <table class="u-full-width schedule">
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
          <NuxtLink
            tag="button"
            :disabled="false"
            to="/mitmachen"
            class="button button-primary"
          >
            <span class="label">Mitmachen</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
table.schedule {
  td:first-child {
    border-top: 1px solid #E1E1E1;
  }
}
</style>
