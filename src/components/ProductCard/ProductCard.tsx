import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';
import { theme } from '../../styles/theme';
import { card, buttonSecondary, focusRing } from '../../styles/mixins';

interface ProductCardProps {
  product: {
    id: string;
    slug: string;
    name: {
      es: string;
      en: string;
    };
    description: {
      es: string;
      en: string;
    };
    image: string;
  };
  index: number;
}

const CardContainer = styled(motion.div)`
  ${card}
  text-align: center;
  padding: ${theme.space.xl};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProductImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: ${theme.radius.md};
  margin-bottom: ${theme.space.lg};
  overflow: hidden;
  background: linear-gradient(135deg, ${theme.colors.softBeige} 0%, ${theme.colors.warmBeige} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${theme.transitions.normal};
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImagePlaceholder = styled.div<{ $show: boolean }>`
  width: 100%;
  height: 100%;
  display: ${props => props.$show ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fonts.sizes.xxxxl};
  color: ${theme.colors.olive};
  position: absolute;
  top: 0;
  left: 0;
`;

const PlaceholderText = styled.span`
  font-size: ${theme.fonts.sizes.sm};
  color: ${theme.colors.textSecondary};
  margin-top: ${theme.space.sm};
  font-weight: ${theme.fonts.weights.medium};
`;

const ProductTitle = styled.h3`
  font-size: ${theme.fonts.sizes.xl};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.space.md};
`;

const ProductDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fonts.sizes.md};
  line-height: 1.6;
  margin-bottom: ${theme.space.xl};
  flex: 1;
`;

const LearnMoreButton = styled(Link)`
  ${buttonSecondary}
  text-decoration: none;
  display: inline-block;
  margin-top: auto;
  ${focusRing}
`;

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { t, language } = useTranslations();
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [translations, setTranslations] = useState({
    learnMore: ''
  });

  // Reset image state when product changes
  useEffect(() => {
    setImageError(false);
    setImageLoaded(false);
  }, [product.id]);

  useEffect(() => {
    // Pre-cargar todas las traducciones
    setTranslations({
      learnMore: t('products.learnMore')
    });
  }, [t]);

  // Determinar la ruta del botón basándose en el slug del producto
  const getButtonRoute = () => {
    if (product.slug === 'scualane-100') {
      return '/scualane-100';
    }
    if (product.slug === 'body-oil') {
      return '/body-oil';
    }
    return '/enalo';
  };

  // Función para manejar errores de carga de imagen
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  // Función para obtener el emoji apropiado según el producto
  const getProductEmoji = () => {
    if (product.slug === 'scualane-100') {
      return '🫒';
    }
    if (product.slug === 'body-oil') {
      return '💧';
    }
    return '🫒';
  };

  return (
    <CardContainer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <ProductImageContainer>
        {!imageError && (
          <ProductImage
            src={product.image}
            alt={product.name[language]}
            onError={handleImageError}
            onLoad={handleImageLoad}
            style={{ 
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          />
        )}
        <ProductImagePlaceholder $show={imageError}>
          {getProductEmoji()}
          <PlaceholderText>
            {product.slug === 'scualane-100' ? 'Escualano' : 'Aceite corporal'}
          </PlaceholderText>
        </ProductImagePlaceholder>
      </ProductImageContainer>
      
      <ProductTitle>
        {product.name[language]}
      </ProductTitle>
      
      <ProductDescription>
        {product.description[language]}
      </ProductDescription>
      
      <LearnMoreButton to={getButtonRoute()}>
        {translations.learnMore}
      </LearnMoreButton>
    </CardContainer>
  );
};
