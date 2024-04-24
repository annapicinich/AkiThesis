import React, { useState, useEffect } from 'react';

const Task = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentTask, setCurrentTask] = useState(1);

  useEffect(() => {
    // Retrieve house value from local storage
    const storedHouse = parseInt(localStorage.getItem('house'), 10);

    // Check if the user has a house
    if (storedHouse === 1) {
      setCurrentTask(2); // Switch to task 2
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Function to render different tasks based on the current task number
  const renderTask = () => {
    switch (currentTask) {
      case 1:
        return (
          <p style={styles.popupText}>
            Congratulations! You have just received a new job that requires you to relocate. As you prepare to move, you must choose which neighborhood you will live in. Below are three houses currently on the market. Please evaluate the options and click on the one you would like to select. Your stats will automatically update. If you don’t have enough coins in any given category, the selection will not be confirmed.
          </p>
        );
      case 2:
        return (
          <p style={styles.popupText}>
            Your daughter’s public school closed down due to lack of funding. Students are now being presented with two options for alternate public school. And, there is a nearby private school. If you don’t have children, this closure doesn’t affect you. 
          </p>
        );
      // Add more cases for additional tasks if needed
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Task box */}
      <div
        style={styles.taskBox}
        onClick={togglePopup}
      >
        Task {currentTask}
      </div>

      {/* Popup */}
      {showPopup && (
        <div style={styles.popupBackground}>
          <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
            <div style={styles.closeButton} onClick={closePopup}>X</div>
            {renderTask()}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  taskBox: {
    position: 'fixed',
    top: 180,
    right: 30,
    background: 'white',
    borderRadius: '10px',
    padding: '10px',
    cursor: 'pointer',
    display: 'flex',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
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
    zIndex: '999',
  },
  popup: {
    borderRadius: '10px',
    position: 'relative',
    background: 'white',
    padding: '30px',
    textAlign: 'center',
    maxWidth: '350px',
  },
  popupText: {
    margin: '0',
    fontSize: '18px',
  },
  closeButton: {
    position: 'absolute',
    top: '8px',
    right: '12px',
    cursor: 'pointer',
  },
};

export default Task;
