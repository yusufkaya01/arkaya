/**
 * Ürün kataloğu — Ana Sayfa ve Ürünler sayfası aynı kaynağı kullanır.
 * Metinler i18n'de (`products.<key>`), görsel/adres bilgisi burada.
 *
 * `own`: ürünü biz geliştiriyoruz. `false` ise satış bayisiyiz (XLog Firewall) —
 * yalnızca bu durumda "Satış Bayisi" rozeti ve bayilik notu gösterilir. Kendi
 * ürünlerimizde rozet YOK (kullanıcı kararı).
 *
 * `detailedFeatures`: özellikler başlık+açıklama kartı olarak gösterilir
 * (`featuresDetailed`); aksi hâlde düz madde listesi (`features`).
 *
 * `logoWidth` / `logoHeight`: görselin GERÇEK piksel ölçüsü. `<img>` etiketine
 * yazılıyor ki tarayıcı yer ayırabilsin; olmazsa logo yüklenirken kart zıplar
 * (Core Web Vitals'ta CLS puanı). Logoyu değiştirirsen bu iki değeri de güncelle.
 *
 * `etbisRegistered`: ürünün SATIŞ SİTESİ Ticaret Bakanlığı ETBİS'e kayıtlı
 * (Eylül 2026: katipotomasyonu.com ve www.isgasistan.tr). Kayıt ürüne/siteye
 * aittir, arkaya.com.tr'ye değil — bu site e-ticaret yapmadığı için ETBİS'e
 * kayıtlı DEĞİLDİR ve öyle yazılmaz. Küçük rozet yalnız işaretli ürünlerde
 * çıkar; bir kayıt askıya alınırsa bayrağı kaldır. Karekod/rozet programı
 * 02.09.2025'te sonlandırıldı; doğrulama yalnız kamuya açık sorgulama sayfasından.
 *
 * `trademark`: ürün adı Türk Patent ve Marka Kurumu nezdinde TESCİLLİ
 * (14.09.2026). Yalnız KENDİ ürünlerimizde bulunur — bayisi olduğumuz XLog'un
 * markası bize ait değildir ve öyle gösterilemez. Belge SAYFADA GÖSTERİLİR
 * (Ürünler → ilgili ürün bölümü; ikisi birden Hakkımızda → Belgelerimiz'de de,
 * AYNI `components/Certificate.js` bileşeniyle). PDF indirme bağlantısı YOKTUR
 * ve PDF `public/`e konmaz (kullanıcı kararı 14.09.2026): ziyaretçinin belgeyi
 * indirmesine gerek yok.
 * Dosya adlarında numara/tarih YOKTUR (kullanıcı kararı): tescil numarası bir
 * tarih gibi okunuyordu ve marka yenilendiğinde adres de değişirdi.
 * `width`/`height` görselin GERÇEK pikselidir — logolardaki kuralla aynı, CLS.
 */
export const ETBIS_QUERY_URL = 'https://etbis.ticaret.gov.tr/tr/SiteSorgulama';

export const PRODUCTS = [
  {
    key: 'katip',
    logo: '/katip-otomasyonu-lockup.png',
    logoWidth: 520,
    logoHeight: 519,
    url: process.env.REACT_APP_KATIP_URL || 'https://www.katipotomasyonu.com/',
    accent: '#A80B33',
    own: true,
    etbisRegistered: true,
    trademark: {
      no: '2026 009778',
      classes: '09, 42',
      term: '24.01.2026 – 24.01.2036',
      image: '/marka-tescil-belgesi-katip-otomasyonu.jpg',
      width: 1240,
      height: 1755
    }
  },
  {
    key: 'isgAsistan',
    logo: '/isg-asistan-logo.png',
    logoWidth: 480,
    logoHeight: 256,
    url: process.env.REACT_APP_ISG_ASISTAN_URL || 'https://isgasistan.tr',
    accent: '#0E4361',
    own: true,
    etbisRegistered: true,
    trademark: {
      no: '2026 048642',
      classes: '09, 42',
      term: '15.04.2026 – 15.04.2036',
      image: '/marka-tescil-belgesi-isg-asistan.jpg',
      width: 1240,
      height: 1755
    }
  },
  {
    key: 'xlog',
    logo: '/xlog-logo.png',
    logoWidth: 400,
    logoHeight: 93,
    url: process.env.REACT_APP_XLOG_URL || 'https://xlog.com.tr/',
    accent: '#E30613',
    own: false,
    detailedFeatures: true
  }
];
