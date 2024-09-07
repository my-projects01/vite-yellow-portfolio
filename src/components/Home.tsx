import React, { lazy, Suspense } from 'react'
import "../styles/home.css";
import { details, projects } from "../details";
import image from '../assets/propic1.png';
// import image from '../assets/profileImage.png';
import { Details } from "../types/details";
import { aboutData } from '../details';
import { ActivePage } from '../types/Other';
import Contact from './Contact';
import AboutSection from './AboutSection';


// Lazy load components that are not immediately necessary
const MyDetails = lazy(() => import('./MyDetails'));
const ProjectsSection = lazy(() => import('./ProjectSection'));

interface HomeProps {
    display: ActivePage;
    setDisplay: (value: ActivePage) => void;
}

const Home = ({ display,setDisplay }: HomeProps) => {

    return (
        <main>
            {display === 'home' ? <Cover image={image} details={details} /> : null}
            {display === 'home' || display === 'projects' ? <ProjectsSection projects={projects} /> : null}
            {display === 'home' || display === 'contact' || display === 'about' ? <AboutSection aboutData={aboutData} setDisplay={setDisplay}/> : null}
            {display === 'contact' ? <Contact /> : null}
        </main>
    )
}

// Cover Component
const Cover = ({image, details }: { image:string,   details: Details }) => (
    <section id="home">
        <figure className="home-picture-container">
            <svg
                className='profile-mask'
                id="profile-bg-svg"
                viewBox="0 0 500 500"
                fill="none"
            >
                {/* <!-- Define a pattern to fill the path with the image --> */}
                <defs>
                    <pattern id="image-pattern" patternUnits="userSpaceOnUse" width="500" height="500">
                        <image  href={image} x="50" y="85" width="400" height="400" preserveAspectRatio="xMidYMid slice" />
                    </pattern>
                </defs>

                {/* <!-- Path filled with the defined pattern --> */}
                <path d='M 50 0 C 60 75 -87 163 87 305 C 216 422 198 570 500 417 V 0 Z'
                    className='profile-image-bg'/>
                <path d='M 50 0 C 60 75 -87 163 87 305 C 216 422 198 570 500 417 V 0 Z'
                    fill="url(#image-pattern)" />
            </svg>
        </figure>
        <Suspense fallback={<div>Loading details...</div>}>
            <MyDetails details={details} />
        </Suspense>
        <figure className="about-figure mobile-only">
            <img src={image} alt={`profile image`} />
        </figure>

    </section>
);




export default Home;




