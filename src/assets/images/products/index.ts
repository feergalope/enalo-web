// Importaciones de imágenes de productos
import bodyOilImage from './body-oil.png';
import squalane100Image from './squalane-100.png';

export const productImages = {
  'body-oil': bodyOilImage,
  'squalane-100': squalane100Image,
} as const;

export type ProductImageKey = keyof typeof productImages;
