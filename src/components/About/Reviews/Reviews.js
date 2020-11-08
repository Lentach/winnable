import React from 'react';
import Review from "./Review";

const Reviews = () => {
    return (
        <section className="reviews">
            <Review text={"Rated 5 Stars in Reviews"}/>
            <Review text={"Rated 5 Stars in Report Guru"}/>
            <Review text={"Rated 5 Stars in BestTech"}/>
        </section>
    );
};

export default Reviews;
