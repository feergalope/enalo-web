import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { SEO } from '../components/SEO/SEO';
import { Section } from '../components/Section/Section';
import { OptimizedImage } from '../components/OptimizedImage';

import { theme } from '../styles/theme';
import { buttonPrimary, focusRing } from '../styles/mixins';
import { trackPageView } from '../lib/analytics';
import productsData from '../data/products.json';

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${theme.space.xxxl};
  align-items: start;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.xl};
  }
`;

const ProductImage = styled.div`
  padding-top: 50px;
  position: sticky;
  top: 100px;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    position: relative;
    top: 0;
    order: 1;
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: ${theme.radius.lg};
    box-shadow: ${theme.shadows.lg};
  }
`;

const ProductInfo = styled.div`
  padding-top: 50px;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    order: 2;
  }
  
  h1 {
    font-size: ${theme.fonts.sizes.xxxl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.lg};
  }
  
  .subtitle {
    font-size: ${theme.fonts.sizes.lg};
    color: ${theme.colors.textSecondary};
    margin-bottom: ${theme.space.xl};
    line-height: 1.6;
  }
  
  .description {
    color: ${theme.colors.textSecondary};
    line-height: 1.7;
    margin-bottom: ${theme.space.xl};
  }
`;

const IngredientsSection = styled.div`
  margin-bottom: ${theme.space.xl};
  
  h3 {
    font-size: ${theme.fonts.sizes.xl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.md};
  }
  
  p {
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
    text-align: justify;
  }
`;

const UsageSection = styled.div`
  margin-bottom: ${theme.space.xl};
  
  h3 {
    font-size: ${theme.fonts.sizes.xl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.md};
  }
  
  p {
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
    text-align: justify;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.space.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const BackButton = styled(Link)`
  ${buttonPrimary}
  ${focusRing}
  text-decoration: none;
  text-align: center;
`;

export const ProductDetail: React.FC = () => {
  const { language } = useTranslations();
  
  React.useEffect(() => {
    trackPageView('/producto');
  }, []);

  // Obtener el primer producto como ejemplo
  const product = productsData.products[0];

  return (
    <>
      <SEO 
        title={product.name[language]}
        description={product.description[language]}
      />
      
      <Section>
        <ProductContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ProductInfo>
              <h1>{product.name[language]}</h1>
              <p className="subtitle">{product.description[language]}</p>
              <p className="description" dangerouslySetInnerHTML={{ __html: product.description[language] }} />
              
              <IngredientsSection>
                <h3>Ingredientes</h3>
                <p>{product.ingredients[language]}</p>
              </IngredientsSection>
              
              <UsageSection>
                <h3>Modo de uso</h3>
                <p>{product.usage[language]}</p>
              </UsageSection>
              
              <ButtonGroup>
                <BackButton to="/enalo">
                  Ver más productos
                </BackButton>
              </ButtonGroup>
            </ProductInfo>
          </motion.div>
          
          <ProductImage
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ 
              transform: 'translateZ(0)', 
              WebkitBackfaceVisibility: 'hidden', 
              willChange: 'opacity' 
            }}
          >
            <OptimizedImage src={product.image} alt={product.name[language]} priority={true} />
          </ProductImage>
        </ProductContainer>
      </Section>
    </>
  );
};
