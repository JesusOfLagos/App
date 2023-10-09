import React from 'react';
import QRCode from 'qrcode.react';

const HealthCard = () => {
  // Example data for the QR code
  const qrCodeData = 'Health information goes here';

  return (
    <div className="w-64 h-96 bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <h3 className="text-2xl font-semibold">Health Card</h3>
      <div className="mt-4">
        {/* Add your health card content here */}
      </div>
      <div className="mt-4">
        <QRCode value={qrCodeData} size={128} />
      </div>
    </div>
  );
};

export default HealthCard;
