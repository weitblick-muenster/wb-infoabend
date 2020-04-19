<template>
  <div id="wrapper">
    <TheHeader />
    <div id="main">
      <div class="inner">
        <nuxt />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import { TheHeader, TheFooter } from '~/components/Page';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
