import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ENVDATA } from '../../config';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Define your PaymentRecord interface here
interface PaymentRecord {
  _id: string;
  user: string;
  date: string;
  description: string;
  status: string;
  isPaid: boolean;
  amount: number;
  hospital: {
    name: string;
    bankCode: string;
    bankName: string;
    accountNumber: string;
    // Add other hospital details here
  };
}

const PaymentModal: React.FC<{
  hospital: PaymentRecord['hospital'];
  onClose: () => void;
  onPay: () => void;
}> = ({ hospital, onClose, onPay }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{hospital.name}</h2>
        <p>Bank Code: {hospital.bankCode}</p>
        <p>Bank Name: {hospital.bankName}</p>
        {/* Add more hospital details */}
        <button onClick={onPay}>Pay {hospital.name}</button>
      </div>
    </div>
  );
};

const PaymentRecordList: React.FC = () => {
  const [records, setRecords] = useState<PaymentRecord[]>([]);
  const history = useNavigate();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const [isPaymentSuccessModalOpen, setIsPaymentSuccessModalOpen] = useState<boolean>(false);
  const [isPaymentFailureModalOpen, setIsPaymentFailureModalOpen] = useState<boolean>(false);
  const [paymentModalData, setPaymentModalData] = useState<PaymentRecord | null>(null);
  const [paymentResponse, setPaymentResponse] = useState<string | null>(null);

  const handlePayment = async (amount: number, bankCode: string, accountNumber: string) => {
    try {
      // Replace with actual payment details
      const url = ENVDATA.base_url + "/send"
      const response = await axios.post(url, {
        amount: amount,
        bankCode: bankCode,
        accountNumber: accountNumber
        // Add other payment details here
      });

      if (response.data.success) {
        setIsPaymentModalOpen(false);
        setIsPaymentSuccessModalOpen(true);
        setPaymentResponse(response.data.message); // Store the response message
      } else {
        setIsPaymentFailureModalOpen(true);
        setPaymentResponse(response.data.error); // Store the error message
      }
    } catch (error) {
      setIsPaymentFailureModalOpen(true);
      setPaymentResponse('An error occurred during payment.'); // Set a generic error message
    }
  };

  const handlePay = (record: PaymentRecord) => {
    setPaymentModalData(record);
    setIsPaymentModalOpen(true);
  };

  useEffect(() => {
    // Fetch user's payment records and set them in the state
    const url = ENVDATA.base_url + '/payment-detail/get/651e7d91ea7755a8c9109184';

    axios
      .get(url)
      .then((response) => {
        const data: { payments: PaymentRecord[] } = response.data;
        setRecords(data.payments);
      })
      .catch((error) => {
        console.error('Error fetching payment records:', error);
      });
  }, []);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-2xl text-white font-semibold p-2 bg-black w-64 h-12 rounded-2xl mx-auto">
          Payment Records
        </h2>
      </div>
      <div className="flex justify-between items-center mb-4">
        <button onClick={goBack} className="bg-black text-white w-12 h-12 rounded-full">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      <div className="flex flex-wrap">
        {records.map((record) => (
          <div
            key={record._id}
            className="bg-white rounded-lg shadow-md mb-4 p-4 border border-gray-300 w-full flex flex-row"
          >
            <div className="w-full sm:w-2/3 flex flex-row">
              <h3 className="text-xl text-center mt-5 font-semibold mb-2 pr-20">{record.hospital.name}</h3>
              <p className="text-gray-700 p-3">Date: <strong>{record.date}</strong></p>
              <p className="text-gray-700 p-3">Description: <strong>{record.description}</strong></p>
              <p className="text-gray-700 p-3">Amount: <strong>{record.amount}</strong></p>
            </div>
            <div className="w-full sm:w-1/3 flex items-center justify-center">
              {record.isPaid ? (
                <span className="bg-green-500 text-white py-2 px-14 rounded-md mt-2">Paid</span>
              ) : (
                <button onClick={() => handlePay(record)} className="bg-black text-white py-2 px-14 rounded-md mt-2">
                Pay
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
    {/* Payment Modal */}
    {isPaymentModalOpen && paymentModalData && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay" />
        <div className="modal-container bg-white w-96 p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{paymentModalData.hospital.name}</h2>
            <span className="close" onClick={() => setIsPaymentModalOpen(false)}>&times;</span>
          </div>
          <p>Bank Code: {paymentModalData.hospital.bankCode}</p>
          <p>Bank Name: {paymentModalData.hospital.bankName}</p>
          {/* Add more hospital details */}
          <button onClick={() => handlePayment(paymentModalData.amount, paymentModalData.hospital.bankCode, paymentModalData.hospital.accountNumber)} className="bg-black text-white py-2 px-4 rounded-full mt-4">
            Pay {paymentModalData.hospital.name}
          </button>
        </div>
      </div>
    )}

    {/* Payment Success Modal */}
    {isPaymentSuccessModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay" />
        <div className="modal-container bg-green-200 w-96 p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Payment Successful</h2>
            <span className="close" onClick={() => setIsPaymentSuccessModalOpen(false)}>&times;</span>
          </div>
          <p>{paymentResponse}</p>
          <button onClick={() => setIsPaymentSuccessModalOpen(false)} className="bg-green-500 text-white py-2 px-4 rounded-full mt-4">
            Close
          </button>
        </div>
      </div>
    )}

    {/* Payment Failure Modal */}
    {isPaymentFailureModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay" />
        <div className="modal-container bg-red-200 w-96 p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Payment Unsuccessful</h2>
            <span className="close" onClick={() => setIsPaymentFailureModalOpen(false)}>&times;</span>
          </div>
          <p>{paymentResponse}</p>
          <button onClick={() => setIsPaymentFailureModalOpen(false)} className="bg-red-500 text-white py-2 px-4 rounded-full mt-4">
            Close
          </button>
        </div>
      </div>
    )}
  </div>
);
};

export default PaymentRecordList;

