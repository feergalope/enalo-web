import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
  border-radius: ${theme.radius.lg};
  overflow: hidden;
`;

const StyledImage = styled.img<{ $loaded: boolean }>`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  opacity: ${props => props.$loaded ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
`;

const LoadingPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
`;

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setError(true);
    img.src = src;
  }, [src]);

  return (
    <ImageContainer className={className}>
      {!loaded && !error && <LoadingPlaceholder />}
      <StyledImage
        src={src}
        alt={alt}
        $loaded={loaded}
        loading="eager"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </ImageContainer>
  );
};
