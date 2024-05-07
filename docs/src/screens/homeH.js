import React, { useState, useEffect } from 'react';
import StatusBar from './status'; // Adjust the import path if necessary
import Task from './task'; // Adjust the import path if necessary
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './interactive.css';
import HomeHB from '../images/homeHB.png';

const HomeH = () => {
 // Initialize money and time values from local storage or use default values
 const initialMoney = parseInt(localStorage.getItem('money'), 10) ;
 const initialTime = parseInt(localStorage.getItem('time'), 10);
 const initialHouse = parseInt(localStorage.getItem('house'), 10);

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
    // Check if the user has enough money to buy the house
    if (money < 15) {
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
    // Subtract 50 from money and 3 from time
    setMoney(prevMoney => prevMoney - 15);
    setTime(prevTime => prevTime - 3);
    setHouse(1);
    localStorage.setItem('home', 'homeH');
    // Logic for handling the selection goes here
    setSelectedApartment(true);
    // Logic for handling the selection goes here
    setSelectedApartment(true);

    // Delay the navigation until the state updates are completed
    setTimeout(() => {
      // Navigate to institutions page
      navigate('/institutions');
    }, 100); // Adjust the delay time as needed
  };

  return (
    <div style={styles.container}>
      <StatusBar money={money} time={time} />
      <div style={styles.centeredContent}>
        {/* Apartment Listing Component */}
        <div style={styles.apartmentListing}>
          <h2>Premier 2-Bedroom Home Next to City Park</h2>
          <p><strong>Price:</strong> 15 coins a month</p>
          <p><strong>Location:</strong> Next to City Park, Suburban Bliss</p>
          <p><strong>Type:</strong> Single-Family Home</p>
          <p><strong>Description:</strong> This 2-bedroom, 2-bathroom single-family home is ideally located next to a city park in a desirable suburban neighborhood. The well-designed layout and serene setting make it a perfect choice for those seeking comfort and convenience, with a commute time of three time coins to the city center.</p>
          <p><strong>Features:</strong></p>
          <ul>
            <li>2 bedrooms, 2 bathrooms</li>
            <li>Ideal location next to a city park</li>
          </ul>
          <p><strong>Contact:</strong> Suburban Homes</p>
          <p><strong>Phone:</strong> (555) 004-0056</p>
          <p><strong>Email:</strong> sales@suburbanhomes.com</p>
        </div>
      </div>
      <Task/>
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
            <p>You do not have enough money to buy this house. Please look at other houses.</p>
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
      backgroundImage: `url(${HomeHB})`, // Set background image
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

export default HomeH;
