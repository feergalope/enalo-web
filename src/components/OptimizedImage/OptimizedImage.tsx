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
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className,
  priority = false
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
};
