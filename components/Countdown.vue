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

.vuejs-countdown {

  .digit,
  li:after {
    font-size: 6rem !important;
  }

  .text {
    font-size: 1.1rem !important;
  }

  li:after {
    top: -40px !important;
    right: -25px !important;
  }
}
</style>
