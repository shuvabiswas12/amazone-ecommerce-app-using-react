import React from 'react';

const SvgHelper = (props) => {

    const {color = "#FFFFFF", size = 24, path, styles} = props;

    return <svg style={{width: size, height: size, ...styles}} viewBox="0 0 24 24">
        <path fill={color}
              d={path}/>
    </svg>
};

export default SvgHelper;