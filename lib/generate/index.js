import generateGroupRoutes from './group-routes';
import fetchGroups from './fetch-groups';
import fetchPubs from './fetch-pubs';

export default {
  async routes() {
    const groups = await fetchGroups();
    const pubs = await fetchPubs();

    const groupRoutes = generateGroupRoutes(groups);

    return [
      {
        route: '/',
        payload: {
          groups,
        },
      },
      {
        route: '/gruppentisch-treffen',
        payload: {
          groups,
          pubs,
        },
      },
      // {
      //   route: '/stream',
      //   payload: {
      //     groups,
      //     pubs,
      //   },
      // },
      '/mitmachen',
      '/hilfe',
      ...groupRoutes,
    ];
  },
};
