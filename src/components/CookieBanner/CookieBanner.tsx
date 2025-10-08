import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '../../hooks/useTranslations';
import { useCookieConsent } from '../../hooks/useCookieConsent';
import { CookieSettings } from './CookieSettings';
import { theme } from '../../styles/theme';
import { buttonPrimary, buttonSecondary, focusRing } from '../../styles/mixins';

const BannerContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.mutedLine};
  box-shadow: ${theme.shadows.lg};
  z-index: 1000;
  padding: ${theme.space.lg};
`;

const BannerContent = styled.div`
  max-width: ${theme.breakpoints.desktop};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.space.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: ${theme.space.md};
  }
`;

const BannerText = styled.div`
  flex: 1;
  
  h3 {
    font-size: ${theme.fonts.sizes.lg};
    font-weight: ${theme.fonts.weights.semibold};
    margin-bottom: ${theme.space.sm};
    color: ${theme.colors.textPrimary};
  }
  
  p {
    font-size: ${theme.fonts.sizes.sm};
    color: ${theme.colors.textSecondary};
    margin: 0;
    line-height: 1.5;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.space.md};
  flex-shrink: 0;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const AcceptButton = styled.button`
  ${buttonPrimary}
  ${focusRing}
`;

const RejectButton = styled.button`
  ${buttonSecondary}
  ${focusRing}
`;

const ConfigureButton = styled.button`
  background: transparent;
  color: ${theme.colors.textSecondary};
  border: none;
  padding: ${theme.space.sm} ${theme.space.md};
  font-size: ${theme.fonts.sizes.sm};
  text-decoration: underline;
  cursor: pointer;
  transition: color ${theme.transitions.fast};
  
  &:hover {
    color: ${theme.colors.olive};
  }
  
  ${focusRing}
`;

const LearnMoreLink = styled.a`
  color: ${theme.colors.olive};
  text-decoration: none;
  font-size: ${theme.fonts.sizes.sm};
  margin-left: ${theme.space.sm};
  
  &:hover {
    text-decoration: underline;
  }
  
  ${focusRing}
`;

export const CookieBanner: React.FC = () => {
  const { t } = useTranslations();
  const { consent, acceptCookies, rejectCookies } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [translations, setTranslations] = useState({
    title: '',
    description: '',
    accept: '',
    reject: '',
    configure: ''
  });

  useEffect(() => {
    // Pre-cargar todas las traducciones
    setTranslations({
      title: t('cookies.title'),
      description: t('cookies.description'),
      accept: t('cookies.accept'),
      reject: t('cookies.reject'),
      configure: t('cookies.configure')
    });
  }, [t]);

  if (consent !== 'pending') {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        <BannerContainer
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <BannerContent>
            <BannerText>
              <h3>{translations.title}</h3>
              <p>
                {translations.description}
                <LearnMoreLink href="/legal/cookies" target="_blank">
                  Más información
                </LearnMoreLink>
              </p>
            </BannerText>
            
            <ButtonGroup>
              <AcceptButton onClick={() => acceptCookies()}>
                {translations.accept}
              </AcceptButton>
              <RejectButton onClick={() => rejectCookies()}>
                {translations.reject}
              </RejectButton>
              <ConfigureButton onClick={() => setShowSettings(true)}>
                {translations.configure}
              </ConfigureButton>
            </ButtonGroup>
          </BannerContent>
        </BannerContainer>
      </AnimatePresence>
      
      <CookieSettings 
        isOpen={showSettings} 
        onClose={() => setShowSettings(false)} 
      />
    </>
  );
};
