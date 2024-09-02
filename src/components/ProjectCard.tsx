import "../styles/card.css";
import DetailCard from "./DetailCard";

interface ProjectCardProps {
    name: string;
    description?: string;
    image?: string;
    rl?: number;
    url: string;
    bgColor?: string;
}

const ProjectCard = ({
    name,
    description = '', // Default to an empty string if not provided
    image = '',       // Default to an empty string if not provided
    rl = 0,           // Default value for rl
    url,
    bgColor,
}: ProjectCardProps
) => {

    const isRowReversed = rl % 2 !== 0;
    return (
        <div
            className='card-container'
            style={{ flexDirection: isRowReversed ? 'row-reverse' : 'row' }}
        >
            <div className="card-left" style={{ backgroundColor: `${bgColor}`, backgroundImage: `url(${image})` }}>
                <DetailCard
                    title={name}
                    subHeadline={description}
                    buttonTitle1='View Project'
                    buttonUrl1={url}
                    variant="secondary"
                />
            </div>

            <figure className="card-right">
                <img src={image} alt={`${name} project`} />
            </figure>
        </div>
    )
}

export default ProjectCard;
