import React from 'react';
import { Link } from 'react-router-dom';
import StatusBar from './status';

const Institutions = () => {
  return (
    <div style={{  minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> {/* Apply blue background color and stretch over the whole page */}
      {/* Status Bar */}
      <StatusBar />

      {/* Links Container */}
      <div style={{ marginTop: '20px' }}>
        <div style={styles.linkContainer}>
          <Link to={`/school`} style={styles.linkItem}>School</Link>
          <Link to={`/hospital`} style={styles.linkItem}>Hospital</Link>
          <Link to={`/home/`} style={styles.linkItem}>Home</Link>
          <Link to={`/work`} style={styles.linkItem}>Work</Link>
          <Link to={`/bank`} style={styles.linkItem}>Bank</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  linkItem: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    margin: '10px',
  }
}

export default Institutions;
