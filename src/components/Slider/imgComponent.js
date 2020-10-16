import React from 'react';

const ImgComp = ({src}) => {
    let imgStyle = {
        width: 100+'%',
        height: 'auto',
    }
    return (
        <div>
            <img src={src} alt="slide-img" style={imgStyle}/>;
        </div>
    );
};

export default ImgComp;
