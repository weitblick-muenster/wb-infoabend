<template>
  <section>
    <h1>Interesse?</h1>
    <p>
      Du möchtest noch nicht direkt Mitglied werden, hast aber Interesse den Verein
      und die verschiedenen Gruppen genauer kennen zu lernen? Dann Trage hier
      deine Daten ein, damit wir mit dir in Kontakt bleiben können!
    </p>
    <div class="ms-form">
      <ClientOnly>
        <iframe
          :data-src="formSrc1"
          width="100%"
          height="2550px"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          style="border: none; max-width:100%; max-height:100%"
          allowfullscreen=""
          webkitallowfullscreen=""
          mozallowfullscreen=""
          msallowfullscreen=""
          class="lazyload"
        />
      </ClientOnly>
      <a
        :href="formSrc1"
        class="button primary"
      >
        Kontaktformular
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formSrc1: 'https://forms.microsoft.com/Pages/ResponsePage.aspx?id=peouUPPwFkytW-ZNLh-TwyoPZ9o80BhLvDqYhHG8NYtUNEcwSzk1OEM2RElFWlowUUJUSzRST0FKQiQlQCN0PWcu&embed=true',
    };
  },
};
</script>
