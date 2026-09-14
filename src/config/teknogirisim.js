/**
 * Teknogirişim Rozeti künyesi — TEK kaynak (Hakkımızda → Belgelerimiz).
 *
 * Kaynak belge: T.C. Sanayi ve Teknoloji Bakanlığı, Teknogirişim Rozeti — belge sıra
 * no 2026-1747, onay tarihi 14.09.2026. 3 Temmuz 2025 tarih ve 32945 sayılı
 * Teknoloji ve Yenilik Odaklı Girişimlerin Belirlenmesi ve Belgelendirilmesine Dair
 * Yönetmeliğe göre onay tarihinden itibaren 3 yıl geçerlidir.
 *
 * Numara ve tarihler çeviri DEĞİL kimlik verisidir — `locales/*.json`a değil buraya
 * yazılır (marka tescil verilerinin `config/products.js`te durmasıyla aynı kural).
 * Belge SAYFADA görsel olarak gösterilir; PDF indirme bağlantısı YOKTUR (kullanıcı
 * kararı 14.09.2026). Dosya adında numara/tarih YOKTUR (marka belgeleriyle aynı karar).
 * `width`/`height` görselin GERÇEK pikselidir (yatay A4, 150 dpi) — CLS.
 */
export const TEKNOGIRISIM = {
  docNo: '2026-1747',
  term: '14.09.2026 – 14.09.2029',
  // Geçerliliğin son günü (İstanbul günü). Ertesi gün blok çizilmez: süresi dolmuş
  // bir rozeti göstermek yanıltıcı bir beyan olurdu.
  validUntil: '2029-09-14',
  image: '/teknogirisim-rozeti.jpg',
  width: 1754,
  height: 1240
};

// İstanbul günü (YYYY-MM-DD). `toISOString()` gece yarısı civarında UTC'ye kayardı.
const istanbulToday = () =>
  new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Istanbul' }).format(new Date());

export const isTeknogirisimValid = () => istanbulToday() <= TEKNOGIRISIM.validUntil;
