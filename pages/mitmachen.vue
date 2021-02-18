<template>
  <div>
    <Join :join="join[0]" />
    <Form :join="join[0]" />
    <Follow />
  </div>
</template>

<script>
import { get } from 'vuex-pathify';
import { Follow, Join } from '~/components/TextSections';
import Form from '~/components/Form.vue';

export default {
  components: {
    Form,
    Follow,
    Join,
  },
  computed: {
    join: get('join'),
  },
};
</script>
