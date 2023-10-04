import React from 'react';

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="bg-blue-600 p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-white hover:text-gray-200 focus:outline-none"
        >
          {isSidebarOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          )}
        </button>
        
        {/* Logo and User Info */}
        <div>
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <span className="ml-2 text-white font-semibold">Your App Name</span>
        </div>
        
        {/* User Information */}
        {/* Include relevant user information here */}
      </div>
    </div>
  );
};

export default Navbar;
