/**
 * Sistema de cache busting para imágenes y assets
 * 
 * Actualiza IMAGE_VERSION cada vez que cambies las imágenes
 * para forzar a los navegadores a descargar las nuevas versiones
 */

// IMPORTANTE: Incrementa este número cada vez que actualices las imágenes
export const IMAGE_VERSION = '1.0.1';

/**
 * Añade un parámetro de versión a una URL de imagen para evitar problemas de caché
 * @param url - URL de la imagen (relativa o absoluta)
 * @returns URL con parámetro de versión
 */
export const addCacheBusting = (url: string): string => {
  if (!url) return url;
  
  // Si ya tiene parámetros, añade con &, si no con ?
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}v=${IMAGE_VERSION}`;
};

/**
 * Construye una URL de imagen desde la carpeta public con cache busting
 * @param path - Ruta relativa desde la carpeta public (ej: 'images/hero/background.png')
 * @returns URL completa con cache busting
 */
export const getImageUrl = (path: string): string => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const fullUrl = `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
  return addCacheBusting(fullUrl);
};

/**
 * Helper para imágenes de productos
 */
export const getProductImageUrl = (filename: string): string => {
  return getImageUrl(`images/products/${filename}`);
};

/**
 * Helper para imágenes del hero
 */
export const getHeroImageUrl = (filename: string): string => {
  return getImageUrl(`images/hero/${filename}`);
};

/**
 * Helper para iconos
 */
export const getIconUrl = (filename: string): string => {
  return getImageUrl(`images/icons/${filename}`);
};

