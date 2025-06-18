import { createContext, useState } from "react";
import Click from "./components/Click";

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          theme === "light"
            ? "bg-white text-gray-900"
            : "bg-gray-900 text-white"
        } flex flex-col items-center justify-center px-6 py-10`}
      >
        <h1 className="text-4xl font-bold mb-4">{theme} MODE ON</h1>
        <Click />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
