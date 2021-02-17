/**
 * @param {('de'|'en')} locale Locale from Nuxt
 */
export const getContentfulLocale = (locale) => {
  switch (locale) {
    case 'de': return 'de-DE';
    case 'en': return 'en-US';
    default: throw new Error(`Unexpected i18n locale '${locale}'`);
  }
};

/**
 * @param {('de'|'en')} locale Locale from Nuxt
 */
export const getOtherLocale = (locale) => {
  switch (locale) {
    case 'de': return 'en-US';
    case 'en': return 'de-DE';
    default: throw new Error(`Unexpected i18n locale '${locale}'`);
  }
};

/**
 * @type {['de', 'en']}
 */
export const AVAILABLE_LOCALES = ['de', 'en'];

/**
 * @param {string} fieldName Name of the field to be translated
 * @param {('de'|'en')} locale Locale from Nuxt
 */
export const translateField = (fieldName, entry, locale) => {
  const field = entry.fields[fieldName];
  if (!field) return null;
  const contentfulLocale = getContentfulLocale(locale);
  const otherContentfulLocale = getOtherLocale(locale);
  return field[contentfulLocale] || field[otherContentfulLocale];
};

/**
 * @returns {string}
 */
export const getContentType = (entry) => {
  if (!entry.sys.contentType) {
    return null;
  }

  return entry.sys.contentType.sys.id;
};

/**
 * @param {string[]} fields Contentful fields to be serialized
 * @param {('de'|'en')} locale Locale from Nuxt
 */
export const serializeFields = (fields, entry, locale) => {
  if (!fields) return {};

  return fields.reduce(
    (previous, fieldName) => ({
      ...previous,
      [fieldName]: translateField(fieldName, entry, locale),
    }),
    {},
  );
};

/**
 * @param {Object.<string, string>} renamedFields Fields to be renamed and serialized
 * The key is the new name, the value the old name.
 * @param {('de'|'en')} locale Locale from Nuxt
 */
export const serializeRenamedFields = (renamedFields, entry, locale) => {
  if (!renamedFields) return {};

  return Object.entries(renamedFields).reduce(
    (previous, field) => ({
      ...previous,
      [field[0]]: translateField(field[1], entry, locale),
    }),
    {},
  );
};

/**
 * @param {Object.<string, (entry, locale) => string>} methods
 * @param {('de'|'en')} locale Locale from Nuxt
 */
export const serializeMethods = (methods, entry, locale) => {
  if (!methods) return {};

  return Object.entries(methods).reduce(
    (previous, method) => ({
      ...previous,
      [method[0]]: method[1](entry, locale),
    }),
    {},
  );
};

/**
 * @param {string} associationName
 * @param {('de'|'en')} locale Locale from Nuxt
 * @param {(entry, locale, depth) => any} serialize
 * @param {number} depth
 */
const serializeAssociation = (associationName, entry, locale, serialize, depth) => {
  const translated = translateField(associationName, entry, locale);

  // if no association is provided return an empty result
  if (translated === null) return [];

  if (Array.isArray(translated)) {
    return translated.filter((t) => t.sys.type === 'Entry').map((t) => serialize(t, locale, depth - 1));
  }
  return serialize(translated, locale, depth - 1);
};

/**
 * @param {string[]} associationNames
 * @param {('de'|'en')} locale Locale from Nuxt
 * @param {(entry, locale, depth) => any} serialize
 * @param {number} depth
 */
export const serializeAssociations = (associationNames, entry, locale, serialize, depth) => {
  // Content types referencing each other (e.g. blogPost -> blogCategory -> featuredBlogPost),
  // will lead to infinite recursion. To break out, we check the depth parameter.
  if (depth < 1) return {};
  if (!associationNames) return {};
  const reducer = (previous, associationName) => ({
    ...previous,
    [associationName]: serializeAssociation(associationName, entry, locale, serialize, depth),
  });
  return associationNames.reduce(reducer, {});
};

/**
 * @typedef {{ src: string, alt: string, description: string }} Asset
 */

/**
 * @typedef {Object} File
 * @property {string} url
 */

/**
 * @typedef {Object} AssetEntry
 * @property {Object} fields
 * @property {{ 'de-DE': { url: string }, 'en-US': { url: string } }} fields.file
 * @property {{ 'de-DE': string, 'en-US': string }} fields.title
 * @property {{ 'de-DE': string, 'en-US': string }} fields.description
 */

/**
 * @param {AssetEntry} assetField
 * @param {('de'|'en')} locale Locale from Nuxt
 * @returns {Asset}
 */
export const serializeAsset = (assetField, locale) => ({
  src: translateField('file', assetField, locale).url,
  alt: translateField('title', assetField, locale),
  description: translateField('description', assetField, locale),
});

/**
 * @param {string[]} assetNames
 * @param {('de'|'en')} locale Locale from Nuxt
 * @returns {Object.<string, Asset>}
 */
export const serializeAssets = (assetNames, entry, locale) => {
  if (!assetNames) return {};
  const reducer = /** @param {string} assetName */ (previous, assetName) => ({
    ...previous,
    [assetName]: serializeAsset(translateField(assetName, entry, locale), locale),
  });
  return assetNames.reduce(reducer, {});
};

/**
 * @param {{ 'de-DE': string, 'en-US': string }} field
 */
export const slugByLocale = (field) => {
  const german = field['de-DE'];
  const english = field['en-US'];

  return {
    de: german || english,
    en: english || german,
  };
};

export const slugRouteParams = (field) => {
  const german = field['de-DE'];
  const english = field['en-US'];

  return {
    de: {
      slug: german || english,
    },
    en: {
      slug: english || german,
    },
  };
};
