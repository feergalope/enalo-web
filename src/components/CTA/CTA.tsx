import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';
import { theme } from '../../styles/theme';
import { buttonPrimary, focusRing } from '../../styles/mixins';

const CTAContainer = styled.div`
  text-align: center;
  padding: ${theme.space.xxxl} 0;
`;

const CTATitle = styled.h2`
  font-size: ${theme.fonts.sizes.xxxl};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.space.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fonts.sizes.xxl};
  }
`;

const CTASubtitle = styled.p`
  font-size: ${theme.fonts.sizes.lg};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.space.xxxl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fonts.sizes.md};
    margin-bottom: ${theme.space.xl};
  }
`;

const CTAButton = styled(Link)`
  ${buttonPrimary}
  text-decoration: none;
  display: inline-block;
  font-size: ${theme.fonts.sizes.lg};
  padding: ${theme.space.lg} ${theme.space.xxxl};
  ${focusRing}
`;

export const CTA: React.FC = () => {
  const { t } = useTranslations();
  
  // Inicializar directamente con las traducciones
  const translations = {
    title: t('cta.title'),
    subtitle: t('cta.subtitle'),
    button: t('cta.button')
  };

  return (
    <CTAContainer>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <CTATitle>
          {translations.title}
        </CTATitle>
        
        <CTASubtitle>
          {translations.subtitle}
        </CTASubtitle>
        
        <CTAButton to="/contacto">
          {translations.button}
        </CTAButton>
      </motion.div>
    </CTAContainer>
  );
};
