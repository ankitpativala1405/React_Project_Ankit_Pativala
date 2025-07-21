import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login to Your Account</h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-600 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a  className="text-sm text-blue-600 hover:underline" onClick={() => navigate("/forgotpassword")}>
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-6">
          Don't have an account?
          <a href="#" className="text-blue-600 ml-1 hover:underline" onClick={() => navigate("/signup")}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
