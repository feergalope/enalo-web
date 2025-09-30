// Analytics stub - no real tracking, just console logs for development
// In production, this would connect to real analytics services

declare global {
  interface Window {
    __mlConsent?: string;
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Check if analytics is allowed based on cookie preferences
const isAnalyticsAllowed = (): boolean => {
  const consent = localStorage.getItem('mlConsent');
  const preferences = localStorage.getItem('mlCookiePreferences');
  
  if (consent !== 'accepted') return false;
  
  if (preferences) {
    try {
      const parsed = JSON.parse(preferences);
      return parsed.analytics === true;
    } catch (error) {
      return false;
    }
  }
  
  return false;
};

// Check if marketing tracking is allowed
const isMarketingAllowed = (): boolean => {
  const consent = localStorage.getItem('mlConsent');
  const preferences = localStorage.getItem('mlCookiePreferences');
  
  if (consent !== 'accepted') return false;
  
  if (preferences) {
    try {
      const parsed = JSON.parse(preferences);
      return parsed.marketing === true;
    } catch (error) {
      return false;
    }
  }
  
  return false;
};

export const trackPageView = (route: string) => {
  if (!isAnalyticsAllowed()) {
    return;
  }
  
  // Initialize dataLayer if it doesn't exist
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  
  // Push page view event
  window.dataLayer.push({
    event: 'page_view',
    page_path: route,
    timestamp: new Date().toISOString(),
  });
  
  // Set consent status for external scripts
  window.__mlConsent = 'accepted';
  
  // Send to Google Analytics if available
  if (window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: route,
    });
  }
};

export const trackEvent = (eventName: string, payload?: any) => {
  if (!isAnalyticsAllowed()) {
    return;
  }
  
  // Initialize dataLayer if it doesn't exist
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  
  // Push custom event
  window.dataLayer.push({
    event: eventName,
    ...payload,
    timestamp: new Date().toISOString(),
  });
  
  // Send to Google Analytics if available
  if (window.gtag) {
    window.gtag('event', eventName, payload);
  }
};

export const trackConversion = (conversionType: string, value?: number) => {
  if (!isMarketingAllowed()) {
    return;
  }
  
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
  });
};

export const trackUserInteraction = (interactionType: string, element: string) => {
  if (!isAnalyticsAllowed()) {
    return;
  }
  
  trackEvent('user_interaction', {
    interaction_type: interactionType,
    element: element,
  });
};

// Initialize Google Consent Mode
export const initializeConsentMode = () => {
  if (typeof window === 'undefined') return;
  
  // Set default consent state
  window.gtag = window.gtag || function() {
    (window.dataLayer = window.dataLayer || []).push(arguments);
  };
  
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted', // Always granted for necessary cookies
  });
  
  // Update consent based on user preferences
  const consent = localStorage.getItem('mlConsent');
  const preferences = localStorage.getItem('mlCookiePreferences');
  
  if (consent === 'accepted' && preferences) {
    try {
      const parsed = JSON.parse(preferences);
      
      window.gtag('consent', 'update', {
        analytics_storage: parsed.analytics ? 'granted' : 'denied',
        ad_storage: parsed.marketing ? 'granted' : 'denied',
        ad_user_data: parsed.marketing ? 'granted' : 'denied',
        ad_personalization: parsed.marketing ? 'granted' : 'denied',
        functionality_storage: parsed.functional ? 'granted' : 'denied',
        personalization_storage: parsed.functional ? 'granted' : 'denied',
      });
    } catch (error) {
      // Error silencioso
    }
  }
};

// Initialize consent mode when the module loads
if (typeof window !== 'undefined') {
  initializeConsentMode();
}
