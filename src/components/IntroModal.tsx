import React from 'react';
import '../styles/IntroModal.css';

const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="modal" onClick={() => setShowModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <div className="modal-text">Welcome in!</div>
      </div>
    </div>
  );
};

export default Modal;
