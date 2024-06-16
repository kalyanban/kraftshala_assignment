import React, { useState } from 'react';

import WelcomePage from './components/WelcomePage';
import Home from './components/Home';

import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const fetchWeatherData = async (location) => {
    const API_KEY = '8708f7b85aa82240c3c4609bfb443123';
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('Location not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (err) {
      setError('Location not found. Please enter a valid city or zip code.');
      setWeatherData(null);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <header className='header'>
        <h1>Weather App</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className='main'>
        <WelcomePage fetchWeatherData={fetchWeatherData} />
        {error && <p className="error">{error}</p>}
        {weatherData && <Home weatherData={weatherData} />}
      </main>
    </div>
  );
};

export default App;
