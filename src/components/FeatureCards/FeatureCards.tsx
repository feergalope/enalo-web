import React, { useState, useEffect } from 'react';
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
  font-size: ${theme.fonts.sizes.xxl};
  color: ${theme.colors.olive};
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

export const FeatureCards: React.FC = () => {
  const { t } = useTranslations();
  const [translations, setTranslations] = useState({
    cta: '',
    benefits: {
      bioaffinity: { title: '', description: '' },
      repair: { title: '', description: '' },
      authenticity: { title: '', description: '' }
    }
  });

  useEffect(() => {
    // Pre-cargar todas las traducciones
    setTranslations({
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
    });
  }, [t]);

  const benefits = [
    {
      key: 'bioaffinity',
      icon: '🧬',
    },
    {
      key: 'repair',
      icon: '⚡',
    },
    {
      key: 'authenticity',
      icon: '🫒',
    },
  ];

  return (
    <>
      <CardsContainer>
        {benefits.map((benefit, index) => (
          <FeatureCard
            key={benefit.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <IconContainer>
              {benefit.icon}
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
      
      <ButtonContainer>
        <CTAButton to="/scualane-100">
          {translations.cta}
        </CTAButton>
      </ButtonContainer>
    </>
  );
};
