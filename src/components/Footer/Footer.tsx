import React from 'react';
import styled from 'styled-components';
import { useTranslations } from '../../hooks/useTranslations';
import { theme } from '../../styles/theme';
import { container } from '../../styles/mixins';

const FooterContainer = styled.footer`
  background: ${theme.colors.warmBeige};
  border-top: 1px solid ${theme.colors.mutedLine};
  padding: ${theme.space.xxxxl} 0 ${theme.space.xl};
`;

const FooterContent = styled.div`
  ${container}
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.space.xxxl};
  margin-bottom: ${theme.space.xxxl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.space.xl};
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: ${theme.fonts.sizes.lg};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.lg};
  }
  
  p {
    color: ${theme.colors.textSecondary};
    font-size: ${theme.fonts.sizes.sm};
    line-height: 1.6;
    margin-bottom: ${theme.space.md};
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${theme.colors.mutedLine};
  padding-top: ${theme.space.xl};
  text-align: center;
`;

const Copyright = styled.p`
  color: ${theme.colors.textMuted};
  font-size: ${theme.fonts.sizes.sm};
  margin: 0;
`;

const ContactInfo = styled.div`
  p {
    margin-bottom: ${theme.space.xs};
    display: flex;
    align-items: center;
    gap: ${theme.space.sm};
  }
`;

export const Footer: React.FC = () => {
  const { t } = useTranslations();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <h3>macarenalorenzo</h3>
            <p>
              {t('footer.description')}
            </p>
          </FooterSection>
          
          <FooterSection>
            <h3>Información de Contacto</h3>
            <ContactInfo>
              <p>📧 info@macarenalorenzo.com</p>
              <p>📱 +34 123 456 789</p>
              <p>📍 Madrid, España</p>
            </ContactInfo>
          </FooterSection>
        </FooterTop>
        
        <FooterBottom>
          <Copyright>{t('footer.copyright')} 2024</Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};
