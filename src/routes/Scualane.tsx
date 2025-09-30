import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { SEO } from '../components/SEO/SEO';
import { Section } from '../components/Section/Section';
import { theme } from '../styles/theme';
import { trackPageView } from '../lib/analytics';

const ScualaneContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.space.xxxl};
  
  h1 {
    font-size: ${theme.fonts.sizes.xxxl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.lg};
  }
  
  p {
    font-size: ${theme.fonts.sizes.lg};
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ContentSection = styled.div`
  margin-bottom: ${theme.space.xxxl};
  
  h2 {
    font-size: ${theme.fonts.sizes.xxl};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.lg};
  }
  
  p {
    font-size: ${theme.fonts.sizes.md};
    color: ${theme.colors.textSecondary};
    line-height: 1.7;
    margin-bottom: ${theme.space.lg};
  }
  
  strong {
    color: ${theme.colors.textPrimary};
    font-weight: ${theme.fonts.weights.semibold};
  }
`;

const UsageCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space.lg};
  margin: ${theme.space.xl} 0;
`;

const UsageCard = styled.div<{ $active: boolean }>`
  background: ${props => props.$active ? theme.colors.warmBeige : theme.colors.white};
  border: 1px solid ${props => props.$active ? theme.colors.olive : theme.colors.mutedLine};
  border-radius: ${theme.radius.lg};
  padding: ${theme.space.lg};
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  transform: ${props => props.$active ? 'scale(1.02)' : 'scale(1)'};
  
  &:hover {
    border-color: ${theme.colors.olive};
    transform: scale(1.01);
  }
  
  h3 {
    font-size: ${theme.fonts.sizes.lg};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.space.sm};
  }
  
  p {
    font-size: ${theme.fonts.sizes.md};
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
    margin: 0;
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${theme.space.lg} 0;
  
  li {
    font-size: ${theme.fonts.sizes.md};
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
    margin-bottom: ${theme.space.sm};
    padding-left: ${theme.space.lg};
    position: relative;
    
    &::before {
      content: '✓';
      color: ${theme.colors.olive};
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

