import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Interactive = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      
     
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <div className="content" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '24px', maxWidth: '600px', margin: '0 auto', marginBottom: '30px' }}>You will pick a character identity that includes finances, goals, lifestyle, culture, and environmental considerations. Within these constraints, navigate each scenario as best you can.</p>
            {/* Replace the button with a Link component */}
            <Link to="/character" style={{ textDecoration: 'none' }}>
              <button style={{ fontSize: '20px', padding: '10px', width: '150px', border: '2px solid black', borderRadius: '5px' }}>Start</button>
            </Link>
          </div>
        </div>
      
    </div>
  );
}

export default Interactive;
