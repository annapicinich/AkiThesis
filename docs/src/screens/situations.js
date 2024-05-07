import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './interactive.css';

const Situation = () => {
  const [showPopup, setShowPopup] = useState(false);

  const storedHome = localStorage.getItem('home');
  console.log(storedHome);

  const navigate = useNavigate(); // Initialize useNavigate

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleGoToHospital = () => {
    // Navigate to HospitalScenario component
    navigate('/HospitalScenario'); // Use navigate to navigate to the specified path
  };

  return (
    <div>
      {/* Button in bottom left corner */}
      <button 
        className="proceed-button" // Apply the custom styles
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '999', // Ensure the button appears above the popup
        }}
        onClick={togglePopup}
      >
        Continue
      </button>

      {/* Popup */}
      {showPopup && storedHome === 'homeL' && (
        <div style={styles.popupBackground} onClick={closePopup}>
          <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
            <div style={styles.closeButton} onClick={closePopup}>X</div>
            {/* Popup content */}
            <p>
              Based on your prior choice, you have lived in your home for over a year now.
              Unfortunately, due to the close proximity to the power plant, your chances of 
              developing respiratory and cardiac problems were increased. Today, you felt a 
              tight pain in your chest, nausea, discomfort and fatigue. Your co-worker urges 
              you to go to the hospital. Would you like to leave work early? Due to the nature 
              of your work, this would mean canceling on a client meeting and refunding them 
              their deposit. You would lose one coin. Do you choose to stay at work or go to 
              the hospital?
            </p>
            <div>
              <button className="proceed-button" onClick={handleGoToHospital} style={{ marginRight: '10px' }}>Go to hospital</button>
              <button className="proceed-button" onClick={closePopup}>Stay at work</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  popupBackground: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '999',
  },
  popup: {
    borderRadius: '10px',
    position: 'relative',
    background: 'white',
    padding: '30px',
    textAlign: 'center',
    maxWidth: '480px',
  },
  closeButton: {
    position: 'absolute',
    top: '8px',
    right: '12px',
    cursor: 'pointer',
  },
};

export default Situation;
