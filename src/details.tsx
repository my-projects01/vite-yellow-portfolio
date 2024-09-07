//import images from 'assets' folder
import pic1 from './assets/bgp1.jpg';
import pic2 from './assets/bgp2.jpeg';
import pic3 from './assets/project1.png';
import { AboutData, Details, Projects, SocialMediaLinks } from './types/details';

// homepage details
const name : string |null |undefined = "Kavindu Salinda";

// use a 1:1 image aspect ratio for best results

const socials :SocialMediaLinks = {
    linkedInUrl: "https://www.linkedin.com/in/kavindu-salinda/",
    githubUrl: "",
    twitterUrl: "",
    email: "",
    instagram: "",
    resumeUrl: "", // Replace with a relevant URL
}

const details: Details = {
    profession: "Software Developer",
    title: `Hello, I'm ${name}`,
    subHeadline: "Short text with details about you, what you do or your professional career. You can add more information on the about page.",
    linkedInUrl: socials.linkedInUrl,
    resumeUrl: socials.resumeUrl, // Replace with a relevant URL
}

// project details
const projects:Projects = [
    {
        name: "X-Digital",
        description: "A full-stack MERN application that allows users to manage their daily tasks with features like task creation, updating, filtering by category, and setting due dates. Includes user authentication with JWT and a responsive UI built with Tailwind CSS.",
        image: pic1, // Replace with a relevant image URL
        url: "https://kavindusalinda.github.io/at-digital/", // Replace with a relevant URL
    },
    {
        name: "E-commerce Platform",
        description: "An e-commerce web application built using React and Node.js, featuring a dynamic product catalog, shopping cart functionality, secure checkout with Stripe integration, and admin dashboards for managing inventory and orders.",
        image: pic2, // Replace with a relevant image URL
        url: "https://kavindusalinda.github.io/", // Replace with a relevant URL
    },
    {
        name: "Portfolio Website",
        description: "A personal portfolio website showcasing my skills and projects as a MERN stack developer. The site is built with React and styled using Tailwind CSS, featuring interactive components, animations, and a contact form connected to a backend server.",
        image: pic3, // Replace with a relevant image URL
        url: "https://kavindusalinda.github.io/", // Replace with a relevant URL
    }
];

const aboutData: AboutData = {
    name: details.title,
    title: "About Me",
    subHeadline: "I'm a software engineer with a passion for web development.Short text with details about you, what you do or your professional career. You can add more information on the about page.",
    resumeUrl: details.resumeUrl,
}

export { name, details, projects,socials ,aboutData };

