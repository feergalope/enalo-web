import React, { useState, useEffect } from 'react';
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
  gap: ${theme.space.xl};
  margin-top: ${theme.space.xxxl};
  justify-content: center;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-top: ${theme.space.sm};
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
  text-align: justify;
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
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Inicializar directamente con las traducciones
  const translations = {
    aboutTitle: t('about.title'),
    aboutSubtitle: t('about.subtitle'),
    productsTitle: t('products.title'),
    productsSubtitle: t('products.subtitle'),
    brandTitle: t('brand.title'),
    brandSubtitle: t('brand.subtitle'),
    faqTitle: t('faq.title'),
    brandValues: {
      mediterranean: t('brand.values.mediterranean'),
      minimal: t('brand.values.minimal'),
      clean: t('brand.values.clean')
    },
    badges: {
      spain: t('brand.badges.spain'),
      eur: t('brand.badges.eur'),
      responsible: t('brand.badges.responsible')
    }
  };

  useEffect(() => {
    setIsLoaded(true);
    trackPageView('/');
  }, []);

  const brandValues = [
    { key: 'mediterranean', icon: '🌊' },
    { key: 'minimal', icon: '✨' },
    { key: 'clean', icon: '🧼' },
  ];

  if (!isLoaded) {
    return null;
  }

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
          <h2>{translations.aboutTitle}</h2>
          <p>{translations.aboutSubtitle}</p>
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
          <h2>{translations.productsTitle}</h2>
          <p>{translations.productsSubtitle}</p>
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
          <h2>{translations.brandTitle}</h2>
          <p>{translations.brandSubtitle}</p>
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
                <ValueText>{translations.brandValues[value.key as keyof typeof translations.brandValues]}</ValueText>
              </BrandValue>
            ))}
          </BrandValues>
          <BadgesContainer>
            <Badge>{translations.badges.spain}</Badge>
            <Badge>{translations.badges.eur}</Badge>
            <Badge>{translations.badges.responsible}</Badge>
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
          <h2>{translations.faqTitle}</h2>
          <FAQ />
        </motion.div>
      </Section>
    </>
  );
};
