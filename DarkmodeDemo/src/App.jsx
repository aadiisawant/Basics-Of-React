import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    
    document.body.className = isDarkTheme ? 'dark-theme' : '';
  }, [isDarkTheme]);
 
  const setDarkTheme = () => {
    setIsDarkTheme(true);
  };

  const setLightTheme = () => {
    setIsDarkTheme(false);
  }; 

  return (
    <>
    <div className={`app-container ${isDarkTheme ? 'dark-theme' : ''}`}>
      <h1>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</h1>
      <div className="theme-buttons">
        <button onClick={setDarkTheme}
        className={isDarkTheme ? 'active' : ''}>Dark</button>
        <button onClick={setLightTheme}
        className={!isDarkTheme ? 'active' : ''}>Light</button>
      </div>
      <Card />
    </div> 
    
    </>
  );
};

export default App;
