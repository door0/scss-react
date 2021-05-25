import React from 'react';
import className from 'classnames';
import './Button.scss';

// size : large, medium, smallb
// color : blue, gray, pink
function Button({ children, size, color, outline, fullWidth, ...rest }) {
    return (
        <button className={className('Button', size, color, {outline, fullWidth})} {...rest}>{children}
        </button>
    );
}

Button.defaultProps = {
    size : 'medium',
    color: 'blue'
};

export default Button;