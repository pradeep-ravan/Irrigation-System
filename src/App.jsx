import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Navigation from './components/Layout/Navigation';
import DashboardTab from './components/Tabs/DashboardTab';
import ScheduleTab from './components/Tabs/ScheduleTab';
import HistoryTab from './components/Tabs/HistoryTab';
import WeatherTab from './components/Tabs/WeatherTab';
import ScheduleModal from './components/Schedule/ScheduleModal';
import { IrrigationProvider } from './context/IrrigationContext';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <IrrigationProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="container mx-auto px-4 py-6">
          {activeTab === 'dashboard' && <DashboardTab />}
          {activeTab === 'schedule' && <ScheduleTab />}
          {activeTab === 'history' && <HistoryTab />}
          {activeTab === 'weather' && <WeatherTab />}
        </main>
        
        <ScheduleModal />
      </div>
    </IrrigationProvider>
  );
}

export default App;