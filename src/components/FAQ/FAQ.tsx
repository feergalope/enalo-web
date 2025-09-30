import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '../../hooks/useTranslations';
import { theme } from '../../styles/theme';
import { focusRing } from '../../styles/mixins';

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid ${theme.colors.mutedLine};
  
  &:last-child {
    border-bottom: none;
  }
`;

const QuestionButton = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  background: none;
  border: none;
  padding: ${theme.space.xl} 0;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color ${theme.transitions.fast};
  
  &:hover {
    color: ${theme.colors.olive};
  }
  
  ${focusRing}
`;

const QuestionText = styled.h3`
  font-size: ${theme.fonts.sizes.lg};
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.textPrimary};
  margin: 0;
  flex: 1;
`;

const ToggleIcon = styled(motion.span)`
  font-size: ${theme.fonts.sizes.xl};
  color: ${theme.colors.olive};
  margin-left: ${theme.space.md};
`;

const AnswerContainer = styled(motion.div)`
  overflow: hidden;
`;

const AnswerText = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fonts.sizes.md};
  line-height: 1.6;
  margin: 0 0 ${theme.space.xl} 0;
  padding-right: ${theme.space.xl};
`;

export const FAQ: React.FC = () => {
  const { t } = useTranslations();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(key)) {
      newOpenItems.delete(key);
    } else {
      newOpenItems.add(key);
    }
    setOpenItems(newOpenItems);
  };

  const faqItems = [
    'greasy',
    'sensitive',
    'actives',
    'hair',
    'comedogenic',
    'origin',
  ];

  return (
    <FAQContainer>
      {faqItems.map((key) => {
        const isOpen = openItems.has(key);
        
        return (
          <FAQItem key={key}>
            <QuestionButton
              $isOpen={isOpen}
              onClick={() => toggleItem(key)}
              aria-expanded={isOpen}
            >
              <QuestionText>
                {t(`faq.questions.${key}.question`)}
              </QuestionText>
              <ToggleIcon
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </ToggleIcon>
            </QuestionButton>
            
            <AnimatePresence>
              {isOpen && (
                <AnswerContainer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <AnswerText>
                    {t(`faq.questions.${key}.answer`)}
                  </AnswerText>
                </AnswerContainer>
              )}
            </AnimatePresence>
          </FAQItem>
        );
      })}
    </FAQContainer>
  );
};
