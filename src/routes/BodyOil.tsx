import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { SEO } from '../components/SEO/SEO';
import { Section } from '../components/Section/Section';
import { OptimizedImage } from '../components/OptimizedImage';
import { theme } from '../styles/theme';
import { trackPageView } from '../lib/analytics';

const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: ${theme.space.xxxl};
  align-items: start;
  margin-bottom: ${theme.space.xxxl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.xl};
  }
`;

const ProductContent = styled.div`
  /* Contenido del producto - 2/3 */
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 2;
  }
`;

const IntroText = styled.div`
  padding-top: 50px;
  margin-bottom: ${theme.space.xxxl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding-top: 0;
  }
  
  h1 {
    font-size: ${theme.fonts.sizes.xxxl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin: 0 0 ${theme.space.lg} 0;
  }
  
  h3 {
    font-size: ${theme.fonts.sizes.xxl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin: ${theme.space.xl} 0 ${theme.space.lg} 0;
  }
  
  p {
    font-size: ${theme.fonts.sizes.md};
    color: ${theme.colors.textSecondary};
    line-height: 1.7;
    margin: 0 0 ${theme.space.lg} 0;
    text-align: justify;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    strong {
      color: ${theme.colors.textPrimary};
      font-weight: ${theme.fonts.weights.semibold};
    }
  }
`;

const ProductImageContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  position: sticky;
  top: 100px;
  align-self: start;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    position: relative;
    top: 0;
    order: 1;
    padding-top: 0;
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
    text-align: justify;
  }
  
  strong {
    color: ${theme.colors.textPrimary};
    font-weight: ${theme.fonts.weights.semibold};
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.space.xl};
  margin: ${theme.space.xl} 0;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.space.lg};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.md};
  }
`;

const BenefitColumn = styled.div`
  text-align: center;
  
  img {
    width: 75px;
    height: 75px;
    margin: 0 auto ${theme.space.md};
    display: block;
  }
  
  p {
    font-size: ${theme.fonts.sizes.md};
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
    margin: 0;
    font-weight: ${theme.fonts.weights.medium};
    text-align: center;
  }
`;

const IngredientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.space.xl};
  margin: ${theme.space.xl} 0;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.space.lg};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.md};
  }
`;

const IngredientColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space.sm};
  
  .ingredient-header {
    display: flex;
    align-items: center;
    gap: ${theme.space.md};
  }
  
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  
  h4 {
    font-size: ${theme.fonts.sizes.md};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin: 0;
  }
  
  p {
    font-size: ${theme.fonts.sizes.sm};
    color: ${theme.colors.textSecondary};
    line-height: 1.5;
    margin: 0;
    padding-left: 0;
    text-align: justify;
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

// Variants para optimizar animaciones y reducir capas en iOS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export const BodyOil: React.FC = () => {
  const { t } = useTranslations();
  
  // Inicializar directamente con las traducciones
  const translations = {
    seoTitle: t('bodyOil.seo.title'),
    seoDescription: t('bodyOil.seo.description'),
    title: t('bodyOil.title'),
    benefitsTitle: t('bodyOil.benefits.title')
  };
  
  const benefits = [
    {
      icon: '/icons/products/pipette.svg',
      text: 'Refuerza la barrera cutánea frente a la sequedad'
    },
    {
      icon: '/icons/products/drop.svg',
      text: 'Hidratación inmediata y duradera'
    },
    {
      icon: '/icons/products/sparkle.svg',
      text: 'Tacto sedoso y luminoso'
    },
    {
      icon: '/icons/products/leaf.svg',
      text: 'Ingredientes orgánicos y naturales'
    }
  ];
  
  const ingredients = [
    {
      icon: '/images/products/ingredients/escualano.svg',
      title: 'Escualano de oliva',
      description: 'Activo biomimético afín a la piel que mejora la hidratación y refuerza la barrera cutánea.'
    },
    {
      icon: '/images/products/ingredients/sesamo.svg',
      title: 'Sésamo',
      description: 'Potente antioxidante que protege los lípidos cutáneos y refuerza la barrera natural.'
    },
    {
      icon: '/images/products/ingredients/arroz.svg',
      title: 'Arroz',
      description: 'Rico en orizanol, mejora la microcirculación y combate el envejecimiento cutáneo.'
    },
    {
      icon: '/images/products/ingredients/uva.svg',
      title: 'Pepita de uva',
      description: 'Estimula la regeneración celular y mejora la firmeza gracias a su ácido linoleico.'
    },
    {
      icon: '/images/products/ingredients/macadamia.svg',
      title: 'Macadamia',
      description: 'Aporta ácido palmitoleico, esencial para equilibrar los lípidos de la piel.'
    },
    {
      icon: '/images/products/ingredients/aguacate.svg',
      title: 'Aguacate',
      description: 'Favorece la síntesis de colágeno y la reparación tisular.'
    },
    {
      icon: '/images/products/ingredients/almendras.svg',
      title: 'Almendras dulces',
      description: 'Mantiene la integridad del manto hidrolipídico y mejora la elasticidad.'
    },
    {
      icon: '/images/products/ingredients/cartamo.svg',
      title: 'Aceite de cártamo',
      description: 'Favorece la regeneración celular, mejora la elasticidad y ayuda a mantener la hidratación y luminosidad de la piel gracias a su alto contenido en omega-6.'
    },
    {
      icon: '/images/products/ingredients/naranja.svg',
      title: 'Aceite esencial de naranja',
      description: 'Antioxidante y revitalizante, potencia la luminosidad cutánea.'
    }
  ];
  
  const imageUrl = '/images/products/body-oil.png';

  useEffect(() => {
    trackPageView('/enalo/aceite-corporal');
  }, []);

  return (
    <>
      <SEO 
        title={translations.seoTitle}
        description={translations.seoDescription}
      />
      
      <Section>
        <TwoColumnSection>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ProductContent>
              <motion.div variants={itemVariants}>
                <IntroText>
                  <h1>{translations.title}</h1>
                  <p>
                    Un aceite corporal ligero y de rápida absorción que combina <strong>escualano de oliva</strong> con siete aceites vegetales nutritivos para <strong>hidratar, nutritivo y revitalizar</strong> la piel dejándola envuelta en un delicado aroma cítrico-mediterráneo.
                  </p>
                  <p>
                    Ideal después de la <strong>exposición al sol</strong>, ayuda a calmar, reparar y devolver la luminosidad natural.
                  </p>
                  <h3>Modo de uso</h3>
                  <p>
                    Se aplica sobre la piel limpia y húmeda, preferiblemente tras la ducha, para potenciar la hidratación y mejorar la elasticidad.
                  </p>
                </IntroText>
              </motion.div>

              <motion.div variants={itemVariants}>
                <ContentSection>
                  <h2>{translations.benefitsTitle}</h2>
                  <BenefitsGrid>
                    {benefits.map((benefit, index) => (
                      <BenefitColumn key={index}>
                        <img src={benefit.icon} alt={benefit.text} />
                        <p>{benefit.text}</p>
                      </BenefitColumn>
                    ))}
                  </BenefitsGrid>
                </ContentSection>
              </motion.div>
            </ProductContent>
          </motion.div>

          <ProductImageContainer>
            <ProductImage
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ 
                transform: 'translateZ(0)', 
                WebkitBackfaceVisibility: 'hidden', 
                willChange: 'opacity' 
              }}
            >
              <OptimizedImage
                src={imageUrl}
                alt={translations.title}
                priority={true}
              />
            </ProductImage>
          </ProductImageContainer>
        </TwoColumnSection>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <ContentSection>
            <h2>Ingredientes</h2>
            <IngredientsGrid>
              {ingredients.map((ingredient, index) => (
                <IngredientColumn key={index}>
                  <div className="ingredient-header">
                    <img src={ingredient.icon} alt={ingredient.title} />
                    <h4>{ingredient.title}</h4>
                  </div>
                  <p>{ingredient.description}</p>
                </IngredientColumn>
              ))}
            </IngredientsGrid>
          </ContentSection>
        </motion.div>
      </Section>
    </>
  );
};
