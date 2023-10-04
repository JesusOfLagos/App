


import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface MedicalRecord {
  data: any;
}

interface MedicalRecordDetailProps {
  record: MedicalRecord | null;
}

const MedicalRecordDetail: React.FC<MedicalRecordDetailProps> = () => {
  const { id } = useParams();
  const [record, setRecord] = useState<MedicalRecord | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const errorModalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    axios
      .get(`https://example.com/record/${id}`)
      .then((response) => {
        const fetchedRecord: MedicalRecord = response.data;
        setRecord(fetchedRecord);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching medical record');
        setLoading(false);
      });
  }, [id]);

  const closeErrorModal = () => {
    setError(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        errorModalRef.current &&
        !errorModalRef.current.contains(event.target as Node)
      ) {
        closeErrorModal();
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-80">
        <div className="animate-spin rounded-full border-t-2 border-blue-500 border-opacity-50 h-16 w-16"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <div ref={errorModalRef} className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Error</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-800 w-40 h-80">
      {/* ... rest of the component */}
      <h2 className="text-2xl font-semibold text-blue-950 mb-4">Medical Record Details</h2>
      <h3 className="text-xl font-semibold mb-2">{record?.data?.disease}</h3>
      <p>Date: {record?.data?.date}</p>
      <p>Prescription: {record?.data?.prescription}</p>
      <p>Status: {record?.data?.status}</p>
      {/* Display files with titles and other record details */}
      {record?.data?.files.map((file: any, index: any) => (
        <div key={index} className="mb-4">
          <h4 className="text-lg font-semibold">{file.title}</h4>
          <img src={file.file} alt={`File ${index}`} className="max-w-full" />
        </div>
      ))}
    </div>
  );
};

export default MedicalRecordDetail;
