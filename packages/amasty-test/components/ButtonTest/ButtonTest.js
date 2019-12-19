import React from 'react';
import { string } from 'prop-types';

const Button = props => {
    const {text} = props;

    return (
        <button>
            <span>{'Test button' + ' ' + text}</span>
        </button>
    );
};
Button.propTypes = {
    text: string
};

Button.defaultProps = {
    text: ''
};

export default Button;
