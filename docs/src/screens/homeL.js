import React, { useState, useEffect } from 'react';
import StatusBar from './status'; // Adjust the import path if necessary
import Task from './task'; // Adjust the import path if necessary
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './interactive.css';
import HomeLB from '../images/homeLB.png';

const HomeL = () => {
  // Initialize money and time values from local storage or use default values
  const initialMoney = parseInt(localStorage.getItem('money'), 10) ;
  const initialTime = parseInt(localStorage.getItem('time'), 10);
  const initialHouse = parseInt(localStorage.getItem('house'), 10);
  const storedSchool = parseInt(localStorage.getItem('school'), 10);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [house, setHouse] = useState(initialHouse);
  const [money, setMoney] = useState(initialMoney);
  const [time, setTime] = useState(initialTime);

  // Initialize useNavigate hook
  const navigate = useNavigate();

  useEffect(() => {
    // Save money and time values to local storage whenever they change
    localStorage.setItem('money', money);
    localStorage.setItem('time', time);
    localStorage.setItem('house', house);
  }, [money, time, house]);

  const [showPopup, setShowPopup] = useState(false); // State for showing the popup

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSelectApartment = () => {
    // Check if the user has enough money to rent the apartment
    if (money < 3) {
      // If not, show the popup and return early
      setShowPopup(true);
      return;
    }
    if (time <= 0) {
      // setShowPopup(true);
      return;
    }
    if (house === 1) {
      // If so, show the popup and return early
      // setShowPopup(true);
      return;
    }
    // Subtract 3 from money and 7 from time
    setMoney(prevMoney => prevMoney - 3);
    setTime(prevTime => prevTime - 7);
    setHouse(1);
    localStorage.setItem('home', 'homeL');
    // Logic for handling the selection goes here
    setSelectedApartment(true);

    // Delay the navigation until the state updates are completed
    setTimeout(() => {
      // Navigate to institutions page
      navigate('/institutions');
    }, 100); // Adjust the delay time as needed
  };
    // Log the value of house
    console.log("House:", house);
  return (
    <div style={styles.container}>
      <StatusBar money={money} time={time} />
      <div style={styles.centeredContent}>
        {/* Apartment Listing Component */}
        <div style={styles.apartmentListing}>
          <h2>Budget-Friendly 1-Bedroom Apartment Near Industrial Zone</h2>
          <p><strong>Monthly Rent:</strong> 3 coins</p>
          <p><strong>Location:</strong> Near Industrial Facilities</p>
          <p><strong>Type:</strong> Apartment</p>
          <p><strong>Description:</strong> This 1-bedroom, 1-bathroom apartment is the most affordable living option in the area, located near industrial facilities. Suited for individuals or couples needing budget accommodations with a longer commute time of seven time coins to central business areas.</p>
          <p><strong>Features:</strong></p>
          <ul>
            <li>Most affordable rental option</li>
            <li>1 bedroom, 1 bathroom</li>
            <li>Proximity to industrial areas</li>
            <li>Commute time: 7 time coins</li>
          </ul>
          <p><strong>Contact:</strong> Economy Rentals</p>
          <p><strong>Phone:</strong> (555) 003-0045</p>
          <p><strong>Email:</strong> info@economyrentals.com</p>
        </div>
      </div>
      {storedSchool == 0 && <Task />}
      <header>
        
      </header>
      <main>
        {/* Choose button */}
        <button className="proceed-button" onClick={handleSelectApartment}>Choose</button>
      </main>
      {/* Popup */}
      {showPopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <button style={styles.closeButton} onClick={handleClosePopup}>x</button>
            <p>You do not have enough money to rent this apartment. Please consider other options.</p>
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
    backgroundImage: `url(${HomeLB})`, // Set background image
    backgroundSize: 'cover', // Cover the entire container
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
