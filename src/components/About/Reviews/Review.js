import React from 'react';
import star from "../../../assets/about/icon-star.svg";

const Review = ({text}) => {
    return (
        <div className="review">
            <div className="stars">
                <img src={star} alt="Star"/>
                <img src={star} alt='Star'/>
                <img src={star} alt='Star'/>
                <img src={star} alt='Star'/>
                <img src={star} alt='Star'/>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Review;
