import React from 'react';
import '../../css/tutoring.css';

type TutoringServiceCardProps = {
    title: string;
    description: string;
    isActive: boolean;
    onConnect: () => void;
    buttonText: string;
};

const TutoringServiceCard: React.FC<TutoringServiceCardProps> = ({
    title,
    description,
    isActive,
    onConnect,
    buttonText,
}) => {
    return (
        <section className={`service-card ${isActive ? 'active' : ''}`}>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onConnect}>{buttonText}</button>
        </section>
    );
};

export default TutoringServiceCard;
