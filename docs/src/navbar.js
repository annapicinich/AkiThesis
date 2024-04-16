import React from 'react';

const Navbar = () => {
  const navbarStyles = {
    display: 'flex',
    justifyContent: 'space-between', // Align items with space between
    alignItems: 'center', // Align items vertically centered
    padding: '20px',
    width: '97%',
    position: 'fixed',
    top: 0,
    zIndex: 999,
  };

  const linkStyles = {
    color: 'black',
    textDecoration: 'none',
    margin: '0 1rem',
    fontSize: '20px', // Larger font size
    fontWeight: '400', // Heavier font weight
  };

  const leftLinkStyles = {
    ...linkStyles,
    marginRight: 'auto', // Push items to the left
  };

  const rightLinkStyles = {
    ...linkStyles,
    marginLeft: 'auto', // Push items to the right
  };

  return (
    <div style={navbarStyles}>
      <a href="Interactive" style={leftLinkStyles}>
        Interactive Module
      </a>
      <a href="About" style={rightLinkStyles}>
        About
      </a>
    </div>
  );
};

export default Navbar;
