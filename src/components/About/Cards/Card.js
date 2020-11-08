import React from 'react';

const Card = ({name, type, text, logo}) => {
    return (
        <div className="review-card">
            <div className="reviewer-info">
                {logo}
                <div>
                    <p className="reviewer-name">{name}</p>
                    <p className="reviewer-type">{type}</p>
                </div>
            </div>
            <p className="review-text">
                {text}
            </p>
        </div>
    );
};

export default Card;
