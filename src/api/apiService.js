import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

const api = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  export const fetchZones = async () => {
    const response = await api.get('/zones');
    return response.data;
  };
  
  export const fetchZoneById = async (id) => {
    const response = await api.get(`/zones/${id}`);
    return response.data;
  };
  
  export const createZone = async (zoneData) => {
    const response = await api.post('/zones', zoneData);
    return response.data;
  };
  
  export const updateZone = async (id, zoneData) => {
    const response = await api.put(`/zones/${id}`, zoneData);
    return response.data;
  };
  
  export const deleteZone = async (id) => {
    const response = await api.delete(`/zones/${id}`);
    return response.data;
  };
  
  export const waterZoneNow = async (id, duration = 30) => {
    const response = await api.post(`/zones/${id}/water`, { duration });
    return response.data;
  };
  
  export const scheduleWatering = async (id, scheduledDateTime) => {
    const response = await api.post(`/zones/${id}/schedule`, { scheduledDateTime });
    return response.data;
  };
  
  export const fetchMoistureHistory = async () => {
    const response = await api.get('/history/moisture');
    return response.data;
  };
  
  export const fetchWaterUsage = async () => {
    const response = await api.get('/history/water-usage');
    return response.data;
  };
  

  export const fetchWeatherData = async () => {
    const response = await api.get('/weather');
    return response.data;
  };