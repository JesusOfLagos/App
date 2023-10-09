import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, text }) => {
  return (
    <div
      style={{
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          color: 'black',
          padding: '20px',
          borderRadius: '4px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h2>{title}</h2>
        <p>{text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};



export default Modal;
