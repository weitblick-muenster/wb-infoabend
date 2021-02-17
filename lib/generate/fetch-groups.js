import { createClient, fetchItems, serialize } from '../contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async () => {
  const { items: groups } = await fetchItems({ client, type: 'group' });

  return groups.map((group) => serialize(group, 'de'));
};
