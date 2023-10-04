import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HealthUpdatesContainer: React.FC = () => {
  const [healthUpdates, setHealthUpdates] = useState<string[]>([]) || null

  useEffect(() => {
    // Fetch health updates from an API
    axios
      .get('/api/health-updates')
      .then((response: any) => {
        const data: string[] = response.data;
        setHealthUpdates(data);
      })
      .catch((error: any) => {
        console.error('Error fetching health updates:', error);
      });
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Health Updates</h2>
      {/* Display health updates */}
      {healthUpdates.map((update, index) => (
        <p key={index} className="mb-2">{update}</p>
      ))}
    </div>
  );
};

export default HealthUpdatesContainer;
