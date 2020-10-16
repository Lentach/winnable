import React, {useState} from 'react';
import './Slider.css';
import ImgComp from "./imgComponent";
import i1 from '../Slider/pics/i1.jpg'
import i2 from '../Slider/pics/i2.jpg'
import i3 from '../Slider/pics/i3.png'
import i4 from '../Slider/pics/i4.jpg'
import i5 from '../Slider/pics/i5.jpg'

const Slider = () => {
    const [x, setX] = useState(0);

    let sliderArr = [
        <ImgComp src={i1}/>,
        <ImgComp src={i2}/>,
        <ImgComp src={i3}/>,
        <ImgComp src={i4}/>,
        <ImgComp src={i5}/>
    ];

    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 *(sliderArr.length-1) ? setX(0) : setX(x - 100);

    };

    return (
        <div className='slider'>
            {sliderArr.map((item, index) => {
                    return (
                        <div key={index}
                             className='slide'
                             style={{transform: `translateX(${x}%)` }}>
                            {item}
                        </div>
                    );
                })}
                <button id='goLeft' onClick={goLeft}>
                    <i className="fas fa-chevron-left"/>
                </button>
                <button id='goRight' onClick={goRight}>
                    <i className="fas fa-chevron-right"/>
                </button>
        </div>
    );
};

export default Slider;

