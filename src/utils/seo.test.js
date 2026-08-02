/**
 * usePageSeo, site haritasındaki URL'lerin dizine girebilmesi için gereken tek
 * şeyi yapıyor mu: canonical / başlık / açıklama rotaya göre değişiyor mu?
 * (Sabit canonical, alt sayfaların hepsini ana sayfanın kopyası ilan eder.)
 */
import { render } from '@testing-library/react';
import i18n from '../i18n';
import { usePageSeo } from './seo';

const Probe = (props) => {
  usePageSeo(props);
  return null;
};

const canonical = () => document.querySelector('link[rel="canonical"]').getAttribute('href');
const meta = (attr, key) => document.head.querySelector(`meta[${attr}="${key}"]`).getAttribute('content');

beforeAll(() => i18n.changeLanguage('tr'));

test('alt sayfa kendi canonical/başlık/açıklamasını yazar', () => {
  render(
    <Probe titleKey="seo.products.title" descriptionKey="seo.products.description" path="/products" />
  );

  expect(canonical()).toBe('https://arkaya.com.tr/products');
  expect(document.title).toBe(i18n.t('seo.products.title'));
  expect(meta('name', 'description')).toBe(i18n.t('seo.products.description'));
  expect(meta('property', 'og:url')).toBe('https://arkaya.com.tr/products');
});

test('ana sayfada canonical sondaki eğik çizgiyle biter', () => {
  render(<Probe titleKey="seo.home.title" descriptionKey="seo.home.description" path="/" />);

  expect(canonical()).toBe('https://arkaya.com.tr/');
  expect(document.title).toBe(i18n.t('seo.home.title'));
});

test('404 sayfası noindex, normal sayfaya dönünce etiket temizlenir', () => {
  render(
    <Probe titleKey="seo.notFound.title" descriptionKey="seo.notFound.description" path="/yok-boyle-bir-sayfa" noindex />
  );
  expect(meta('name', 'robots')).toBe('noindex, follow');

  render(<Probe titleKey="seo.home.title" descriptionKey="seo.home.description" path="/" />);
  expect(meta('name', 'robots')).toBe('index, follow');
});

test('canonical etiketi çoğaltılmaz — rota değişince aynı etiket güncellenir', () => {
  render(<Probe titleKey="seo.about.title" descriptionKey="seo.about.description" path="/about" />);
  render(<Probe titleKey="seo.contact.title" descriptionKey="seo.contact.description" path="/contact" />);

  expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
  expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1);
  expect(canonical()).toBe('https://arkaya.com.tr/contact');
});
