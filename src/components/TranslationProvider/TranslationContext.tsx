import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { translations, defaultLanguage, type Language, type Translations } from '../../data/translations';

const STORAGE_KEY = 'mlLanguage';

interface TranslationContextType {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
  t: (key: string, fallback?: string) => string;
  getTranslations: () => Translations;
  isReady: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [isReady, setIsReady] = useState(false);

  // Cargar idioma guardado al inicializar
  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsReady(true);
      return;
    }
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Language;
      if (stored && translations[stored]) {
        setLanguage(stored);
      }
    } catch (error) {
      // Error silencioso, usar idioma por defecto
    } finally {
      // Marcar como listo después de intentar cargar el idioma
      setIsReady(true);
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
    if (!isReady) {
      return fallback || key;
    }

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
  }, [language, isReady]);

  // Obtener traducciones completas del idioma actual
  const getTranslations = useCallback((): Translations => {
    return translations[language];
  }, [language]);

  const value = {
    language,
    changeLanguage,
    t,
    getTranslations,
    isReady
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
  }
  return context;
}; 