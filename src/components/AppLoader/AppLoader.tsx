import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  border: 3px solid ${theme.colors.olive};
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: ${theme.space.lg};
`;

const LoadingText = styled.p`
  font-size: ${theme.fonts.sizes.lg};
  color: ${theme.colors.textSecondary};
  font-weight: ${theme.fonts.weights.medium};
`;

interface AppLoaderProps {
  isVisible: boolean;
}

export const AppLoader: React.FC<AppLoaderProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <LoaderContainer>
      <Logo />
      <LoadingText>Cargando...</LoadingText>
    </LoaderContainer>
  );
};
