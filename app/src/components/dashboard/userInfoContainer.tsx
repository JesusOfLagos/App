import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserInfoContainer: React.FC = () => {
  const [walletBalance, setWalletBalance] = useState<number | null>(null);
  const [cardDetails, setCardDetails] = useState<string | null>(null);
  const [healthStatus, setHealthStatus] = useState<string | null>(null);

  useEffect(() => {
    // Fetch user wallet balance
    axios.get('/api/user-wallet-balance').then((response) => {
      setWalletBalance(response.data.balance);
    });

    // Fetch user card details
    axios.get('/api/user-card-details').then((response) => {
      setCardDetails(response.data.cardDetails);
    });

    // Fetch user health status
    axios.get('/api/user-health-status').then((response) => {
      setHealthStatus(response.data.healthStatus);
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Wallet Balance</h3>
        <p className="text-xl">{walletBalance !== null ? `$${walletBalance}` : 'Loading...'}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Card Details</h3>
        <p>{cardDetails !== null ? cardDetails : 'Loading...'}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Health Status</h3>
        <p>{healthStatus !== null ? healthStatus : 'Loading...'}</p>
      </div>
    </div>
  );
};

export default UserInfoContainer;
