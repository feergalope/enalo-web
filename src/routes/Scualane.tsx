import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { SEO } from '../components/SEO/SEO';
import { Section } from '../components/Section/Section';
import { theme } from '../styles/theme';
import { buttonSecondary } from '../styles/mixins';
import { trackPageView } from '../lib/analytics';

const ScualaneContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.space.xxxl};
  
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
    max-width: 600px;
    margin: 0 auto;
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

const UsageCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space.lg};
  margin: ${theme.space.xl} 0;
`;

const UsageCard = styled.div<{ $active: boolean }>`
  background: ${props => props.$active ? theme.colors.warmBeige : theme.colors.white};
  border: 1px solid ${props => props.$active ? theme.colors.olive : theme.colors.mutedLine};
  border-radius: ${theme.radius.lg};
  padding: ${theme.space.lg};
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  transform: ${props => props.$active ? 'scale(1.02)' : 'scale(1)'};
  
  &:hover {
    border-color: ${theme.colors.olive};
    transform: scale(1.01);
  }
  
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
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${theme.space.lg} 0;
  
  li {
    font-size: ${theme.fonts.sizes.md};
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
    margin-bottom: ${theme.space.sm};
    padding-left: ${theme.space.lg};
    position: relative;
    
    &::before {
      content: '✓';
      color: ${theme.colors.olive};
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const CTAButton = styled(Link)`
  ${buttonSecondary}
  display: inline-block;
  text-align: center;
  margin-top: ${theme.space.xl};
`;

export const Scualane: React.FC = () => {
  const { t } = useTranslations();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    trackPageView('/scualane');
    
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
  }, []);

  const usageCards = [
    {
      title: t('scualane.usage.face.title'),
      description: t('scualane.usage.face.description')
    },
    {
      title: t('scualane.usage.neck.title'),
      description: t('scualane.usage.neck.description')
    },
    {
      title: t('scualane.usage.body.title'),
      description: t('scualane.usage.body.description')
    },
    {
      title: t('scualane.usage.hair.title'),
      description: t('scualane.usage.hair.description')
    }
  ];

  const benefits = [
    t('scualane.keyBenefits.benefits.0'),
    t('scualane.keyBenefits.benefits.1'),
    t('scualane.keyBenefits.benefits.2'),
    t('scualane.keyBenefits.benefits.3'),
    t('scualane.keyBenefits.benefits.4')
  ];

  return (
    <ScualaneContainer>
      <SEO 
        title={t('scualane.seo.title')}
        description={t('scualane.seo.description')}
      />
      
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeroSection id="overview">
            <h1>{t('scualane.title')}</h1>
            <p dangerouslySetInnerHTML={{ __html: t('scualane.subtitle') }} />
          </HeroSection>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContentSection id="description">
            <p dangerouslySetInnerHTML={{ __html: t('scualane.description') }} />
          </ContentSection>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContentSection id="how-to-use">
            <h2>{t('scualane.usage.title')}</h2>
            <UsageCards>
              {usageCards.map((card, index) => (
                <UsageCard
                  key={index}
                  $active={activeCard === index}
                  onClick={() => setActiveCard(activeCard === index ? null : index)}
                >
                  <h3>{card.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: card.description }} />
                </UsageCard>
              ))}
            </UsageCards>
          </ContentSection>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ContentSection id="benefits">
            <h2>{t('scualane.keyBenefits.title')}</h2>
            <BenefitsList>
              {benefits.map((benefit, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: benefit }} />
              ))}
            </BenefitsList>
          </ContentSection>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div style={{ textAlign: 'center' }}>
            <CTAButton to="/enalo">
              {t('scualane.cta')}
            </CTAButton>
          </div>
        </motion.div>
      </Section>
    </ScualaneContainer>
  );
}; 