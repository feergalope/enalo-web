// Constantes de imágenes de productos
export const productImages = {
  'body-oil': '/images/products/body-oil.png',
  'squalane-100': '/images/products/squalane-100.png',
} as const;

export type ProductImageKey = keyof typeof productImages;
