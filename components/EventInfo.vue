<template functional>
  <section>
    <h1>So funktioniert es</h1>
    <ul class="explanation">
      <li class="explanation-list-element">
        💻 Aufzeichung vom Infoabend anschauen
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
    <br>
    <div class="yt-video lazyload">
      <iframe
        title="Weitblick Live Stream"
        src="https://www.youtube.com/embed/kr91LP4ecDk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowfullscreen
      />
    </div>
  </section>
</template>
