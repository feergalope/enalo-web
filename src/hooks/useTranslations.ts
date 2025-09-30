import { useState, useEffect, useCallback } from 'react';
import { translations, defaultLanguage, type Language, type Translations } from '../data/translations';

const STORAGE_KEY = 'mlLanguage';

export const useTranslations = () => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  // Cargar idioma guardado al inicializar
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Language;
      if (stored && translations[stored]) {
        setLanguage(stored);
      }
    } catch (error) {
      // Error silencioso, usar idioma por defecto
    }
  }, []);

  // Función para cambiar idioma
  const changeLanguage = useCallback((newLanguage: Language) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage);
      try {
        localStorage.setItem(STORAGE_KEY, newLanguage);
      } catch (error) {
        // Error silencioso
      }
    }
  }, []);

  // Función para obtener traducción
  const t = useCallback((key: string, fallback?: string): string => {
    try {
      const keys = key.split('.');
      let value: any = translations[language];
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          // Intentar con idioma por defecto si no se encuentra
          if (language !== defaultLanguage) {
            let fallbackValue: any = translations[defaultLanguage];
            for (const fk of keys) {
              if (fallbackValue && typeof fallbackValue === 'object' && fk in fallbackValue) {
                fallbackValue = fallbackValue[fk];
              } else {
                fallbackValue = null;
                break;
              }
            }
            if (typeof fallbackValue === 'string') {
              return fallbackValue;
            }
          }
          
          return fallback || key;
        }
      }
      
      if (typeof value === 'string') {
        return value;
      }
      
      return fallback || key;
    } catch (error) {
      return fallback || key;
    }
  }, [language]);

  // Obtener traducciones completas del idioma actual
  const getTranslations = useCallback((): Translations => {
    return translations[language];
  }, [language]);

  return { 
    t, 
    language, 
    changeLanguage, 
    getTranslations,
    isReady: true // Siempre listo, no hay carga asíncrona
  };
};
