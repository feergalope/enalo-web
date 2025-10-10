import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';
import { OptimizedImage } from '../OptimizedImage';
import { container, buttonPrimary } from '../../styles/mixins';
import { theme } from '../../styles/theme';

const HeroContainer = styled.section<{ $backgroundUrl: string }>`
  background-image: url('${props => props.$backgroundUrl}');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: ${theme.space.xl} 0;
  margin-top: 80px;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.space.xl};
    min-height: calc(100vh - 60px);
  }
`;

const HeroContent = styled.div`
  ${container}
  max-width: 800px;
  padding-right: 0;
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.radius.lg};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 0;
  align-items: stretch;
  overflow: hidden;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  padding: ${theme.space.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.space.md} 0;
    height: auto;
    min-height: auto;
  }
  
  h1 {
    font-size: ${theme.fonts.sizes.xxxl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.md};
    line-height: 1.2;
  }
  
  p {
    font-size: ${theme.fonts.sizes.md};
    color: ${theme.colors.textSecondary};
    margin-bottom: ${theme.space.xl};
    line-height: 1.6;
    text-align: justify;
  }
`;

const PrimaryButton = styled(Link)`
  ${buttonPrimary}
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: inline-block;
  }
`;

const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left center;
    display: block;
    border-radius: 0;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding-bottom: ${theme.space.md};
    
    img {
      height: auto;
      width: 100%;
      object-fit: contain;
      border-radius: 15px;
    }
  }
`;

// Variants para optimizar animaciones y reducir capas en iOS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

export const Hero: React.FC = () => {
  const { t } = useTranslations();
  
  // Inicializar directamente con las traducciones e imágenes
  const translations = {
    title: t('hero.title'),
    subtitle: t('hero.subtitle')
  };
  
  const images = {
    background: `${import.meta.env.BASE_URL}images/hero/background.png`,
    pipeta: `${import.meta.env.BASE_URL}images/hero/pipeta-aceite.png`
  };

  return (
    <HeroContainer $backgroundUrl={images.background}>
      <HeroContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroText>
            <motion.h1 variants={textVariants}>
              {translations.title}
            </motion.h1>
            
            <motion.p variants={textVariants}>
              {translations.subtitle}
            </motion.p>
            
            <motion.div variants={textVariants}>
              <PrimaryButton to="/scualane">
                Saber más
              </PrimaryButton>
            </motion.div>
          </HeroText>
        </motion.div>
        
        <HeroImage>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <OptimizedImage
              src={images.pipeta}
              alt={translations.title}
              priority={true}
            />
          </motion.div>
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};
