import React from 'react';
import { Link } from 'react-router-dom';
import StatusBar from './status';
import Task from './task'; // Import the Task component
import Store from './store'; // Import the Task component
import background from '../images/background.png';
import envImage from '../images/envir.png'; // Import the work image
import privateImage from '../images/private.png'; 
import publicImage from '../images/public.png'; 
import charter from '../images/charter.png'; 
import homeL from '../images/homeL.png'; 
import homeM from '../images/homeM.png'; 
import homeH from '../images/homeH.png'; 
import workH from '../images/workH.png'; 
import workL from '../images/workL.png'; 
import hospital from '../images/hospital.png'; 
import Situation from './situations'

const Institutions = () => {

  const storedSchool = parseInt(localStorage.getItem('school'), 10);
  console.log(storedSchool)
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundImage: `url(${background})`, // Set background image
      backgroundSize: 'cover', // Cover the entire container
      backgroundPosition: 'center', // Center the background image
    }}>
      {/* Task component */}

      {storedSchool == 0 && <Task />}
    
      {storedSchool !== 0 && <Situation />}

      {/* Status Bar */}
      <StatusBar />

      {/* Institutions grid */}
      <div style={styles.gridContainer}>
        {/* School */}
        <Link to={`/env`} style={styles.envStyle}></Link>
        <Link to={`/hospital`} style={styles.hospitalStyle}></Link>
        <Link to={`/charterSchool`} style={styles.charterSchoolStyle}></Link>
        <Link to={`/homeH/`} style={styles.homeHStyle}></Link>
        <Link to={`/homeL`} style={styles.homeLStyle}></Link>
        <Link to={`/publicSchool`} style={styles.publicSchoolStyle}></Link>
        <Link to={`/homeM/`} style={styles.homeMStyle}></Link>
        <Link to={`/workH`} style={styles.workHStyle}></Link>
        <Link to={`/workL`} style={styles.workLStyle}></Link>
        <div style={styles.emptySpace}></div>
        <Link to={`/privateSchool`} style={styles.privateSchoolStyle}></Link>
        <div style={styles.emptySpace}></div>
      </div>
    </div>
  );
}
const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(100px, 1fr))',
    gridTemplateRows: 'repeat(3, minmax(200px, 1fr))',
    gap: '10px',
    marginTop: '180px',
    width: '95%',
    justifyContent: 'center',
  },
  // Individual styles for each institution
  envStyle: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${envImage})`,
    backgroundSize: 'contain',
    width: '300px',
    height: '180px',
  },
  hospitalStyle: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${hospital})`,
    backgroundSize: 'contain',
    width: '300px',
    height: '180px',
    
  },
  charterSchoolStyle: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${charter})`,
    backgroundSize: 'contain',
    width: '300px',
    height: '150px',
  },
  homeHStyle: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${homeH})`,
    backgroundSize: 'contain',
    width: '300px',
    height: '150px',
  },
  homeLStyle: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${homeL})`,
    backgroundSize: 'contain',
    width: '300px',
    height: '150px',
  },
  publicSchoolStyle: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${publicImage})`,
    backgroundSize: 'contain',
    width: '300px',
    height: '150px',
  },
  homeMStyle: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${homeM})`,
    backgroundSize: 'contain',
    width: '300px',
    height: '150px',
  },
  workHStyle: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${workH})`,
    backgroundSize: 'contain',
    width: '300px',
    height: '150px',
  },
  workLStyle: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${workL})`,
    backgroundSize: 'contain',
    width: '300px',
    height: '150px',
  },
  privateSchoolStyle: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${privateImage})`,
    backgroundSize: 'contain',
    width: '300px',
    height: '150px',
  },
  emptySpace: {
    width: '300px',
    height: '150px',
  }
}



export default Institutions;
