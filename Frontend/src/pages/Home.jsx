 import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../index.css';
import { Link } from 'react-router-dom';

function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [timer, setTimer] = useState(30);

  // Fetching dummy data
  useEffect(() => {
    const data = {
        status: 'SUCCESS',
        data: {
          questions: [
            {
              question: "The company's _____________ approach to product development _____________ customer feedback at every stage, _____________ user satisfaction and _____________ a loyal consumer base.",
              options: ['Incorporated', 'User-centric', 'Enhancing', 'Cultivating'],
              correctAnswer: ['User-centric', 'Incorporated', 'Enhancing', 'Cultivating'],
              explanation: "The correct order emphasizes a thoughtful, user-first product process."
            },
            {
              question: "The _____________ musical performance _____________ elements from various genres, _____________ the audience with its unique sound and _____________ critical acclaim from industry experts.",
              options: ['Captivating', 'Eclectic', 'Garnering', 'Blended'],
              correctAnswer: ['Eclectic', 'Blended', 'Captivating', 'Garnering'],
              explanation: "This order describes how a diverse music performance can attract and impress."
            },
            {
              question: "The scientist's _____________ research on quantum computing _____________ new possibilities for data processing, _____________ traditional limitations and _____________ the way for groundbreaking technological advancements.",
              options: ['Pioneering', 'Paving', 'Overcoming', 'Opened up'],
              correctAnswer: ['Pioneering', 'Opened up', 'Overcoming', 'Paving'],
              explanation: "Describes a scientific breakthrough that led to progress and innovation."
            },
            {
              question: "The _____________ implementation of machine learning algorithms in medical diagnostics _____________ early detection of diseases, _____________ treatment outcomes and _____________ the workload of healthcare professionals.",
              options: ['Improving', 'Reducing', 'Enabled', 'Revolutionary'],
              correctAnswer: ['Revolutionary', 'Enabled', 'Improving', 'Reducing'],
              explanation: "Describes a cutting-edge tech that transformed medical diagnostics."
            },
            {
              question: "The _____________ security breach at the tech giant _____________ millions of users' data, _____________ concerns about online privacy and _____________ calls for stricter regulations.",
              options: ['Raising', 'Massive', 'Prompting', 'Compromised'],
              correctAnswer: ['Massive', 'Compromised', 'Raising', 'Prompting'],
              explanation: "Details a major data breach and its consequences."
            },
            {
              question: "The _____________ educational reform _____________ a more inclusive curriculum, _____________ equal opportunities for all students and _____________ the overall quality of public schooling.",
              options: ['Comprehensive', 'Enhancing', 'Implemented', 'Promoting'],
              correctAnswer: ['Comprehensive', 'Implemented', 'Promoting', 'Enhancing'],
              explanation: "Highlights the positive impact of broad educational reform."
            },
            {
              question: "The company's _____________ commitment to sustainability _____________ eco-friendly practices across all departments, _____________ its carbon footprint and _____________ a model for corporate responsibility.",
              options: ['Implemented', 'Setting', 'Unwavering', 'Reducing'],
              correctAnswer: ['Unwavering', 'Implemented', 'Reducing', 'Setting'],
              explanation: "Shows how dedication to sustainability leads to eco-leadership."
            },
            {
              question: "The _____________ implementation of artificial intelligence in healthcare _____________ patient outcomes, _____________ the workload of medical professionals and _____________ new avenues for personalized treatment.",
              options: ['Opening', 'Improved', 'Gradual', 'Reducing'],
              correctAnswer: ['Gradual', 'Improved', 'Reducing', 'Opening'],
              explanation: "Describes a steady adoption of AI and its health benefits."
            },
            {
              question: "The _____________ festival _____________ artists from diverse backgrounds, _____________ cultural exchange and _____________ a platform for emerging talents to showcase their work.",
              options: ['Providing', 'Brought together', 'Promoting', 'International'],
              correctAnswer: ['International', 'Brought together', 'Promoting', 'Providing'],
              explanation: "Captures the cultural impact of a global festival."
            },
            {
              question: "The _____________ implementation of smart city technologies _____________ urban efficiency and sustainability, _____________ quality of life for residents and _____________ a model for future urban development.",
              options: ['Enhancing', 'Improved', 'Providing', 'Widespread'],
              correctAnswer: ['Widespread', 'Improved', 'Enhancing', 'Providing'],
              explanation: "Outlines how widespread smart tech boosts city living."
            }
          ]
        }
      };
      
    setQuestions(data.data.questions);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  // Timer logic
  useEffect(() => {
    setNextEnabled(false);
    setTimer(30);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          setNextEnabled(true);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [currentQuestionIndex]);
 
const handleOptionClick = (option) => {
    if (selectedOptions.length < 4 && !selectedOptions.includes(option)) {
      const newSelected = [...selectedOptions, option];
      setSelectedOptions(newSelected);
  
      if (newSelected.length === 4) {
        const isAnswerCorrect = JSON.stringify(newSelected) === JSON.stringify(currentQuestion.correctAnswer);
        setIsCorrect(isAnswerCorrect);
  
        if (isAnswerCorrect) {
          setScore(prevScore => prevScore + 1);  // Increment score by 1 if correct
        }
  
        setShowFeedback(true);
        setShowExplanation(true);
  
        setTimeout(() => {
          setShowFeedback(false);
        }, 3000);
      }
    }
  };
  

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      resetQuestionState();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      resetQuestionState();
    }
  };

  const resetQuestionState = () => {
    setSelectedOptions([]);
    setIsCorrect(null);
    setShowFeedback(false);
    setShowExplanation(false);
    setNextEnabled(false);
    setTimer(30);
  };

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-end overflow-hidden bg-gradient-to-br from-[#d3d1b5] via-[#c9d4be] to-[#f1ece3]">

      {/* Emojis */}
      <div className="emoji-container absolute top-5 w-full flex justify-center">
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

 
      <motion.div
        // key={currentQuestionIndex}
        className="z-10 mb-12 mx-2 mt-20 text-lg font-bold text-center px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        🤔 {currentQuestion?.question}
      </motion.div>

    
      <div className="humor-container mb-10">
        <p className="w-full text-center text-xl font-bold text-black-300 font-semibold mt-18 absolute top-30 left-1/2 transform -translate-x-1/2 z-50">
          "Come on, you know this one! Type it out!"
           
        </p>
      </div>
      <Link to="/Home" className="text-blue-500 hover:underline"> lets go Back profile</Link>
  

    
      <div className="z-10 mb-4 mt-10 flex gap-4">
        <button
          className="button-slide-left px-5 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-medium shadow-md hover:bg-white/40 transition duration-200"
          onClick={handlePrevious}
        >
          ⬅️ Previous
        </button>
        <button
          onClick={handleNext}
          disabled={!nextEnabled}
          className={`button-slide-right px-5 py-2 rounded-xl border backdrop-blur-md font-medium shadow-md transition duration-200 ${
            nextEnabled ? 'bg-white/30 border-white/40 text-gray-900 hover:bg-white/40' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Next ➡️ ({timer}s)
        </button>
      </div>

     
      <div 
    //    key={currentQuestionIndex}
      className="relative z-10 h-96 w-[calc(100%-2rem)] mx-4 mb-6 rounded-3xl bg-white/30 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-white/20 p-6 flex flex-col animate-fade-in-up">
        <div className="flex flex-col flex-grow">
          {currentQuestion?.options.map((option, index) => (
            <div
              key={index}
              className={`flex-1 flex items-center justify-center border-b pb-2 cursor-pointer ${
                selectedOptions.includes(option) ? 'bg-blue-200' : 'hover:bg-gray-100'
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>

       
      {showExplanation && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" z-50 w-full fixed bottom-0 transform -translate-x-1/2  bg-white/30 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-white/20 px-6 py-4 rounded-2xl shadow-md text-gray-800 "
        >
          <p><strong>Explanation:</strong> {currentQuestion?.explanation}</p>
          {showFeedback && (
        <div className={`mb-2 text-center text-lg font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
          {isCorrect ? '✅ Okay' : '❌ Wrong'}
          <div>
    {isCorrect ? (
      <p className="text-green-500 text-center">Correct! Your score is: {score}</p>
    ) : (
      <p className="text-red-500 text-center">Wrong! Your score is: {score}</p>
    )}
  </div>
        </div>
        
        
      )}
        </motion.div>
      )}
    </div>
  );
}

export default App;

