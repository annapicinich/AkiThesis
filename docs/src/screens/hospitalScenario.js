import React, { useState } from 'react';
import StatusBar from './status'; // Import the StatusBar component
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const HospitalScenario = () => {
    const storedMoney = parseInt(localStorage.getItem('money'), 10);
    const [selectedOption, setSelectedOption] = useState(null); // State to store the selected option
    const [showPopup, setShowPopup] = useState(false); // State to control the visibility of the PCI popup
    const [showSecondPopup, setShowSecondPopup] = useState(false); // State to control the visibility of the second popup
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle the selection of options
    const handleOption = (option) => {
        setSelectedOption(option);
        // Show the appropriate popup based on the selected option
        if (option === 'PCI' && storedMoney < 10) {
            setShowPopup(true); // Show the PCI popup if the user doesn't have enough money
        } else if (option === 'PCI') {
            // Redirect to the PCI page
            navigate('/PCIPage');
        } else if (option === 'BloodThinners') {
            setShowSecondPopup(true); // Show the second popup for the "Blood Thinners" option
        }
    };

    return (
        <div style={styles.container}>
            <StatusBar />
            <div style={styles.centeredContent}>
                {/* Hospital Scenario Component */}
                <div style={styles.hospitalScenario}>
                    <h2>Hospital</h2>
                    <p>Good thing you went to the hospital! You are experiencing a heart attack. You recently qualified for medicare. Your doctor recommends a percutaneous coronary intervention (PCI) as the best option for preventing future health issues. However, because a PCI is not urgently needed and your condition could be sustained with minor health regression via blood thinners, Medicare will not cover your procedure. The PCI procedure will cost 10 coins, and you will have a strong chance of a full recovery. The blood thinners will cost 0.5 coin a month, but you will not have a long-term solution. Which option would you like to pursue?</p>
                    {/* Buttons for options */}
                    <div style={styles.buttonContainer}>
                        <button className="proceed-button" style={styles.optionButton} onClick={() => handleOption('PCI')}>PCI</button>
                        <button className="proceed-button" style={styles.optionButton} onClick={() => handleOption('BloodThinners')}>Blood Thinners</button>
                    </div>
                </div>
            </div>
            {/* Popup for insufficient money */}
            {showPopup && (
                <div style={styles.popup}>
                    <div style={{ ...styles.popupContent, maxWidth: '400px' }}>
                        <button style={styles.closeButton} onClick={() => setShowPopup(false)}>x</button>
                        <p>You do not have enough money to buy this! Please consider other options.</p>
                    </div>
                </div>
            )}
            {/* Second popup for the "Blood Thinners" option */}
            {showSecondPopup && (
                <div style={styles.popup}>
                    <div style={{ ...styles.popupContent, maxWidth: '400px' }}>
                        <button style={styles.closeButton} onClick={() => setShowSecondPopup(false)}>x</button>
                        <p>Your doctor also recommends lifestyle changes for you and your child, who are both at risk. A shift from your current diet to a healthier, organic diet will cost an additional coin/month. Your doctor also recommends you incorporate at least 30 minutes of exercise into your daily schedule. You should also now look into moving to an area with better air quality. See the store to see how you can incorporate these lifestyle changes. 
</p>
                        <button className="proceed-button" style={styles.returnButton} onClick={() => navigate('/institutions')}>Return to Home</button>
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
        backgroundColor: 'lightblue',
        backgroundPosition: 'center', // Center the background image
    },
    centeredContent: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    },
    hospitalScenario: {
        maxWidth: '600px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        background: '#f9f9f9',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    },
    optionButton: {
        margin: '0 10px',
        padding: '10px 20px',
       
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
    returnButton: {
        marginTop: '20px',
        padding: '10px 20px',
       
    },
};

export default HospitalScenario;
