import React from 'react';
import { Sun, Cloud } from 'lucide-react';
import { weatherData } from '../../data/mockWeather';

const CurrentWeather = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden col-span-2">
      <div className="bg-blue-600 text-white px-6 py-4">
        <h3 className="text-lg font-medium">Current Weather</h3>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Sun size={48} className="text-yellow-500 mr-4" />
            <div>
              <div className="text-3xl font-bold text-gray-800">{weatherData?.current?.temp}°F</div>
              <div className="text-gray-600">{weatherData?.current?.condition}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-gray-600">Humidity: {weatherData?.current?.humidity}%</div>
            <div className="text-gray-600">Wind: {weatherData?.current?.wind} mph</div>
            <div className="text-gray-600">Chance of Rain: {weatherData?.current?.rain_chance}%</div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-md font-medium text-gray-700 mb-4">3-Day Forecast</h4>
          <div className="grid grid-cols-3 gap-4">
            {weatherData?.forecast?.map((day, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-lg p-3">
                <div className="font-medium">{day?.day}</div>
                <div className="my-2">
                  {day?.condition === "Clear" && <Sun className="mx-auto text-yellow-500" size={24} />}
                  {day?.condition === "Partly Cloudy" && <Cloud className="mx-auto text-gray-400" size={24} />}
                  {day?.condition === "Sunny" && <Sun className="mx-auto text-yellow-500" size={24} />}
                </div>
                <div className="text-lg font-medium">{day?.temp}°F</div>
                <div className="text-xs text-gray-500">{day?.rain_chance}% rain</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;