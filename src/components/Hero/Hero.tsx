import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';
import { OptimizedImage } from '../OptimizedImage';
import { container, buttonPrimary } from '../../styles/mixins';
const pipetaImage = '/images/hero/pipeta-aceite.png';
import { theme } from '../../styles/theme';

const HeroContainer = styled.section`
  background-image: url('/images/hero/background.png');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  min-height: 95vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: ${theme.space.xxxl} 0;
`;

const HeroContent = styled.div`
  ${container}
  max-width: 1000px;
  padding-right: 0;
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.radius.lg};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 0;
  align-items: stretch;
  overflow: hidden;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.xl};
    text-align: center;
    padding-right: ${theme.space.lg};
  }
`;

const HeroText = styled.div`
  padding: ${theme.space.xxl} ${theme.space.xxxl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.space.xl};
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
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.space.xl};
    
    img {
      height: auto;
      width: 100%;
      object-fit: contain;
    }
  }
`;

export const Hero: React.FC = () => {
  const { t } = useTranslations();

  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PrimaryButton to="/scualane">
              Saber más
            </PrimaryButton>
          </motion.div>
        </HeroText>
        
        <HeroImage>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <OptimizedImage
              src={pipetaImage}
              alt={t('hero.title')}
            />
          </motion.div>
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};
