import generateGroupRoutes from './group-routes';
import fetchGroups from './fetch-groups';

export default {
  async routes() {
    const groups = await fetchGroups();
    const groupRoutes = generateGroupRoutes(groups);

    return [
      '/',
      '/gruppentisch-treffen',
      // '/stream',
      '/mitmachen',
      '/hilfe',
      ...groupRoutes,
    ];
  },
};
