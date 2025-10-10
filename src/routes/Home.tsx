import React, { useEffect } from 'react';
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


export const Home: React.FC = () => {
  const { t } = useTranslations();
  
  // Inicializar directamente con las traducciones
  const translations = {
    aboutTitle: t('about.title'),
    aboutSubtitle: t('about.subtitle'),
    productsTitle: t('products.title'),
    productsSubtitle: t('products.subtitle'),
    faqTitle: t('faq.title')
  };

  useEffect(() => {
    trackPageView('/');
  }, []);

  return (
    <>
      <SEO />
      <Hero />
      
      <Section id="beneficios" background="softBeige">
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
      
      <Section background="beige">
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
          <h2>{translations.faqTitle}</h2>
          <FAQ />
        </motion.div>
      </Section>
    </>
  );
};
