import React from 'react';
import './Split.css';

function Split(props) {
    const combinedClassName = `split ${props.className}`;
    const newStyles = {flex: props.flexBasis};
    const number = props.testNumber;
    return (
        <div 
            className={combinedClassName}
            style={newStyles}
        >
            {props.children}
            {number}
        </div>
    );
}

export default Split;