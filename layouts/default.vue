<template>
  <div>
    <TheHeader />
    <nuxt />
    <More />
    <TheFooter />
  </div>
</template>

<script>
import { TheHeader, TheFooter } from '~/components/Page';
import { More } from '~/components';

export default {
  components: {
    TheHeader,
    More,
    TheFooter,
  },
};
</script>
