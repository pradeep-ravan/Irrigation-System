import React from 'react';
import { AlertTriangle, Clock, Calendar } from 'lucide-react';
import { formatDateTime, getMoistureStatusColor } from '../../utils/helpers';
import { useIrrigation } from '../../context/IrrigationContext';

const ZoneCard = ({ zone }) => {
  const { handleWaterNow, handleScheduleWatering } = useIrrigation();

  return (
    <div 
      className={`border-l-4 bg-white rounded-lg shadow-md overflow-hidden ${
        zone.status === 'critical' ? 'border-red-500' :
        zone.status === 'low' ? 'border-orange-500' :
        'border-green-500'
      }`}
    >
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{zone?.name}</h3>
          {zone?.status === 'critical' && (
            <div className="flex items-center text-red-600">
              <AlertTriangle size={16} className="mr-1" />
              <span className="text-xs font-medium">Needs water</span>
            </div>
          )}
        </div>
        
        <div className="flex justify-between mb-2">
          <div className="w-2/3">
            <div className="flex justify-between mb-1">
              <span className="text-xs text-gray-500">Current Moisture</span>
              <span className={`text-xs font-medium ${getMoistureStatusColor(zone?.currentMoisture, zone?.optimalMoisture)}`}>
                {zone?.currentMoisture}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  zone?.status === 'critical' ? 'bg-red-500' :
                  zone?.status === 'low' ? 'bg-orange-500' :
                  'bg-green-500'
                }`}
                style={{ width: `${zone?.currentMoisture}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">Optimal: {zone?.optimalMoisture}%</div>
          </div>
          
          <div className="flex flex-col items-end text-xs text-gray-600">
            <div className="flex items-center mb-1">
              <Clock size={14} className="mr-1" />
              <span>Last: {formatDateTime(zone?.lastWatered)}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>Next: {formatDateTime(zone?.scheduledWatering)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-4">
          <button 
            onClick={() => handleWaterNow(zone?.id)}
            className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
          >
            Water Now
          </button>
          <button 
            onClick={() => handleScheduleWatering(zone)}
            className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
          >
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZoneCard;