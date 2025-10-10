import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';
import { theme } from '../../styles/theme';
import { container, focusRing } from '../../styles/mixins';

const HeaderContainer = styled(motion.header)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: ${props => props.$scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'blur(5px)'};
  border-bottom: ${props => props.$scrolled ? `1px solid ${theme.colors.mutedLine}` : '1px solid rgba(231, 227, 220, 0.3)'};
  z-index: 1000;
  transition: all ${theme.transitions.normal};
`;

const HeaderContent = styled.div`
  ${container}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.space.lg} 0;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.space.md} 0;
  }
`;

const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${theme.colors.textPrimary};
  transition: color ${theme.transitions.fast};
  margin-left: ${theme.space.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: ${theme.space.md};
  }
  
  &:hover {
    color: ${theme.colors.olive};
  }
  
  ${focusRing}
`;

const LogoTop = styled.span`
  font-size: ${theme.fonts.sizes.lg};
  font-weight: ${theme.fonts.weights.semibold};
  line-height: 1;
`;

const LogoBottom = styled.span`
  font-size: ${theme.fonts.sizes.sm};
  font-weight: ${theme.fonts.weights.medium};
  line-height: 1;
  margin-top: 2px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${theme.space.xl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${props => props.$active ? theme.colors.olive : theme.colors.textPrimary};
  text-decoration: none;
  font-size: ${theme.fonts.sizes.md};
  font-weight: ${theme.fonts.weights.medium};
  transition: color ${theme.transitions.fast};
  position: relative;
  
  &:hover {
    color: ${theme.colors.olive};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background: ${theme.colors.olive};
    transition: width ${theme.transitions.fast};
  }
  
  ${focusRing}
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space.lg};
  margin-right: ${theme.space.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.space.md};
    margin-right: ${theme.space.md};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fonts.sizes.xl};
  cursor: pointer;
  padding: ${theme.space.sm};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: block;
  }
  
  ${focusRing}
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: block;
  }
`;

const MobileMenuContent = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background: ${theme.colors.white};
  padding: ${theme.space.xl};
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${theme.space.lg};
`;

const MobileNavLink = styled(Link)<{ $active: boolean }>`
  color: ${props => props.$active ? theme.colors.olive : theme.colors.textPrimary};
  text-decoration: none;
  font-size: ${theme.fonts.sizes.lg};
  font-weight: ${theme.fonts.weights.medium};
  padding: ${theme.space.md} 0;
  border-bottom: 1px solid ${theme.colors.mutedLine};
  transition: color ${theme.transitions.fast};
  
  &:hover {
    color: ${theme.colors.olive};
  }
  
  ${focusRing}
`;

export const Header: React.FC = () => {
  const { t } = useTranslations();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Inicializar directamente con las traducciones
  const translations = {
    escualano: t('nav.escualano'),
    products: t('nav.products'),
    about: t('nav.about')
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { key: 'escualano' as const, path: '/scualane' },
    { key: 'products' as const, path: '/enalo' },
    { key: 'about' as const, path: '/about' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer
        $scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <HeaderContent>
          <MobileMenuButton 
            onClick={toggleMobileMenu}
            aria-label="Menú móvil"
          >
            ☰
          </MobileMenuButton>
          
          <Logo to="/">
            <LogoTop>ENALÓ</LogoTop>
            <LogoBottom>macarenalorenzo</LogoBottom>
          </Logo>
          
          <Nav>
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                $active={location.pathname === item.path}
              >
                {translations[item.key]}
              </NavLink>
            ))}
          </Nav>
          
          <HeaderActions>
            <LanguageToggle />
          </HeaderActions>
        </HeaderContent>
      </HeaderContainer>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobileMenu}
          >
            <MobileMenuContent
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <MobileNav>
                {navItems.map((item) => (
                  <MobileNavLink
                    key={item.key}
                    to={item.path}
                    $active={location.pathname === item.path}
                    onClick={closeMobileMenu}
                  >
                    {translations[item.key]}
                  </MobileNavLink>
                ))}
              </MobileNav>
            </MobileMenuContent>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};
