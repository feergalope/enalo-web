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
  padding-top: 80px;
  
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
    text-align: justify;
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

export const Terms: React.FC = () => {
  // const { t } = useTranslations();

  React.useEffect(() => {
    trackPageView('/legal/terminos');
  }, []);

  return (
    <>
      <SEO 
        title="Términos y Condiciones"
        description="Términos y condiciones de macarenalorenzo"
      />
      
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <LegalContainer>
            <h1>Términos y Condiciones</h1>
            
            <p><strong>Última actualización:</strong> 15 de septiembre de 2025</p>
            
            <h2>1. Información General</h2>
            <p>Estos términos y condiciones regulan el uso del sitio web de macarenalorenzo y la compra de productos de la línea Enaló.</p>
            
            <h2>2. Productos</h2>
            <p>Nuestros productos están formulados con ingredientes naturales de alta calidad, especialmente escualano de oliva.</p>
            
            <h2>3. Uso del Sitio Web</h2>
            <p>Al acceder y utilizar este sitio web, aceptas cumplir con estos términos y condiciones.</p>
            
            <h2>4. Propiedad Intelectual</h2>
            <p>Todo el contenido de este sitio web, incluyendo textos, imágenes y diseños, está protegido por derechos de autor.</p>
            
            <h2>5. Limitación de Responsabilidad</h2>
            <p>macarenalorenzo no se hace responsable de:</p>
            <ul>
              <li>Daños directos o indirectos</li>
              <li>Pérdida de datos o beneficios</li>
              <li>Interrupciones del servicio</li>
            </ul>
            
            <h2>6. Modificaciones</h2>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente.</p>
            
            <h2>7. Ley Aplicable</h2>
            <p>Estos términos se rigen por la legislación española.</p>
            
            <h2>8. Contacto</h2>
            <p>Para cualquier consulta sobre estos términos, puedes contactarnos a través de la información proporcionada en el sitio web.</p>
          </LegalContainer>
        </motion.div>
      </Section>
    </>
  );
};
