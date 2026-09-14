import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { TEKNOGIRISIM, isTeknogirisimValid } from '../config/teknogirisim';

/*
 * RESMÎ BELGE BLOĞU — belgenin KENDİSİ solda görsel olarak, künyesi sağda; dar
 * ekranda alt alta. Ürünler (marka tescilleri) ve Hakkımızda → Belgelerimiz
 * (Teknogirişim Rozeti + iki ürünün marka tescili) AYNI bileşeni çizer;
 * iki sayfada ayrı ayrı yazılsaydı biri güncellenip öteki unutulurdu.
 *
 * Belge SAYFADA görünür, bağlantının arkasında değil (kullanıcı kararı
 * 14.09.2026): "tescillidir / belgelidir" diyen bir cümlenin ispatı için
 * kullanıcıyı yeni sekmeye yollamak, ispatı hiç görmeyen kullanıcı üretiyordu.
 * PDF İNDİRME BAĞLANTISI YOKTUR ve PDF `public/`e konmaz (kullanıcı kararı
 * 14.09.2026): ziyaretçinin belgeyi indirmesine gerek yok, görsel belgenin
 * kendisidir.
 */

/* Belge sütunu `$figureWidth` ile sınırlanır: dikey A4 (marka tescil belgesi)
   için 340px yeter ve ürün bölümünün geri kalanını ezmez; yatay A4 (Teknogirişim
   Rozeti) o genişlikte okunmaz, daha geniş verilir.

   Hizalama "start" DEĞİL "center": künye metni belgeden çok daha kısa, üste
   hizalandığında sağ sütunun altında yarım ekran boşluk kalıyor ve bölüm yarım
   kalmış gibi okunuyordu (ölçüldü).

   NOT — styled-components şablon dizgesi: CSS yorumunun İÇİNDE ters tırnak
   KULLANILMAZ, dizgeyi orada bitirir ve derleme "Missing semicolon" der. */
const Block = styled.div`
  display: grid;
  grid-template-columns: minmax(0, ${({ $figureWidth }) => $figureWidth || '340px'}) minmax(0, 1fr);
  gap: ${theme.spacing['2xl']};
  align-items: center;
  margin-bottom: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const Figure = styled.figure`
  margin: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    /* Belge taraması her zaman beyaz kâğıttır — zemini açıkça beyaz veriyoruz
       ki yüzey rengi değişse de belge kendi kâğıdında dursun. */
    background: #ffffff;
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.lg};
  }

  figcaption {
    margin-top: ${theme.spacing.sm};
    text-align: center;
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.text.secondary};
    line-height: 1.5;
  }
`;

/* Ürün açıklaması `Description`tır (lg punto, 3rem alt boşluk); bu iki sütunlu
   blokta o ölçüler fazla havalı kalıyor — künye kendi paragraf ölçüsünü alır. */
const Note = styled.p`
  margin: 0 0 ${theme.spacing.lg} 0;
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.md};
  line-height: 1.7;
`;

const Facts = styled.dl`
  margin: 0 0 ${theme.spacing.lg} 0;
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  gap: ${theme.spacing.sm} ${theme.spacing.lg};

  dt {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.sm};
  }

  dd {
    margin: 0;
    color: ${theme.colors.text.primary};
    font-size: ${theme.fontSizes.sm};
    font-weight: 600;
  }
`;

/* Belgelerimiz başlıkları — Ürünler sayfasındaki `BlockTitle` ile aynı ölçü. */
export const CertificateTitle = styled.h3`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.xl};
  margin-bottom: ${theme.spacing.lg};
`;

export const Certificate = ({ image, width, height, alt, caption, note, facts, figureWidth }) => (
  <Block $figureWidth={figureWidth}>
    <Figure>
      <img src={image} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
      <figcaption>{caption}</figcaption>
    </Figure>
    <div>
      <Note>{note}</Note>
      <Facts>
        {facts.map(([label, value]) => (
          <React.Fragment key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </React.Fragment>
        ))}
      </Facts>
    </div>
  </Block>
);

/* Ürün marka tescili — Ürünler ve Hakkımızda AYNI bloğu çizer. Metinler
   `products.trademark*` anahtarlarından, numara/sınıf/süre `config/products.js`ten. */
export const TrademarkCertificate = ({ productKey, trademark }) => {
  const { t } = useTranslation();
  const name = t(`products.${productKey}.name`);

  return (
    <Certificate
      image={trademark.image}
      width={trademark.width}
      height={trademark.height}
      alt={t('products.trademarkImageAlt', { name })}
      caption={t('products.trademarkCaption')}
      note={t('products.trademarkNote', { name })}
      facts={[
        [t('products.trademarkNo'), trademark.no],
        [t('products.trademarkClasses'), trademark.classes],
        [t('products.trademarkTerm'), trademark.term],
        [t('products.trademarkOwner'), process.env.REACT_APP_COMPANY_NAME]
      ]}
    />
  );
};

/* Teknogirişim Rozeti — şirketin kendi belgesi. Yatay A4 olduğu için belge
   sütunu geniştir. Süresi dolunca başlığıyla birlikte çizilmez. */
export const TeknogirisimCertificate = () => {
  const { t } = useTranslation();

  if (!isTeknogirisimValid()) return null;

  return (
    <>
      <CertificateTitle>{t('about.teknogirisimTitle')}</CertificateTitle>
      <Certificate
        figureWidth="560px"
        image={TEKNOGIRISIM.image}
        width={TEKNOGIRISIM.width}
        height={TEKNOGIRISIM.height}
        alt={t('about.teknogirisimImageAlt')}
        caption={t('about.teknogirisimCaption')}
        note={t('about.teknogirisimNote')}
        facts={[
          [t('about.teknogirisimDocNo'), TEKNOGIRISIM.docNo],
          [t('about.teknogirisimTerm'), TEKNOGIRISIM.term],
          [t('about.teknogirisimHolder'), process.env.REACT_APP_COMPANY_NAME],
          [t('about.teknogirisimIssuer'), t('about.teknogirisimIssuerName')]
        ]}
      />
    </>
  );
};
