 import React, { useState } from 'react';
import { motion } from "framer-motion";
import './index.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-end overflow-hidden bg-gradient-to-br from-[#d3d1b5] via-[#c9d4be] to-[#f1ece3]">

      {/* Fake background blobs */}
      <div className="absolute -top-10 left-0 h-80 w-80 bg-purple-300 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute top-32 right-0 h-80 w-80 bg-pink-200 rounded-full filter blur-2xl opacity-40"></div>
      <div className="absolute bottom-10 left-20 h-60 w-60 bg-blue-200 rounded-full filter blur-2xl opacity-30"></div>

      {/* <div className="humor-container">
        <div className="humor-wrapper">
          <div className="humor">"Come on, you know this one! Type it out!"</div>
          <div className="humor">"Don’t leave me hanging, I’m waiting!"</div>
          <div className="humor">"I believe in you, answer it already!"</div>
          <div className="humor">"Got the answer? Show me what you got!"</div>
          <div className="humor">"Come on, you’re almost there, just hit that answer!"</div>
          <div className="humor">"You got this! Let’s see if you’re right!"</div>
          <div className="humor">"Hurry up, the quiz gods are watching!"</div>
          <div className="humor">"I’m not judging, but... the answer is waiting!"</div>
        </div>
      </div> */}
      {/* Emoji container with sliding animation */}
      <div className="emoji-container">
        <div className="emoji-wrapper">
          <div className="emoji">🤔</div>
          <div className="emoji">😕</div>
          <div className="emoji">😵‍💫</div>
          <div className="emoji">😟</div>
          <div className="emoji">🤨</div>
          <div className="emoji">😖</div>
          <div className="emoji">🤯</div>
          <div className="emoji">😬</div>
          <div className="emoji">😮‍💨</div>
          <div className="emoji">😐</div>
        </div>
      </div>
      <div className="humor-container">
        <div className="humor-wrapper">
          <p className=" w-full text-center text-xl font-bold text-black-300 font-semibold mt-12 absolute top-14.5 mb-4 left-1/2 transform -translate-x-1/2 z-50">
            "Come on, you know this one! Type it out!"
          </p>

          {/* <div className="humor">"Don’t leave me hanging, I’m waiting!"</div>
          <div className="humor">"I believe in you, answer it already!"</div>
          <div className="humor">"Got the answer? Show me what you got!"</div>
          <div className="humor">"Come on, you’re almost there, just hit that answer!"</div>
          <div className="humor">"You got this! Let’s see if you’re right!"</div>
          <div className="humor">"Hurry up, the quiz gods are watching!"</div>
          <div className="humor">"I’m not judging, but... the answer is waiting!"</div> */}
        </div>
      </div>
      <motion.div
        className="z-10 mb-12 mt-3 text-2xl font-bold text-gray-800"
        initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start with a slight scale and position shift
        animate={{ opacity: 1, scale: 1, y: 0 }} // Smooth transition to original position
        transition={{
          duration: 1.5, // Slightly shorter duration for a more natural feel
          ease: "easeInOut", // Smooth easing for a subtle start and end
        }}
      >
        🤔 What is the capital of France?
      </motion.div>

      <div className="z-10 mb-10 mt-10 flex gap-4">
        <button className="button-slide-left px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200">
          ⬅️ Previous
        </button>

        <button className="button-slide-right px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200">
          Next ➡️
        </button>
      </div>


      {/* Glass Panel with Options */}

      <div
        className="relative z-10 h-96 w-[calc(100%-2rem)] mx-4 mb-6 rounded-3xl bg-white/30 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-white/20 p-6 flex flex-col animate-fade-in-up"
      >
        <div className="flex flex-col flex-grow">
          <div
            className={`flex-1 flex items-center justify-center border-b pb-2 cursor-pointer ${selectedOption === 1 ? 'bg-blue-200' : 'hover:bg-gray-100'}`}
            onClick={() => handleOptionClick(1)}
          >
            Paris
          </div>
          <div
            className={`flex-1 flex items-center justify-center border-b pb-2 cursor-pointer ${selectedOption === 2 ? 'bg-blue-200' : 'hover:bg-gray-100'}`}
            onClick={() => handleOptionClick(2)}
          >
            Berlin
          </div>
          <div
            className={`flex-1 flex items-center justify-center border-b pb-2 cursor-pointer ${selectedOption === 3 ? 'bg-blue-200' : 'hover:bg-gray-100'}`}
            onClick={() => handleOptionClick(3)}
          >
            Madrid
          </div>
          <div
            className={`flex-1 flex items-center justify-center cursor-pointer ${selectedOption === 4 ? 'bg-blue-200' : 'hover:bg-gray-100'}`}
            onClick={() => handleOptionClick(4)}
          >
            Rome
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
