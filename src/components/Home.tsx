import { lazy, Suspense } from 'react'
import "../styles/home.css";
import { details, projects } from "../details";
import profileMask from '../assets/profileMask.svg';
import image from '../assets/propic1.png';
import ProjectCard from "./ProjectCard";
import DetailCard from './DetailCard';
import { Projects } from "../types/details";
import CV from '../assets/CV.pdf';


// Lazy load components that are not immediately necessary
const MyDetails = lazy(() => import('./MyDetails'));

const Home = () => {
    return (
        <main>
            <section id="home">
                <figure className="home-picture-container">
                    <img src={profileMask} className="profile-mask" alt="profile" />
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa"
                        className='profile-picture'
                    />
                </figure>
                <Suspense fallback={<div>Loading details...</div>}>
                    <MyDetails details={details} />
                </Suspense>


            </section>
            <ProjectsSection projects={projects} />

            <AboutSection />

            {/* <ContactSection /> */}
        </main>
    )
}

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

interface AboutData {
    name: string;
    title: string;
    subHeadline: string;
    resumeUrl: string;
}
const aboutData: AboutData = {
    name: details.title,
    title: "About Me",
    subHeadline: "I'm a software engineer with a passion for web development.Short text with details about you, what you do or your professional career. You can add more information on the about page.",
    resumeUrl: details.resumeUrl,
}
// About Section Component
const AboutSection = () => (
    <section id="about">
        <DetailCard
            title={aboutData.title}
            subHeadline={aboutData.subHeadline}
            ButtonTitle1="Resume"
            buttonUrl1={CV?CV:aboutData.resumeUrl}
        />
        <figure className="about-figure">
            <img src={image} alt={`${aboutData.name} about`} />
        </figure>
    </section>
);

// Contact Section Component
// const ContactSection = () => (
//     <section id="contact">
//         <h2>Contact Me</h2>
//     </section>
// );

export default Home;




