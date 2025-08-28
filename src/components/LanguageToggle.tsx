import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Languages } from 'lucide-react';
import { setStoredLanguage } from '@/lib/languageUtils';

interface LanguageToggleProps {
  currentLang: 'es' | 'en';
  className?: string;
}

export default function LanguageToggle({ currentLang, className = '' }: LanguageToggleProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleLanguage = () => {
    const currentPath = window.location.pathname;
    let newPath: string;
    let newLang: 'es' | 'en';

    if (currentLang === 'es') {
      // Switch to English
      newPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
      newLang = 'en';
    } else {
      // Switch to Spanish
      if (currentPath.startsWith('/en')) {
        newPath = currentPath.replace('/en', '') || '/';
      } else {
        newPath = '/';
      }
      newLang = 'es';
    }

    // Store the language preference
    setStoredLanguage(newLang);
    
    window.location.href = newPath;
  };

  const targetLang = currentLang === 'es' ? 'EN' : 'ES';

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className={`flex items-center gap-1 ${className}`}
      aria-label={`Switch to ${targetLang}`}
    >
      <Languages className="h-4 w-4" />
      <span className="text-xs font-medium">{targetLang}</span>
    </Button>
  );
}