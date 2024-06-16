import React, { useState } from "react";

const WelcomePage = ({ fetchWeatherData }) => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location) {
      fetchWeatherData(location);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name or zip code"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default WelcomePage;
