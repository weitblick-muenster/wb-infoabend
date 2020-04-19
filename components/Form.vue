<template>
  <div class="ms-form">
    <ClientOnly>
      <iframe
        :src="formSrc"
        width="100%"
        height="1800px"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        style="border: none; max-width:100%; max-height:100%"
        allowfullscreen=""
        webkitallowfullscreen=""
        mozallowfullscreen=""
        msallowfullscreen=""
      />
    </ClientOnly>
  </div>
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

<style lang="scss" scoped>
.ms-form {
  margin-top: 2rem;
  height: 100%;
}
</style>
