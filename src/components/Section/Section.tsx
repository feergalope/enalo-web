import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </SectionContent>
    </SectionContainer>
  );
};
