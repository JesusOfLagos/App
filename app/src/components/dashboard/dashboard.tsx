import React from 'react';
import DashboardLayout from './dashboardLayout';
import HealthUpdatesContainer from './healthUpdatesContainer';
import UserInfoContainer from './userInfoContainer';

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      {/* Health Updates and User Information Containers */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <HealthUpdatesContainer />
        </div>
        <div className="col-span-1">
          <UserInfoContainer />
        </div>
      </div>
      
      {/* Add your tabs and page content here */}
    </DashboardLayout>
  );
};

export default DashboardPage;
