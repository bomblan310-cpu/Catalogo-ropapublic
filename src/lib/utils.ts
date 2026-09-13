// Funciones utilitarias

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const calculateDiscount = (originalPrice: number, discountPercent: number): number => {
  return originalPrice - (originalPrice * discountPercent) / 100;
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-')
    .trim();
};

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const getImageUrl = (imageName: string): string => {
  if (imageName.startsWith('http')) {
    return imageName;
  }
  return `${process.env.NEXT_PUBLIC_API_URL}/images/${imageName}`;
};
