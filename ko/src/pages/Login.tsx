import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-white text-2xl font-bold text-center mb-2"></h2>
        <h3 className="text-gray-300 text-lg font-semibold text-center mb-4">Sign In</h3>
        <p className="text-gray-400 text-center text-sm mb-6">
          Enter your credentials to access your account
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
        />

        <button className="w-full p-3 bg-white text-black font-semibold rounded-lg mb-3">
          Sign In
        </button>

        <p className="text-gray-400 text-center text-sm mb-3">Or continue with</p>

        <button className="w-full p-3 bg-red-600 text-white font-semibold rounded-lg mb-3">
          Sign in with Google
        </button>
        <button className="w-full p-3 bg-gray-700 text-white font-semibold rounded-lg">
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;

