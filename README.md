# Arkaya Website

Modern, responsive website for Arkaya Arge Yazılım İnşaat Ticaret Limited Şirketi built with React and TypeScript.

## Features

- 🌍 **Bilingual Support**: Turkish and English language support with automatic browser detection
- 📱 **Responsive Design**: Optimized for all device sizes
- ⚡ **Modern Technologies**: Built with React 18, TypeScript, Styled Components
- 🎨 **Beautiful Animations**: Smooth animations with Framer Motion
- 🚀 **AWS Amplify Ready**: Configured for easy deployment on AWS Amplify
- 📈 **SEO Optimized**: Meta tags, Open Graph, and structured data
- 🎯 **Performance Optimized**: Fast loading and optimized assets

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Styled Components, Custom Theme System
- **Routing**: React Router v6
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
REACT_APP_PRODUCT_NAME=Katip Otomasyonu
REACT_APP_PRODUCT_URL=https://www.katipotomasyonu.com/

# Contact Information
REACT_APP_PHONE=+90 501 544 85 44
REACT_APP_WHATSAPP=905015448544
REACT_APP_EMAIL=info@arkaya.com.tr
REACT_APP_ADDRESS=Turkey
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
│   ├── Header.tsx
│   └── Footer.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Products.tsx
│   └── Contact.tsx
├── styles/             # Styling and themes
│   ├── theme.ts
│   └── GlobalStyles.ts
├── locales/            # Translation files
│   ├── en.json
│   └── tr.json
└── i18n.ts            # Internationalization config
```

## Features Overview

### 🏠 Home Page
- Hero section with company introduction
- Services overview
- Featured product (Katip Otomasyonu)
- Call-to-action sections

### 📋 About Page
- Company information
- Mission, vision, and values
- Company statistics

### 🛠️ Services Page
- Software development
- Construction services
- Business automation
- Technology consulting

### 🔧 Products Page
- Katip Otomasyonu detailed information
- Features and benefits
- Technology stack

### 📞 Contact Page
- Contact form
- Company contact information
- Social media links

## License

Private project for Arkaya Arge Yazılım İnşaat Ticaret Limited Şirketi.
