<template>
  <ClientOnly>
    <Countdown
      :end="deadline"
      :end-function="() => $emit('deadlineEnd')"
      show-days
      show-hours
      show-minutes
      show-seconds
    />
  </ClientOnly>
</template>

<script>
import Countdown from 'countdown-vue';

export default {
  components: {
    Countdown,
  },
  props: {
    deadline: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

.vuejs-countdown {
  font-family: 'Fira Code', monospace;

  .digit,
  li:after {
    font-size: 10em !important;
  }

  .text {
    font-size: 2em !important;
  }

  li:after {
    top: -50px !important;
    right: -45px !important;
  }
}
</style>
