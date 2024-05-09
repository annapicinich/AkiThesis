import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './interactive.css';

const Situation = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showMoneyPopup, setShowMoneyPopup] = useState(false); // New state for money popup

  const storedHome = localStorage.getItem('home');
  const storedWork = localStorage.getItem('work');
  console.log(storedHome);
  console.log("stored" + storedWork);

  const navigate = useNavigate(); // Initialize useNavigate

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
    window.location.reload();
  };

  const closeMoneyPopup = () => {
    setShowMoneyPopup(false);
    window.location.reload();
  };

  const handleGoToHospital = () => {
    // Get the stored money value from local storage
    const storedMoney = parseInt(localStorage.getItem('money'), 10);

    // Check if the user has enough money (more than 1 coin)
    if (storedMoney >= 1) {
      // Subtract one coin from the stored money
      localStorage.setItem('money', storedMoney - 1);

      // Navigate to the HospitalScenario component
      navigate('/HospitalScenario');
    } else {
      // If the user doesn't have enough money, show the money popup
      setShowMoneyPopup(true);
    }

    // Close the popup
    closePopup();
  };

  const handleLeaveWorkEarly = () => {
    // Implement logic for leaving work early scenario
    // For now, let's just log a message to the console
    console.log("You've chosen to leave work early!");
    // Close the popup
    closePopup();
  };

  const handleJobTraining = (response) => {
    // If the user chooses "Yes", subtract 4 coins monthly
    if (response === 'Yes') {
        const storedMoney = parseInt(localStorage.getItem('money'), 10);
        localStorage.setItem('money', storedMoney - 4);
    }
    // Close the popup
    closePopup();
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

      {/* Popup for workH scenario */}
      {showPopup && storedWork === '1' && (
        <div style={styles.popupBackground} onClick={closePopup}>
          <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
            <div style={styles.closeButton} onClick={closePopup}>X</div>
            {/* Popup content for workH scenario */}
            <p>
              Your job offers you an optional training session. Historically, everyone at the company who has participated in this training session has been the next to receive a high-level promotion that offers better salary and benefits. Nobody has ever been promoted without partaking in this program. However, the training session requires you to take 2 months off work and is unpaid. See your monthly transaction summary to see your monthly charges and take a look at your savings. Your boss would like a response by today, end of day. Would you like to opt in to the program?
            </p>
            <div>
              <button className="proceed-button" onClick={() => handleJobTraining('Yes')} style={{ marginRight: '10px' }}>Yes</button>
              <button className="proceed-button" onClick={() => handleJobTraining('No')}>No</button>
            </div>
          </div>
        </div>
      )}

      {/* Popup for homeL scenario */}
      {showPopup && storedHome === 'homeL' && (
        <div style={styles.popupBackground} onClick={closePopup}>
          <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
            <div style={styles.closeButton} onClick={closePopup}>X</div>
            {/* Popup content for homeL scenario */}
            <p>
              You have lived in your home for over a year now. Unfortunately, due to the close
              proximity to the power plant, your chances of developing respiratory and cardiac
              problems were increased. Today, you felt a tight pain in your chest, nausea,
              discomfort, and fatigue. Your co-worker urges you to go to the hospital. Would
              you like to leave work early? Due to the nature of your work, this would mean
              canceling on a client meeting and refunding them their deposit. You would lose
              one coin. Do you choose to stay at work or go to the hospital?
            </p>
            <div>
              <button className="proceed-button" onClick={handleGoToHospital} style={{ marginRight: '10px' }}>Go to hospital</button>
              <button className="proceed-button" onClick={handleLeaveWorkEarly}>Stay at work</button>
            </div>
          </div>
        </div>
      )}

      {/* Popup for not enough money */}
      {showMoneyPopup && (
        <div style={styles.popupBackground} onClick={closeMoneyPopup}>
          <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
            <div style={styles.closeButton} onClick={closeMoneyPopup}>X</div>
            <p>You don't have enough money to go to the hospital.</p>
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
