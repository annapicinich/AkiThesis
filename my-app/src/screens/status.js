import React from 'react';
import blueCharacter from '../images/blueP.png'; // Import character images
import greenCharacter from '../images/greenP.png';
import yellowCharacter from '../images/yellowP.png';
import redCharacter from '../images/redP.png';

const StatusBar = ({ money, health, time }) => {
  // Retrieve selectedCharacter from local storage
  const selectedCharacter = localStorage.getItem('selectedCharacter');

  // Define character images mapping
  const characterImages = {
    Blue: { image: blueCharacter, money: 10000, health: 100, time: 100 },
    Green: { image: greenCharacter, money: 12000, health: 90, time: 120 },
    Yellow: { image: yellowCharacter, money: 15000, health: 80, time: 150 },
    Red: { image: redCharacter, money: 11000, health: 110, time: 110 }
  };

  // Get the character's initial values
  const characterData = characterImages[selectedCharacter];

  // Set default values if character is not found
  const { image, money: initialMoney, health: initialHealth, time: initialTime } = characterData || {};

  return (
    <div style={styles.statusBar}>
      {/* Display character image */}
      <img src={image} alt={selectedCharacter} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
      <div>
        {/* Display character status */}
        <div style={styles.item}>Money: {money || initialMoney}</div>
        <div style={styles.item}>Health: {health || initialHealth}</div>
        <div style={styles.item}>Time: {time || initialTime}</div>
      </div>
    </div>
  );
};

const styles = {
  statusBar: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    border: '1px solid #000',
    outline: '1px solid #000',
    marginBottom: '20px',
    width: '260px', // Set width to 200px
    borderRadius: '10px',
    position: 'fixed', // Fixed position to keep it to the left of the screen
    top:80, // Align to the top of the screen
    left: 50, // Align to the left of the screen
    background: 'white',
  },
  item: {
    marginBottom: '5px',
  },
};

export default StatusBar;
