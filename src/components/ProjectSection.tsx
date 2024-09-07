import { Projects } from "../types/details";
import ProjectCard from "./ProjectCard";

// Separate the Projects section into a dedicated component
const ProjectsSection = ({ projects }: { projects: Projects }) => (
    <section id="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
            <ProjectCard
                key={index}
                name={project.name}
                rl={index % 2}
                description={project.description}
                image={project.image}
                url={project.url}
            />
        ))}
    </section>
);

export default ProjectsSection;