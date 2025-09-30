import { useState, useEffect } from 'react';

export type ConsentStatus = 'accepted' | 'rejected' | 'pending';

export interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'mlConsent';
const PREFERENCES_KEY = 'mlCookiePreferences';

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<ConsentStatus>('pending');
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentStatus;
    const storedPreferences = localStorage.getItem(PREFERENCES_KEY);
    
    if (stored && ['accepted', 'rejected'].includes(stored)) {
      setConsent(stored);
    }
    
    if (storedPreferences) {
      try {
        const parsed = JSON.parse(storedPreferences);
        setPreferences(parsed);
      } catch (error) {
        // Error silencioso
      }
    }
  }, []);

  const acceptCookies = (customPreferences?: Partial<CookiePreferences>) => {
    const newPreferences = customPreferences 
      ? { ...preferences, ...customPreferences }
      : {
          necessary: true,
          functional: true,
          analytics: true,
          marketing: true,
        };
    
    setConsent('accepted');
    setPreferences(newPreferences);
    localStorage.setItem(STORAGE_KEY, 'accepted');
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(newPreferences));
    
    // Initialize analytics if consent is given
    if (newPreferences.analytics) {
      initializeAnalytics();
    }
  };

  const rejectCookies = () => {
    const minimalPreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    
    setConsent('rejected');
    setPreferences(minimalPreferences);
    localStorage.setItem(STORAGE_KEY, 'rejected');
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(minimalPreferences));
  };

  const resetConsent = () => {
    setConsent('pending');
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(PREFERENCES_KEY);
  };

  const updatePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(newPreferences));
    
    // Update analytics based on new preferences
    if (newPreferences.analytics) {
      initializeAnalytics();
    } else {
      disableAnalytics();
    }
  };

  const initializeAnalytics = () => {
    // Initialize Google Analytics or other tracking services
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: preferences.marketing ? 'granted' : 'denied',
      });
    }
  };

  const disableAnalytics = () => {
    // Disable tracking services
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
  };

  return {
    consent,
    preferences,
    acceptCookies,
    rejectCookies,
    resetConsent,
    updatePreferences,
    hasConsent: consent !== 'pending',
    canTrack: consent === 'accepted' && (preferences.analytics || preferences.marketing),
  };
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
