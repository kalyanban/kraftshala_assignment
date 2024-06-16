import React from 'react';

import "./index.css"

const Home = ({ weatherData }) => {
  const { name, main: { temp }, weather: [{description}], dt } = weatherData;
  const date = new Date(dt * 1000);

  return (
    <div className="weather-display">
      <p>Location: {name}</p>
      <p>Temperature: {temp} °C</p>
      <p>Description: {description}</p>
      <p>Date & Time: {date.toLocaleString()}</p>
    </div>
  );
};

export default Home;