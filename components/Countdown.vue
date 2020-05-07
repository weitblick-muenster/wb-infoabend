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
