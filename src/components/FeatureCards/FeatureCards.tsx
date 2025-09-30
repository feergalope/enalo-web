import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';
import { theme } from '../../styles/theme';
import { card, buttonSecondary, focusRing } from '../../styles/mixins';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.space.xl};
  margin-top: ${theme.space.xxxl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.lg};
  }
`;

const FeatureCard = styled(motion.div)`
  ${card}
  text-align: center;
  padding: ${theme.space.xxxl} ${theme.space.xl};
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.space.lg};
  font-size: ${theme.fonts.sizes.xxxl};
  color: ${theme.colors.olive};
`;

const CardTitle = styled.h3`
  font-size: ${theme.fonts.sizes.xl};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.space.md};
`;

const CardDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fonts.sizes.md};
  line-height: 1.6;
  margin: 0 0 ${theme.space.xl} 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${theme.space.xxxl};
`;

const CTAButton = styled(Link)`
  ${buttonSecondary}
  text-decoration: none;
  display: inline-block;
  ${focusRing}
`;

export const FeatureCards: React.FC = () => {
  const { t } = useTranslations();

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
              {t(`about.benefits.${benefit.key}.title`)}
            </CardTitle>
            <CardDescription>
              {t(`about.benefits.${benefit.key}.description`)}
            </CardDescription>
          </FeatureCard>
        ))}
      </CardsContainer>
      
      <ButtonContainer>
        <CTAButton to="/scualane-100">
          {t('about.cta')}
        </CTAButton>
      </ButtonContainer>
    </>
  );
};
