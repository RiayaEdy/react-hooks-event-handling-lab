// Code Keypad Component Here
import React from 'react';


function Keypad (){
    function handleChange() {
        console.log("Entering password...");
    }
    return (
        <div>
            <label for="pass"></label>
            <input name="pass" type="password" onChange={handleChange} />
        </div>
    )
}

export default Keypad;