import { useState } from "react";

export const Button = () => {
    const[count, setCount] = useState(0);

    function handlerButton() {
     setCount(count + 1);
    }
    
    return (
        <button onClick={ handlerButton }>
            { count }
        </button>
    );
}