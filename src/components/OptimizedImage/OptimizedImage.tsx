import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
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
  // Simplificado: mostrar la imagen directamente sin esperar a la carga
  // Esto funciona igual que en el Hero y no causa problemas de renderizado
  return (
    <StyledImage
      src={src}
      alt={alt}
      className={className}
      loading="eager"
    />
  );
};
