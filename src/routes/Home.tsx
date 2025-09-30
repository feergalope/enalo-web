import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { SEO } from '../components/SEO/SEO';
import { Hero } from '../components/Hero/Hero';
import { Section } from '../components/Section/Section';
import { FeatureCards } from '../components/FeatureCards/FeatureCards';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { FAQ } from '../components/FAQ/FAQ';
import { theme } from '../styles/theme';
import { trackPageView } from '../lib/analytics';
import productsData from '../data/products.json';

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.space.xl};
  margin-top: ${theme.space.xxxl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.lg};
  }
`;

const BrandValues = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.space.xl};
  margin-top: ${theme.space.xxxl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.lg};
  }
`;

const BrandValue = styled(motion.div)`
  text-align: center;
  padding: ${theme.space.lg};
`;

const ValueIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${theme.colors.softBeige};
  border-radius: ${theme.radius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.space.md};
  font-size: ${theme.fonts.sizes.lg};
  color: ${theme.colors.olive};
`;

const ValueText = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fonts.sizes.sm};
  font-weight: ${theme.fonts.weights.medium};
  margin: 0;
`;

const BadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.space.md};
  margin-top: ${theme.space.xl};
  flex-wrap: wrap;
`;

const Badge = styled.span`
  background: ${theme.colors.olive};
  color: ${theme.colors.white};
  padding: ${theme.space.sm} ${theme.space.md};
  border-radius: ${theme.radius.sm};
  font-size: ${theme.fonts.sizes.sm};
  font-weight: ${theme.fonts.weights.medium};
`;

export const Home: React.FC = () => {
  const { t } = useTranslations();

  React.useEffect(() => {
    trackPageView('/');
  }, []);

  const brandValues = [
    { key: 'mediterranean', icon: '🌊' },
    { key: 'minimal', icon: '✨' },
    { key: 'clean', icon: '🧼' },
  ];

  return (
    <>
      <SEO />
      <Hero />
      
      <Section id="beneficios" background="beige">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('about.title')}</h2>
          <p>{t('about.subtitle')}</p>
          <FeatureCards />
        </motion.div>
      </Section>
      
      <Section background="softBeige">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('products.title')}</h2>
          <p>{t('products.subtitle')}</p>
          <ProductsGrid>
            {productsData.products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </ProductsGrid>
        </motion.div>
      </Section>
      
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('brand.title')}</h2>
          <p>{t('brand.subtitle')}</p>
          <BrandValues>
            {brandValues.map((value, index) => (
              <BrandValue
                key={value.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueText>{t(`brand.values.${value.key}`)}</ValueText>
              </BrandValue>
            ))}
          </BrandValues>
          <BadgesContainer>
            <Badge>{t('brand.badges.spain')}</Badge>
            <Badge>{t('brand.badges.eur')}</Badge>
            <Badge>{t('brand.badges.responsible')}</Badge>
          </BadgesContainer>
        </motion.div>
      </Section>
      
      <Section background="beige">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('faq.title')}</h2>
          <FAQ />
        </motion.div>
      </Section>
    </>
  );
};
