import React, { useState } from 'react';
import '/Users/varadvikaspatil/Documents/Projects/notes-app/src/Components/css/Header.css'; // Adjust path to your CSS file
import { Brightness4 as MoonIcon, Brightness7 as SunIcon } from '@mui/icons-material'; // Import Material-UI icons

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle dark mode class on body or another appropriate container
    document.body.classList.toggle('dark-mode', darkMode);
  };

  return (
    <div className="header">
      <h1 className="notes__title">Good Notes</h1>
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
        <span className="slider round">
          {darkMode ? <MoonIcon /> : <SunIcon />}
        </span>
      </label>
    </div>
  );
}

export default Header;
