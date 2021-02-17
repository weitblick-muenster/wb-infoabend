import { createClient } from 'contentful';
import { NotFoundError, fetchItemBySlug, fetchItems } from './fetch';
import { AVAILABLE_LOCALES } from './helpers';
import serialize from './serializer';

export {
  createClient,

  NotFoundError,
  fetchItemBySlug,
  fetchItems,

  serialize,

  AVAILABLE_LOCALES,
};
