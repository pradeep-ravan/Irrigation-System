import React from 'react';
import ZoneCard from './ZoneCard';
import { useIrrigation } from '../../context/IrrigationContext';

const ZonesOverview = () => {
  const { zones } = useIrrigation();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Irrigation Zones Overview</h2>
        <div className="flex items-center text-sm text-gray-600">
          <span className="w-3 h-3 rounded-full bg-green-500 mr-1"></span> Normal
          <span className="w-3 h-3 rounded-full bg-orange-500 mx-1 ml-3"></span> Low
          <span className="w-3 h-3 rounded-full bg-red-500 mx-1 ml-3"></span> Critical
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {zones && zones?.map(zone => (
          <ZoneCard key={zone?.id} zone={zone} />
        ))}
      </div>
    </div>
  );
};

export default ZonesOverview;