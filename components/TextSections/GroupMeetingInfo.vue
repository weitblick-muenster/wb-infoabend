<template>
  <section>
    <h1>Willkommen zum Gruppentisch-Treffen!</h1>
    <p>
      Einmal im Monat ist Donnerstags kein normales Treffen sondern ein
      Gruppentischtreffen. Hier können alle Gruppen die Zeit nutzen und an ihren Projekten
      arbeiten. Normalerweise findet das Ganze im Juridicum 490 in einem großen Raum statt,
      da sich dort auch Möglichkeiten zum Austausch zwischen den Gruppen bilden. Nun findet
      das ganze online statt. Für Interessierte der perfekte Anlass, nochmals in verschiedene
      Gruppen hinein zu schnuppern!
    </p>
    <h1>Ablauf</h1>
    <p>
      Ab 20 Uhr finden wir uns alle in gemeinsamer Runde in einer Teams-Besprechung und es gibt
      allgemeine Infos für alle, sowie die Möglichkeit auch andere Gruppen über bevorstehende
      Aktionen zu informieren.
      <br>
      Auf Los geht's los, dann heißt es ab in die Gruppen-Calls. Dazu sind hier unten die einzelnen
      Gruppen mit Teams Besprechungen verlinkt. Du bist neu dabei? Dann schaue gerne auch in
      verschiedene Gruppen hinein und stelle gerne Fragen! Infos über die Gruppen findest du
      <NuxtLink
        to="/#groups"
      >
        <span class="label is-underlined">hier.</span>
      </NuxtLink>
      <br>
      Gegen 21.30 Uhr informieren wir alle Gruppen und laden ein, mit in unsere "Altstadt" zu
      ziehen. Dazu findet ihr unterhalb der Gruppenübersicht Kneipen, in denen wir noch locker
      schnacken, ein Bierchen trinken und vielleicht auch das ein oder andere Spiel spielen.
    </p>
    <a
      href="https://teams.microsoft.com/l/meetup-join/19%3a222b5e35c6b243399a4ea24b1a3cb0b7%40thread.skype/1611148057669?context=%7b%22Tid%22%3a%22502eeaa5-f0f3-4c16-ad5b-e64d2e1f93c3%22%2c%22Oid%22%3a%22cd1c8080-3adf-4cb9-a977-b19a1e56f79b%22%7d"
    >
      <img
        :srcSet="require('~/assets/images/plenum.png?resize').srcSet"
        class="center outset"
        alt="Audio Hilfe"
      >
    </a>
  </section>
</template>

<script>
export default {};
</script>

<style media="screen">
  .outset {
    border: 5px outset;
  }
</style>
