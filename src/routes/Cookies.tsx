import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { useTranslations } from '../hooks/useTranslations';
import { SEO } from '../components/SEO/SEO';
import { Section } from '../components/Section/Section';
import { theme } from '../styles/theme';
import { trackPageView } from '../lib/analytics';

const LegalContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h1 {
    font-size: ${theme.fonts.sizes.xxxl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.xl};
  }
  
  h2 {
    font-size: ${theme.fonts.sizes.xxl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin: ${theme.space.xl} 0 ${theme.space.lg} 0;
  }
  
  p {
    color: ${theme.colors.textSecondary};
    line-height: 1.7;
    margin-bottom: ${theme.space.lg};
  }
  
  ul {
    color: ${theme.colors.textSecondary};
    line-height: 1.7;
    margin-bottom: ${theme.space.lg};
    padding-left: ${theme.space.lg};
  }
  
  li {
    margin-bottom: ${theme.space.sm};
  }
  
  strong {
    color: ${theme.colors.textPrimary};
    font-weight: ${theme.fonts.weights.semibold};
  }
`;

export const Cookies: React.FC = () => {
  // const { t } = useTranslations();

  React.useEffect(() => {
    trackPageView('/legal/cookies');
  }, []);

  return (
    <>
      <SEO 
        title="Política de Cookies"
        description="Política de cookies de macarenalorenzo"
      />
      
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <LegalContainer>
            <h1>Política de Cookies</h1>
            
            <p><strong>Última actualización:</strong> 15 de septiembre de 2025</p>
            
            <h2>1. ¿Qué son las Cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web.</p>
            
            <h2>2. Tipos de Cookies que Utilizamos</h2>
            <p>Utilizamos diferentes tipos de cookies:</p>
            <ul>
              <li><strong>Cookies necesarias:</strong> Esenciales para el funcionamiento del sitio</li>
              <li><strong>Cookies funcionales:</strong> Mejoran la funcionalidad del sitio</li>
              <li><strong>Cookies de análisis:</strong> Nos ayudan a entender cómo usas el sitio</li>
              <li><strong>Cookies de marketing:</strong> Se utilizan para mostrar anuncios relevantes</li>
            </ul>
            
            <h2>3. Cookies de Terceros</h2>
            <p>Algunas cookies son establecidas por servicios de terceros que aparecen en nuestras páginas.</p>
            
            <h2>4. Gestión de Cookies</h2>
            <p>Puedes gestionar las cookies a través de:</p>
            <ul>
              <li>La configuración de tu navegador</li>
              <li>Nuestro banner de cookies</li>
              <li>La configuración de cookies en el sitio</li>
            </ul>
            
            <h2>5. Cookies Específicas</h2>
            <p>Utilizamos cookies para recordar tus preferencias de idioma y configuración de cookies.</p>
            
            <h2>6. Actualizaciones</h2>
            <p>Esta política de cookies puede actualizarse ocasionalmente para reflejar cambios en nuestras prácticas.</p>
            
            <h2>7. Contacto</h2>
            <p>Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos a través de la información proporcionada en el sitio web.</p>
          </LegalContainer>
        </motion.div>
      </Section>
    </>
  );
};
