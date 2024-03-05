import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Apply the theme to the entire application
    document.body.className = isDarkTheme ? 'dark-theme' : '';
  }, [isDarkTheme]);

  const setDarkTheme = () => {
    setIsDarkTheme(true);
  };

  const setLightTheme = () => {
    setIsDarkTheme(false);
  };

  return (
    <div className={`app-container ${isDarkTheme ? 'dark-theme' : ''}`}>
      <h1>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</h1>
      <div className="theme-buttons">
        <button onClick={setDarkTheme}
        className={isDarkTheme ? 'active' : ''}>Dark</button>
        <button onClick={setLightTheme}
        className={!isDarkTheme ? 'active' : ''}>Light</button>
      </div>
    </div>
  );
};

export default App;
