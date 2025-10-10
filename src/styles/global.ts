import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    height: 100%;
  }
  
  body {
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fonts.weights.normal};
    line-height: 1.6;
    color: ${theme.colors.textPrimary};
    background-color: ${theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-top: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${theme.fonts.weights.semibold};
    line-height: 1.3;
    margin-bottom: ${theme.space.md};
  }
  
  h1 {
    font-size: ${theme.fonts.sizes.xxxxl};
  }
  
  h2 {
    font-size: ${theme.fonts.sizes.xxxl};
  }
  
  h3 {
    font-size: ${theme.fonts.sizes.xxl};
  }
  
  h4 {
    font-size: ${theme.fonts.sizes.xl};
  }
  
  p {
    margin-bottom: ${theme.space.md};
    text-align: justify;
  }
  
  a {
    color: ${theme.colors.olive};
    text-decoration: none;
    transition: color ${theme.transitions.fast};
    
    &:hover {
      color: ${theme.colors.sage};
    }
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all ${theme.transitions.fast};
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  ul, ol {
    list-style: none;
  }
  
  input, textarea {
    font-family: inherit;
    outline: none;
  }
  
  /* Focus styles for accessibility */
  *:focus-visible {
    outline: 2px solid ${theme.colors.olive};
    outline-offset: 2px;
  }
  
  /* Smooth scrolling for anchor links */
  html {
    scroll-padding-top: 50px;
  }
`;
