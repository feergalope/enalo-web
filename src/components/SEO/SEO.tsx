import { useEffect, useState } from 'react';
import { useTranslations } from '../../hooks/useTranslations';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/assets/placeholders/og-image.jpg',
  ogType = 'website',
  canonical,
}) => {
  const { t, language } = useTranslations();
  const [translations, setTranslations] = useState({
    defaultTitle: '',
    defaultDescription: ''
  });

  useEffect(() => {
    // Pre-cargar todas las traducciones
    setTranslations({
      defaultTitle: t('hero.title'),
      defaultDescription: t('hero.subtitle')
    });
  }, [t]);

  const fullTitle = title ? `${title} | macarenalorenzo` : `macarenalorenzo | ${translations.defaultTitle}`;
  const fullDescription = description || translations.defaultDescription;

  useEffect(() => {
    // Actualizar el título de la página
    document.title = fullTitle;

    // Función para actualizar o crear meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Función para actualizar o crear link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Meta tags básicos
    updateMetaTag('description', fullDescription);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    updateMetaTag('language', language);
    updateMetaTag('robots', 'index, follow');

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', fullDescription, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:locale', language === 'es' ? 'es_ES' : 'en_US', true);
    updateMetaTag('og:site_name', 'macarenalorenzo', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', fullDescription);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      updateLinkTag('canonical', canonical);
    }

    // Preload fonts
    const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]') as HTMLLinkElement;
    if (!fontLink) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap';
      link.as = 'style';
      document.head.appendChild(link);
    }
  }, [fullTitle, fullDescription, keywords, ogImage, ogType, canonical, language]);

  // Este componente no renderiza nada visual
  return null;
};
