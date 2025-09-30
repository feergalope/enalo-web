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

  const handleLanguageChange = (newLanguage: 'es' | 'en') => {
    changeLanguage(newLanguage);
  };

  return (
    <ToggleContainer>
      <ToggleButton
        $active={language === 'es'}
        onClick={() => handleLanguageChange('es')}
        aria-label="Cambiar a español"
        title="Español"
      >
        ES
      </ToggleButton>
      <ToggleButton
        $active={language === 'en'}
        onClick={() => handleLanguageChange('en')}
        aria-label="Switch to English"
        title="English"
      >
        EN
      </ToggleButton>
    </ToggleContainer>
  );
};
