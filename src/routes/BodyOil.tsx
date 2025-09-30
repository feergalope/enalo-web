import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { SEO } from '../components/SEO/SEO';
import { Section } from '../components/Section/Section';
import { OptimizedImage } from '../components/OptimizedImage';
import { theme } from '../styles/theme';
import { buttonSecondary } from '../styles/mixins';
import { trackPageView } from '../lib/analytics';
import { productImages } from '../assets/images/products';

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.space.xxxl};
  align-items: start;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.xl};
  }
`;

const ProductInfo = styled.div`
  h1 {
    font-size: ${theme.fonts.sizes.xxxxl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.lg};
    line-height: 1.2;
  }
  
  h2 {
    font-size: ${theme.fonts.sizes.xl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.olive};
    margin-bottom: ${theme.space.lg};
  }
  
  p {
    color: ${theme.colors.textSecondary};
    font-size: ${theme.fonts.sizes.md};
    line-height: 1.7;
    margin-bottom: ${theme.space.lg};
  }
`;

const ProductImage = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto ${theme.space.xxxl};
  border-radius: ${theme.radius.lg};
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const CTAButton = styled(Link)`
  ${buttonSecondary}
  display: inline-block;
  margin-top: ${theme.space.lg};
`;

export const BodyOil: React.FC = () => {
  const { t } = useTranslations();

  useEffect(() => {
    trackPageView('/body-oil');
  }, []);

  return (
    <>
      <SEO 
        title={t('bodyOil.seo.title')}
        description={t('bodyOil.seo.description')}
      />
      
      <Section>
        <ProductContainer>
          <ProductInfo>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t('bodyOil.title')}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              dangerouslySetInnerHTML={{ __html: t('bodyOil.subtitle') }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              dangerouslySetInnerHTML={{ __html: t('bodyOil.description1') }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CTAButton to="/products">
                {t('bodyOil.cta')}
              </CTAButton>
            </motion.div>
          </ProductInfo>
          
          <ProductImage>
            <OptimizedImage
              src={productImages['body-oil']}
              alt={t('bodyOil.title')}
            />
          </ProductImage>
        </ProductContainer>
      </Section>
    </>
  );
};
