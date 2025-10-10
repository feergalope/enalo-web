import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { useTranslations } from '../hooks/useTranslations';
import { SEO } from '../components/SEO/SEO';
import { Section } from '../components/Section/Section';
import { theme } from '../styles/theme';
import { buttonPrimary, focusRing } from '../styles/mixins';
import { trackPageView } from '../lib/analytics';

const NotFoundContainer = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 50px;
  
  h1 {
    font-size: ${theme.fonts.sizes.xxxxl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.lg};
  }
  
  p {
    font-size: ${theme.fonts.sizes.lg};
    color: ${theme.colors.textSecondary};
    margin-bottom: ${theme.space.xxxl};
    line-height: 1.6;
  }
`;

const HomeButton = styled(Link)`
  ${buttonPrimary}
  text-decoration: none;
  display: inline-block;
  ${focusRing}
`;

export const NotFound: React.FC = () => {
  // const { t } = useTranslations();

  React.useEffect(() => {
    trackPageView('/404');
  }, []);

  return (
    <>
      <SEO 
        title="Página no encontrada"
        description="La página que buscas no existe"
      />
      
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <NotFoundContainer>
            <h1>404</h1>
            <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
            
            <HomeButton to="/">
              Volver al inicio
            </HomeButton>
          </NotFoundContainer>
        </motion.div>
      </Section>
    </>
  );
};
