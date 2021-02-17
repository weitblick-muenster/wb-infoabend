<template>
  <div>
    <Join />
    <Form />
    <Follow />
  </div>
</template>

<script>
import { Follow, Join } from '~/components/TextSections';
import Form from '~/components/Form.vue';

export default {
  components: {
    Form,
    Follow,
    Join,
  },
};
</script>
