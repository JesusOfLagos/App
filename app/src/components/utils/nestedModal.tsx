import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

interface NestedModalProps {
  open: boolean;
  onClose: () => void;
  parentModalTitle: string;
  parentModalDescription: string;
  childModalTitle: string;
  childModalDescription: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500, // Adjust the width as needed
  bgcolor: 'white', // Change background to white
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({
  open,
  onClose,
  childModalTitle,
  childModalDescription,
}: NestedModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style }}>
        <h2 id="child-modal-title">{childModalTitle}</h2>
        <p id="child-modal-description">{childModalDescription}</p>
        <Button onClick={onClose}>Close Child Modal</Button>
      </Box>
    </Modal>
  );
}

function NestedModal({
  open,
  onClose,
  parentModalTitle,
  parentModalDescription,
  childModalTitle,
  childModalDescription,
}: NestedModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2 id="parent-modal-title">{parentModalTitle}</h2>
          <p id="parent-modal-description">{parentModalDescription}</p>
          <ChildModal
                      open={open}
                      onClose={onClose}
                      childModalTitle={childModalTitle}
                      childModalDescription={childModalDescription} parentModalTitle={''} parentModalDescription={''}          />
        </Box>
      </Modal>
    </div>
  );
}

export default NestedModal;
