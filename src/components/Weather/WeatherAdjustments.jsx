import React from 'react';

const WeatherAdjustments = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-green-600 text-white px-6 py-4">
        <h3 className="text-lg font-medium">Weather-Based Adjustments</h3>
      </div>
      <div className="p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Rain Delay</span>
            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Enabled</span>
          </div>
          <p className="text-sm text-gray-600">System will automatically delay watering if rain is detected or forecast.</p>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Seasonal Adjustment</span>
            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
          </div>
          <p className="text-sm text-gray-600">Current adjustment: +5% (Spring conditions)</p>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Wind Compensation</span>
            <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">Inactive</span>
          </div>
          <p className="text-sm text-gray-600">Current wind conditions do not require adjustments.</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherAdjustments;