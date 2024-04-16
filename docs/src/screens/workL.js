import React, { useState } from 'react';
import StatusBar from './status'; // Import the StatusBar component
import Task from './task'; // Import the Task component

const WorkL = () => {
 

  return (
    <div style={styles.container}>
      {/* Include the StatusBar component */}
      <StatusBar />
      <Task/>
      <header>
        
      </header>
      <main>
        
        
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

export default WorkL;
