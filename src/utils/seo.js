/**
 * Rota bazlı SEO etiketleri.
 *
 * Bu bir SPA: tek bir `public/index.html` var ve tüm rotalar onu kullanıyor.
 * Dolayısıyla başlık, açıklama ve özellikle `<link rel="canonical">` etiketleri
 * sabit kalırsa /products, /about ve /contact sayfalarının hepsi ana sayfanın
 * kopyası olduğunu beyan eder — Google da onları dizine almaz. Site haritasına
 * URL eklemek tek başına bunu çözmez; canonical'ın sayfayla birlikte değişmesi
 * gerekir.
 *
 * Etiketler React ağacı yerine doğrudan DOM üzerinde güncelleniyor: index.html
 * içinde zaten bir title/description/canonical var, React 19'un metadata
 * yükseltmesi bunları silmediği için sayfa başına iki kopya oluşurdu.
 *
 * Kullanım (sayfa bileşeninin en üstünde):
 *   usePageSeo({ titleKey: 'seo.products.title', descriptionKey: 'seo.products.description', path: '/products' });
 */
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SITE_URL = (process.env.REACT_APP_WEBSITE_URL || 'https://arkaya.com.tr').replace(/\/+$/, '');

/** Ana sayfada `/` kalsın, alt sayfalarda sondaki eğik çizgi olmasın — sitemap.xml ile birebir aynı. */
export const canonicalUrl = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(url) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

export function usePageSeo({ titleKey, descriptionKey, path, noindex = false }) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = t(titleKey);
    const description = t(descriptionKey);
    const url = canonicalUrl(path);

    document.title = title;
    document.documentElement.lang = i18n.resolvedLanguage || 'tr';

    upsertCanonical(url);
    upsertMeta('name', 'description', description);
    // Her sayfada yazılıyor: 404'ten normal bir sayfaya geçildiğinde
    // "noindex" etiketinin geride kalmaması için.
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);

    upsertMeta('property', 'twitter:title', title);
    upsertMeta('property', 'twitter:description', description);
    upsertMeta('property', 'twitter:url', url);
  }, [t, i18n.resolvedLanguage, titleKey, descriptionKey, path, noindex]);
}
