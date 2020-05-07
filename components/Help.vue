<template>
  <section>
    <h1>Hilfe und FAQs</h1>
    <p>
      Hier gibt es eine Liste von uns bekannten Problemen mit dem Stream und Microsoft Teams
      Besprechungen. Die beste Erfahrung in Teams Besprechungen haben wir mit der Desktop-App
      gemacht. Teams funktioniert auch im Browser und ohne Account, falls jedoch Probleme
      auftauchen, ist ein Download der App ratsam.
    </p>
    <h2>Stream nicht sichtbar</h2>
    <p>
      Der Stream wird dir nicht angezeigt? Da wir ihn auf YouTube streamen, kannst du ihn
      auch einfach in der App oder auf der YouTube Page verfolgen:
      <a
        href="https://www.youtube.com/watch?v=kr91LP4ecDk"
        class="is-underlined"
        target="_blank"
      >
        Link zu YouTube
      </a>
    </p>
    <h2>Browser unterstützt Teams-Besprechungen nicht</h2>
    <p>
      Bekannt ist das Problem bisher beim Firefox und Internet Explorer. Leider hat Microsoft
      dieses Problem noch nicht behoben. Wenn du einen anderen Browser (Chrome, Edge, Ecosia etc.)
      installiert hast, versuche es damit. Ansonsten ist die Desktop-App runterladen der
      schnellste Weg. Sie ist nicht so schlimm wie Zoom ;)
    </p>
    <h2>Audio/Video funktoniert nicht</h2>
    <p>
      Stelle sicher, dass deine Lautsprecher/Kopfhörer funktionieren. Wenn du über den Browser
      teilnimmst, ließ die eventuell angezeigten Informationen gründlich durch. Vielleicht musst du
      Audio/Video freischalten wie im Bild gezeigt:
    </p>
    <img
      :srcSet="require('~/assets/images/audio.png?resize').srcSet"
      class="hero-image"
      alt="Audio Hilfe"
    >
    <h2>Es klappt gar nicht?</h2>
    <p>
      Dann melde dich einfach fix per Mail bei uns. Unsere Admins helfen dir im Hintergrund!
      <br>
      Email an:
      <a
        href="mailto:admin.muenster@weitblicker.org"
        class="is-underlined"
      >
        admin.muenster@weitblicker.org
      </a>
    </p>
    <a
      tag="button"
      class="button primary"
      @click="$router.go(-1)"
    >
      <span class="label">Zurück</span>
    </a>
  </section>
</template>

<script>
export default {};
</script>
