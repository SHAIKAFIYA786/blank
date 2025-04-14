import React, { useState } from "react";

const CompetitionPage = () => { 
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [progress, setProgress] = useState(0);

  const handlePartnerSelect = (partner) => {
    setSelectedPartner(partner);
  };

  const handleProgress = () => {
    if (progress < 100) {
      setProgress(progress + 20);
    }
  };

  return (
    <div className="font-sans  bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 min-h-screen">
    

    
      <section className="max-w-4xl mx-auto my-12 px-6 bg-white/30 backdrop-blur-md border border-white/40 text-gray-900">
        <h2 className="text-2xl font-semibold text-primary mb-6">Competition Overview</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          This is your chance to participate in the competition! Choose a partner to collaborate with, track your progress, and earn valuable badges based on your achievements.
        </p>
      </section>

 
      <section className="max-w-4xl mx-auto my-12 px-6">
        <h2 className="text-xl font-semibold text-primary mb-6">Select Your Partner</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="transition duration-300 transform hover:scale-105 bg-white/30 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-white/20 p-6 cursor-pointer border border-gray-300"
            onClick={() => handlePartnerSelect("Partner 1")}
          >
            <h3 className="text-xl bg-white/30 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-white/20">Partner 1</h3>
            <p className="text-gray-600">Great at problem-solving!</p>
          </div>
          <div
            className="transition duration-300 transform hover:scale-105 bg-white shadow-lg rounded-lg p-6 cursor-pointer border border-gray-300"
            onClick={() => handlePartnerSelect("Partner 2")}
          >
            <h3 className="text-xl font-semibold text-gray-800">Partner 2</h3>
            <p className="text-gray-600">Expert in coding challenges!</p>
          </div>
        </div>
        {selectedPartner && (
          <div className="mt-6 text-center text-lg text-primary">
            <p>You have selected: {selectedPartner}</p>
          </div>
        )}
      </section>

       
      <section className="max-w-4xl mx-auto my-12 px-6 bg-white/30 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-white/20">
        <h2 className="text-xl font-semibold text-primary mb-6">Your Profile & Progress</h2>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-300 mr-6"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Learner</h3>
              <p className="text-gray-500">Progress: {progress}%</p>
            </div>
          </div>

          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-primary h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

         
          <div className="flex justify-between">
            <span className="badge bg-primary text-white py-1 px-4 rounded-lg">Beginner</span>
            <span className="badge bg-secondary text-white py-1 px-4 rounded-lg">Intermediate</span>
            <span className="badge bg-primary text-white py-1 px-4 rounded-lg">Advanced</span>
          </div>

          <button
            className="mt-8 bg-primary text-white px-6 py-2 rounded-full transition duration-300 hover:bg-primary-dark"
            onClick={handleProgress}
          >
            Track Progress
          </button>
        </div>
      </section>
    </div>
  );
};

export default CompetitionPage;
