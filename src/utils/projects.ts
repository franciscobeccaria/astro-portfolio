import filmoData from "@/data/projects/en/filmo.json"
import whatIfInvestmentsData from "@/data/projects/en/what-if-investments.json"
import vationData from "@/data/projects/en/vation.json"
import presusData from "@/data/projects/en/presus.json"
import zappariaData from "@/data/projects/en/zapparia.json"

import filmoDataEs from "@/data/projects/es/filmo.json"
import whatIfInvestmentsDataEs from "@/data/projects/es/what-if-investments.json"
import vationDataEs from "@/data/projects/es/vation.json"
import presusDataEs from "@/data/projects/es/presus.json"
import zappariaDataEs from "@/data/projects/es/zapparia.json"

export const PROJECT_SLUGS = [
  'presus', 
  'vation', 
  'filmo', 
  'what-if-investments', 
  'zapparia'
] as const;

export type ProjectSlug = typeof PROJECT_SLUGS[number];

export function isValidSlug(slug: string): slug is ProjectSlug {
  return PROJECT_SLUGS.includes(slug as ProjectSlug);
}

export const englishProjects = [
  { ...presusData, slug: 'presus' as ProjectSlug },
  { ...vationData, slug: 'vation' as ProjectSlug },
  { ...filmoData, slug: 'filmo' as ProjectSlug },
  { ...whatIfInvestmentsData, slug: 'what-if-investments' as ProjectSlug },
  { ...zappariaData, slug: 'zapparia' as ProjectSlug }
];

export const spanishProjects = [
  { ...presusDataEs, slug: 'presus' as ProjectSlug },
  { ...vationDataEs, slug: 'vation' as ProjectSlug },
  { ...filmoDataEs, slug: 'filmo' as ProjectSlug },
  { ...whatIfInvestmentsDataEs, slug: 'what-if-investments' as ProjectSlug },
  { ...zappariaDataEs, slug: 'zapparia' as ProjectSlug }
];

export async function getProjectData(slug: string, lang: 'es' | 'en') {
  if (!isValidSlug(slug)) {
    return null;
  }

  const projects = lang === 'es' ? spanishProjects : englishProjects;
  return projects.find(project => project.slug === slug);
}