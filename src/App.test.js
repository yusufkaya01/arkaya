import tr from './locales/tr.json';
import en from './locales/en.json';
import { PRODUCTS } from './config/products';

/** İç içe sözlüğü 'a.b.c' / 'a.b[]' biçiminde düz anahtar kümesine çevirir. */
const flatten = (value, prefix = '') => {
  if (Array.isArray(value)) {
    return value.reduce(
      (acc, item) => new Set([...acc, ...flatten(item, `${prefix}[]`)]),
      new Set([`${prefix}[]`])
    );
  }
  if (value && typeof value === 'object') {
    return Object.entries(value).reduce(
      (acc, [key, val]) =>
        new Set([...acc, ...flatten(val, prefix ? `${prefix}.${key}` : key)]),
      new Set()
    );
  }
  return new Set([prefix]);
};

const get = (obj, path) =>
  path.split('.').reduce((cur, part) => (cur == null ? undefined : cur[part]), obj);

test('tr ve en çevirileri aynı yapıya sahip', () => {
  const trKeys = flatten(tr);
  const enKeys = flatten(en);

  expect([...trKeys].filter((k) => !enKeys.has(k))).toEqual([]);
  expect([...enKeys].filter((k) => !trKeys.has(k))).toEqual([]);
});

test('her ürünün iki dilde de metinleri var', () => {
  PRODUCTS.forEach((product) => {
    const featureKey = product.detailedFeatures ? 'featuresDetailed' : 'features';
    const required = ['name', 'tagline', 'short', 'description', featureKey];
    if (!product.own) required.push('resellerNote');

    [['tr', tr], ['en', en]].forEach(([lang, dict]) => {
      required.forEach((field) => {
        const value = get(dict, `products.${product.key}.${field}`);
        expect(`${lang}:${product.key}.${field}:${value === undefined}`).toBe(
          `${lang}:${product.key}.${field}:false`
        );
      });
    });
  });
});
