import React, { useState } from 'react';

const UploadMedicalRecord: React.FC = () => {
  const [record, setRecord] = useState({
    disease: '',
    description: '',
    date: '',
    files: [] as File[],
    prescription: '',
    status: '',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      setRecord({ ...record, files: [...record.files, ...selectedFiles] });
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = [...record.files];
    updatedFiles.splice(index, 1);
    setRecord({ ...record, files: updatedFiles });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission and API request to create a medical record
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Upload Medical Record</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Form fields for disease, description, date, prescription, and status */}
        {/* Add an input field to select and display selected files */}
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="mb-4"
        />
        <div>
          {record.files.map((file, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <p>{file.name}</p>
              <button
                type="button"
                onClick={() => handleRemoveFile(index)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Upload Record
        </button>
      </form>
    </div>
  );
};

export default UploadMedicalRecord;
