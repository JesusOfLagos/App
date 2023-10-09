import React, { useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useToast } from '@chakra-ui/react';

interface FundModalProps {
  isOpen: boolean;
  onClose: () => void;
  setModalMessage: (message: string) => void;
  modalMessage: string; // New prop for receiving the message
}

const FundModal: React.FC<FundModalProps> = ({ isOpen, onClose, setModalMessage, modalMessage }) => {
  const [amount, setAmount] = useState('');
  const toast = useToast();

  const handleSubmit = () => {
    // Implement your logic for handling fund submission here
    if (Number(amount) > 0) {
      // On success
      toast({
        title: 'Funds added successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } else {
      // On error
      setModalMessage('Invalid amount'); // Set the modal message
      toast({
        title: 'Invalid amount',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Fund Your Account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Enter the amount in dollars"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Fund
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
      {modalMessage && (
        <div className="bg-red-200 text-red-600 p-2 text-center">
          {/* Display the modal message */}
          {modalMessage}
        </div>
      )}
    </Modal>
  );
};

export default FundModal;
