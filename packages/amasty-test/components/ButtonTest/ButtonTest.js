import React from 'react';
import { string } from 'prop-types';

const ButtonTest = props => {
    const {text} = props;

    return (
        <button>
            <span>{'Test button' + ' ' + text}</span>
        </button>
    );
};
ButtonTest.propTypes = {
    text: string
};

ButtonTest.defaultProps = {
    text: ''
};

export default ButtonTest;
