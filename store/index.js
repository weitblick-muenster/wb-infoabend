import pathify, { make } from 'vuex-pathify';

export const plugins = [
  pathify.plugin,
];

export const state = () => ({
  groups: [],
  pubs: [],
});

export const mutations = {
  ...make.mutations(state),
};

export const actions = {
  ...make.actions(state),
  async nuxtServerInit({ dispatch }, { $contentfulClient }) {
    const { items: groups } = await $contentfulClient.fetchItems({ type: 'group' });
    const { items: pubs } = await $contentfulClient.fetchItems({ type: 'pub' });

    await dispatch('setGroups', groups);
    await dispatch('setPubs', pubs);
  },
};

export const getters = {
  ...make.getters(state),
};
