import React, { useState, useEffect } from 'react';
import StatusBar from './status'; // Adjust the import path if necessary
import Task from './task'; // Adjust the import path if necessary
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './interactive.css';
import Public from '../images/publicI.png';

const PublicSchool = () => {
  const initialHealth = parseInt(localStorage.getItem('health'), 10) ;
  const initialSchool = parseInt(localStorage.getItem('school'), 10) ;


  const [school, setSchool] = useState(initialSchool);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [health, setHealth] = useState(initialHealth);

  // Initialize useNavigate hook
  const navigate = useNavigate();

  useEffect(() => {
    // Save health value to local storage whenever it changes
    localStorage.setItem('health', health);
    localStorage.setItem('school', school);
  }, [health, school]);

  const [showPopup, setShowPopup] = useState(false); // State for showing the popup

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSelectSchool = () => {
    // Check if the user has enough health to attend the school
    if (health <= 0) {
      // If not, show the popup and return early
      setShowPopup(true);
      return;
    }
    if (school === 1) {
      // If so, show the popup and return early
      // setShowPopup(true);
      return;
    }

    // Subtract 1 from health
    setHealth(prevHealth => prevHealth - 1);
    setSchool(1);
    localStorage.setItem('schoolC', 'public');
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
      <StatusBar health={health} />
      <div style={styles.centeredContent}>
        {/* School Listing Component */}
        <div style={styles.schoolListing}>
          <h2>School 1: Public School</h2>
          <p>Rated 2/5 on US News and World Reports</p>
          <p>Distance from house: 1 to house, 1 to work</p>
          <p>Effects on stats:</p>
          <ul>
            <li>Long-term well being: -1</li>
          </ul>
        </div>
      </div>
      <Task/>
      <header>
        
      </header>
      <main>
        {/* Choose button */}
        <button className="proceed-button" onClick={handleSelectSchool}>Choose</button>
      </main>
      {/* Popup */}
      {showPopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <button style={styles.closeButton} onClick={handleClosePopup}>x</button>
            <p>You do not have enough health to attend this school. Please look at other options.</p>
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
    backgroundImage: `url(${Public})`, // Set background image
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

export default PublicSchool;
