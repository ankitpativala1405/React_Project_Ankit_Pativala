import React from "react";
import { useNavigate } from "react-router";


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">
          <a onClick={() => navigate("/")}>MyApp</a>
        </div>
        <div className="space-x-4">
          <a className="text-gray-700 hover:text-blue-600 transition" onClick={() => navigate("/login")}>
            Login
          </a>
          <a className="text-gray-700 hover:text-blue-600 transition" onClick={() => navigate("/signup")}>
            Signup
          </a>
          <a className="text-gray-700 hover:text-blue-600 transition" onClick={() => navigate("/forgotpassword")}>
            Forgot Password
          </a>
          <a className="text-gray-700 hover:text-blue-600 transition" onClick={() => navigate("/aboutus")}>
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
