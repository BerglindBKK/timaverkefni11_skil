import React, { useState } from 'react';

const Text: string[] = [];

const LiveTyping = () => {

    const [text, setText] = useState<string>('');
    const [typedText, setTypedText] = useState<string[]>([]); //entire typed sequence

    const handleOnKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const latest: string = event.key;

        if (latest === 'Backspace') {
            setTypedText((prev) => prev.slice(0, prev.length - 1));
        } else {
            setText(latest);
            setTypedText((prev) => [...prev, latest]);
        }
    };


    return (
        <div>
            <div>
                <input type="text" id="quote"
                    className="bg-white w-64 m-4 p-2 rounded-md"
                    onKeyDown={handleOnKeyPressed}
                ></input>
            </div>
            <div>
                <p>You typed: {typedText.join('')}</p>{/* Join array into string to display */}
                <p>Last key pressed: {text}</p> {/* Display the last key */}
            </div>
        </div>
    );
};

export default LiveTyping;
