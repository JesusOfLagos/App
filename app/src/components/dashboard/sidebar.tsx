import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard'); // Set default active tab

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-64 bg-blue-600 h-full text-white">
      {/* Sidebar Content */}
      <div className="p-4">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <span className="ml-2 text-xl font-semibold">Your App</span>
        </div>
        
        {/* Tabs */}
        <div className="space-y-4">
          {/* Dashboard Tab */}
          <button
            onClick={() => handleTabClick('dashboard')}
            className={`w-full py-2 px-4 rounded-lg focus:outline-none ${
              activeTab === 'dashboard' ? 'bg-blue-700' : ''
            }`}
          >
            Dashboard
          </button>

          {/* Records Tab */}
          <button
            onClick={() => handleTabClick('records')}
            className={`w-full py-2 px-4 rounded-lg focus:outline-none ${
              activeTab === 'records' ? 'bg-blue-700' : ''
            }`}
          >
            Records
          </button>

          {/* Transactions Tab */}
          {/* Add similar buttons for other tabs */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
