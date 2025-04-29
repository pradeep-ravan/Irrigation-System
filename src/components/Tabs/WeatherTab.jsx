import React from 'react';
import CurrentWeather from '../Weather/CurrentWeather';
import WeatherAdjustments from '../Weather/WeatherAdjustments';

const WeatherTab = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Weather Integration</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CurrentWeather />
        <WeatherAdjustments />
      </div>
    </div>
  );
};

export default WeatherTab;