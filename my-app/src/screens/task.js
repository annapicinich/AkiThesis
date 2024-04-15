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
            <h1>Task 1:</h1>
            <p style={styles.popupText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
    taskBox: {
        position: 'fixed',
        top: 80,
        right: 50, // Adjusted to 'right' instead of 'left'
        background: 'white',
        borderRadius: '10px',
        padding: '10px',
        border: '1px solid #000',
        outline: '1px solid #000',
        cursor: 'pointer',
        display: 'flex',
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
      position: 'relative', // Added positioning
      background: 'white',
      padding: '20px',
      textAlign: 'center',
      maxWidth: '300px', // Adjusted width
    },
    popupText: {
      margin: '0', // Remove default margin
    },
    closeButton: {
      position: 'absolute',
      top: '2px',
      right: '8px',
      cursor: 'pointer',
    },
  };
  
  export default Task;
