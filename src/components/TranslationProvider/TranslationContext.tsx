import React, { createContext, useContext, useState, useCallback, ReactNode, useMemo } from 'react';
import { translations, defaultLanguage, type Language, type Translations } from '../../data/translations';

const STORAGE_KEY = 'mlLanguage';

// Función helper para leer localStorage de forma segura
const getStoredLanguage = (): Language => {
  // Solo intentar leer en el cliente
  if (typeof window === 'undefined') {
    return defaultLanguage;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Language;
    return (stored && translations[stored]) ? stored : defaultLanguage;
  } catch {
    // localStorage no disponible (modo privado iOS, etc.)
    return defaultLanguage;
  }
};

interface TranslationContextType {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
  t: (key: string, fallback?: string) => string;
  getTranslations: () => Translations;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Inicializar con el idioma guardado o el por defecto
  const [language, setLanguage] = useState<Language>(getStoredLanguage);

  // Función para cambiar idioma
  const changeLanguage = useCallback((newLanguage: Language) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage);
      // Intentar guardar, pero no fallar si no se puede
      try {
        localStorage.setItem(STORAGE_KEY, newLanguage);
      } catch {
        // localStorage no disponible, continuar de todas formas
      }
    }
  }, []);

  // Función para obtener traducción - completamente síncrona
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

  const value = useMemo(() => ({
    language,
    changeLanguage,
    t,
    getTranslations
  }), [language, changeLanguage, t, getTranslations]);

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