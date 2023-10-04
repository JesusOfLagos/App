import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ENVDATA } from '../../config';

interface EmergencyDetailProps {
  emergencyId: number;
}

interface Emergency {
    id: number;
    urgency: string;
    description: string;
    location: string;
    isAttendedTo: boolean;
    // Add other fields as needed
}


const EmergencyDetail: React.FC<EmergencyDetailProps> = ({ emergencyId }) => {
  const [emergency, setEmergency] = useState<Emergency | null>(null);

  useEffect(() => {
    const apiUrl = ENVDATA.base_url + `/emergencies/${emergencyId}`;

    axios
      .get(apiUrl)
      .then((response: any) => {
        const data: Emergency = response.data;
        setEmergency(data);
      })
      .catch((error: any) => {
        console.error('Error fetching emergency details:', error);
      });
  }, [emergencyId]);

  const handleUpdateStatus = async () => {
    if (emergency) {
      // Update the status of the emergency, e.g., make a PUT request
      const apiUrl = ENVDATA.base_url + `/emergencies/${emergency.id}/update`;

      try {
        const response = await axios.put(apiUrl, { isAttendedTo: true });

        // Handle success (e.g., display a success message)
        console.log('Emergency status updated successfully:', response.data);
      } catch (error) {
        console.error('Error updating emergency status:', error);
      }
    }
  };

  return (
    <div>
      {emergency ? (
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Emergency Details</h2>
          <h3 className="text-xl font-semibold mb-2">{emergency.urgency}</h3>
          <p>Description: {emergency.description}</p>
          <p>Location: {emergency.location}</p>
          {/* Add other fields as needed */}
          {emergency.isAttendedTo ? (
            <p>Status: Attended To</p>
          ) : (
            <button
              onClick={handleUpdateStatus}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Mark as Attended
            </button>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EmergencyDetail;
