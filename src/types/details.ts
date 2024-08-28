// Type definitions for personal details, project details and social media links
type URL = string;

// Interface for personal details
export interface Details {
    profession: string;
    title: string;
    subHeadline: string;
    linkedInUrl?: URL;
}

// Type for individual project details
export interface Project {
    name: string;
    description: string;
    image: string; 
    url: string;
}

// Interface for social media links
export interface Socials {
    instagram?: URL;
    linkedInUrl?: URL;
    githubUrl?: URL;
    twitterUrl?: URL;
    email?: string;
}

export type Projects = Project[];


