import type { Languages } from '@/i18n/utils';

// Lista de slugs de proyectos disponibles
export const PROJECT_SLUGS = [
  'presus', 
  'vation', 
  'filmo', 
  'what-if-investments', 
  'zapparia'
] as const;

export type ProjectSlug = typeof PROJECT_SLUGS[number];

// Validador de slugs
export function isValidProjectSlug(slug: string): slug is ProjectSlug {
  return PROJECT_SLUGS.includes(slug as ProjectSlug);
}

// Función para obtener datos de proyecto por slug y idioma
export async function getProjectData(slug: ProjectSlug, lang: Languages) {
  try {
    const projectData = await import(`@/data/projects/${lang}/${slug}.json`);
    return projectData.default;
  } catch (error) {
    console.error(`Error loading project data for ${slug} in ${lang}:`, error);
    return null;
  }
}

// Función para extraer project slug de URL params
export function getProjectSlugFromURL(): ProjectSlug | null {
  if (typeof window === 'undefined') return null;
  
  const urlParams = new URLSearchParams(window.location.search);
  const projectParam = urlParams.get('project');
  
  if (projectParam && isValidProjectSlug(projectParam)) {
    return projectParam;
  }
  
  return null;
}

// Función para actualizar URL con project param
export function updateURLWithProject(slug: ProjectSlug | null, preserveOtherParams: boolean = true) {
  if (typeof window === 'undefined') return;
  
  const url = new URL(window.location.href);
  const params = new URLSearchParams(preserveOtherParams ? url.search : '');
  
  if (slug) {
    params.set('project', slug);
  } else {
    params.delete('project');
  }
  
  const newURL = `${url.pathname}${params.toString() ? '?' + params.toString() : ''}${url.hash}`;
  window.history.pushState({}, '', newURL);
}

// Función para manejar navegación browser history
export function setupProjectHistoryHandler(onProjectChange: (slug: ProjectSlug | null) => void) {
  if (typeof window === 'undefined') return;
  
  const handlePopState = () => {
    const currentSlug = getProjectSlugFromURL();
    onProjectChange(currentSlug);
  };
  
  window.addEventListener('popstate', handlePopState);
  
  // Cleanup function
  return () => {
    window.removeEventListener('popstate', handlePopState);
  };
}