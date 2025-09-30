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

export const Privacy: React.FC = () => {
  // const { t } = useTranslations();

  React.useEffect(() => {
    trackPageView('/legal/privacidad');
  }, []);

  return (
    <>
      <SEO 
        title="Política de Privacidad"
        description="Política de privacidad de macarenalorenzo"
      />
      
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <LegalContainer>
            <h1>Política de Privacidad</h1>
            
            <p><strong>Última actualización:</strong> 15 de septiembre de 2025</p>
            
            <h2>1. Información que Recopilamos</h2>
            <p>Recopilamos información que nos proporcionas directamente, como cuando te registras, realizas una compra o nos contactas.</p>
            
            <h2>2. Cómo Utilizamos tu Información</h2>
            <p>Utilizamos tu información para:</p>
            <ul>
              <li>Procesar tus pedidos</li>
              <li>Mejorar nuestros productos y servicios</li>
              <li>Comunicarnos contigo</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
            
            <h2>3. Compartir Información</h2>
            <p>No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en los casos permitidos por la ley.</p>
            
            <h2>4. Cookies</h2>
            <p>Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes gestionar las cookies a través de la configuración de tu navegador.</p>
            
            <h2>5. Seguridad</h2>
            <p>Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.</p>
            
            <h2>6. Tus Derechos</h2>
            <p>Tienes derecho a acceder, rectificar, eliminar o portar tus datos personales. Para ejercer estos derechos, contáctanos.</p>
            
            <h2>7. Cambios en esta Política</h2>
            <p>Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos.</p>
            
            <h2>8. Contacto</h2>
            <p>Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través de la información proporcionada en el sitio web.</p>
          </LegalContainer>
        </motion.div>
      </Section>
    </>
  );
};
