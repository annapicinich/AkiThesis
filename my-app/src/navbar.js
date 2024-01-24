import React, { Component } from 'react';
import { Menu } from 'antd';

const MenuItem = Menu.Item;

const menuStyles = {
    
      color: 'black',
  };
  const centerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent:'center',
  };

class Navbar extends Component {
  render() {
    return (
 
        <Menu mode="horizontal"style={centerStyle} >
          <MenuItem key="Stories">
            <a href="Stories" style={menuStyles.selectedMenuItem}>Stories</a>
          </MenuItem>
          <MenuItem key="Supplemental Research">
            <a href="Research" style={menuStyles.selectedMenuItem}>Supplemental Research</a>
          </MenuItem>
          <MenuItem key="Interactive Module">
            <a href="Interactive" style={menuStyles.selectedMenuItem}>Interactive Module</a>
          </MenuItem>
          <MenuItem key="About">
            <a href="About" style={menuStyles.selectedMenuItem}>About</a>
          </MenuItem>
        </Menu>
      
    );
  }
}

export default Navbar;