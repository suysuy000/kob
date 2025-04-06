import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <header className="absolute top-0 left-0 p-6">
        <h1 className="text-white text-4xl font-bold hover:text-gray-300" onClick={() => navigate("/")}>
          kobweb
        </h1>
      </header>

      <div className="bg-gray-900 p-10 rounded-2xl shadow-lg w-[480px]"> {/* 크기 키운 부분 */}
        <h2 className="text-white text-3xl font-bold text-center mb-3">My Network</h2> {/* 글자도 살짝 키움 */}
        <h3 className="text-gray-300 text-xl font-semibold text-center mb-4">Sign In</h3>
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

