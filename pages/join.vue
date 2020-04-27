<template>
  <div>
    <Join />
    <Form />
    <Follow />
  </div>
</template>

<script>
import { Form, Follow, Join } from '~/components';

export default {
  components: {
    Form,
    Follow,
    Join,
  },
};
</script>
