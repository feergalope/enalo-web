import { Helmet } from 'react-helmet-async';
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

  const defaultTitle = t('hero.title');
  const defaultDescription = t('hero.subtitle');

  const fullTitle = title ? `${title} | macarenalorenzo` : `macarenalorenzo | ${defaultTitle}`;
  const fullDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="language" content={language} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={language === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:site_name" content="macarenalorenzo" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Preload fonts */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" as="style" />
    </Helmet>
  );
};
