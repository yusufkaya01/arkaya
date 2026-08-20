# Arkaya Website

Arkaya Arge Yazılım İnşaat Ticaret Limited Şirketi'nin kurumsal web sitesi. React ve JavaScript ile geliştirilmiştir.

Site, şirketin yazılım ürünlerini tanıtır: iş sağlığı ve güvenliği sektörü için geliştirdiğimiz **Katip Otomasyonu** ve **İSG Asistan**, ve satış bayisi olduğumuz ağ güvenliği çözümü **XLog Firewall**.

## Features

- 🌍 **Bilingual Support**: Turkish and English language support with automatic browser detection
- 📱 **Responsive Design**: Optimized for all device sizes
- ⚡ **Modern Technologies**: Built with React 19, JavaScript, Styled Components
- 🎨 **Beautiful Animations**: Smooth animations with Framer Motion
- 🚀 **AWS Amplify Ready**: Configured for easy deployment on AWS Amplify
- 📈 **SEO Optimized**: Meta tags, Open Graph, and JSON-LD structured data

## Tech Stack

- **Frontend**: React 19, JavaScript
- **Styling**: Styled Components, Custom Theme System
- **Routing**: React Router
- **Internationalization**: react-i18next
- **Animations**: Framer Motion
- **Deployment**: AWS Amplify

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

## Environment Variables

Update the `.env` file with your company information:

```bash
# Company Information
REACT_APP_COMPANY_NAME=Arkaya Arge Yazılım İnşaat Ticaret Limited Şirketi
REACT_APP_COMPANY_SHORT_NAME=Arkaya
REACT_APP_WEBSITE_URL=https://arkaya.com.tr

# Ürün adresleri (src/config/products.js bu değerleri okur)
REACT_APP_KATIP_URL=https://www.katipotomasyonu.com/
REACT_APP_ISG_ASISTAN_URL=https://isgasistan.tr
REACT_APP_XLOG_URL=https://xlog.com.tr/

# Contact Information
REACT_APP_PHONE=+90 501 544 85 44
REACT_APP_WHATSAPP=905015448544
REACT_APP_EMAIL=info@arkaya.com.tr
REACT_APP_ADDRESS=Göller Bölgesi Teknokenti, Süleyman Demirel Üniversitesi, Doğu Yerleşke, Çünür Mh. 102. Cd. No: 252, Giriş Kat, Ofis No: 102, Merkez / ISPARTA
```

## Deployment to AWS Amplify

1. **Connect Repository**: Connect your GitHub repository to AWS Amplify
2. **Environment Variables**: Set environment variables in Amplify Console
3. **Build Settings**: The `amplify.yml` file is already configured
4. **Deploy**: Amplify will automatically build and deploy your app

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js
│   └── Footer.js
├── config/
│   └── products.js     # Ürün kataloğu (logo, adres, renk, own/bayi bayrağı)
├── pages/              # Page components
│   ├── Home.js
│   ├── Products.js
│   ├── About.js
│   └── Contact.js
├── styles/             # Styling and themes
│   ├── theme.js
│   └── GlobalStyles.js
├── locales/            # Translation files
│   ├── en.json
│   └── tr.json
└── i18n.js            # Internationalization config
```

## Sayfalar

### 🏠 Ana Sayfa
- Şirket tanıtımı (hero)
- Üç ürünün kart görünümü
- "Neden Arkaya?" bölümü ve iletişim çağrısı

### 🔧 Ürünler
Her ürün için logo, konumlandırma, açıklama, özellik listesi ve ürün sitesine bağlantı:
- **Katip Otomasyonu** — İSG-KATİP için Chrome uzantısı (kendi ürünümüz)
- **İSG Asistan** — OSGB'ler için bulut tabanlı yönetim platformu (kendi ürünümüz)
- **XLog Firewall** — UTM güvenlik duvarı ve 5651 loglama (satış bayisiyiz)

`/products#katip`, `/products#isgAsistan`, `/products#xlog` bağlantılarıyla ilgili ürüne doğrudan inilebilir.

### 📋 Hakkımızda
- Şirket bilgisi, misyon, vizyon, değerler
- Sayılarla Arkaya

### 📞 İletişim
- İletişim formu, iletişim bilgileri ve sosyal medya bağlantıları

## Ürün ekleme / güncelleme

1. Logoyu `public/` altına koyun.
2. `src/config/products.js` içine kaydı ekleyin (`key`, `logo`, `url`, `accent`, `own`).
3. `src/locales/tr.json` **ve** `src/locales/en.json` içine `products.<key>` metinlerini ekleyin
   (`name`, `tagline`, `short`, `description`, `features` veya `featuresDetailed`).

Ana Sayfa ve Ürünler sayfası aynı kaynağı kullandığı için başka bir değişiklik gerekmez.

## SEO — yeni sayfa eklerken

Site tek bir `public/index.html` üzerinden çalışan bir SPA. Bu yüzden bir rota
eklerken **üç yerin birden** güncellenmesi gerekir:

1. `src/App.js` — rota tanımı.
2. `public/sitemap.txt` **ve** `public/sitemap.xml` — yeni URL. (Yönlendirme
   rotaları buraya girmez.) İki dosyanın da olmasının sebebi aşağıda.
3. Sayfa bileşeninin en üstünde `usePageSeo({ titleKey, descriptionKey, path })`
   + `src/locales/tr.json` **ve** `en.json` içine `seo.<sayfa>.title|description`.

Üçüncü adım atlanırsa sayfa, `index.html`'deki sabit canonical yüzünden ana
sayfanın kopyası olarak beyan edilir ve Google dizine almaz — site haritasında
yer alması bunu değiştirmez. `src/utils/seo.test.js` bu davranışı test eder.

**Yapısal veri (JSON-LD, `public/index.html`):** hiçbir kalemi `"@type": "Product"`
yapmayın. Google, Product düğümlerinde `offers` / `review` / `aggregateRating`
alanlarından birini zorunlu tutar; sitede fiyat ve puan yayınlamadığımız için
bunlar dürüstçe doldurulamaz ve Search Console kritik hata verir. Fiyat
yayınlanana kadar doğru tip `Service` veya `SoftwareApplication`.

Diğer kalıcı kurallar:

- **Varsayılan dil Türkçe.** `src/i18n.js` içinde dil algılama sırası bilerek
  `['localStorage', 'cookie']`; `navigator` listede yok. Googlebot siteyi ABD'den
  `en-US` ile render ettiği için tarayıcı dili dinlenirse arama motoru sitenin
  İngilizce sürümünü dizine alır.
- **Paylaşım görseli** `public/og-image.png` (1200×630) ve `index.html` içinde
  **mutlak** adresle veriliyor. Göreli adres (`/og-image.png`) WhatsApp, LinkedIn
  ve Facebook önizlemelerinde çalışmaz.
- **Bilinmeyen adres ana sayfaya yönlendirilmez** — `src/pages/NotFound.js`
  gösterilir ve kendini `noindex` ile işaretler (soft 404 önlemi).
- **`<img>` etiketlerine gerçek `width`/`height` yazın** (CLS için). Dikkat: bu
  öznitelikler CSS'e sunum ipucu olarak sızar; görselin CSS'inde yalnızca
  `height` varsa mutlaka `width: auto` da ekleyin, yoksa görsel gerçek piksel
  genişliğine esner.

### Neden iki site haritası var (Amplify rewrite tuzağı)

Amplify'ın varsayılan SPA kuralı, uzantısı **muafiyet listesinde olmayan** her
isteği `/index.html`'e 200 ile yeniden yazar. Listede `css|gif|ico|jpg|js|png|
txt|svg|woff|woff2|ttf|map|json` var — **`xml` yok**. Sonuç:
`https://arkaya.com.tr/sitemap.xml` `content-type: text/html` ile ana sayfayı
döndürür ve Google "site haritası okunamadı" der. `robots.txt` çalışır, çünkü
`txt` listede.

Bu yüzden yayında olan `sitemap.txt` (düz metin site haritası — Google destekler,
her satırda bir URL, yorum satırı **yasak**). Kalıcı çözüm konsolda:

**Hosting → Rewrites and redirects** → mevcut SPA kuralını düzenleyip listeye
`xml` ekleyin (hazır girmişken `webp`, `webmanifest` de faydalı):

```
</^[^.]+$|\.(?!(css|gif|ico|jpg|jpeg|js|png|txt|svg|webp|woff|woff2|ttf|map|json|xml|webmanifest)$)([^.]+$)/>
```

Hedef `/index.html`, tip **200 (Rewrite)**. Listeyi konsoldakinin üzerine ekleyin,
körlemesine yapıştırmayın. Sonrasında `robots.txt` içindeki `sitemap.xml`
satırının yorumunu kaldırabilirsiniz.

Doğrulama (ikisi de kendi içerik tipiyle dönmeli):

```bash
curl -sI https://arkaya.com.tr/sitemap.txt | grep -i content-type   # text/plain
curl -sI https://arkaya.com.tr/sitemap.xml | grep -i content-type   # text/xml
```

## Site ikonları (favicon)

Tümü `public/only-logo.png`'den üretildi. Google arama sonuçlarında ve tarayıcı
sekmesinde görünen ikon budur — CRA'nın varsayılan React `favicon.ico`'su
buradan temizlendi. Logo değişirse hepsini yeniden üretin:

```bash
magick public/only-logo.png -trim +repage -resize 448x448 \
  -background none -gravity center -extent 512x512 /tmp/mark-512.png
magick /tmp/mark-512.png -fill white -colorize 100 /tmp/mark-512-white.png

magick /tmp/mark-512.png -define icon:auto-resize=48,32,16 public/favicon.ico
magick /tmp/mark-512.png -resize 156x156 -background white -alpha remove \
  -gravity center -extent 180x180 public/apple-touch-icon.png
magick /tmp/mark-512.png -resize 166x166 -background white -alpha remove \
  -gravity center -extent 192x192 public/logo192.png
magick /tmp/mark-512.png -resize 442x442 -background white -alpha remove \
  -gravity center -extent 512x512 public/logo512.png
```

`public/favicon.svg` iki base64 PNG (siyah + beyaz) içerir ve
`prefers-color-scheme: dark` sorgusuyla aralarında geçiş yapar — koyu temalı
tarayıcılarda siyah logo görünmediği için. Bu dosyayı yeniden üretmek için iki
PNG'yi 128px'e küçültüp base64'e çevirin ve dosyadaki `href` değerlerini
değiştirin; `favicon.ico` (tek renk, siyah) SVG desteklemeyen istemciler için
yedektir.

## License

Private project for Arkaya Arge Yazılım İnşaat Ticaret Limited Şirketi.
