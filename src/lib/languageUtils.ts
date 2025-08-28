// Language persistence utilities

export const LANGUAGE_STORAGE_KEY = 'preferred-language';

export function getStoredLanguage(): 'es' | 'en' | null {
  if (typeof window === 'undefined') return null;
  
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) as 'es' | 'en' | null;
  } catch {
    return null;
  }
}

export function setStoredLanguage(lang: 'es' | 'en'): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // Handle localStorage errors silently
  }
}

export function getBrowserLanguage(): 'es' | 'en' {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('en')) return 'en';
  if (browserLang.startsWith('es')) return 'es';
  
  return 'en'; // Default fallback
}

export function getPreferredLanguage(): 'es' | 'en' {
  // Priority: stored preference > browser language > default
  const stored = getStoredLanguage();
  if (stored) return stored;
  
  return getBrowserLanguage();
}