import {lazy ,Suspense} from 'react'
import "../styles/home.css";
import { details, projects } from "../details";
import profileMask from '../assets/profileMask.svg';
import ProjectCard from "./ProjectCard";
import { Projects } from "../types/details";

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

            <ContactSection />
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

// About Section Component
const AboutSection = () => (
    <section id="about">
        <h2>About Me</h2>
        <p>
            I am a software developer with a passion for creating and building web applications. I have experience in front-end and back-end development. I am proficient in JavaScript, React, Node.js, and MongoDB. I am currently learning TypeScript and GraphQL.
        </p>
    </section>
);

// Contact Section Component
const ContactSection = () => (
    <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: your-email@example.com</p>
    </section>
);

export default Home;



// import React from 'react'
// import "../styles/home.css";
// import { details, projects } from "../details";
// import profileMask from '../assets/profileMask.svg';
// import ProjectCard from "./ProjectCard";
// import { Suspense, lazy } from 'react';

// // Lazy load components that are not immediately necessary
// const MyDetails = lazy(() => import('./MyDetails'));

// const Home = () => {
//     return (
//         <main>
//             <section id="home">
//                 <figure className="home-picture-container">
//                     <img src={profileMask} className="profile-mask" alt="profile" />
//                     <img
//                         loading="lazy"
//                         srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1abf579d378a9df44ae240c388b3e39bb4c2288ec3312ff955651f9c6a630?placeholderIfAbsent=true&apiKey=6049f25a868a4fa0bc330ea5f13bb6aa"
//                         className='profile-picture'
//                         alt="Profile Picture"
//                     />
//                 </figure>
//                 {/* Use Suspense for lazy-loaded components */}
//                 <Suspense fallback={<div>Loading details...</div>}>
//                     <MyDetails />
//                 </Suspense>
//             </section>

//             <ProjectsSection projects={projects} />

//             <AboutSection />

//             <ContactSection />
//         </main>
//     );
// };

// // Separate the Projects section into a dedicated component
// const ProjectsSection = ({ projects : pro }) => (
//     <section id="projects">
//         <h2>Projects</h2>
//         {projects.map((project, index) => (
//             <ProjectCard
//                 key={index}
//                 name={project.name}
//                 rl={index % 2}
//                 description={project.description}
//                 image={project.image}
//                 url={project.url}
//             />
//         ))}
//     </section>
// );

// // About Section Component
// const AboutSection = () => (
//     <section id="about">
//         <h2>About Me</h2>
//         <p>
//             I am a software developer with a passion for creating and building web applications. I have experience in front-end and back-end development. I am proficient in JavaScript, React, Node.js, and MongoDB. I am currently learning TypeScript and GraphQL.
//         </p>
//     </section>
// );

// // Contact Section Component
// const ContactSection = () => (
//     <section id="contact">
//         <h2>Contact Me</h2>
//         <p>Email: your-email@example.com</p>
//     </section>
// );

// export default Home;




