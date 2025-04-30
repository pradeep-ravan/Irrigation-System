import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useIrrigation } from '../../context/IrrigationContext';

const MoistureHistory = () => {
  const { moistureHistory, loading } = useIrrigation();
  
  if (loading) return <div className="loading">Loading moisture history...</div>;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-700 mb-2">7-Day Moisture Trends</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={moistureHistory}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Front Lawn" stroke="#4CAF50" strokeWidth={2} />
              <Line type="monotone" dataKey="Vegetable Garden" stroke="#2196F3" strokeWidth={2} />
              <Line type="monotone" dataKey="Flower Bed" stroke="#9C27B0" strokeWidth={2} />
              <Line type="monotone" dataKey="Backyard" stroke="#FF9800" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MoistureHistory;