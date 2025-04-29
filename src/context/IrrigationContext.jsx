import React, { createContext, useState, useEffect, useContext } from 'react';
import { initialZonesData } from '../data/mockZones';

const IrrigationContext = createContext();

export const useIrrigation = () => useContext(IrrigationContext);

export const IrrigationProvider = ({ children }) => {
  const [zones, setZones] = useState(initialZonesData);
  const [selectedZone, setSelectedZone] = useState(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setZones(prevZones => 
        prevZones?.map(zone => ({
          ...zone,
          currentMoisture: Math.max(5, Math.min(100, zone?.currentMoisture + (Math.random() * 2 - 1)))
        }))
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleScheduleWatering = (zone) => {
    setSelectedZone(zone);
    setShowScheduleModal(true);
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(6, 0, 0);
    
    setScheduledDate(tomorrow.toISOString().split('T')[0]);
    setScheduledTime('06:00');
  };

  const saveSchedule = () => {
    if (!scheduledDate || !scheduledTime) return;
    
    const scheduledDateTime = `${scheduledDate}T${scheduledTime}:00`;
    
    setZones(prevZones => 
      prevZones?.map(zone => 
        zone?.id === selectedZone?.id 
          ? { ...zone, scheduledWatering: scheduledDateTime }
          : zone
      )
    );
    
    setShowScheduleModal(false);
  };

  const handleWaterNow = (zoneId) => {
    const now = new Date().toISOString();
    
    setZones(prevZones => 
      prevZones?.map(zone => 
        zone?.id === zoneId 
          ? { 
              ...zone, 
              lastWatered: now, 
              currentMoisture: Math.min(100, zone?.currentMoisture + 25),
              status: "normal"
            }
          : zone
      )
    );
  };

  const value = {
    zones,
    setZones,
    selectedZone,
    setSelectedZone,
    showScheduleModal,
    setShowScheduleModal,
    scheduledDate,
    setScheduledDate,
    scheduledTime,
    setScheduledTime,
    handleScheduleWatering,
    saveSchedule,
    handleWaterNow
  };

  return (
    <IrrigationContext.Provider value={value}>
      {children}
    </IrrigationContext.Provider>
  );
};