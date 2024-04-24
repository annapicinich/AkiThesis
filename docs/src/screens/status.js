import React, { useState } from "react";
import heartImage from "../images/heart.png";
import clockImage from "../images/clock.png";
import coinImage from "../images/coin.png";
import blueCharacter from "../images/blueP.png";
import greenCharacter from "../images/greenP.png";
import yellowCharacter from "../images/yellowP.png";
import redCharacter from "../images/redP.png";
import HomeL from "../images/homeL.png";
import HomeM from "../images/homeM.png";
import HomeH from "../images/homeH.png";
import Public from "../images/public.png";
import Private from "../images/private.png";
import Charter from "../images/charter.png";
import WorkH from "../images/workH.png"
import WorkL from "../images/workL.png"
import { useLocation, useNavigate } from "react-router-dom";
// Define the characterImages object
const characterImages = {
  Blue: { image: blueCharacter, },
  Green: { image: greenCharacter, },
  Yellow: { image: yellowCharacter, },
  Red: { image: redCharacter, },
};

const StatusBar = ({ money, time, health }) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closePopup = (e) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleBackArrowClick = () => {
    navigate('/institutions');
    console.log("Back arrow clicked - Navigate to Institution Page");
  };

  let home = null; // Initialize home variable  
  let school = null; // Initialize home variable
  let work = null; // Initialize home variable
  // Retrieve selectedCharacter from local storage
  const selectedCharacter = localStorage.getItem("selectedCharacter");

  // Initialize character data from local storage or use default values
  const storedMoney = parseInt(localStorage.getItem('money'), 10);
  const storedTime = parseInt(localStorage.getItem('time'), 10);
  const storedHealth = parseInt(localStorage.getItem('health'), 10);
  const storedHouse = parseInt(localStorage.getItem('house'), 10);
  const storedSchool = parseInt(localStorage.getItem('school'), 10);
  const storedWork = parseInt(localStorage.getItem('work'), 10);

  // Set initial values based on selected character or stored values
  const initialMoney = storedMoney || characterImages[selectedCharacter]?.money || 0;
  const initialTime = storedTime || characterImages[selectedCharacter]?.time || 0;
  const initialHealth = storedHealth || characterImages[selectedCharacter]?.health || 0;
  const initialHouse = storedHouse || characterImages[selectedCharacter]?.house || 0;
  const initialSchool = storedSchool || characterImages[selectedCharacter]?.school || 0;
  const initialWork = storedWork || characterImages[selectedCharacter]?.work || 0;
  const characterImagePath = characterImages[selectedCharacter]?.image;

  if (storedHouse === 1) {
    console.log("has house");
    const storedHome = localStorage.getItem('home'); // Retrieve the string value from localStorage
    console.log(storedHome);
    home = storedHome; // Set home to the value stored in local storage
  }
  if (storedSchool === 1) {
    console.log("has school");
    const storedSchool= localStorage.getItem('schoolC'); // Retrieve the string value from localStorage
    console.log(storedSchool);
    school = storedSchool; // Set home to the value stored in local storage
  }
  if (storedWork === 1) {
    console.log("has work");
    const storedWork= localStorage.getItem('workC'); // Retrieve the string value from localStorage
    console.log(storedWork);
    work = storedWork; // Set home to the value stored in local storage
  }
 

  return (
    <div>
      {!location.pathname.includes("/institutions") && (
        <div
          style={{ display: "flex",
          top: 60,
          left: 40,
        boxShadow: '10px',
          cursor: "pointer",
          position: 'fixed',
  
        }}
          onClick={handleBackArrowClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </div>
      )}

    <div style={styles.statusBar} onClick={togglePopup}>
    

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
          <span>{health || initialHealth}</span>
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
    

      {/* Popup */}
      {showPopup && (
        <div style={styles.popupBackground} onClick={togglePopup}>
          <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
            <div style={styles.closeButton} onClick={closePopup}>X</div>
            {/* Three boxes with words */}
            Scheduale
            <div style={styles.sbox}>

            </div>
            <div style={styles.boxContainer}>
            <div style={styles.box}>
              {work === 'high' && (
    <img src={WorkH} alt="WorkH" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
  )}
  {work === 'low' && (
    <img src={WorkL} alt="Private" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
  )}
  
              </div>
            <div style={styles.box}>
  {home === 'homeL' && (
    <img src={HomeL} alt="HomeL" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
  )}
  {home === 'homeM' && (
    <img src={HomeM} alt="HomeM" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
  )}
  {home === 'homeH' && (
    <img src={HomeH} alt="HomeH" style={{ width: '100%', height: '85%', borderRadius: '8px' }} />
  )}
</div>

<div style={styles.box}>
  {school === 'public' && (
    <img src={Public} alt="Public" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
  )}
  {school === 'private' && (
    <img src={Private} alt="Private" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
  )}
  {school === 'charter' && (
    <img src={Charter} alt="Charter" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
  )}
</div>
              
            </div>
            {/* Words below the boxes */}
            <div style={styles.wordsContainer}>
            <p style={styles.words}>Work</p>
              <p style={styles.words}>Home</p>
              <p style={styles.words}>School</p>
              
            </div>
          </div>
        </div>
      )}
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
    right: 30,
    background: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    fontSize: '18px',
    cursor: "pointer",
  },
  item: {
    marginBottom: "8px",
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
    padding: '25px',
    textAlign: 'center',
    maxWidth: '500px',
    height: '640px',
  
  },
  closeButton: {
    position: 'absolute',
    top: '6px',
    right: '10px',
    cursor: 'pointer',
  },

  boxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px', // Add space between boxes
    
  },
  sbox: {
    flex: '1', // Allow boxes to expand equally
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    textAlign: 'center',
    width: '500px',
    height: '500px',
    marginBottom: '10px',
  },
  box: {
    flex: '1', // Allow boxes to expand equally
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    textAlign: 'center',
    width: '100px',
    height: '100px',
  },
  wordsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    
  },
  words: {
    width: '30%',
    fontSize: '18px',
    fontWeight: '400',
    marginTop: '2px'
  },
};

export default StatusBar;
