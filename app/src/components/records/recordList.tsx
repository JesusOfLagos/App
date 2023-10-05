import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface MedicalRecord {
  _id: string;
  disease: string;
  date: string;
  prescription: string;
  status: string;
  files: Array<{ title: string; file: string }>;
  // Add other fields as needed
}

const MedicalRecordList: React.FC = () => {
  const [records, setRecords] = useState<MedicalRecord[]>([]);

  useEffect(() => {
    // Fetch user's medical records and set them in the state
    axios
      .get('/api/medical-records')
      .then((response: any) => {
        const data: MedicalRecord[] = response.data;
        setRecords(data);
      })
      .catch((error: any) => {
        console.error('Error fetching medical records:', error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Medical Records</h2>
      {records.map((record) => (
        <div
          key={record._id}
          className="bg-blue-100 p-6 rounded-lg shadow-md mb-4"
        >
          <h3 className="text-xl font-semibold mb-2">{record.disease}</h3>
          <p>Date: {record.date}</p>
          <p>Prescription: {record.prescription}</p>
          <p>Status: {record.status}</p>
          <p>Files: {record.files.length} Files</p>
          {/* Display files and other record details */}
        </div>
      ))}
    </div>
  );
};

export default MedicalRecordList;
