import React from "react";
import heartImage from "../images/heart.png";
import clockImage from "../images/clock.png";
import coinImage from "../images/coin.png";
import blueCharacter from "../images/blueP.png";
import greenCharacter from "../images/greenP.png";
import yellowCharacter from "../images/yellowP.png";
import redCharacter from "../images/redP.png";

// Define the characterImages object
const characterImages = {
  Blue: { image: blueCharacter},
  Green: { image: greenCharacter},
  Yellow: { image: yellowCharacter },
  Red: { image: redCharacter },
};

const StatusBar = ({ money, time, health }) => {
  // Retrieve selectedCharacter from local storage
  const selectedCharacter = localStorage.getItem("selectedCharacter");

  // Initialize character data from local storage or use default values
  const storedMoney = parseInt(localStorage.getItem('money'), 10);
  const storedTime = parseInt(localStorage.getItem('time'), 10);
  const storedHealth = parseInt(localStorage.getItem('health'), 10); // Fixed typo here

  // Set initial values based on selected character or stored values
  const initialMoney = storedMoney || characterImages[selectedCharacter]?.money || 0;
  const initialTime = storedTime || characterImages[selectedCharacter]?.time || 0;
  const initialHealth = storedHealth || characterImages[selectedCharacter]?.health || 0; // Fixed the initial health calculation
  const characterImagePath = characterImages[selectedCharacter]?.image;

  return (
    <div style={styles.statusBar}>
      <img
        src={characterImagePath}
        alt={selectedCharacter}
        style={{ width: "80px", height: "80px", marginRight: "10px" }}
      />
      <div>
        <div style={{ ...styles.item, display: "flex", alignItems: "center" }}>
          <img
            src={coinImage}
            alt="Coin"
            style={{ width: "24px", height: "22px", marginRight: "2px",marginLeft: "-2px"  }}
          />
          <span>{money || initialMoney}</span>
        </div>
        <div style={{ ...styles.item, display: "flex", alignItems: "center" }}>
          <img
            src={heartImage}
            alt="Heart"
            style={{ width: "20px", height: "20px", marginRight: "5px",marginTop: "1px" }}
          />
          <span>{health || initialHealth}</span> {/* Fixed displaying the correct health */}
        </div>
        <div style={{ ...styles.item, display: "flex", alignItems: "center" }}>
          <img
            src={clockImage}
            alt="Clock"
            style={{ width: "22px", height: "22px", marginRight: "5px" }}
          />
          <span>{time || initialTime}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  statusBar: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginBottom: "20px",
    width: "160px",
    borderRadius: "10px",
    position: "fixed",
    top: 60,
    left: 20,
    background: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    fontSize: '18px',
  },
  item: {
    marginBottom: "8px",
  },
};

export default StatusBar;
