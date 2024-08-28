import "../styles/home.css";
import { Details } from "../types/details";

const MyDetails = ({details}: {details :Details}) => {
    return (
        <div className="intro">
            <div className="Designer">{details.profession}</div>
            <div className="content">
                <div className="title">{details.title}</div>
                <div className="subHeadline">
                    {details.subHeadline}
                </div>
                <div className="buttons">
                    <a className="button buttonPrimary" href="#projects" >Projects</a>
                    <div className="button buttonSecondary" onClick={()=> window.location.href = details.linkedInUrl?? ''}>LinkedIn</div>
                </div>
            </div>
        </div>
    );
}


export default MyDetails;