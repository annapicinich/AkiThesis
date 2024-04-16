import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './interactive.css'; // Import the CSS file for styling

const Interactive = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      
     
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <div className="content" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '24px', maxWidth: '600px', margin: '0 auto', marginBottom: '30px' }}>Welcome to the simulation! 
            <br/>
            <br/>
            Please click continue when you are ready. Your first task will be waiting for you in the upper right hand corner of the map. </p>
            {/* Replace the button with a Link component */}
            <Link to="/character" style={{ textDecoration: 'none' }}>
              <button className="proceed-button">Start</button>
            </Link>
          </div>
        </div>
      
    </div>
  );
}

export default Interactive;
