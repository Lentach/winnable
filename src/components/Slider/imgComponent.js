import React from 'react';

const ImgComp = ({src}) => {
    let imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',

    }
    return <img src={src} alt="slide-img" style={imgStyle}/>
};

export default ImgComp;
