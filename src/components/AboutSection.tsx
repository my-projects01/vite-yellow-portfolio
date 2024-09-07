import { AboutData } from "../types/details";
import DetailCard from "./DetailCard";
import image from '../assets/propic1.png';
import CV from '../assets/CV.pdf';
import { ActivePage } from "../types/Other";

interface AboutSectionProps {
    aboutData: AboutData;
    setDisplay?: (value: ActivePage) => void;
}
// About Section Component
const AboutSection = ({ aboutData,setDisplay }:AboutSectionProps) => (
    <section id="about">
        <DetailCard
            title={aboutData.title}
            subHeadline={aboutData.subHeadline}
            buttonTitle1="Resume"
            buttonUrl1={CV ? CV : aboutData.resumeUrl as string}
            buttonTitle2="Contact"
            onClick2={()=>setDisplay && setDisplay('contact')}
        />
        <figure className="about-figure">
            <img src={image} alt={`${aboutData.name} about`} />
        </figure>
    </section>
);

export default AboutSection;