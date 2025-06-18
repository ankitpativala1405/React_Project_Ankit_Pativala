import React, { useContext } from "react";
import { ThemeContext } from "../App";

function Click() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggle = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggle}
      className={`px-6 py-3 rounded-lg font-medium transition transform hover:scale-105 shadow-lg
        ${
          theme == "dark"
            ? "bg-[#7C3AED] text-black"
            : "bg-[#2563EB] text-white hover:bg-blue-700"
        }
      `}
    >
      Want to {theme == "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}

export default Click;
