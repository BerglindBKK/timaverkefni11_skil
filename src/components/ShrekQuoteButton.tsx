// ShrekQuoteButton.js

import React, { useState } from 'react';

const ShrekQuoteButton = () => {
    // Array of Shrek quotes
    const shrekQuotes = [
        "Ogres are like onions... they have layers!",
        "What are you doing in my swamp?",
        "I'm like a crackin' onion!",
        "Better out than in, I always say!",
        "Donkey, I'm warning you!",
        "This is the part where you run away."
    ];

    // State to hold the current quote
    const [quote, setQuote] = useState('excited for your first quote?');

    // Event handler to get a random quote
    const handleClickButton = () => {
        const randomIndex = Math.floor(Math.random() * shrekQuotes.length);
        const newQuote = shrekQuotes[randomIndex];
        setQuote(newQuote);  // Update the quote state
    };

    //returns a botton and a div with a tandom quote
    return (
        <div>
            {/* Displaying the random quote */}
            {quote && <p className="text-xl font-semibold mb-2 bg-amber-300">{quote}</p>}

            {/* BUTTON */}
            <button
                type="button"
                onClick={handleClickButton}
                className={'bg-green-700 text-white font-bold text-lg px-2 rounded-md m-1'}>
                Click me for a Shrek quote
            </button>
        </div>
    );
};

export default ShrekQuoteButton;
