import React from 'react';
import styled from 'styled-components';
import { useTranslations } from '../../hooks/useTranslations';
import { theme } from '../../styles/theme';
import { container } from '../../styles/mixins';

const FooterContainer = styled.footer`
  background: ${theme.colors.textPrimary};
  border-top: 1px solid ${theme.colors.mutedLine};
  padding: ${theme.space.xl} 0;
`;

const FooterContent = styled.div`
  ${container}
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.space.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: ${theme.space.md};
  }
`;

const FooterLeft = styled.div`
  flex: 1;
  min-width: 200px;
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${theme.space.sm};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    align-items: center;
  }
`;

const BrandName = styled.h3`
  font-size: ${theme.fonts.sizes.lg};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.space.sm};
`;

const BrandDescription = styled.p`
  color: ${theme.colors.textMuted};
  font-size: ${theme.fonts.sizes.sm};
  line-height: 1.5;
  margin: 0;
  margin-bottom: ${theme.space.sm};
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space.xs};
  
  p {
    color: ${theme.colors.textMuted};
    font-size: ${theme.fonts.sizes.sm};
    margin: 0;
    display: flex;
    align-items: center;
    gap: ${theme.space.sm};
  }
  
  a {
    color: ${theme.colors.textMuted};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${theme.space.sm};
    transition: color ${theme.transitions.normal};
    
    &:hover {
      color: ${theme.colors.white};
    }
  }
`;

const Copyright = styled.p`
  color: ${theme.colors.textMuted};
  font-size: ${theme.fonts.sizes.xs};
  margin: 0;
  opacity: 0.8;
`;

export const Footer: React.FC = () => {
  const { t } = useTranslations();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLeft>
          <BrandName>macarenalorenzo</BrandName>
          <BrandDescription>
            {t('footer.description')}
          </BrandDescription>
          <Copyright>{t('footer.copyright')} 2025</Copyright>
        </FooterLeft>
        
        <FooterRight>
          <ContactInfo>
            <a href="mailto:direccion@macarenalorenzo.es">📧 direccion@macarenalorenzo.es</a>
            <p>📍 Puente Genil, Córdoba</p>
          </ContactInfo>
        </FooterRight>
      </FooterContent>
    </FooterContainer>
  );
};
