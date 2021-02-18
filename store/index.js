import pathify, { make } from 'vuex-pathify';

export const plugins = [
  pathify.plugin,
];

export const state = () => ({
  introduction: null,
  schedule: null,
  groups: [],
  pubs: [],
  about: null,
  more: null,
});

export const mutations = {
  ...make.mutations(state),
};

export const actions = {
  ...make.actions(state),
  async nuxtServerInit({ dispatch }, { $contentfulClient }) {
    const { items: groups } = await $contentfulClient.fetchItems({ type: 'group' });
    const { items: pubs } = await $contentfulClient.fetchItems({ type: 'pub' });
    const { items: about } = await $contentfulClient.fetchItems({ type: 'about' });
    const { items: introduction } = await $contentfulClient.fetchItems({ type: 'introduction' });
    const { items: more } = await $contentfulClient.fetchItems({ type: 'more' });

    await dispatch('setGroups', groups);
    await dispatch('setPubs', pubs);
    await dispatch('setAbout', about);
    await dispatch('setIntroduction', introduction);
    await dispatch('setMore', more);
  },
};

export const getters = {
  ...make.getters(state),
  streamIsOver({ schedule }) {
    if (schedule) {
      return schedule.hasEnded || new Date() < new Date(schedule.streamEndingAt);
    }

    return false;
  },
};
