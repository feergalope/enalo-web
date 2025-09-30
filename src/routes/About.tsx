import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { SEO } from '../components/SEO/SEO';
import { Section } from '../components/Section/Section';
import { theme } from '../styles/theme';
import { trackPageView } from '../lib/analytics';

const AboutContainer = styled.div`
  max-width: 800px;
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
`;

const ContentSection = styled.div`
  margin-bottom: ${theme.space.xxxl};
  
  p {
    font-size: ${theme.fonts.sizes.lg};
    color: ${theme.colors.textSecondary};
    line-height: 1.7;
    margin-bottom: ${theme.space.lg};
    text-align: center;
  }
  
  strong {
    color: ${theme.colors.textPrimary};
    font-weight: ${theme.fonts.weights.semibold};
  }
`;

export const About: React.FC = () => {
  const { t } = useTranslations();

  useEffect(() => {
    trackPageView('/about');
  }, []);

  return (
    <AboutContainer>
      <SEO 
        title={t('aboutUs.seo.title')}
        description={t('aboutUs.seo.description')}
      />
      
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeroSection>
            <h1>{t('aboutUs.title')}</h1>
          </HeroSection>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContentSection>
            <p dangerouslySetInnerHTML={{ __html: t('aboutUs.description') }} />
          </ContentSection>
        </motion.div>
      </Section>
    </AboutContainer>
  );
}; 