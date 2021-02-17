import {
  getContentType,
  serializeFields,
  serializeMethods,
  serializeRenamedFields,
  serializeAssociations,
  serializeAssets,
} from './helpers';

/**
 * @typedef {object} Configuration
 * @type {Object}
 * @property {string[]=} fields Simple fields from Contentful
 * @property {Object.<string, string>=} renamedFields
 * Simple fields from Contentful that are renamed in serialization.
 * The key is the desired new name, while the value is the name from Contentful.
 * @property {Object.<string, (entry, locale) => any>=} methods
 * Custom methods that will be invoked during serialization.
 * @property {string[]=} associations
 * Associations from contentful that will be resolved during serialization.
 * Can either has-one or has-many
 * @property {string[]=} assets Media fields, e.g. pictures or videos.
 */

/** @type {Object.<string, Configuration>} */
const CONFIGURATION_BY_CONTENT_TYPE = {
  group: {
    fields: [
      'slug',
      'name',
      'shortDescription',
      'text',
      'videoSource',
      'teamsMeetingUrl',
    ],
    assets: [
      'image',
    ],
  },

  pub: {
    fields: [
      'name',
      'teamsMeetingUrl',
    ],
    assets: [
      'image',
    ],
  },
};

/**
 * @typedef Entry
 * @type {Object}
 * @property {Object} sys
 * @property {string} sys.id
 * @property {Date} sys.updatedAt
 * @property {Object} sys.contentType
 * @property {Object} sys.contentType.sys
 * @property {string} sys.contentType.sys.id Contentful content type, e.g. `group` or `pub`.
 * @property {Object} fields
 */

/**
 * @param {Entry} entry An entry from Contentful, or one of its associations
 * @param {('de'|'en')} locale Locale from Nuxt
 * @param {number} depth Maximum serialization depth for associations
 */
const serialize = (entry, locale, depth = 3) => {
  const contentType = getContentType(entry);
  if (!contentType) return {};
  const configuration = CONFIGURATION_BY_CONTENT_TYPE[contentType];
  if (!configuration) throw new Error(`No configuration found for content type ${contentType}`);

  const serializedFields = serializeFields(configuration.fields, entry, locale);
  const serializedRenamedFields = serializeRenamedFields(configuration.renamedFields, entry, locale);
  const serializedMethods = serializeMethods(configuration.methods, entry, locale);
  const serializedAssociations = serializeAssociations(
    configuration.associations, entry, locale,
    serialize, // We need to pass this function as it will be called recursively
    depth,
  );
  const serializedAssets = serializeAssets(configuration.assets, entry, locale);

  return {
    id: entry.sys.id,
    updatedAt: entry.sys.updatedAt,
    ...serializedFields,
    ...serializedRenamedFields,
    ...serializedMethods,
    ...serializedAssociations,
    ...serializedAssets,
  };
};

export default serialize;
