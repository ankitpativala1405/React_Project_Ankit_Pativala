import React, { useContext } from 'react';
import { ThemeContext } from '../App';

function Click() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggle}
      className={`px-6 py-3 rounded-lg font-medium transition transform hover:scale-105 shadow-lg
        ${theme === 'light' ? 'bg-[#2563EB] text-white hover:bg-blue-700' : 'bg-[#7C3AED] text-black'}
      `}
    >
      Want to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default Click;
