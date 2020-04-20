<template>
  <header
    id="header"
  >
    <NuxtLink
      to="/"
      class="logo"
    >
      <picture>
        <source
          :srcSet="require('~/assets/images/logos/WBCD_Logo_standard.png?webp')"
          type="image/webp"
        >
        <source
          :srcSet="require('~/assets/images/logos/WBCD_Logo_standard.png')"
          type="image/png"
        >
        <img
          :src="require('~/assets/images/logos/WBCD_Logo_standard.png?webp')"
          alt="Weitblick Münster Logo"
        >
      </picture>
    </NuxtLink>
  </header>
</template>

<script>
export default {};
</script>
