import { getRelativeLocaleUrl } from 'astro:i18n';

export const languages = {
  es: 'Español',
  en: 'English'
};

export const defaultLang = 'en';
export type Languages = keyof typeof languages;

export async function getLangFromUrl(url: URL): Promise<Languages> {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Languages;
  return defaultLang;
}

export async function getTranslations(lang: Languages) {
  switch (lang) {
    case 'en':
      return (await import('./en.json')).default;
    case 'es':
      return (await import('./es.json')).default;
    case 'en':
    default:
      return (await import('./en.json')).default;
  }
}

export function useTranslatedPath(lang: Languages) {
  return function translatePath(path: string, targetLang: string = lang) {
    return getRelativeLocaleUrl(targetLang, path);
  }
}

// Helper to get current language from Astro.url
export function getCurrentLanguage(url: URL): Languages {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Languages;
  return defaultLang;
}