import React, { Component } from 'react';

import { Menu, Icon } from 'antd';
const MenuItemGroup = Menu.ItemGroup;


class Navbar extends Component {
  
render() {
    return (
        <nav className="menuBar" style={{ minWidth: 0, flex: "auto", }} >
          
          <Menu mode="horizontal">
       <Menu.Item key="Stories">
          <a href="Stories">Stories</a>
        </Menu.Item>
        <Menu.Item key="Supplemental Research">
          <a href="Research">Supplemental Research</a>
        </Menu.Item>
        <Menu.Item key="Interactive Module">
          <a href="Interactive">Interactive Module</a>
        </Menu.Item>
        <Menu.Item key="About">
          <a href="About">About</a>
        </Menu.Item>
       
        
      </Menu>
        </nav>
    );
  }
}
export default Navbar;