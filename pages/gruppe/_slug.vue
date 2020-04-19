<template>
  <div>
    {{ group.name }}
  </div>
</template>

<script>
import groups from '~/data/groups';

export default {
  asyncData({ payload, params, error }) {
    if (payload) return payload;

    const group = groups.find((g) => g.slug === params.slug);
    if (group) {
      return { group };
    }

    return error({ statusCode: 404, message: 'Gruppe nicht gefunden' });
  },
};
</script>
