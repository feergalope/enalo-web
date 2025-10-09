import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { SEO } from '../components/SEO/SEO';
import { Section } from '../components/Section/Section';
import { OptimizedImage } from '../components/OptimizedImage';
import { theme } from '../styles/theme';
import { trackPageView } from '../lib/analytics';

const ScualaneContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${theme.space.xxxl};
  align-items: start;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.xl};
  }
`;

const ProductContent = styled.div`
  /* Contenido del producto - 2/3 */
`;

const ProductImageContainer = styled.div`
  padding-top: 80px;
  position: sticky;
  top: 100px;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    position: relative;
    top: 0;
    padding-top: 0;
  }
`;

const HeroSection = styled.div`
  padding-top: 80px;
  margin-bottom: ${theme.space.xxxl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding-top: 0;
  }
  
  h1 {
    font-size: ${theme.fonts.sizes.xxxl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.lg};
  }
  
  p {
    font-size: ${theme.fonts.sizes.lg};
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
  }
`;

const ContentSection = styled.div`
  margin-bottom: ${theme.space.xxxl};
  
  h2 {
    font-size: ${theme.fonts.sizes.xxl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.lg};
  }
  
  p {
    font-size: ${theme.fonts.sizes.md};
    color: ${theme.colors.textSecondary};
    line-height: 1.7;
    margin-bottom: ${theme.space.lg};
  }
  
  strong {
    color: ${theme.colors.textPrimary};
    font-weight: ${theme.fonts.weights.semibold};
  }
`;

const UsageRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space.xl};
  margin: ${theme.space.xl} 0;
`;

const UsageRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: ${theme.space.lg};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.md};
    text-align: center;
  }
`;

const UsageImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 150px;
    height: 150px;
  }
`;

const UsageContent = styled.div`
  h3 {
    font-size: ${theme.fonts.sizes.lg};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.sm};
  }
  
  p {
    font-size: ${theme.fonts.sizes.md};
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
    margin: 0;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 ${theme.space.md} 0;
    
    li {
      font-size: ${theme.fonts.sizes.md};
      color: ${theme.colors.textSecondary};
      line-height: 1.6;
      margin-bottom: ${theme.space.sm};
      padding-left: ${theme.space.md};
      position: relative;
      
      &:before {
        content: "•";
        position: absolute;
        left: 0;
        color: ${theme.colors.olive};
        font-weight: bold;
      }
      
      &:last-child {
        margin-bottom: 0;
      }
      
      strong {
        color: ${theme.colors.textPrimary};
        font-weight: ${theme.fonts.weights.semibold};
      }
    }
  }
`;

const ProductImage = styled.div`
  width: 100%;
  border-radius: ${theme.radius.lg};
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${theme.space.xl} 0 0 0;
  
  li {
    font-size: ${theme.fonts.sizes.md};
    color: ${theme.colors.textSecondary};
    line-height: 1.8;
    margin-bottom: ${theme.space.md};
    
    &:last-child {
      margin-bottom: 0;
    }
    
    strong {
      color: ${theme.colors.textPrimary};
      font-weight: ${theme.fonts.weights.semibold};
    }
  }
`;

export const Escualano: React.FC = () => {
  const { t } = useTranslations();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Inicializar directamente con las traducciones
  const translations = {
    seoTitle: t('scualane-100.seo.title'),
    seoDescription: t('scualane-100.seo.description'),
    title: t('scualane-100.title'),
    description: t('scualane-100.description')
  };
  
  const imageUrl = '/images/products/squalane-100.png';

  useEffect(() => {
    setIsLoaded(true);

    trackPageView('/enalo/escualanodeoliva');
    
    // Scroll to section if hash is present
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [t]);

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <SEO 
        title={translations.seoTitle}
        description={translations.seoDescription}
      />
      
      <Section>
        <ScualaneContainer>
          <ProductContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HeroSection>
                <h1>{translations.title}</h1>
              </HeroSection>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContentSection id="description">
                <p>{translations.description}</p>
              </ContentSection>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ContentSection id="how-to-use">
                <h2>Cómo utilizar</h2>
                <UsageRows>
                  <UsageRow>
                    <UsageImage>
                      <img src="/images/products/body-parts/face.svg" alt="Rostro" />
                    </UsageImage>
                    <UsageContent>
                      <h3>Rostro</h3>
                      <p>Aplica 2-3 gotas sobre la piel limpia antes de tu crema habitual. Gracias a su afinidad natural, potencia la absorción de los principios activos y proporciona hidratación inmediata sin dejar residuo graso.</p>
                    </UsageContent>
                  </UsageRow>

                  <UsageRow>
                    <UsageImage>
                      <img src="/images/products/body-parts/neck.svg" alt="Cuello y escote" />
                    </UsageImage>
                    <UsageContent>
                      <h3>Cuello y escote</h3>
                      <p>Extiende 3–4 gotas a diario, con un suave masaje ascendente desde el centro hacia los laterales. Esta zona es especialmente delicada: el uso regular ayuda a mantener su firmeza, elasticidad y suavidad.</p>
                    </UsageContent>
                  </UsageRow>

                  <UsageRow>
                    <UsageImage>
                      <img src="/images/products/body-parts/body.svg" alt="Cuerpo" />
                    </UsageImage>
                    <UsageContent>
                      <h3>Cuerpo</h3>
                      <p>Después de la ducha, con la piel húmeda, masajea 6–10 gotas por zona hasta su total absorción. El resultado es una piel hidratada, flexible y luminosa, sin sensación grasa.</p>
                    </UsageContent>
                  </UsageRow>

                  <UsageRow>
                    <UsageImage>
                      <img src="/images/products/body-parts/hair.svg" alt="Cabello" />
                    </UsageImage>
                    <UsageContent>
                      <h3>Cabello</h3>
                      <ul>
                        <li><strong>Como sérum:</strong> 1–3 gotas en medios y puntas, en seco o húmedo.</li>
                        <li><strong>Como tratamiento pre-lavado:</strong> 4–6 gotas, dejar 15–20 minutos y enjuagar.</li>
                        <li><strong>Como protección ligera:</strong> 1–2 gotas antes de usar secador o plancha.</li>
                      </ul>
                      <p>Nutre la fibra capilar, controla el encrespamiento y aporta brillo sin apelmazar.</p>
                    </UsageContent>
                  </UsageRow>
                </UsageRows>
              </ContentSection>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ContentSection id="benefits">
                <h2>Beneficios clave</h2>
                <BenefitsList>
                  <li>🌿 <strong>Hidrata en profundidad</strong> sin dejar sensación grasa</li>
                  <li>💎 <strong>Refuerza la barrera cutánea</strong> y mejora la elasticidad</li>
                  <li>✨ <strong>Suaviza y aporta luminosidad</strong> a la piel</li>
                  <li>💇‍♀️ <strong>Nutre y protege el cabello</strong>, reduciendo el encrespamiento</li>
                  <li>🌞 <strong>Ligero, puro y de origen vegetal mediterráneo</strong></li>
                </BenefitsList>
              </ContentSection>
            </motion.div>
          </ProductContent>

          <ProductImageContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <ProductImage>
                <OptimizedImage
                  src={imageUrl}
                  alt="Escualano de Oliva"
                />
              </ProductImage>
            </motion.div>
          </ProductImageContainer>
        </ScualaneContainer>
      </Section>
    </>
  );
};
