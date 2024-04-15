import React from 'react';
import { Link } from 'react-router-dom';
import StatusBar from './status';
import Task from './task'; // Import the Task component

const Institutions = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* Task component */}
      <Task />

      {/* Status Bar */}
      <StatusBar />

      {/* Institutions grid */}
      <div style={styles.gridContainer}>
        {/* School */}
        <Link to={`/privateSchool`} style={styles.institutionItem}>Private School</Link>
        <Link to={`/publicSchool`} style={styles.institutionItem}>Public School</Link>
        <Link to={`/charterSchool`} style={styles.institutionItem}>Charter School</Link>
        {/* Hospital */}
        <Link to={`/hospital`} style={styles.institutionItem}>Hospital</Link>
        {/* Home */}
        <Link to={`/homeL/`} style={styles.institutionItem}>Home 1</Link>
        <Link to={`/homeM/`} style={styles.institutionItem}>Home 2</Link>
        <Link to={`/homeH/`} style={styles.institutionItem}>Home 3</Link>
        {/* Work */}
        <Link to={`/work`} style={styles.institutionItem}>Work</Link>
        {/* Bank */}
        <Link to={`/bank`} style={styles.institutionItem}>Bank</Link>
        {/* Add more institutions here */}
      </div>
    </div>
  );
}

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 320px)', // 4 columns with fixed width of 200px
    gridTemplateRows: 'repeat(3, 200px)', // 3 rows with fixed height of 200px
    gap: '20px',
    marginTop: '155px',
    // height: '80%',
    width: '95%', // Adjusted width to stretch across the page
    justifyContent: 'center', // Center horizontally
},
  institutionItem: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    border: '1px solid #000',
    padding: '20px', // Adjusted padding
    textAlign: 'center',
  }
}

export default Institutions;
