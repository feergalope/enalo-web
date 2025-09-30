import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';
import { OptimizedImage } from '../OptimizedImage';
import { container, buttonPrimary, buttonSecondary } from '../../styles/mixins';
const pipetaImage = '/images/hero/pipeta-aceite.png';
import { theme } from '../../styles/theme';

const HeroContainer = styled.section`
  background: linear-gradient(135deg, ${theme.colors.softBeige} 0%, ${theme.colors.warmBeige} 100%);
  padding: ${theme.space.xxxxl} 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  ${container}
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.space.xxxl};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.xl};
    text-align: center;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: ${theme.fonts.sizes.xxxxl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.lg};
    line-height: 1.2;
  }
  
  p {
    font-size: ${theme.fonts.sizes.lg};
    color: ${theme.colors.textSecondary};
    margin-bottom: ${theme.space.xxxl};
    line-height: 1.6;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.space.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  ${buttonPrimary}
`;

const SecondaryButton = styled(Link)`
  ${buttonSecondary}
`;

const HeroImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: ${theme.radius.lg};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
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
            <ButtonGroup>
              <PrimaryButton to="/products">
                {t('hero.ctaPrimary')}
              </PrimaryButton>
              <SecondaryButton to="/about">
                {t('hero.ctaSecondary')}
              </SecondaryButton>
            </ButtonGroup>
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
              // width={500}
              // height={500}
            />
          </motion.div>
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};
