// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { ENVDATA } from '../../config';
// interface Emergency {
//   id: number;
//   name: string;
//   location: string;
//   images: string[];
//   videos: string[];
//   status: string;
//   type: string;
// }

// const EmergencyListForHospitals: React.FC = () => {
//   const [emergencies, setEmergencies] = useState<Emergency[]>([]);

//   useEffect(() => {
//     const apiUrl = ENVDATA.base_url + '/emergencies/get';
  
//     axios
//       .get(apiUrl)
//       .then((response: any) => {
//         const data: Emergency[] = response.data;
//         setEmergencies(data);
//       })
//       .catch((error: any) => {
//         console.error('Error fetching emergencies:', error);
//       });
//   }, []);
  

//   return (
//     <div>
//       <h2>Emergency List</h2>
//       {emergencies.map((emergency) => (
//         <div key={emergency.id} className="emergency-container">
//           <h3>{emergency.name}</h3>
//           <p>Location: {emergency.location}</p>
//           <div className="emergency-media">
//             {emergency.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Emergency ${emergency.id} Image ${index + 1}`}
//                 className="emergency-image"
//               />
//             ))}
//             {emergency.videos.map((video, index) => (
//               <video key={index} controls className="emergency-video">
//                 <source src={video} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EmergencyListForHospitals





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ENVDATA } from '../../config';

interface Emergency {
  id: number;
  urgency: string;
  description: string;
  location: string;
  // Add other fields as needed
}

const EmergencyListForHospitals: React.FC = () => {
  const [emergencies, setEmergencies] = useState<Emergency[]>([]);

  useEffect(() => {
    const apiUrl = ENVDATA.base_url + '/emergencies/get';

    axios
      .get(apiUrl)
      .then((response: any) => {
        const data: Emergency[] = response.data;
        setEmergencies(data);
      })
      .catch((error: any) => {
        console.error('Error fetching emergencies:', error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Emergency List</h2>
      {/* Add a search bar here (if needed) */}
      {emergencies.map((emergency) => (
        <div key={emergency.id} className="bg-blue-100 p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold mb-2">{emergency.urgency}</h3>
          <p>Description: {emergency.description}</p>
          <p>Location: {emergency.location}</p>
          {/* Add other fields as needed */}
          {/* Add a button to view emergency details and update status */}
        </div>
      ))}
    </div>
  );
};

export default EmergencyListForHospitals;

