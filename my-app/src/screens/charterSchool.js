import React, { useState } from 'react';
import StatusBar from './status'; // Import the StatusBar component

const CharterSchool = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);

  const handleSelectSchool = (schoolType) => {
    setSelectedSchool(schoolType);
  };

  return (
    <div style={styles.container}>
      {/* Include the StatusBar component */}
      <StatusBar />
      
      <header>
        
      </header>
      <main>
        
        {/* Prompt for selecting a school */}
        <p>Which school do you want to go to?</p>
        
        {/* Two clickable boxes for public and private schools */}
        <div style={styles.centeredContent}>
          <div 
            onClick={() => handleSelectSchool('public')} 
            style={styles.box}
          >
            Public
          </div>
          <div 
            onClick={() => handleSelectSchool('private')} 
            style={styles.box}
          >
            Private
          </div>
        </div>
      </main>
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
  },
  centeredContent: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  box: {
    border: '1px solid black',
    padding: '20px',
    margin: '10px',
    cursor: 'pointer',
  }
};

export default CharterSchool;
