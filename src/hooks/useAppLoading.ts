import { useState, useEffect } from 'react';
import { useTranslations } from './useTranslations';

export const useAppLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isReady: translationsReady } = useTranslations();

  useEffect(() => {
    // Check if fonts are loaded
    const checkFonts = () => {
      if (document.fonts && document.fonts.ready) {
        return document.fonts.ready;
      } else {
        // Fallback for browsers that don't support document.fonts
        return new Promise(resolve => setTimeout(resolve, 1000));
      }
    };

    // Load fonts
    const loadResources = async () => {
      try {
        await checkFonts();
      } catch (error) {
        // Error loading fonts
      }
    };

    // Start loading resources
    loadResources();

    // Minimum loading time to prevent flash and ensure smooth UX
    const minLoadingTime = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    // Also check if DOM is ready
    const checkDOMReady = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => setIsLoading(false), 300);
      }
    };

    if (document.readyState === 'complete') {
      checkDOMReady();
    } else {
      window.addEventListener('load', checkDOMReady);
    }

    return () => {
      clearTimeout(minLoadingTime);
      window.removeEventListener('load', checkDOMReady);
    };
  }, []);

  // Asegurar que las traducciones estén listas antes de mostrar el contenido
  useEffect(() => {
    if (translationsReady && !isLoading) {
      // Pequeño delay para asegurar que todo esté renderizado
      const finalCheck = setTimeout(() => {
        setIsLoading(false);
      }, 100);
      
      return () => clearTimeout(finalCheck);
    }
  }, [translationsReady, isLoading]);

  return { isLoading };
};
