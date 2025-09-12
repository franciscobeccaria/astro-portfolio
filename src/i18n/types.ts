export interface Translation {
  nav: {
    home: string;
    projects: string;
    about: string;
  };
  hero: {
    name: string;
    title: string;
  };
  projects: {
    title: string;
    technologies: string;
    generalDescription: string;
    techDescription: string;
    visitSite: string;
    seeRepository: string;
    openProjectOverview: string;
    preview: string;
    filmo: ProjectDescription;
    vation: ProjectDescription;
    presus: ProjectDescription;
    whatIfInvestments: ProjectDescription;
    zapparia: ProjectDescription;
  };
  about: {
    title: string;
    location: string;
    languages: {
      spanish: string;
      english: string;
    };
    description: string;
    skills: {
      title: string;
      html: string;
      css: string;
      javascript: string;
      additional: string;
    };
    mainTechnologies: string;
  };
  medium: {
    title: string;
  };
  footer: {
    rights: string;
    madeWith: string;
    and: string;
    sendEmail: string;
    resume: string;
    github: string;
    linkedin: string;
    medium: string;
  };
  navigation: {
    home: string;
    backToHome: string;
    backToPortfolio: string;
    goBack: string;
    previousProject: string;
    nextProject: string;
  };
  errors: {
    pageNotFound: string;
    pageNotFoundDescription: string;
    suggestedProjects: string;
  };
}

export interface ProjectDescription {
  generalDescription: string;
  techDescription: string;
}

export type Languages = 'es' | 'en';