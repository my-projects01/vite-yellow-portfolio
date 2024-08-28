import "../styles/projectCard.css";

interface ProjectCardProps {
    name: string ;
    description?: string;
    image?: string;
    rl?: number;
    url: string;
}

const ProjectCard = (props :ProjectCardProps) => {
    if (props.rl === undefined) props.rl = 0;
    const toRedirect = (url:string) => url? window.location.href = url : null;
    return (
        <div className='card-container' style={{ flexDirection:(props?.rl % 2 ==0)? 'row':'row-reverse'}}>
            <div className="card-left">
                <h1 className='card-name'>{props.name}</h1>
                <p className='card-description'>{props.description}</p>
                <button className='card-button' onClick={()=>{toRedirect(props.url)}} >View Project</button>
            </div>
            <figure className="card-right">
                <img src={props.image} alt="project" />
            </figure>
        </div>
    )
}

export default ProjectCard;
