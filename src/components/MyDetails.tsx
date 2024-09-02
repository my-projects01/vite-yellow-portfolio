import { Details } from "../types/details";
import DetailCard from "./DetailCard";

const MyDetails = ({details}: {details :Details}) => {
    return (
        <DetailCard 
            profession={details.profession}
            title={details.title}
            subHeadline={details.subHeadline}
            buttonTitle1="LinkedIn"
            buttonUrl1={details.linkedInUrl}
            buttonTitle2="Projects"
            buttonUrl2="#projects"
        />
    );
}


export default MyDetails;