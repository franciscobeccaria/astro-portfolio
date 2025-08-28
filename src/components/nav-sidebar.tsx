import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '@/lib/scrollToSection';
import { getTranslations } from '@/i18n/utils';
import type { Translation } from '@/i18n/types';

interface NavSidebarComponentProps {
  toggleButtonClassName?: string;
  lang: 'es' | 'en';
}

export default function NavSidebarComponent({ toggleButtonClassName = '', lang }: NavSidebarComponentProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [translations, setTranslations] = useState<Translation | null>(null);

  useEffect(() => {
    getTranslations(lang).then(setTranslations);
  }, [lang]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  if (!translations) return null;

  const navLinks = [
    { id: 'hero', label: translations.nav.home },
    { id: 'projects', label: translations.nav.projects },
    { id: 'about', label: translations.nav.about },
  ];

  return (
    <>
      <Button
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        variant="ghost"
        size="icon"
        className={toggleButtonClassName}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 sm:w-[28rem] bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <X size={24} />
        </button>
        <nav className="flex flex-col h-full justify-center items-center px-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { toggleSidebar(); scrollToSection(link.id); }}
              className="py-2 text-3xl font-bold text-gray-800 hover:text-blue-600 text-center w-full"
            >
              {link.label}
            </button>          
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  )
}