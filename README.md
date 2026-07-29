# Arkaya Website

Arkaya Arge Yazılım İnşaat Ticaret Limited Şirketi'nin kurumsal web sitesi. React ve JavaScript ile geliştirilmiştir.

Site, şirketin yazılım ürünlerini tanıtır: iş sağlığı ve güvenliği sektörü için geliştirdiğimiz **Katip Otomasyonu** ve **İSG Asistan**, ve satış bayisi olduğumuz ağ güvenliği çözümü **XLog**.

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
REACT_APP_ADDRESS=Isparta, Türkiye
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
- **XLog** — Ağ Güvenlik ve Loglama Sistemi (satış bayisiyiz)

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

## License

Private project for Arkaya Arge Yazılım İnşaat Ticaret Limited Şirketi.
