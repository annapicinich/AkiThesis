import React, { useState, useEffect } from 'react';
import StatusBar from './status'; // Adjust the import path if necessary
import Task from './task'; // Adjust the import path if necessary
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './interactive.css';
import Private from '../images/privateI.png';

const PrivateSchool = () => {
  const initialMoney = parseInt(localStorage.getItem('money'), 10);
  const initialSchool = parseInt(localStorage.getItem('school'), 10);
  const initialHome = parseInt(localStorage.getItem('house'), 10);

  const [selectedSchool, setSelectedSchool] = useState(null);
  const [money, setMoney] = useState(initialMoney);
  const [school, setSchool] = useState(initialSchool);
  const [home, setHome] = useState(initialHome);

  // Initialize useNavigate hook
  const navigate = useNavigate();

  useEffect(() => {
    // Save money value to local storage whenever it changes
    localStorage.setItem('money', money);
    localStorage.setItem('school', school);
  }, [money, school]);

  // State variables for different popups
  const [showMoneyPopup, setShowMoneyPopup] = useState(false);
  const [showHomePopup, setShowHomePopup] = useState(false);
  const [showSchoolPopup, setShowSchoolPopup] = useState(false);

  // Handlers for closing different popups
  const handleCloseMoneyPopup = () => setShowMoneyPopup(false);
  const handleCloseHomePopup = () => setShowHomePopup(false);
  const handleCloseSchoolPopup = () => setShowSchoolPopup(false);

  const handleSelectSchool = () => {
    // Check if the user has enough money to attend the school
    if (money <= 5) {
      setShowMoneyPopup(true);
      return;
    }
    // Check if the character has a home
    if (home === 0) {
      setShowHomePopup(true);
      return;
    }
    // Check if the character already attends a school
    if (school === 1) {
      setShowSchoolPopup(true);
      return;
    }

    // Subtract 5 from money
    setMoney(prevMoney => prevMoney - 5);
    setSchool(1);
    localStorage.setItem('schoolC', 'private');
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
          <h2>School 3: Private School</h2>
          <p>Rated 5/5</p>
          <p>Distance from house: 1 to house, 1 to work</p>
          <p>Price: 5 / month</p>
        </div>
      </div>
      <Task />
      <header></header>
      <main>
        {/* Choose button */}
        <button className="proceed-button" onClick={handleSelectSchool}>Choose</button>
      </main>
      {/* Popups */}
      {showMoneyPopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <button style={styles.closeButton} onClick={handleCloseMoneyPopup}>x</button>
            <p>You do not have enough money to attend this school. Please look at other options.</p>
          </div>
        </div>
      )}
      {showHomePopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <button style={styles.closeButton} onClick={handleCloseHomePopup}>x</button>
            <p>Please finish Task 1 before choosing a school.</p>
          </div>
        </div>
      )}
      {showSchoolPopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <button style={styles.closeButton} onClick={handleCloseSchoolPopup}>x</button>
            <p>You are already attending a school.</p>
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
    backgroundImage: `url(${Private})`, // Set background image
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

export default PrivateSchool;
