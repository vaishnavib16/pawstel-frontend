import React from 'react';
import { useHistory } from 'react-router-dom';
import './CardDetails.css';

const CardDetails = ({ imageSrc, name, id, serviceData }) => {
    const history = useHistory();

    const handleCardClick = (id) => {
        const data = {
            id: id
        }
        history.push("/servicepage", { state: data })
    }

    return (
        <div className="card" onClick={() => handleCardClick(id)}>
            <img src={imageSrc} alt={name} className="card-image" />
            <div className="card-name">{serviceData.title}</div>
        </div>
    );
};

export default CardDetails;