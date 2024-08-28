// Type for the homepage details object
 export interface Details {
    profession: string;
    title: string;
    subHeadline: string;
}

// Type for individual project details
export interface Project {
    name: string;
    description: string;
    image: string; 
    url: string;
}

export type Projects = Project[];


