import React from 'react'
import Button from './Button'

interface DetailCardProps {
    profession?: string;
    title?: string;
    subHeadline?: string;
    ButtonTitle1?: string;
    buttonUrl1?: string;
    ButtonTitle2?: string;
    buttonUrl2?: string;
    variant?: "primary" | "secondary";
}

const DetailCard = ({
    profession,
    title,
    subHeadline,
    ButtonTitle1,
    buttonUrl1,
    ButtonTitle2,
    buttonUrl2,
    variant = 'primary'
}: DetailCardProps
) => {
    let isSecondary = false;
    if (variant === 'secondary') isSecondary = true;
    return (
        <div className="intro">
            <div className="Designer">{profession}</div>
            <div className="content">
                <div className={`title ${isSecondary === true ? 'second-title' : ''}`}>{title}</div>
                <div className={`subHeadline ${isSecondary === true ? 'second-subHeadline' : ''}`}>
                    {subHeadline}
                </div>
                <div className="buttons">
                    {ButtonTitle1 && <Button variant='primary' url={buttonUrl1} title={ButtonTitle1} />}
                    {ButtonTitle2 && <Button variant='secondary' url={buttonUrl2} title={ButtonTitle2} />}
                </div>
            </div>
        </div>
    )
}

export default DetailCard
