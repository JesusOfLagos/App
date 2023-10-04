import React, { useState } from 'react';
import axios from 'axios';
import { ENVDATA } from '../../config';

const EmergencyForm: React.FC = () => {
  const [formData, setFormData] = useState({
    urgency: '',
    description: '',
    location: '',
    // Add other form fields here
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const apiUrl = ENVDATA.base_url + '/emergencies/create';
      const response = await axios.post(apiUrl, formData);

      // Handle success (e.g., display a success message)
      console.log('Emergency created successfully:', response.data);

      // Reset the form
      setFormData({
        urgency: '',
        description: '',
        location: '',
        // Reset other form fields here
      });
    } catch (error) {
      console.error('Error creating emergency:', error);
    }
  };

  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create Emergency</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Form fields and inputs */}
        <div className="mb-4">
          <label htmlFor="urgency" className="block text-gray-600">
            Urgency
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="" disabled>
              Select Urgency
            </option>
            <option value="Very Urgent">Very Urgent</option>
            <option value="Urgent">Urgent</option>
            <option value="Critical">Critical</option>
          </select>
        </div>
        {/* Add more form fields here */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default EmergencyForm;
