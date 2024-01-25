import React from 'react';



const Navbar = () => {
  const navbarStyles = {
    display: 'flex',
    justifyContent: 'center',
  //  backgroundColor: '#daf0f0',
    padding: '1.5rem', // Set your desired padding
    width: '100%', // Set width to 100% for full-width navbar
    
  };

  const linkStyles = {
    color: 'black',
    textDecoration: 'none',
    margin: '0 1rem', // Adjust spacing between links
  };

  return (
    <div style={navbarStyles}>
  
      <a href="Stories" style={linkStyles}>
        Stories
      </a>
      <a href="Research" style={linkStyles}>
        Supplemental Research
      </a>
      <a href="Interactive" style={linkStyles}>
        Interactive Module
      </a>
      <a href="About" style={linkStyles}>
        About
      </a>
    </div>
  );
};

export default Navbar;
