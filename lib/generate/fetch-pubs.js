import { createClient, fetchItems, serialize } from '../contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async () => {
  const { items: pubs } = await fetchItems({ client, type: 'pub' });

  return pubs.map((pub) => serialize(pub, 'de'));
};
