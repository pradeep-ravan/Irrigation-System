import React, { createContext, useState, useEffect, useContext } from 'react';
import * as api from '../api/apiService';

export const IrrigationContext = createContext();

export const IrrigationProvider = ({ children }) => {
  const [zones, setZones] = useState([]);
  const [moistureHistory, setMoistureHistory] = useState([]);
  const [waterUsage, setWaterUsage] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const [zonesData, moistureHistoryData, waterUsageData, weatherData] = await Promise.all([
          api.fetchZones(),
          api.fetchMoistureHistory(),
          api.fetchWaterUsage(),
          api.fetchWeatherData()
        ]);
        
        setZones(zonesData);
        setMoistureHistory(moistureHistoryData);
        setWaterUsage(waterUsageData);
        setWeather(weatherData);
        setError(null);
      } catch (err) {
        setError('Failed to load data. Please check your connection.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const handleWaterNow = async (zoneId) => {
    try {
      const result = await api.waterZoneNow(zoneId);
      setZones(zones.map(zone => zone.id === zoneId ? result.zone : zone));
    } catch (err) {
      setError('Failed to initiate watering');
      console.error('Error watering zone:', err);
    }
  };

  const handleScheduleWatering = (zone) => {
    setSelectedZone(zone);
    
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 1); 
    
    setScheduledDate(defaultDate.toISOString().split('T')[0]);
    setScheduledTime('07:00'); 
    
    setShowScheduleModal(true);
  };

  const saveSchedule = async () => {
    try {
      const scheduledDateTime = `${scheduledDate}T${scheduledTime}:00`;
      
      const result = await api.scheduleWatering(selectedZone.id, scheduledDateTime);
      
      setZones(zones.map(zone => 
        zone.id === selectedZone.id ? result.zone : zone
      ));
      
      setShowScheduleModal(false);
    } catch (err) {
      setError('Failed to schedule watering');
      console.error('Error scheduling watering:', err);
    }
  };

  const value = {
    zones,
    moistureHistory,
    waterUsage,
    weather,
    loading,
    error,
    selectedZone,
    showScheduleModal,
    setShowScheduleModal,
    scheduledDate,
    setScheduledDate,
    scheduledTime,
    setScheduledTime,
    handleWaterNow,
    handleScheduleWatering,
    saveSchedule
  };

  return (
    <IrrigationContext.Provider value={value}>
      {children}
    </IrrigationContext.Provider>
  );
};

export const useIrrigation = () => {
  const context = useContext(IrrigationContext);
  if (!context) {
    throw new Error('useIrrigation must be used within an IrrigationProvider');
  }
  return context;
};