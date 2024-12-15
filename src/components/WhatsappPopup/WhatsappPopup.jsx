import React, { useEffect, useState } from 'react';
import './WhatsappPopup.css';
import { FaUndo, FaWhatsapp } from 'react-icons/fa';

function WhatsAppPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show the popup after 1 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmRedirect = () => {
    window.open(
      'https://wa.me/254707919856?text=Hi,%20I%20need%20help%20with%20my%20assignment!',
      '_blank'
    );
    setShowModal(false);
  };

  return (
    <>
      {showPopup && (
        <div className="whatsapp-popup" onClick={handleOpenModal}>
          <FaWhatsapp className="whatsapp-icon" />
          <p className="whatsapp-text">WhatsApp</p>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Open WhatsApp</h3>
            <p>Do you want to start a chat with us on WhatsApp?</p>
            <div className="modal-actions">
              <button onClick={handleConfirmRedirect} className="modal-button confirm">
                <FaWhatsapp />
                Redirect To WhatsApp
              </button>
              <button onClick={handleCloseModal} className="modal-button cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WhatsAppPopup;
