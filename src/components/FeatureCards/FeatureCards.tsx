import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';
import { theme } from '../../styles/theme';
import { card, buttonSecondary, focusRing } from '../../styles/mixins';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.space.lg};
  margin-top: ${theme.space.xl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.md};
  }
`;

const FeatureCard = styled(motion.div)`
  ${card}
  text-align: center;
  padding: ${theme.space.xl} ${theme.space.lg};
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.space.md};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CardTitle = styled.h3`
  font-size: ${theme.fonts.sizes.lg};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.space.sm};
`;

const CardDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fonts.sizes.sm};
  line-height: 1.5;
  margin: 0 0 ${theme.space.lg} 0;
  text-align: justify;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${theme.space.xl};
`;

const CTAButton = styled(Link)`
  ${buttonSecondary}
  text-decoration: none;
  display: inline-block;
  ${focusRing}
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const FeatureCards: React.FC = () => {
  const { t } = useTranslations();
  
  // Inicializar directamente con las traducciones
  const translations = {
    cta: t('about.cta'),
    benefits: {
      bioaffinity: {
        title: t('about.benefits.bioaffinity.title'),
        description: t('about.benefits.bioaffinity.description')
      },
      repair: {
        title: t('about.benefits.repair.title'),
        description: t('about.benefits.repair.description')
      },
      authenticity: {
        title: t('about.benefits.authenticity.title'),
        description: t('about.benefits.authenticity.description')
      }
    }
  };

  const benefits = [
    {
      key: 'bioaffinity',
      icon: '/images/icons/bioafinidad.svg',
    },
    {
      key: 'repair',
      icon: '/images/icons/reparacion.svg',
    },
    {
      key: 'authenticity',
      icon: '/images/icons/autenticidad.svg',
    },
  ];

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <CardsContainer>
          {benefits.map((benefit) => (
            <FeatureCard
              key={benefit.key}
              variants={cardVariants}
            >
              <IconContainer>
                <img src={benefit.icon} alt={translations.benefits[benefit.key as keyof typeof translations.benefits].title} />
              </IconContainer>
              <CardTitle>
                {translations.benefits[benefit.key as keyof typeof translations.benefits].title}
              </CardTitle>
              <CardDescription>
                {translations.benefits[benefit.key as keyof typeof translations.benefits].description}
              </CardDescription>
            </FeatureCard>
          ))}
        </CardsContainer>
      </motion.div>
      
      <ButtonContainer>
        <CTAButton to="/scualane">
          {translations.cta}
        </CTAButton>
      </ButtonContainer>
    </>
  );
};
