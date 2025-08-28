import type { MouseEvent as ReactMouseEvent, ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { SiStyledcomponents, SiNextdotjs, SiGraphql, SiTailwindcss, SiReact, SiRedux, SiFirebase, SiSass, SiStorybook, SiAuth0, SiSanity, SiReactquery, SiEslint, SiTypescript, SiNestjs, SiMongodb, SiPuppeteer, SiGmail, SiGoogle, SiPostgresql } from 'react-icons/si';
import { ZustandIcon, ShadcnIcon, NextAuthIcon } from './CustomIcons';
import { getTranslations } from '@/i18n/utils';
import type { Translation } from '@/i18n/types';

const iconMap: { [key: string]: IconType } = {
  "react": SiReact,
  "redux": SiRedux,
  "firebase": SiFirebase,
  "styled-components": SiStyledcomponents,
  "nextjs": SiNextdotjs,
  "graphql": SiGraphql,
  "tailwindcss": SiTailwindcss,
  "sass": SiSass,
  "storybook": SiStorybook,
  "auth0": SiAuth0,
  "sanity": SiSanity,
  "react-query": SiReactquery,
  "eslint": SiEslint,
  "typescript": SiTypescript,
  "nestjs": SiNestjs,
  "mongodb": SiMongodb,
  "puppeteer": SiPuppeteer,
  "zustand": ZustandIcon,
  "shadcnui": ShadcnIcon,
  "gmail": SiGmail,
  "google-oauth": SiGoogle
};

// Define the type for image renderer props
interface ImageRendererProps {
  src?: string;
  alt?: string;
}

// Define the type for video renderer props
interface VideoRendererProps {
  src?: string;
}

// Custom renderer for images
const ImageRenderer = ({ src, alt }: ImageRendererProps) => (
  <div className="my-4">
    <img src={src} alt={alt} className="rounded-lg h-[400px] w-[800px]" />
  </div>
);

// Custom renderer for videos
const VideoRenderer = ({ src }: VideoRendererProps) => (
  <div className="my-4">
    <video controls className="w-full rounded-lg">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

// Define the type for the technologies prop
interface Technology {
  icon: string;
  name: string;
}

// Define the type for the component's props
interface ProjectCardProps {
  title: string;
  icon?: string;
  technologies: Technology[];
  markdownContent?: string;
  generalDescription?: string;
  techDescription?: string;
  imageSrc?: string;
  siteLink?: string;
  repoLink?: string;
  children?: ReactNode;
  className?: string;
  lang?: 'es' | 'en';
}

export default function ProjectCard({
  title,
  icon,
  technologies,
  markdownContent,
  generalDescription,
  techDescription,
  imageSrc,
  siteLink,
  repoLink,
  children,
  className,
  lang = 'es',
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [translations, setTranslations] = useState<Translation | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const shouldUseColumns = technologies.length > 4;

  // Load translations
  useEffect(() => {
    getTranslations(lang).then(setTranslations);
  }, [lang]);

  // Get project-specific translations
  const getProjectTranslations = () => {
    if (!translations) return { generalDescription, techDescription };
    
    const projectKey = title.toLowerCase().replace(/\s+/g, '');
    const projectTranslations = translations.projects[projectKey as keyof typeof translations.projects];
    
    if (projectTranslations && typeof projectTranslations === 'object') {
      return {
        generalDescription: projectTranslations.generalDescription || generalDescription,
        techDescription: projectTranslations.techDescription || techDescription
      };
    }
    
    return { generalDescription, techDescription };
  };

  const { generalDescription: translatedGeneralDesc, techDescription: translatedTechDesc } = getProjectTranslations();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };
  
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <div onClick={() => setIsModalOpen(true)} className={`relative h-52 rounded-lg overflow-hidden group cursor-pointer ${className || ""}`}>
        <img
          src={imageSrc}
          alt={title}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70 flex flex-col justify-end p-6">
          <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
          <Button 
            size="lg" 
            variant="gradientSecondary"
            className="w-full transition-all duration-300 ease-in-out transform group-hover:scale-105"
          >
            {translations?.projects.openProjectOverview || "Open Project Overview"}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-start justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="relative w-full max-w-4xl my-8"
              onClick={(e: ReactMouseEvent) => e.stopPropagation()}
            >
              <Card className="w-full max-h-[90vh] overflow-hidden">
                <CardContent className="p-6">
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex justify-between items-center mb-6 sticky top-0 bg-background z-10 py-2"
                  >
                    <div className="flex items-center">
                      {icon && (
                        <img
                          src={icon}
                          alt={`${title} icon`}
                          className="w-8 h-8 mr-4 text-primary"
                        />
                      )}
                      <h1 className="text-4xl font-bold">{title}</h1>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </motion.div>
                  
                  <ScrollArea className="h-[calc(90vh-8rem)] pr-4 pb-6">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                    >
                      <div>
                        <h2 className="text-xl font-semibold mb-2">{translations?.projects.technologies || "Technologies:"}</h2>
                        <ul className={`space-y-1 ${shouldUseColumns ? 'columns-2' : ''}`}>
                          {technologies.map((tech, index) => {
                            const IconComponent = iconMap[tech.icon];
                            return (
                              <motion.li 
                                key={index} 
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * index }}
                                className="flex items-center break-inside-avoid"
                              >
                                {IconComponent && <IconComponent className="mr-3 h-5 w-5" />}
                                {tech.name}
                              </motion.li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="flex flex-col space-y-4 md:items-end">
                        {siteLink && (
                          <motion.div 
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="w-full md:w-40"
                          >
                            <Button variant="gradientPrimary" asChild className="w-full">
                              <a href={siteLink} target="_blank" rel="noopener noreferrer">
                                {translations?.projects.visitSite || "Visit Site"}
                              </a>
                            </Button>
                          </motion.div>
                        )}
                        {repoLink && (
                          <motion.div 
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="w-full md:w-40"
                          >
                            <Button asChild variant="gradientSecondary" className="w-full">
                              <a href={repoLink} target="_blank" rel="noopener noreferrer">
                                {translations?.projects.seeRepository || "See Repository"}
                              </a>
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                    
                    {children ? (
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {children}
                      </motion.div>
                    ) : markdownContent ? (
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="prose max-w-none"
                      >
                        <ReactMarkdown
                          components={{
                            img: ImageRenderer,
                            video: VideoRenderer
                          }}
                        >
                          {markdownContent}
                        </ReactMarkdown>
                      </motion.div>
                    ) : (
                      <>
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                        >
                          {translatedGeneralDesc && (
                            <div>
                              <h2 className="text-xl font-semibold mb-2">{translations?.projects.generalDescription || "General Description:"}</h2>
                              <p className="text-sm">{translatedGeneralDesc}</p>
                            </div>
                          )}
                          {translatedTechDesc && (
                            <div>
                              <h2 className="text-xl font-semibold mb-2">{translations?.projects.techDescription || "Tech Description:"}</h2>
                              <p className="text-sm">{translatedTechDesc}</p>
                            </div>
                          )}
                        </motion.div>
                        
                        {imageSrc && (
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                          >
                            <img
                              src={imageSrc}
                              alt={`${title} Screenshot`}
                              className="rounded-lg shadow-lg mx-auto"
                            />
                          </motion.div>
                        )}
                      </>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}