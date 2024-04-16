import React, { useState } from 'react';

const Task = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      {/* Task box */}
      <div
        style={styles.taskBox}
        onClick={() => setShowPopup(true)}
      >
        Task 1
      </div>

      {/* Popup */}
      {showPopup && (
        <div style={styles.popupBackground} onClick={() => setShowPopup(false)}>
          <div style={styles.popup}>
            <div style={styles.closeButton} onClick={() => setShowPopup(false)}>X</div>
            <p style={styles.popupText}>Congratulations! You have just received a new job that requires you to relocate. As you prepare to move, you must choose which neighborhood you will live in. Below are three houses currently on the market. Please evaluate the options and click on the one you would like to select. Your stats will automatically update. If you don’t have enough coins in any given category, the selection will not be confirmed. 
</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
    taskBox: {
        position: 'fixed',
        top: 60,
        right: 20, // Adjusted to 'right' instead of 'left'
        background: 'white',
        borderRadius: '10px',
        padding: '10px',
        cursor: 'pointer',
        display: 'flex',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Added shadow
        fontSize: '20px',
    },
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
      zIndex: '999', // Ensure the overlay is above other elements
    },
    popup: {
    borderRadius: '10px',
      position: 'relative', // Added positioning
      background: 'white',
      padding: '30px',
      textAlign: 'center',
      maxWidth: '350px', // Adjusted width
    },
    popupText: {
      margin: '0', // Remove default margin
      fontSize: '18px', // Set the font size to 18 pixels
    },
    closeButton: {
      position: 'absolute',
      top: '8px',
      right: '12px',
      cursor: 'pointer',
    },
  };
  
  export default Task;
