import Button from './Button'
import { DetailCardProps } from '../types/Other';
import "../styles/card.css";

const DetailCard = ({
    profession,
    title,
    subHeadline,
    buttonTitle1,
    buttonUrl1,
    buttonTitle2,
    buttonUrl2,
    variant = 'primary'  // for selecting the card variant
}: DetailCardProps
) => {
    let isSecondary = false;
    if (variant === 'secondary') isSecondary = true;
    return (
        <div className="intro" >
            <div className="Designer">{profession}</div>
            <div className="content">
                <div className={`title ${isSecondary === true ? 'second-title' : ''}`}>{title}</div>
                <div className={`subHeadline ${isSecondary === true ? 'second-subHeadline' : ''}`}>
                    {subHeadline}
                </div>
                <div className="buttons">
                    {buttonTitle1 && <Button variant='primary' url={buttonUrl1} title={buttonTitle1} />}
                    {buttonTitle2 && <Button variant='secondary' url={buttonUrl2} title={buttonTitle2} />}
                </div>
            </div>
        </div>
    )
}

export default DetailCard
