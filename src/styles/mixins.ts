import { css } from 'styled-components';
import { theme } from './theme';

export const container = css`
  max-width: ${theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 0 ${theme.space.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.space.md};
  }
`;

export const sectionSpacing = css`
  padding: ${theme.space.xxxxl} 0;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.space.xxxl} 0;
  }
`;

export const card = css`
  background: ${theme.colors.white};
  border-radius: ${theme.radius.lg};
  box-shadow: ${theme.shadows.sm};
  padding: ${theme.space.xl};
  transition: box-shadow ${theme.transitions.normal};
  
  &:hover {
    box-shadow: ${theme.shadows.md};
  }
`;

export const buttonPrimary = css`
  background: ${theme.colors.olive};
  color: ${theme.colors.white};
  padding: ${theme.space.md} ${theme.space.xl};
  border-radius: ${theme.radius.md};
  font-weight: ${theme.fonts.weights.medium};
  font-size: ${theme.fonts.sizes.md};
  transition: background ${theme.transitions.fast};
  
  &:hover {
    background: ${theme.colors.sage};
  }
`;

export const buttonSecondary = css`
  background: transparent;
  color: ${theme.colors.olive};
  border: 1px solid ${theme.colors.olive};
  padding: ${theme.space.md} ${theme.space.xl};
  border-radius: ${theme.radius.md};
  font-weight: ${theme.fonts.weights.medium};
  font-size: ${theme.fonts.sizes.md};
  transition: all ${theme.transitions.fast};
  
  &:hover {
    background: ${theme.colors.olive};
    color: ${theme.colors.white};
  }
`;

export const focusRing = css`
  &:focus-visible {
    outline: 2px solid ${theme.colors.olive};
    outline-offset: 2px;
  }
`;
