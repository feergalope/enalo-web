import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../styles/theme';
import { focusRing } from '../../styles/mixins';

const ScrollButton = styled(motion.button)`
  position: fixed;
  bottom: ${theme.space.xl};
  right: ${theme.space.xl};
  width: 48px;
  height: 48px;
  background: ${theme.colors.olive};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.radius.full};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fonts.sizes.lg};
  box-shadow: ${theme.shadows.md};
  z-index: 100;
  transition: all ${theme.transitions.fast};
  
  &:hover {
    background: ${theme.colors.sage};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
  
  ${focusRing}
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    bottom: ${theme.space.lg};
    right: ${theme.space.lg};
    width: 44px;
    height: 44px;
  }
`;

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <ScrollButton
          onClick={scrollToTop}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-label="Volver arriba"
        >
          ↑
        </ScrollButton>
      )}
    </AnimatePresence>
  );
};
