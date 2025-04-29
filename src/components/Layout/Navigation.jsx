import React from 'react';
import { Droplet, Calendar, BarChart2, Cloud } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex space-x-1">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center px-4 py-3 text-sm font-medium ${activeTab === 'dashboard' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-600'}`}
          >
            <Droplet size={18} className="mr-2" />
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('schedule')}
            className={`flex items-center px-4 py-3 text-sm font-medium ${activeTab === 'schedule' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-600'}`}
          >
            <Calendar size={18} className="mr-2" />
            Schedule
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`flex items-center px-4 py-3 text-sm font-medium ${activeTab === 'history' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-600'}`}
          >
            <BarChart2 size={18} className="mr-2" />
            History
          </button>
          <button 
            onClick={() => setActiveTab('weather')}
            className={`flex items-center px-4 py-3 text-sm font-medium ${activeTab === 'weather' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-600'}`}
          >
            <Cloud size={18} className="mr-2" />
            Weather
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;