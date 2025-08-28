import { useState, useEffect } from 'react';
import { setStoredLanguage } from '@/lib/languageUtils';

interface LanguageSelectorProps {
  currentLang: 'es' | 'en';
  className?: string;
}

export default function LanguageSelector({ currentLang, className = '' }: LanguageSelectorProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const switchLanguage = (newLang: 'es' | 'en') => {
    if (newLang === currentLang) return;
    
    const currentPath = window.location.pathname;
    let newPath: string;

    if (newLang === 'es') {
      // Switch to Spanish
      newPath = currentPath === '/' ? '/es' : `/es${currentPath}`;
    } else {
      // Switch to English
      if (currentPath.startsWith('/es')) {
        newPath = currentPath.replace('/es', '') || '/';
      } else {
        newPath = '/';
      }
    }

    // Store the language preference
    setStoredLanguage(newLang);
    
    window.location.href = newPath;
  };

  return (
    <div className={`flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 ${className}`}>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
          currentLang === 'en'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('es')}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
          currentLang === 'es'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        }`}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
    </div>
  );
}