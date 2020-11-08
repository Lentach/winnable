import React from 'react';
import logoColton from "../../../assets/about/image-colton.jpg";
import irene from "../../../assets/about/image-irene.jpg";
import anne from "../../../assets/about/image-anne.jpg";
import Card from "./Card";

const Cards = () => {
    return (
        <section className="review-cards">
            <Card logo={<img src={logoColton} alt='logoColton'/>} type={"Verified Buyer"} name={"Colton Smith"}
                  text={"\"We needed the same printed design as the one we had ordered a\n" +
                  "                week prior. Not only did they find the original order, but we also\n" +
                  "                received it in time. Excellent!\""}/>

            <Card logo={<img src={irene} alt='logoCIrene'/>} type={"Verified Buyer"} name={"Irene Roberts"}
                  text={"\"Customer service is always excellent and very quick turn around.\n" +
                  "                    Completely delighted with the simplicity of the purchase and the\n" +
                  "                    speed of delivery.\""}/>
            <Card logo={<img src={anne} alt='logoAnne'/>} type={"Verified Buyer"} name={"Anne Wallace"}
                  text={"\"Put an order with this company and can only praise them for the\n" +
                  "                    very high standard. Will definitely use them again and recommend\n" +
                  "                    them to everyone!\""}/>
        </section>
    );
};

export default Cards;
