import { useState } from "react";

function RepeatInput(){
    const [text, setText] = useState('');
    return (
        <div>
            <h2>- Exercice repeat input</h2>
            <input type="text" value = {text} onChange={(event) => setText(event.target.value)}/>
            <p>Vous avez écrit : {text}</p>
        </div>
    )
}

export default RepeatInput;