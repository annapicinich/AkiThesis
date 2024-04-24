import React, { useState, useEffect } from 'react';
import StatusBar from './status'; // Adjust the import path if necessary
import Task from './task'; // Adjust the import path if necessary
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './interactive.css';


const HomeL = () => {
  // // Initialize money and time values from local storage or use default values
  const initialMoney = parseInt(localStorage.getItem('money'), 10) ;
  const initialTime = parseInt(localStorage.getItem('time'), 10);
  const initialHouse = parseInt(localStorage.getItem('work'), 10);

  // const [selectedWork, setSelectedWork] = useState(null);
  // const [work, setWork] = useState(initialHouse);
  const [money, setMoney] = useState(initialMoney);
  const [time, setTime] = useState(initialTime);

  // // Initialize useNavigate hook
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Save money and time values to local storage whenever they change
  //   localStorage.setItem('money', money);
  //   localStorage.setItem('time', time);
  //   localStorage.setItem('work', work);
  // }, [money, time, work]);

  // const [showPopup, setShowPopup] = useState(false); // State for showing the popup

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  // const handleSelectApartment = () => {
  //   // Check if the user has enough money to rent the apartment
  //   if (money < 3) {
  //     // If not, show the popup and return early
  //     setShowPopup(true);
  //     return;
  //   }
  //   if (time <= 0) {
  //     // setShowPopup(true);
  //     return;
  //   }
  //   if (work === 1) {
  //     // If so, show the popup and return early
  //     // setShowPopup(true);
  //     return;
  //   }
  //   // Subtract 3 from money and 7 from time
  //   setMoney(prevMoney => prevMoney - 3);
  //   setTime(prevTime => prevTime - 7);
  //   setWork(1);
  //   localStorage.setItem('workC', 'low');
  //   // Logic for handling the selection goes here
  //   setSelectedWork(true);

  //   // Delay the navigation until the state updates are completed
  //   setTimeout(() => {
  //     // Navigate to institutions page
  //     navigate('/institutions');
  //   }, 100); // Adjust the delay time as needed
  // };
    // Log the value of house
    // console.log("Work:", work);
  return (
    <div style={styles.container}>
      <StatusBar money={money} time={time} />
      <div style={styles.centeredContent}>
        {/* Apartment Listing Component */}
        <div style={styles.apartmentListing}>
          <h2>Work L</h2>
          <p><strong>Work</strong> L</p>
          
        </div>
      </div>
      <Task/>
      <header>
        
      </header>
      <main>
        {/* Choose button */}
        {/* <button className="proceed-button" onClick={handleSelectApartment}>Choose</button> */}
      </main>
      {/* Popup
      {showPopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <button style={styles.closeButton} onClick={handleClosePopup}>x</button>
            <p>You do not have enough money to rent this apartment. Please consider other options.</p>
          </div>
        </div>
      )} */}
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
    backgroundColor: 'lightblue',
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
    background: '#f9f9f9',
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

export default HomeL;
