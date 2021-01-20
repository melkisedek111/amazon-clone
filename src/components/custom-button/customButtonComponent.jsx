import React from 'react';
import './customButton.styles.css';

const CustomButton = ({children, ...otherProps}) => {
    return (
        <button {...otherProps} className="customButton">{children}</button>
    );
}
export default CustomButton;