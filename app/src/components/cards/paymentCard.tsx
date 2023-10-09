import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FundModal from './fundModal';
import WithdrawModal from './withdrawModal';
import SuccessModal from './successModal';
import ErrorModal from './errorModal';
import HealthCard from './healthCard';

interface CardProps {
  title: string;
  content: string;
}

const Card = ({ title, content }: CardProps) => {
  const [isFundModalOpen, setIsFundModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const cardVariants = {
    open: { rotateY: 180 },
    closed: { rotateY: 0 },
  };

  const handleCardClick = () => {
    setIsFundModalOpen(false);
    setIsWithdrawModalOpen(false);
    setIsSuccessModalOpen(false);
    setIsErrorModalOpen(false);
  };

  const handleFund = () => {
    setIsFundModalOpen(true);
  };

  const handleWithdraw = () => {
    setIsWithdrawModalOpen(true);
  };

  return (
    <motion.div
      className="w-64 h-96 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer relative"
      onClick={handleCardClick}
    >
      <motion.div
        className="w-full h-full bg-blue-500 text-white flex flex-col justify-center items-center p-6"
        variants={cardVariants}
        initial="closed" // Added initial prop
        animate={isFundModalOpen || isWithdrawModalOpen ? 'open' : 'closed'}
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2">{content}</p>
        <button
          className="mt-4 bg-black text-blue-500 rounded-full px-4 py-2 hover:bg-blue-100"
          onClick={handleFund}
        >
          Fund
        </button>
        <button
          className="mt-2 bg-white text-blue-500 rounded-full px-4 py-2 hover:bg-blue-100"
          onClick={handleWithdraw}
        >
          Withdraw
        </button>
      </motion.div>

      <motion.div
        className="w-full h-full bg-white text-black flex flex-col justify-center items-center p-6 absolute top-0 left-0 transform rotate-y-180"
        variants={cardVariants}
        initial="closed" // Added initial prop
        animate={isFundModalOpen || isWithdrawModalOpen ? 'open' : 'closed'}
      >
        <h1>bhjvbjnkm,l</h1>
      </motion.div>

      <FundModal isOpen={isFundModalOpen} onClose={() => setIsFundModalOpen(false)} setModalMessage={setModalMessage} modalMessage={''} />
      <WithdrawModal isOpen={isWithdrawModalOpen} onClose={() => setIsWithdrawModalOpen(false)} setModalMessage={setModalMessage} />
      <SuccessModal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} message={modalMessage} />
      <ErrorModal isOpen={isErrorModalOpen} onClose={() => setIsErrorModalOpen(false)} message={modalMessage} />
    </motion.div>
  );
};

export default Card;
