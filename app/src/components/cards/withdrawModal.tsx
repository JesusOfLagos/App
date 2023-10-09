import React, { useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useToast } from '@chakra-ui/react';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  setModalMessage: (message: string) => void;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ isOpen, onClose, setModalMessage }) => {
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>(''); // State to store the error message
  const toast = useToast();

  const handleSubmit = () => {
    // Implement your logic for handling withdrawal submission here
    if (Number(amount) > 0) {
      // On success
      toast({
        title: 'Withdrawal successful!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } else {
      // On error
      const errorMessage = 'Invalid amount'; // Set the modal message
      setModalMessage(errorMessage);
      setErrorMessage(errorMessage); // Store the error message in state
      toast({
        title: errorMessage,
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
        <ModalHeader>Withdraw Funds</ModalHeader>
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
            Withdraw
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
      {errorMessage && (
        <div className="bg-red-200 text-red-600 p-2 text-center">
          {/* Display the modal message */}
          {errorMessage}
        </div>
      )}
    </Modal>
  );
};

export default WithdrawModal;
