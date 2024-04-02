import React from 'react';

const Navbar = () => {
  const navbarStyles = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#daf0f0',
    padding: '20px',
    width: '100%',
    position: 'fixed', // Set position to fixed
    top: 0, // Fix it to the top of the viewport
    zIndex: 999, // Set a high z-index to ensure it stays on top of other elements
  };

  const linkStyles = {
    color: 'black',
    textDecoration: 'none',
    margin: '0 1rem',
  };

  return (
    <div style={navbarStyles}>
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
