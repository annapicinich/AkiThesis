import React, { useState, useEffect } from 'react';
import StatusBar from './status'; // Adjust the import path if necessary
import Task from './task'; // Adjust the import path if necessary
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './interactive.css';
import Health from '../images/health.png';
import HospitalB from '../images/hospitalB.png';

const WorkH = () => {
  // // Initialize money and time values from local storage or use default values
  const initialMoney = parseInt(localStorage.getItem('money'), 10);
  const initialTime = parseInt(localStorage.getItem('time'), 10);
  const initialHouse = parseInt(localStorage.getItem('work'), 10);
  const storedSchool = parseInt(localStorage.getItem('school'), 10);
  console.log(storedSchool);
  // const [selectedWork, setSelectedWork] = useState(null);
  // const [work, setWork] = useState(initialHouse);
  const [money, setMoney] = useState(initialMoney);
  const [time, setTime] = useState(initialTime);

  return (
    <div style={styles.container}>
      <StatusBar money={money} time={time} />
      <div style={styles.centeredContent}>
        {/* Apartment Listing Component */}
        <div style={styles.apartmentListing}>
          <h2>Hospital</h2>
          <img src={Health} alt="Health" style={{ marginTop: '10px', maxWidth: '100%' }} />
        </div>
      </div>
      {storedSchool == 0 && <Task />}
      <header></header>
      <main>{/* Choose button */}</main>
      {/* Popup
      {showPopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <button style={styles.closeButton} onClick={handleClosePopup}>
              x
            </button>
            <p>You do not have enough money to rent this apartment. Please consider other options.</p>
          </div>
        </div>
      )} */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Set minimum height to fill the entire viewport
    backgroundImage: `url(${HospitalB})`, // Set hospital image as background
    backgroundSize: 'cover', // Cover the entire div with the background image
    backgroundPosition: 'center', // Center the background image
  },
  centeredContent: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  apartmentListing: {
    maxWidth: '600px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255)', // Add background color with opacity
    color: 'black', // Text color
    textAlign: 'center', // Center text horizontally
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

export default WorkH;
