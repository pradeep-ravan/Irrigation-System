import React from 'react';
import MoistureHistory from '../History/MoistureHistory';
import WaterUsage from '../History/WaterUsage';

const HistoryTab = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Moisture History</h2>
      <MoistureHistory />
      <WaterUsage />
    </div>
  );
};

export default HistoryTab;