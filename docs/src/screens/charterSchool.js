import React, { useState, useEffect } from 'react';
import StatusBar from './status'; // Adjust the import path if necessary
import Task from './task'; // Adjust the import path if necessary
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './interactive.css';
import CharterB from '../images/charterB.png';

const Charter = () => {
  const initialHealth = parseInt(localStorage.getItem('health'), 10);
  const initialMoney = parseInt(localStorage.getItem('money'), 10);
  const initialSchool = parseInt(localStorage.getItem('school'), 10);
  const initialHome = parseInt(localStorage.getItem('house'), 10);
  const storedSchool = parseInt(localStorage.getItem('school'), 10);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [money, setMoney] = useState(initialMoney);
  const [school, setSchool] = useState(initialSchool);
  const [health, setHealth] = useState(initialHealth);
  const [home, setHome] = useState(initialHome);

  // Initialize useNavigate hook
  const navigate = useNavigate();

  useEffect(() => {
    // Save money, school, health, and work values to local storage whenever they change
    localStorage.setItem('money', money);
    localStorage.setItem('school', school);
    localStorage.setItem('health', health);
  }, [money, health, school]);

  // State variables for different popups
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup

  // Handlers for closing different popups
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSelectSchool = () => {
    // Check if the character already attends a school
    if (school === 1) {
      setShowPopup(true);
      return;
    }
    // Check if the character doesn't have work
    if (home === 0) {
      setShowPopup(true);
      return;
    }

    // Update health and school
    setHealth(prevHealth => prevHealth + 1);
    setSchool(1);
    localStorage.setItem('schoolC', 'charter');
    // Logic for handling the selection goes here
    setSelectedSchool(true);

    // Delay the navigation until the state updates are completed
    setTimeout(() => {
      // Navigate to institutions page
      navigate('/institutions');
    }, 100); // Adjust the delay time as needed
  };

  return (
    <div style={styles.container}>
      <StatusBar money={money} />
      <div style={styles.centeredContent}>
        {/* School Listing Component */}
        <div style={styles.schoolListing}>
          <h2>School 2: Charter School </h2>
          <p>Rated 5/5</p>
          <p>Distance from house: 4 to house, 4 to work </p>
        </div>
      </div>
      {storedSchool == 0 && <Task />}
      <header></header>
      <main>
        {/* Choose button */}
        <button className="proceed-button" onClick={handleSelectSchool}>Choose</button>
      </main>
      {/* Popup */}
      {showPopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <button style={styles.closeButton} onClick={handleClosePopup}>x</button>
            {school === 1 && <p>You are already attending a school.</p>}
            {home === 0 && <p>Please finish Task 1 before choosing a school.</p>}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Set minimum height to fill the entire viewport
    backgroundImage: `url(${CharterB})`, // Set background image
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center', // Center the background image
  },
  centeredContent: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  schoolListing: {
    maxWidth: '600px',
    padding: '20px',
    borderRadius: '10px',
    background: 'white',
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  popup: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContent: {
    position: 'relative', // Set position to relative
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    position: 'absolute',
    top: '8px',
    right: '12px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#555',
  },
};

export default Charter;
