import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { SEO } from '../components/SEO/SEO';
import { Section } from '../components/Section/Section';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { theme } from '../styles/theme';
import { trackPageView } from '../lib/analytics';
import productsData from '../data/products.json';

const HeroSection = styled.div`
  background: linear-gradient(135deg, ${theme.colors.white} 0%, ${theme.colors.warmBeige} 100%);
  padding: calc(50px + ${theme.space.xxxl}) ${theme.space.lg} ${theme.space.xxxl};
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: ${theme.fonts.sizes.xxxl};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.space.lg};
`;

const HeroSubtitle = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fonts.sizes.lg};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  text-align: justify;
  font-size: ${theme.fonts.sizes.md};
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.space.xl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.lg};
  }
`;

// Variants para optimizar animaciones y reducir capas en iOS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const Enalo: React.FC = () => {
  const { t } = useTranslations();
  
  // Inicializar directamente con las traducciones
  const translations = {
    title: t('products.title'),
    subtitle: t('products.subtitle')
  };

  useEffect(() => {
    trackPageView('/enalo');
  }, []);

  return (
    <>
      <SEO 
        title={translations.title}
        description={translations.subtitle}
      />
      
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeroTitle>{translations.title}</HeroTitle>
          <HeroSubtitle>{translations.subtitle}</HeroSubtitle>
        </motion.div>
      </HeroSection>
      
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <ProductsGrid>
            {productsData.products.map((product, index) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </ProductsGrid>
        </motion.div>
      </Section>
    </>
  );
};
