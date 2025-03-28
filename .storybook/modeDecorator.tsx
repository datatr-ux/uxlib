/* eslint-disable @typescript-eslint/no-explicit-any */
import { Moon } from "lucide-react";
import React, { useState } from "react";
export const ModeDecorator = (Story: any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    document.documentElement.style.background = !isDarkMode ? '#1e1e1e' : '#ffffff';
  };
  return (
    <>
      <button
        onClick={toggleMode}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 9999,
          padding: "8px 8px",
          backgroundColor: isDarkMode ? "#333" : "#fff",
          color: isDarkMode ? "#fff" : "#333",
          border: "none",
          borderRadius: "5px",
        }}
      >
        <Moon size={10}/>
      </button>
      <Story />
    </>
  );
};
