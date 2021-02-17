import { getContentfulLocale, getOtherLocale } from './helpers';

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
  }
}

const defaultOptions = {
  group: { order: 'fields.position', include: 2 },
  pub: { order: 'fields.position', include: 2 },
};

export const fetchItemBySlug = async ({ client, type, slug, locale, options }) => {
  const contentfulLocale = getContentfulLocale(locale);
  const otherLocale = getOtherLocale(locale);

  const typeDefaultOptions = defaultOptions[type] || {};

  let response = await client.getEntries({
    content_type: type,
    'fields.slug': slug,
    locale: contentfulLocale,
    select: 'sys.id',
  });

  // If we didn't find the slug in the current language try other languages
  // as it might not be translated
  if (response.items[0] === undefined) {
    response = await client.getEntries({
      content_type: type,
      'fields.slug': slug,
      locale: otherLocale,
      select: 'sys.id',
    });
  }

  if (response.items[0] === undefined) {
    throw new NotFoundError(`Couldn't find ${type} with slug ${slug}`);
  }

  return client.getEntry(response.items[0].sys.id, {
    content_type: type,
    locale: '*',
    ...typeDefaultOptions,
    ...options,
  });
};

export const fetchItems = async ({ client, type, options = {} }) => {
  const typeDefaultOptions = defaultOptions[type] || {};

  const response = await client.getEntries({
    content_type: type,
    limit: 1000,
    locale: '*',
    ...typeDefaultOptions,
    ...options,
  });

  return {
    /** @type {number} */
    total: response.total,
    /** @type {any[]} */
    items: response.items,
  };
};
