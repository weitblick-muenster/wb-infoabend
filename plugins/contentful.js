import {
  createClient,
  fetchItemBySlug,
  fetchItems,
  serialize,
} from '~/lib/contentful';

export default ({ $config: { contentful: contentfulConfig } }, inject) => {
  const client = createClient(contentfulConfig);

  inject('contentfulClient', {
    fetchItemBySlug: async (options) => {
      const locale = options.locale || 'de';
      const item = await fetchItemBySlug({ client, locale, ...options });
      return serialize(item, locale);
    },
    fetchItems: async (options) => {
      const locale = options.locale || 'de';
      const response = await fetchItems({ client, locale, ...options });
      const items = response.items.map((item) => serialize(item, locale));
      return {
        ...response,
        items,
      };
    },
  });
};
