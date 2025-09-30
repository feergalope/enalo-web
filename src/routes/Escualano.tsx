import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { SEO } from '../components/SEO/SEO';
import { Section } from '../components/Section/Section';
import { OptimizedImage } from '../components/OptimizedImage';
import { theme } from '../styles/theme';
import { trackPageView } from '../lib/analytics';

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
  
  .usage-section {
    margin-bottom: ${theme.space.xl};
    
    h3 {
      font-size: ${theme.fonts.sizes.lg};
      font-weight: ${theme.fonts.weights.semibold};
      color: ${theme.colors.textPrimary};
      margin-bottom: ${theme.space.md};
      display: flex;
      align-items: center;
      gap: ${theme.space.sm};
    }
    
    p {
      margin-bottom: ${theme.space.md};
    }
    
    ul {
      margin-left: ${theme.space.lg};
      margin-bottom: ${theme.space.md};
      
      li {
        color: ${theme.colors.textSecondary};
        font-size: ${theme.fonts.sizes.md};
        line-height: 1.7;
        margin-bottom: ${theme.space.sm};
      }
    }
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

export const Escualano: React.FC = () => {
  const { t } = useTranslations();

  useEffect(() => {
    trackPageView('/escualano');
  }, []);

  return (
    <>
      <SEO 
        title="Escualano de Oliva - Cómo utilizar - Enalo"
        description="Aprende cómo utilizar el Escualano de Oliva en rostro, cuello, escote, cuerpo y cabello para obtener los mejores resultados."
      />
      
      <Section>
        <ProductContainer>
          <ProductInfo>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Escualano de Oliva
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Cómo utilizar el Escualano de Oliva
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="usage-section"
            >
              <h3>✨ Rostro</h3>
              <p>
                Aplica 2–3 gotas sobre la piel limpia antes de tu crema habitual. Gracias a su afinidad natural, potencia la absorción de los principios activos y proporciona hidratación inmediata sin dejar residuo graso.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="usage-section"
            >
              <h3>🎗️ Cuello y escote</h3>
              <p>
                Extiende 3–4 gotas a diario, con un suave masaje ascendente desde el centro hacia los laterales. Esta zona es especialmente delicada: el uso regular ayuda a mantener su firmeza, elasticidad y suavidad.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="usage-section"
            >
              <h3>💧 Cuerpo</h3>
              <p>
                Después de la ducha, con la piel húmeda, masajea 6–10 gotas por zona hasta su total absorción. El resultado es una piel hidratada, flexible y luminosa, sin sensación grasa.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="usage-section"
            >
              <h3>🌿 Cabello</h3>
              <ul>
                <li><strong>Como sérum:</strong> 1–3 gotas en medios y puntas, en seco o húmedo.</li>
                <li><strong>Como tratamiento pre-lavado:</strong> 4–6 gotas, dejar 15–20 minutos y enjuagar.</li>
                <li><strong>Como protección ligera:</strong> 1–2 gotas antes de usar secador o plancha.</li>
              </ul>
              <p>
                Nutre la fibra capilar, controla el encrespamiento y aporta brillo sin apelmazar.
              </p>
            </motion.div>
          </ProductInfo>
          
          <ProductImage>
            <OptimizedImage
              src="/images/products/squalane-100.png"
              alt="Escualano de Oliva"
            />
          </ProductImage>
        </ProductContainer>
      </Section>
    </>
  );
};
