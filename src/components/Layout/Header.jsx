import React from 'react';
import { Droplet, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Droplet size={24} />
          <h1 className="text-xl font-bold">Smart Irrigation System</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-green-700 rounded-full px-3 py-1">
            <span className="text-sm">{new Date().toLocaleDateString()}</span>
          </div>
          <button className="p-2 rounded-full hover:bg-green-700">
            <Settings size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;