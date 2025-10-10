import React, { useState } from 'react';
import styled from 'styled-components';

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
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ImageWrapper $isLoaded={isLoaded} className={className}>
      <StyledImage
        src={src}
        alt={alt}
        $isLoaded={isLoaded}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        onError={(e) => {
          console.error(`Error loading image: ${src}`);
          setIsLoaded(true); // Mostrar aunque haya error
        }}
      />
    </ImageWrapper>
  );
};
