import React, { useState } from 'react';
import styled from 'styled-components';
import { addCacheBusting } from '../../lib/cacheBusting';

const ImageWrapper = styled.div<{ $isLoaded: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${props => props.$isLoaded ? 'transparent' : '#f5f5f5'};
  transition: background-color 0.3s ease;
`;

const StyledImage = styled.img<{ $isLoaded: boolean }>`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  opacity: ${props => props.$isLoaded ? 1 : 0};
  transition: opacity 0.3s ease;
`;

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean; // Para imágenes críticas como el hero
  disableCacheBusting?: boolean; // Opción para deshabilitar cache busting si es necesario
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className,
  priority = false,
  disableCacheBusting = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Aplicar cache busting automáticamente a menos que se deshabilite
  const imageSrc = disableCacheBusting ? src : addCacheBusting(src);

  return (
    <ImageWrapper $isLoaded={isLoaded} className={className}>
      <StyledImage
        src={imageSrc}
        alt={alt}
        $isLoaded={isLoaded}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setIsLoaded(true); // Mostrar aunque haya error
        }}
      />
    </ImageWrapper>
  );
};
