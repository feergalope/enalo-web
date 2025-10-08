import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '../../hooks/useTranslations';
import { useCookieConsent } from '../../hooks/useCookieConsent';
import { theme } from '../../styles/theme';
import { focusRing } from '../../styles/mixins';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.space.md};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.space.sm};
    align-items: flex-end;
  }
`;

const Modal = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: ${theme.radius.lg};
  box-shadow: ${theme.shadows.xl};
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  padding: ${theme.space.xl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    max-height: 90vh;
    padding: ${theme.space.lg};
    border-radius: ${theme.radius.lg} ${theme.radius.lg} 0 0;
    margin-bottom: 0;
  }
`;

const Header = styled.div`
  margin-bottom: ${theme.space.xl};
  
  h2 {
    font-size: ${theme.fonts.sizes.xxl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.sm};
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fonts.sizes.xl};
    }
  }
  
  p {
    color: ${theme.colors.textSecondary};
    font-size: ${theme.fonts.sizes.md};
    line-height: 1.6;
    margin: 0;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fonts.sizes.sm};
    }
  }
`;

const CookieCategory = styled.div`
  margin-bottom: ${theme.space.lg};
  padding: ${theme.space.lg};
  border: 1px solid ${theme.colors.mutedLine};
  border-radius: ${theme.radius.md};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.space.md};
    margin-bottom: ${theme.space.md};
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.space.md};
  gap: ${theme.space.md};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.space.sm};
  }
`;

const CategoryInfo = styled.div`
  flex: 1;
  min-width: 0;
  
  h3 {
    font-size: ${theme.fonts.sizes.lg};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.xs};
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fonts.sizes.md};
    }
  }
  
  p {
    color: ${theme.colors.textSecondary};
    font-size: ${theme.fonts.sizes.sm};
    margin: 0;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fonts.sizes.xs};
    }
  }
`;

const Toggle = styled.div<{ $enabled: boolean }>`
  position: relative;
  width: 50px;
  height: 24px;
  background: ${props => props.$enabled ? theme.colors.olive : theme.colors.mutedLine};
  border-radius: 12px;
  cursor: pointer;
  transition: background ${theme.transitions.fast};
  flex-shrink: 0;
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.$enabled ? '26px' : '2px'};
    width: 20px;
    height: 20px;
    background: ${theme.colors.white};
    border-radius: 50%;
    transition: left ${theme.transitions.fast};
    box-shadow: ${theme.shadows.sm};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 44px;
    height: 22px;
    
    &::after {
      width: 18px;
      height: 18px;
      left: ${props => props.$enabled ? '22px' : '2px'};
    }
  }
`;

const CategoryDescription = styled.div`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fonts.sizes.sm};
  line-height: 1.5;
  margin-top: ${theme.space.sm};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fonts.sizes.xs};
    margin-top: ${theme.space.xs};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.space.md};
  justify-content: flex-end;
  margin-top: ${theme.space.xl};
  padding-top: ${theme.space.xl};
  border-top: 1px solid ${theme.colors.mutedLine};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.space.sm};
    margin-top: ${theme.space.lg};
    padding-top: ${theme.space.lg};
  }
`;

const SaveButton = styled.button`
  background: ${theme.colors.olive};
  color: ${theme.colors.white};
  padding: ${theme.space.sm} ${theme.space.md};
  border-radius: ${theme.radius.md};
  font-weight: ${theme.fonts.weights.medium};
  font-size: ${theme.fonts.sizes.sm};
  transition: all ${theme.transitions.fast};
  border: none;
  cursor: pointer;
  min-width: 100px;
  
  &:hover {
    background: ${theme.colors.sage};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  ${focusRing}
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    padding: ${theme.space.sm} ${theme.space.md};
    font-size: ${theme.fonts.sizes.sm};
  }
`;

const CancelButton = styled.button`
  background: transparent;
  color: ${theme.colors.olive};
  border: 1px solid ${theme.colors.olive};
  padding: ${theme.space.sm} ${theme.space.md};
  border-radius: ${theme.radius.md};
  font-weight: ${theme.fonts.weights.medium};
  font-size: ${theme.fonts.sizes.sm};
  transition: all ${theme.transitions.fast};
  cursor: pointer;
  min-width: 100px;
  
  &:hover {
    background: ${theme.colors.olive};
    color: ${theme.colors.white};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  ${focusRing}
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    padding: ${theme.space.sm} ${theme.space.md};
    font-size: ${theme.fonts.sizes.sm};
  }
`;

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookieSettings: React.FC<CookieSettingsProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslations();
  const { acceptCookies, rejectCookies } = useCookieConsent();
  
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    functional: false,
    analytics: false,
    marketing: false,
  });

  // Inicializar directamente con las traducciones
  const translations = {
    settingsTitle: t('cookies.settingsTitle'),
    settingsDescription: t('cookies.settingsDescription'),
    necessaryTitle: t('cookies.necessary.title'),
    necessaryDescription: t('cookies.necessary.description'),
    functionalTitle: t('cookies.functional.title'),
    functionalDescription: t('cookies.functional.description'),
    analyticsTitle: t('cookies.analytics.title'),
    analyticsDescription: t('cookies.analytics.description'),
    marketingTitle: t('cookies.marketing.title'),
    marketingDescription: t('cookies.marketing.description'),
    alwaysActive: t('cookies.marketing.alwaysActive'),
    optional: t('cookies.marketing.optional'),
    cancel: t('cookies.cancel'),
    reject: t('cookies.reject'),
    savePreferences: t('cookies.savePreferences'),
    accept: t('cookies.accept')
  };

  const handleToggle = (category: keyof typeof preferences) => {
    if (category === 'necessary') return; // Can't disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSave = () => {
    // Save preferences to localStorage
    localStorage.setItem('mlCookiePreferences', JSON.stringify(preferences));
    
    // Accept cookies with the selected preferences
    acceptCookies(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
    acceptCookies();
    onClose();
  };

  const handleRejectAll = () => {
    setPreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    });
    rejectCookies();
    onClose();
  };

  const cookieCategories = [
    {
      key: 'necessary' as const,
      title: translations.necessaryTitle,
      description: translations.necessaryDescription,
      required: true,
    },
    {
      key: 'functional' as const,
      title: translations.functionalTitle,
      description: translations.functionalDescription,
      required: false,
    },
    {
      key: 'analytics' as const,
      title: translations.analyticsTitle,
      description: translations.analyticsDescription,
      required: false,
    },
    {
      key: 'marketing' as const,
      title: translations.marketingTitle,
      description: translations.marketingDescription,
      required: false,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <Modal
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Header>
              <h2>{translations.settingsTitle}</h2>
              <p>{translations.settingsDescription}</p>
            </Header>

            {cookieCategories.map((category) => (
              <CookieCategory key={category.key}>
                <CategoryHeader>
                  <CategoryInfo>
                    <h3>{category.title}</h3>
                    <p>{category.required ? translations.alwaysActive : translations.optional}</p>
                  </CategoryInfo>
                  <Toggle
                    $enabled={preferences[category.key]}
                    onClick={() => handleToggle(category.key)}
                  />
                </CategoryHeader>
                <CategoryDescription>
                  {category.description}
                </CategoryDescription>
              </CookieCategory>
            ))}

            <ButtonGroup>
              <CancelButton onClick={onClose}>
                {translations.cancel}
              </CancelButton>
              <CancelButton onClick={handleRejectAll}>
                {translations.reject}
              </CancelButton>
              <SaveButton onClick={handleSave}>
                {translations.savePreferences}
              </SaveButton>
              <SaveButton onClick={handleAcceptAll}>
                {translations.accept}
              </SaveButton>
            </ButtonGroup>
          </Modal>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
