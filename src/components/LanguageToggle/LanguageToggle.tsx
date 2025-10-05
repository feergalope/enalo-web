import React from 'react';
import styled from 'styled-components';
import { useTranslations } from '../../hooks/useTranslations';
import { theme } from '../../styles/theme';
import { focusRing } from '../../styles/mixins';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space.sm};
`;

const ToggleButton = styled.button<{ $active: boolean }>`
  background: ${props => props.$active ? theme.colors.olive : 'transparent'};
  color: ${props => props.$active ? theme.colors.white : theme.colors.textPrimary};
  border: 1px solid ${props => props.$active ? theme.colors.olive : theme.colors.mutedLine};
  padding: ${theme.space.sm} ${theme.space.md};
  border-radius: ${theme.radius.sm};
  font-size: ${theme.fonts.sizes.sm};
  font-weight: ${theme.fonts.weights.medium};
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  
  &:hover {
    background: ${props => props.$active ? theme.colors.sage : theme.colors.softBeige};
    border-color: ${props => props.$active ? theme.colors.sage : theme.colors.olive};
  }
  
  ${focusRing}
`;

export const LanguageToggle: React.FC = () => {
  const { language, changeLanguage } = useTranslations();

  const handleLanguageToggle = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    changeLanguage(newLanguage);
  };

  // Mostrar solo el idioma que no está activo
  const displayLanguage = language === 'es' ? 'en' : 'es';
  const displayLabel = displayLanguage === 'es' ? 'ES' : 'EN';
  const ariaLabel = displayLanguage === 'es' 
    ? 'Cambiar a español' 
    : 'Switch to English';
  const title = displayLanguage === 'es' ? 'Español' : 'English';

  return (
    <ToggleContainer>
      <ToggleButton
        $active={false}
        onClick={handleLanguageToggle}
        aria-label={ariaLabel}
        title={title}
      >
        {displayLabel}
      </ToggleButton>
    </ToggleContainer>
  );
};
