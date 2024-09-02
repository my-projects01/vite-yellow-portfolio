// Interface representing personal details
export interface Details {
    profession?: string | null;      // The profession of the individual, can be null
    title?: string | null;           // The title of the individual, can be null
    subHeadline?: string | null;     // A brief subheadline or tagline, can be null
    linkedInUrl?: string | null;       // LinkedIn profile URL, can be null
    resumeUrl?: string | null;         // Resume URL, can be null
}

// Interface representing individual project details
export interface Project {
    name: string;                     // Name of the project
    description: string;              // Brief description of the project
    image: string;                    // URL of the project image
    url: string;                      // URL to the project
}

// Interface representing social media links
export interface SocialMediaLinks {
    instagram?: string | null;          // Instagram profile URL, can be null
    linkedInUrl?: string | null;       // LinkedIn profile URL, can be null
    githubUrl?: string | null;         // GitHub profile URL, can be null
    twitterUrl?: string | null;        // Twitter profile URL, can be null
    email?: string | null;           // Email address, can be null
    resumeUrl?: string | null;         // Resume URL, can be null
}

// Interface representing the About section data
export interface AboutData {
    name: string | null | undefined;                    // Name of the individual
    title: string | null | undefined;                   // Title of the individual
    subHeadline: string | null | undefined;             // Subheadline or tagline
    resumeUrl: string | null |undefined;          // Resume URL, can be null
}

// Type representing an array of projects
export type Projects = Project[];