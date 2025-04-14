//  import React, { useState } from 'react';
// import { motion } from "framer-motion";
// import './index.css';

// function App() {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <div className="relative flex h-screen w-screen flex-col items-center justify-end overflow-hidden bg-gradient-to-br from-[#d3d1b5] via-[#c9d4be] to-[#f1ece3]">

//       {/* Fake background blobs */}
//       <div className="absolute -top-10 left-0 h-80 w-80 bg-purple-300 rounded-full filter blur-3xl opacity-30"></div>
//       <div className="absolute top-32 right-0 h-80 w-80 bg-pink-200 rounded-full filter blur-2xl opacity-40"></div>
//       <div className="absolute bottom-10 left-20 h-60 w-60 bg-blue-200 rounded-full filter blur-2xl opacity-30"></div>

//       {/* <div className="humor-container">
//         <div className="humor-wrapper">
//           <div className="humor">"Come on, you know this one! Type it out!"</div>
//           <div className="humor">"Don’t leave me hanging, I’m waiting!"</div>
//           <div className="humor">"I believe in you, answer it already!"</div>
//           <div className="humor">"Got the answer? Show me what you got!"</div>
//           <div className="humor">"Come on, you’re almost there, just hit that answer!"</div>
//           <div className="humor">"You got this! Let’s see if you’re right!"</div>
//           <div className="humor">"Hurry up, the quiz gods are watching!"</div>
//           <div className="humor">"I’m not judging, but... the answer is waiting!"</div>
//         </div>
//       </div> */}
//       {/* Emoji container with sliding animation */}
//       <div className="emoji-container">
//         <div className="emoji-wrapper">
//           <div className="emoji">🤔</div>
//           <div className="emoji">😕</div>
//           <div className="emoji">😵‍💫</div>
//           <div className="emoji">😟</div>
//           <div className="emoji">🤨</div>
//           <div className="emoji">😖</div>
//           <div className="emoji">🤯</div>
//           <div className="emoji">😬</div>
//           <div className="emoji">😮‍💨</div>
//           <div className="emoji">😐</div>
//         </div>
//       </div>
//       <div className="humor-container">
//         <div className="humor-wrapper">
//           <p className=" w-full text-center text-xl font-bold text-black-300 font-semibold mt-12 absolute top-14.5 mb-4 left-1/2 transform -translate-x-1/2 z-50">
//             "Come on, you know this one! Type it out!"
//           </p>

//           {/* <div className="humor">"Don’t leave me hanging, I’m waiting!"</div>
//           <div className="humor">"I believe in you, answer it already!"</div>
//           <div className="humor">"Got the answer? Show me what you got!"</div>
//           <div className="humor">"Come on, you’re almost there, just hit that answer!"</div>
//           <div className="humor">"You got this! Let’s see if you’re right!"</div>
//           <div className="humor">"Hurry up, the quiz gods are watching!"</div>
//           <div className="humor">"I’m not judging, but... the answer is waiting!"</div> */}
//         </div>
//       </div>
//       <motion.div
//         className="z-10 mb-12 mt-3 text-2xl font-bold text-gray-800"
//         initial={{ opacity: 0, scale: 0.8, y: 20 }} // Start with a slight scale and position shift
//         animate={{ opacity: 1, scale: 1, y: 0 }} // Smooth transition to original position
//         transition={{
//           duration: 1.5, // Slightly shorter duration for a more natural feel
//           ease: "easeInOut", // Smooth easing for a subtle start and end
//         }}
//       >
//         🤔 What is the capital of France?
//       </motion.div>

//       <div className="z-10 mb-10 mt-10 flex gap-4">
//         <button className="button-slide-left px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200">
//           ⬅️ Previous
//         </button>

//         <button className="button-slide-right px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200">
//           Next ➡️
//         </button>
//       </div>


//       {/* Glass Panel with Options */}

//       <div
//         className="relative z-10 h-96 w-[calc(100%-2rem)] mx-4 mb-6 rounded-3xl bg-white/30 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-white/20 p-6 flex flex-col animate-fade-in-up"
//       >
//         <div className="flex flex-col flex-grow">
//           <div
//             className={`flex-1 flex items-center justify-center border-b pb-2 cursor-pointer ${selectedOption === 1 ? 'bg-blue-200' : 'hover:bg-gray-100'}`}
//             onClick={() => handleOptionClick(1)}
//           >
//             Paris
//           </div>
//           <div
//             className={`flex-1 flex items-center justify-center border-b pb-2 cursor-pointer ${selectedOption === 2 ? 'bg-blue-200' : 'hover:bg-gray-100'}`}
//             onClick={() => handleOptionClick(2)}
//           >
//             Berlin
//           </div>
//           <div
//             className={`flex-1 flex items-center justify-center border-b pb-2 cursor-pointer ${selectedOption === 3 ? 'bg-blue-200' : 'hover:bg-gray-100'}`}
//             onClick={() => handleOptionClick(3)}
//           >
//             Madrid
//           </div>
//           <div
//             className={`flex-1 flex items-center justify-center cursor-pointer ${selectedOption === 4 ? 'bg-blue-200' : 'hover:bg-gray-100'}`}
//             onClick={() => handleOptionClick(4)}
//           >
//             Rome
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import { motion } from "framer-motion";
// import './index.css';

// function App() {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);

//   // Fetching the data (replace this with an actual API call)
//   useEffect(() => {
//     const data = {
//       "status": "SUCCESS",
//       "data": {
//         "testId": "oihq2eo9h1029921-210-20112",
//         "questions": [
//           {
//             "questionId": "b28af948-db8b-465e-92e6-3d42534c4533",
//             "question": "The company's _____________ approach to product development _____________ customer feedback at every stage, _____________ user satisfaction and _____________ a loyal consumer base.",
//             "questionType": "text",
//             "answerType": "options",
//             "options": ["Incorporated", "User-centric", "Enhancing", "Cultivating"],
//             "correctAnswer": ["User-centric", "Incorporated", "Enhancing", "Cultivating"]
//           },
//           {
//             "questionId": "6e6534ea-260a-4c26-96fd-f830b27601fb",
//             "question": "The _____________ musical performance _____________ elements from various genres, _____________ the audience with its unique sound and _____________ critical acclaim from industry experts.",
//             "questionType": "text",
//             "answerType": "options",
//             "options": ["Captivating", "Eclectic", "Garnering", "Blended"],
//             "correctAnswer": ["Eclectic", "Blended", "Captivating", "Garnering"]
//           }
//         ]
//       }
//     };
//     setQuestions(data.data.questions);
//   }, []);

//   const handleNext = () => {
//     if (selectedOption === questions[currentQuestionIndex].correctAnswer[0]) {
//       // Do something on correct answer
//     }
//     setSelectedOption(null); // Reset selected option for next question
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

  
//   const handleOptionClick = (option) => {
//     if (selectedOptions.length < 4) {  // assuming 4 blanks per question
//       setSelectedOptions([...selectedOptions, option]);
//     }
//   };
//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <div className="relative flex h-screen w-screen flex-col items-center justify-end overflow-hidden bg-gradient-to-br from-[#d3d1b5] via-[#c9d4be] to-[#f1ece3]">

//       {/* Fake background blobs */}
//       <div className="absolute -top-10 left-0 h-80 w-80 bg-purple-300 rounded-full filter blur-3xl opacity-30"></div>
//       <div className="absolute top-32 right-0 h-80 w-80 bg-pink-200 rounded-full filter blur-2xl opacity-40"></div>
//       <div className="absolute bottom-10 left-20 h-60 w-60 bg-blue-200 rounded-full filter blur-2xl opacity-30"></div>

//       {/* Emoji container with sliding animation */}
//       <div className="emoji-container">
//         <div className="emoji-wrapper">
//           <div className="emoji">🤔</div>
//           <div className="emoji">😕</div>
//           <div className="emoji">😵‍💫</div>
//           <div className="emoji">😟</div>
//           <div className="emoji">🤨</div>
//           <div className="emoji">😖</div>
//           <div className="emoji">🤯</div>
//           <div className="emoji">😬</div>
//           <div className="emoji">😮‍💨</div>
//           <div className="emoji">😐</div>
//         </div>
//       </div>
      
//       {/* Quotes */}


//       {/* Question Text with Motion Animation */}
//       {/* <motion.div
//         className="z-10 mb-12 mt-5 text-lg font-bold text-center px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200"
//         initial={{ opacity: 0, scale: 0.8, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{
//           duration: 1.5,
//           ease: "easeInOut",
//         }}
//       >
//         🤔 {currentQuestion?.question}
//       </motion.div> */}
//       <motion.div
//   className="z-10 mb-12 mx-2 mt-5 text-lg font-bold text-center px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200"
//   initial={{ opacity: 0, scale: 0.8, y: 20 }}
//   animate={{ opacity: 1, scale: 1, y: 0 }}
//   transition={{
//     duration: 1.5,
//     ease: "easeInOut",
//   }}
// >
//   🤔 {currentQuestion?.question}
// </motion.div>

//       <div className="humor-container">
//         <div className="humor-wrapper">
//           <p className="w-full text-center text-xl font-bold text-black-300 font-semibold mt-18 absolute top-13 mb-4 left-1/2 transform -translate-x-1/2 z-50">
//             "Come on, you know this one! Type it out!"
//           </p>
//         </div>
//       </div>
//       {/* Navigation Buttons */}
//       <div className="z-10 mb-10 mt-10 flex gap-4">
//         <button className="button-slide-left px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200">
//           ⬅️ Previous
//         </button>

//         <button
//           onClick={handleNext}
//           className="button-slide-right px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200"
//         >
//           Next ➡️
//         </button>
//       </div>

//       {/* Glass Panel with Options */}
//       <div
//         className="relative z-10 h-96 w-[calc(100%-2rem)] mx-4 mb-6 rounded-3xl bg-white/30 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-white/20 p-6 flex flex-col animate-fade-in-up"
//       >
//         <div className="flex flex-col flex-grow">
//           {currentQuestion?.options.map((option, index) => (
//             <div
//               key={index}
//               className={`flex-1 flex items-center justify-center border-b pb-2 cursor-pointer ${selectedOption === option ? 'bg-blue-200' : 'hover:bg-gray-100'}`}
//               onClick={() => handleOptionClick(option)}
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// export default App;
// good
// import React, { useState, useEffect } from 'react';
// import { motion } from "framer-motion";
// import './index.css';

// function App() {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   // Fetching the data (replace this with an actual API call)
//   useEffect(() => {
//     const data = {
//       "status": "SUCCESS",
//       "data": {
//         "testId": "oihq2eo9h1029921-210-20112",
//         "questions": [
//           {
//             "questionId": "b28af948-db8b-465e-92e6-3d42534c4533",
//             "question": "The company's _____________ approach to product development _____________ customer feedback at every stage, _____________ user satisfaction and _____________ a loyal consumer base.",
//             "questionType": "text",
//             "answerType": "options",
//             "options": ["Incorporated", "User-centric", "Enhancing", "Cultivating"],
//             "correctAnswer": ["User-centric", "Incorporated", "Enhancing", "Cultivating"],
//             "explanation": "The company values a user-centric approach, incorporating customer feedback to enhance satisfaction and cultivate a loyal base."
//           },
//           {
//             "questionId": "6e6534ea-260a-4c26-96fd-f830b27601fb",
//             "question": "The _____________ musical performance _____________ elements from various genres, _____________ the audience with its unique sound and _____________ critical acclaim from industry experts.",
//             "questionType": "text",
//             "answerType": "options",
//             "options": ["Captivating", "Eclectic", "Garnering", "Blended"],
//             "correctAnswer": ["Eclectic", "Blended", "Captivating", "Garnering"],
//             "explanation": "The performance blends elements from various genres, captivating the audience and garnering critical acclaim."
//           }
//         ]
//       }
//     };
//     setQuestions(data.data.questions);
//   }, []);

//   const handleNext = () => {
//     const currentQuestion = questions[currentQuestionIndex];

//     // Check if selected options match the correct answer in order
//     if (JSON.stringify(selectedOptions) === JSON.stringify(currentQuestion.correctAnswer)) {
//       setPopupMessage(`Correct! ${currentQuestion.explanation}`);
//     } else {
//       setPopupMessage('Incorrect order! Try again.');
//     }

//     // Show the popup
//     setShowPopup(true);

//     // Reset for the next question
//     setSelectedOptions([]);
//     setTimeout(() => {
//       setShowPopup(false);
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }, 3000); // Hide popup after 3 seconds
//   };

//   const handleOptionClick = (option) => {
//     if (selectedOptions.length < 4) {  // assuming 4 blanks per question
//       setSelectedOptions([...selectedOptions, option]);
//     }
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <div className="relative flex h-screen w-screen flex-col items-center justify-end overflow-hidden bg-gradient-to-br from-[#d3d1b5] via-[#c9d4be] to-[#f1ece3]">

//       {/* Fake background blobs */}
//       <div className="absolute -top-10 left-0 h-80 w-80 bg-purple-300 rounded-full filter blur-3xl opacity-30"></div>
//       <div className="absolute top-32 right-0 h-80 w-80 bg-pink-200 rounded-full filter blur-2xl opacity-40"></div>
//       <div className="absolute bottom-10 left-20 h-60 w-60 bg-blue-200 rounded-full filter blur-2xl opacity-30"></div>

//       {/* Emoji container with sliding animation */}
//       <div className="emoji-container">
//         <div className="emoji-wrapper">
//           <div className="emoji">🤔</div>
//           <div className="emoji">😕</div>
//           <div className="emoji">😵‍💫</div>
//           <div className="emoji">😟</div>
//           <div className="emoji">🤨</div>
//           <div className="emoji">😖</div>
//           <div className="emoji">🤯</div>
//           <div className="emoji">😬</div>
//           <div className="emoji">😮‍💨</div>
//           <div className="emoji">😐</div>
//         </div>
//       </div>

//       {/* Question Text with Motion Animation */}
//       <motion.div
//         className="z-10 mb-9 mx-2 mt-5 text-lg font-bold text-center px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200"
//         initial={{ opacity: 0, scale: 0.8, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{
//           duration: 1.5,
//           ease: "easeInOut",
//         }}
//       >
//         🤔 {currentQuestion?.question}
//       </motion.div>
//       <div className="humor-container">
//          <div className="humor-wrapper">
//            <p className="w-full text-center text-xl font-bold text-black-300 font-semibold mt-18 absolute top-18 mb-6 left-1/2 transform -translate-x-1/2 z-50">
//              "Come on, you know this one! Type it out!"
//            </p>
//          </div>
//        </div>

//       {/* Navigation Buttons */}
//       <div className="z-10 mb-10 mt-12 flex gap-4">
//         <button className="button-slide-left px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200">
//           ⬅️ Previous
//         </button>

//         <button
//           onClick={handleNext}
//           className="button-slide-right px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200"
//         >
//           Next ➡️
//         </button>
//       </div>
      

//       {/* Glass Panel with Options */}
//       <div
//         className="relative z-10 h-96 w-[calc(100%-2rem)] mx-4 mb-6 rounded-3xl bg-white/30 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-white/20 p-6 flex flex-col animate-fade-in-up"
//       >
//         <div className="flex flex-col flex-grow">
//           {currentQuestion?.options.map((option, index) => (
//             <div
//               key={index}
//               className={`flex-1 flex items-center justify-center border-b pb-2 cursor-pointer ${selectedOptions.includes(option) ? 'bg-blue-200' : 'hover:bg-gray-100'}`}
//               onClick={() => handleOptionClick(option)}
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pop-up Message */}
//       {showPopup && (
//         <div className=" z-10 absolute bottom-0 left-0 w-full p-4 bg-green-500 text-center rounded-t-lg animate-slide-up bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40">
//           {popupMessage}
//         </div>
//       )}

//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './index.css';

// function App() {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [isCorrect, setIsCorrect] = useState(null);
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [showExplanation, setShowExplanation] = useState(false);
//   const [nextEnabled, setNextEnabled] = useState(false);
//   const [timer, setTimer] = useState(30);

//   // Fetching dummy data
//   useEffect(() => {
//     const data = {
//       status: 'SUCCESS',
//       data: {
//         questions: [
//           {
//             question: "The company's _____________ approach to product development _____________ customer feedback at every stage, _____________ user satisfaction and _____________ a loyal consumer base.",
//             options: ['Incorporated', 'User-centric', 'Enhancing', 'Cultivating'],
//             correctAnswer: ['User-centric', 'Incorporated', 'Enhancing', 'Cultivating'],
//             explanation: "The correct order emphasizes a thoughtful, user-first product process."
//           },
//           {
//             question: "The _____________ musical performance _____________ elements from various genres, _____________ the audience with its unique sound and _____________ critical acclaim from industry experts.",
//             options: ['Captivating', 'Eclectic', 'Garnering', 'Blended'],
//             correctAnswer: ['Eclectic', 'Blended', 'Captivating', 'Garnering'],
//             explanation: "This order describes how a diverse music performance can attract and impress."
//           }
//         ]
//       }
//     };
//     setQuestions(data.data.questions);
//   }, []);

//   const currentQuestion = questions[currentQuestionIndex];

//   // Timer logic
//   useEffect(() => {
//     setNextEnabled(false);
//     setTimer(30);
//     const interval = setInterval(() => {
//       setTimer((prev) => {
//         if (prev === 1) {
//           setNextEnabled(true);
//           clearInterval(interval);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [currentQuestionIndex]);

//   const handleOptionClick = (option) => {
//     if (selectedOptions.length < 4 && !selectedOptions.includes(option)) {
//       const newSelected = [...selectedOptions, option];
//       setSelectedOptions(newSelected);

//       if (newSelected.length === 4) {
//         const correct = JSON.stringify(newSelected) === JSON.stringify(currentQuestion.correctAnswer);
//         setIsCorrect(correct);
//         setShowFeedback(true);
//         setShowExplanation(true);
//         setTimeout(() => {
//           setShowFeedback(false);
//         }, 3000);
//       }
//     }
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       resetQuestionState();
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       resetQuestionState();
//     }
//   };

//   const resetQuestionState = () => {
//     setSelectedOptions([]);
//     setIsCorrect(null);
//     setShowFeedback(false);
//     setShowExplanation(false);
//     setNextEnabled(false);
//     setTimer(30);
//   };

//   return (
//     <div className="relative flex h-screen w-screen flex-col items-center justify-end overflow-hidden bg-gradient-to-br from-[#d3d1b5] via-[#c9d4be] to-[#f1ece3]">

//       {/* Blobs */}
//       <div className="absolute -top-10 left-0 h-80 w-80 bg-purple-300 rounded-full filter blur-3xl opacity-30"></div>
//       <div className="absolute top-32 right-0 h-80 w-80 bg-pink-200 rounded-full filter blur-2xl opacity-40"></div>
//       <div className="absolute bottom-10 left-20 h-60 w-60 bg-blue-200 rounded-full filter blur-2xl opacity-30"></div>

//       {/* Emojis */}
//       <div className="emoji-container">
//         <div className="emoji-wrapper">
//           <div className="emoji">🤔</div>
//           <div className="emoji">😕</div>
//           <div className="emoji">😵‍💫</div>
//           <div className="emoji">😟</div>
//           <div className="emoji">🤨</div>
//           <div className="emoji">😖</div>
//           <div className="emoji">🤯</div>
//           <div className="emoji">😬</div>
//           <div className="emoji">😮‍💨</div>
//           <div className="emoji">😐</div>
//         </div>
//       </div>

//       {/* Question */}
//       <motion.div
//         className="z-10 mb-12 mx-2 mt-5 text-lg font-bold text-center px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200"
//         initial={{ opacity: 0, scale: 0.8, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 1.5, ease: 'easeInOut' }}
//       >
//         🤔 {currentQuestion?.question}
//       </motion.div>

//       {/* Humor Text */}
//       <div className="humor-container">
//         <div className="humor-wrapper">
//           <p className="w-full text-center text-xl font-bold text-black-300 font-semibold mt-18 absolute top-13 mb-4 left-1/2 transform -translate-x-1/2 z-50">
//             "Come on, you know this one! Type it out!"
//           </p>
//         </div>
//       </div>

//       {/* Feedback Message */}
//       {showFeedback && (
//         <div className={`mb-2 text-lg font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
//           {isCorrect ? '✅ Okay' : '❌ Wrong'}
//         </div>
//       )}

//       {/* Buttons */}
//       <div className="z-10 mb-4 mt-10 flex gap-4">
//         <button
//           className="button-slide-left px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200"
//           onClick={handlePrevious}
//         >
//           ⬅️ Previous
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={!nextEnabled}
//           className={`button-slide-right px-5 py-2 rounded-xl border backdrop-blur-md font-medium shadow-md transition duration-200 ${
//             nextEnabled ? 'bg-white/30 border-white/40 text-gray-900 hover:bg-white/40' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//           }`}
//         >
//           Next ➡️ ({timer}s)
//         </button>
//       </div>

//       {/* Options */}
//       <div className="relative z-10 h-96 w-[calc(100%-2rem)] mx-4 mb-6 rounded-3xl bg-white/30 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-white/20 p-6 flex flex-col animate-fade-in-up">
//         <div className="flex flex-col flex-grow">
//           {currentQuestion?.options.map((option, index) => (
//             <div
//               key={index}
//               className={`flex-1 flex items-center justify-center border-b pb-2 cursor-pointer ${
//                 selectedOptions.includes(option) ? 'bg-blue-200' : 'hover:bg-gray-100'
//               }`}
//               onClick={() => handleOptionClick(option)}
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Explanation Popup */}
//       {showExplanation && (
//         <motion.div
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className=" z-50 w-full fixed bottom-0 transform -translate-x-1/2 bg-white/90 border border-gray-300 backdrop-blur-md px-6 py-4 rounded-2xl shadow-md text-gray-800"
//         >
//           <p><strong>Explanation:</strong> {currentQuestion?.explanation}</p>
//         </motion.div>
//       )}
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './index.css';

// function App() {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [isCorrect, setIsCorrect] = useState(null);
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [showExplanation, setShowExplanation] = useState(false);
//   const [nextEnabled, setNextEnabled] = useState(false);
//   const [timer, setTimer] = useState(30);

//   // Fetching dummy data
//   useEffect(() => {
//     const data = {
//       status: 'SUCCESS',
//       data: {
//         questions: [
//           {
//             question: "The company's _____________ approach to product development _____________ customer feedback at every stage, _____________ user satisfaction and _____________ a loyal consumer base.",
//             options: ['Incorporated', 'User-centric', 'Enhancing', 'Cultivating'],
//             correctAnswer: ['User-centric', 'Incorporated', 'Enhancing', 'Cultivating'],
//             explanation: "The correct order emphasizes a thoughtful, user-first product process."
//           },
//           {
//             question: "The _____________ musical performance _____________ elements from various genres, _____________ the audience with its unique sound and _____________ critical acclaim from industry experts.",
//             options: ['Captivating', 'Eclectic', 'Garnering', 'Blended'],
//             correctAnswer: ['Eclectic', 'Blended', 'Captivating', 'Garnering'],
//             explanation: "This order describes how a diverse music performance can attract and impress."
//           }
//         ]
//       }
//     };
//     setQuestions(data.data.questions);
//   }, []);

//   const currentQuestion = questions[currentQuestionIndex];

//   // Timer logic
//   useEffect(() => {
//     setNextEnabled(false);
//     setTimer(30);
//     const interval = setInterval(() => {
//       setTimer((prev) => {
//         if (prev === 1) {
//           setNextEnabled(true);
//           clearInterval(interval);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [currentQuestionIndex]);

//   const handleOptionClick = (option) => {
//     if (selectedOptions.length < 4 && !selectedOptions.includes(option)) {
//       const newSelected = [...selectedOptions, option];
//       setSelectedOptions(newSelected);

//       if (newSelected.length === 4) {
//         const correct = JSON.stringify(newSelected) === JSON.stringify(currentQuestion.correctAnswer);
//         setIsCorrect(correct);
//         setShowFeedback(true);
//         setShowExplanation(true);
//         setTimeout(() => {
//           setShowFeedback(false);
//         }, 3000);
//       }
//     }
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       resetQuestionState();
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       resetQuestionState();
//     }
//   };

//   const resetQuestionState = () => {
//     setSelectedOptions([]);
//     setIsCorrect(null);
//     setShowFeedback(false);
//     setShowExplanation(false);
//     setNextEnabled(false);
//     setTimer(30);
//   };

//   return (
//     <div className="relative flex h-screen w-screen flex-col items-center justify-end overflow-hidden bg-gradient-to-br from-[#d3d1b5] via-[#c9d4be] to-[#f1ece3]">

//       {/* Emojis */}
//       <div className="emoji-container absolute top-5 w-full flex justify-center">
//         <div className="emoji-wrapper">
//           <div className="emoji">🤔</div>
//           <div className="emoji">😕</div>
//           <div className="emoji">😵‍💫</div>
//           <div className="emoji">😟</div>
//           <div className="emoji">🤨</div>
//           <div className="emoji">😖</div>
//           <div className="emoji">🤯</div>
//           <div className="emoji">😬</div>
//           <div className="emoji">😮‍💨</div>
//           <div className="emoji">😐</div>
//         </div>
//       </div>

//       {/* Question */}
//       <motion.div
//         className="z-10 mb-12 mx-2 mt-20 text-lg font-bold text-center px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200"
//         initial={{ opacity: 0, scale: 0.8, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 1.5, ease: 'easeInOut' }}
//       >
//         🤔 {currentQuestion?.question}
//       </motion.div>

//       {/* Quote Below Question */}
//       <div className="humor-container mb-10">
//         <p className="w-full text-center text-xl font-bold text-black-300 font-semibold mt-18 absolute top-30 left-1/2 transform -translate-x-1/2 z-50">
//           "Come on, you know this one! Type it out!"
//         </p>
//       </div>

//       {/* Feedback Message */}

//       {/* Buttons */}
//       <div className="z-10 mb-4 mt-10 flex gap-4">
//         <button
//           className="button-slide-left px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200"
//           onClick={handlePrevious}
//         >
//           ⬅️ Previous
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={!nextEnabled}
//           className={`button-slide-right px-5 py-2 rounded-xl border backdrop-blur-md font-medium shadow-md transition duration-200 ${
//             nextEnabled ? 'bg-white/30 border-white/40 text-gray-900 hover:bg-white/40' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//           }`}
//         >
//           Next ➡️ ({timer}s)
//         </button>
//       </div>

//       {/* Options */}
//       <div className="relative z-10 h-96 w-[calc(100%-2rem)] mx-4 mb-6 rounded-3xl bg-white/30 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-white/20 p-6 flex flex-col animate-fade-in-up">
//         <div className="flex flex-col flex-grow">
//           {currentQuestion?.options.map((option, index) => (
//             <div
//               key={index}
//               className={`flex-1 flex items-center justify-center border-b pb-2 cursor-pointer ${
//                 selectedOptions.includes(option) ? 'bg-blue-200' : 'hover:bg-gray-100'
//               }`}
//               onClick={() => handleOptionClick(option)}
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Explanation Popup */}
//       {showExplanation && (
//         <motion.div
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className=" z-50 w-full fixed bottom-0 transform -translate-x-1/2  bg-white/30 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-white/20 px-6 py-4 rounded-2xl shadow-md text-gray-800 "
//         >
//           <p><strong>Explanation:</strong> {currentQuestion?.explanation}</p>
//           {showFeedback && (
//         <div className={`mb-2 text-lg font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
//           {isCorrect ? '✅ Okay' : '❌ Wrong'}
//         </div>
//       )}
//         </motion.div>
//       )}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Home2 from './pages/Home2';
// import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home1" element={<Home />} />
        <Route path="/Home" element={<Home2 />} />
      </Routes>
    </Router>
  );
};

export default App;
