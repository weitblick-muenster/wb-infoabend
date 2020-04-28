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
          :data-src="formSrc"
          width="100%"
          height="2000px"
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
      href="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=peouUPPwFkytW-ZNLh-Tw-JhNObcD4xIrVq367O4HS1UQUU2VDI5T1pPVkVUS1FJMkNFU09URkJBQy4u&amp%3Bembed=true"
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
      formSrc: 'https://forms.microsoft.com/Pages/ResponsePage.aspx?id=peouUPPwFkytW-ZNLh-Tw-JhNObcD4xIrVq367O4HS1UQUU2VDI5T1pPVkVUS1FJMkNFU09URkJBQy4u&amp;embed=true',
    };
  },
};
</script>
