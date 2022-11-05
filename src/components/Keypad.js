// Code Keypad Component Here
import React from 'react';


function Keypad (){
    const handleInput = () => {
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={e => handleInput(e)} />
        </div>
    )
}

export default Keypad;