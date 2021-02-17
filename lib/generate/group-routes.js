export default (groups) => groups.map((group) => ({
  route: `/gruppe/${group.slug}`,
  payload: {
    group,
    groups,
  },
}));
