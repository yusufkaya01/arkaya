/**
 * Gerçek 404 sayfası.
 *
 * Önceden bilinmeyen her adres `<Navigate to="/" replace />` ile ana sayfaya
 * yönlendiriliyordu. Kullanıcı için idare eder ama arama motoru için "soft 404"
 * demek: sunucu 200 döner, içerik ana sayfadır, sonuçta uydurma adresler
 * (yanlış yazılmış bağlantılar, bot taramaları) dizine girmeye aday olur ve
 * Search Console "Yumuşak 404" hatası açar. Burada içerik açıkça "sayfa yok"
 * diyor ve `noindex` ile işaretleniyor.
 */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { usePageSeo } from '../utils/seo';

const PageContainer = styled.div`
  padding-top: 80px;
`;

const Wrapper = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${theme.spacing['5xl']} ${theme.spacing.lg};
`;

const Code = styled.p`
  font-size: ${theme.fontSizes['6xl']};
  font-weight: 700;
  line-height: 1;
  color: ${theme.colors.primary};
  margin: 0 0 ${theme.spacing.md};
`;

const Text = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.lg};
  max-width: 560px;
  margin: 0 auto ${theme.spacing['2xl']};
  line-height: 1.6;
`;

const Links = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
`;

const Action = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 160px;
  background: ${props => (props.$variant === 'secondary' ? 'transparent' : theme.colors.primary)};
  color: ${props => (props.$variant === 'secondary' ? theme.colors.primary : theme.colors.text.light)};
  border: 2px solid ${theme.colors.primary};

  &:hover {
    background: ${props => (props.$variant === 'secondary' ? theme.colors.primary : 'transparent')};
    color: ${props => (props.$variant === 'secondary' ? theme.colors.text.light : theme.colors.primary)};
  }
`;

export const NotFound = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  usePageSeo({
    titleKey: 'seo.notFound.title',
    descriptionKey: 'seo.notFound.description',
    path: pathname,
    noindex: true
  });

  return (
    <PageContainer>
      <Wrapper>
        <Code>404</Code>
        <h1>{t('notFound.title')}</h1>
        <Text>{t('notFound.text')}</Text>
        <Links>
          <Action to="/">{t('notFound.home')}</Action>
          <Action to="/products" $variant="secondary">{t('notFound.products')}</Action>
          <Action to="/contact" $variant="secondary">{t('notFound.contact')}</Action>
        </Links>
      </Wrapper>
    </PageContainer>
  );
};

export default NotFound;
