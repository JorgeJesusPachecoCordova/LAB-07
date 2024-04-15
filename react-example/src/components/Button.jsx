import React, { useState } from "react";
import PropTypes from "prop-types";

export const Button = ({ text, increment }) => {
    const [count, setCount] = useState(0);

    function handleButtonClick() {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(`Random Number: ${randomNumber}`);
        setCount(count + increment);
    }

    return (
        <button onClick={handleButtonClick}>
            {text} {count}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    increment: PropTypes.number
};

Button.defaultProps = {
    increment: 5
};