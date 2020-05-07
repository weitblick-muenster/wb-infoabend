<template functional>
  <section>
    <h1>So funktioniert es</h1>
    <ul class="explanation">
      <li class="explanation-list-element">
        💻 Online Infoabend mit Live-Stream und anschließendem Kennenlernen per Video-Call
      </li>
      <li class="explanation-list-element">
        💌 Hinterlasse der Gruppe die du interessant findest
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

    <NuxtLink to="/stream">
      <img
        src="~/assets/images/wb-stream-cta.gif"
        class="stream-thumbnail"
      >
    </NuxtLink>
  </section>
</template>
