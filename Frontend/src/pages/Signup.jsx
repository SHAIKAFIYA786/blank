import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d3d1b5] via-[#c9d4be] to-[#f1ece3]">
      <form className="bg-white/30 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-white/20 px-6 py-8 rounded-2xl w-full max-w-sm text-gray-800 space-y-5">
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-md bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-md bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="••••••••"
          />
        </div>
        <button onClick={handleSignUpClick}
 className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition">
          Sign Up
        </button>
        <p className="text-sm text-center ">
          Already have an account? <a href="/login" className="underline text-blue-500 hover:underline">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
