/**
 * Ürün kataloğu — Ana Sayfa ve Ürünler sayfası aynı kaynağı kullanır.
 * Metinler i18n'de (`products.<key>`), görsel/adres bilgisi burada.
 *
 * `own`: ürünü biz geliştiriyoruz. `false` ise satış bayisiyiz (XLog) —
 * sayfadaki rozet ve bayilik notu bu bayrağa göre değişir.
 *
 * `detailedFeatures`: özellikler başlık+açıklama kartı olarak gösterilir
 * (`featuresDetailed`); aksi hâlde düz madde listesi (`features`).
 */
export const PRODUCTS = [
  {
    key: 'katip',
    logo: '/katip-otomasyonu-lockup.png',
    url: process.env.REACT_APP_KATIP_URL || 'https://www.katipotomasyonu.com/',
    accent: '#A80B33',
    own: true
  },
  {
    key: 'isgAsistan',
    logo: '/isg-asistan-logo.png',
    url: process.env.REACT_APP_ISG_ASISTAN_URL || 'https://isgasistan.tr',
    accent: '#0E4361',
    own: true
  },
  {
    key: 'xlog',
    logo: '/xlog-logo.png',
    url: process.env.REACT_APP_XLOG_URL || 'https://xlog.com.tr/',
    accent: '#E30613',
    own: false,
    detailedFeatures: true
  }
];
