import React, { useState } from 'react';
import '../styles/DarkModeButton.css';

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button
      className={`dark-mode-button ${isDarkMode ? 'active' : ''}`}
      onClick={toggleDarkMode}
    >
      <div className="toggle-container">
        <div className="toggle-circle"></div>
      </div>
    </button>
  );
};

export default DarkModeButton;