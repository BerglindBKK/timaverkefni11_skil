"use client";

import React, { useState } from 'react';
import ShrekQuoteButton from '@/components/ShrekQuoteButton';
import ZoomImage from '@/components/ZoomImage';
import TurnImage from '@/components/TurnImage';
import LiveTyping from '@/components/LiveTyping';

const Counter = () => {
  return (
    <div className="bg-green-100 min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center">

        {/* Shrek and Fiona images side by side */}
        <div className="flex justify-center space-x-6 mb-8">
          {/* Shrek image */}
          <ZoomImage
            src="/shrek.jpg"
            alt="Shrek"
            className="rounded-full border-8 border-amber-400 w-50 m-4"
          />

          {/* Fiona image */}
          <ZoomImage
            src="/fiona.jpg"
            alt="Fiona"
            className="rounded-full border-8 border-amber-600 w-50 m-4"
          />
        </div>

        {/* Title */}
        <p className="m-8 text-4xl">Welcome to Shrek's Swamp</p>

        {/* Input field */}
        <input
          type="text"
          id="quote"
          placeholder="am I useless?"
          className=" bg-white w-64 m-4 p-2 rounded-md"
        />

        {/* ShrekQuoteButton */}
        <div>
          <ShrekQuoteButton />
        </div>

        {/* Live Typing Component */}
        <div>
          <LiveTyping />
        </div>

        {/* Turn Image */}
        <TurnImage
          src="/donkey.png"
          alt="Donkey"
          className="rounded-full w-50 border-8 m-2"
        />
      </div>
    </div>
  );
};

export default Counter;
