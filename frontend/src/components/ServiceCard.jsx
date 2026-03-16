import React, { useState } from 'react';

export const MemberCard = ({name, description, imageUrl}) => {
    const [flipped, setFlipped] = useState(false);

    const toggleFlip = () => {
        setFlipped(!flipped);
    }

    return (
        <article 
            className={`card ${flipped ? 'flipped' : ''}`}
            role="listitem"
            tabIndex={0}
            onClick={toggleFlip}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFlip();
                }
            }}
        >
            <div className="card-inner" aria-hidden="true">
                <div className="card-front">
                    <img src={imageUrl} alt={name} className="profile-pic" />
                    <h3 className="text-xl md:text-2xl">{name}</h3>
                </div>
                <div className="card-back">
                    <p>{description}</p>
                </div>
            </div>
        </article>
    );
};