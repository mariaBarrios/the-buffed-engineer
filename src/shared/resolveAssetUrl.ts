const ABSOLUTE_URL_PATTERN = /^(?:[a-z][a-z\d+\-.]*:)?\/\//i;

export const resolveAssetUrl = (src: string): string => {
  if (!src || ABSOLUTE_URL_PATTERN.test(src) || src.startsWith('data:')) {
    return src;
  }

  if (!src.startsWith('/')) {
    return src;
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${src}`;
};
