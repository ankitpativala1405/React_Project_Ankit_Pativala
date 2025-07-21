import React from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Forgot Password
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter your email address below and we’ll send you a link to reset your password.
        </p>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-600 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-6">
          Remember your password?
          <a href="#" className="text-blue-600 ml-1 hover:underline" onClick={() => navigate("/login")}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
