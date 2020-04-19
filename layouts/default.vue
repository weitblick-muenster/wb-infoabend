<template>
  <div>
    <TheHeader />
    <nuxt />
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
