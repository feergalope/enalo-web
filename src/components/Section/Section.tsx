import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { container, sectionSpacing } from '../../styles/mixins';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  background?: 'white' | 'beige' | 'softBeige';
  className?: string;
}

const SectionContainer = styled.section<{ $background: string }>`
  ${sectionSpacing}
  background: ${props => {
    switch (props.$background) {
      case 'beige':
        return theme.colors.warmBeige;
      case 'softBeige':
        return theme.colors.softBeige;
      default:
        return theme.colors.white;
    }
  }};
`;

const SectionContent = styled.div`
  ${container}
`;

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  background = 'white',
  className,
}) => {
  return (
    <SectionContainer
      id={id}
      $background={background}
      className={className}
    >
      <SectionContent>
        {children}
      </SectionContent>
    </SectionContainer>
  );
};
