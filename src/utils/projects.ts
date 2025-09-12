import type { GetStaticPathsItem } from 'astro';

// Define the project data structure
export interface ProjectData {
  title: string;
  icon?: string;
  technologies: Array<{
    icon: string;
    name: string;
  }>;
  generalDescription?: string;
  techDescription?: string;
  imageSrc?: string;
  siteLink?: string;
  repoLink?: string;
  markdownContent?: string;
}

// Available languages
export const LANGUAGES = ['en', 'es'] as const;
export type Language = typeof LANGUAGES[number];

// All available project slugs (based on your current data)
export const PROJECT_SLUGS = [
  'presus',
  'vation', 
  'filmo',
  'what-if-investments',
  'zapparia'
] as const;

export type ProjectSlug = typeof PROJECT_SLUGS[number];

/**
 * Get all available projects for a given language
 */
export async function getAllProjects(lang: Language): Promise<ProjectData[]> {
  const projects = await Promise.all(
    PROJECT_SLUGS.map(slug => getProjectBySlug(slug, lang))
  );
  
  return projects.filter(Boolean) as ProjectData[];
}

/**
 * Get a specific project by slug and language with validation
 */
export async function getProjectBySlug(
  slug: string, 
  lang: Language
): Promise<ProjectData | null> {
  // Validate slug
  if (!isValidSlug(slug)) {
    console.warn(`Invalid project slug: ${slug}`);
    return null;
  }

  try {
    // Import the project data dynamically
    const projectData = await import(`../data/projects/${lang}/${slug}.json`);
    return projectData.default as ProjectData;
  } catch (error) {
    console.warn(`Project not found: ${slug} for language: ${lang}`);
    
    // Try fallback to default language if not already trying it
    if (lang !== 'en') {
      try {
        const fallbackData = await import(`../data/projects/en/${slug}.json`);
        console.info(`Using fallback English data for project: ${slug}`);
        return fallbackData.default as ProjectData;
      } catch (fallbackError) {
        console.error(`No fallback available for project: ${slug}`);
      }
    }
    
    return null;
  }
}

/**
 * Validate if a slug is in our allowed project slugs
 */
export function isValidSlug(slug: string): slug is ProjectSlug {
  return PROJECT_SLUGS.includes(slug as ProjectSlug);
}

/**
 * Sanitize slug for URL safety
 */
export function sanitizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Generate static paths for Astro's getStaticPaths()
 */
export async function getProjectStaticPaths(): Promise<GetStaticPathsItem[]> {
  const paths: GetStaticPathsItem[] = [];

  for (const lang of LANGUAGES) {
    for (const slug of PROJECT_SLUGS) {
      const project = await getProjectBySlug(slug, lang);
      
      if (project) {
        paths.push({
          params: { slug },
          props: { 
            project,
            lang,
            slug 
          }
        });
      }
    }
  }

  return paths;
}

/**
 * Get navigation data for previous/next project links
 */
export function getProjectNavigation(currentSlug: string): {
  prev: ProjectSlug | null;
  next: ProjectSlug | null;
} {
  const currentIndex = PROJECT_SLUGS.indexOf(currentSlug as ProjectSlug);
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  const prevIndex = currentIndex > 0 ? currentIndex - 1 : PROJECT_SLUGS.length - 1;
  const nextIndex = currentIndex < PROJECT_SLUGS.length - 1 ? currentIndex + 1 : 0;

  return {
    prev: PROJECT_SLUGS[prevIndex],
    next: PROJECT_SLUGS[nextIndex]
  };
}

/**
 * Generate SEO meta data for a project
 */
export function generateProjectMeta(
  project: ProjectData, 
  lang: Language,
  baseUrl: string = 'https://franbeccaria.com'
): {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
} {
  const langPrefix = lang === 'en' ? '' : '/es';
  const slug = PROJECT_SLUGS.find(s => 
    project.title.toLowerCase().replace(/\s+/g, '').includes(s.toLowerCase())
  ) || 'project';

  return {
    title: `${project.title} - Francisco Beccaria`,
    description: project.generalDescription || `${project.title} project by Francisco Beccaria`,
    canonical: `${baseUrl}${langPrefix}/${slug}`,
    ogImage: project.imageSrc || '/hero.webp'
  };
}