import React, { Component }  from 'react';
import logo from './images/logo.png';
import './css/App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <img src={logo} alt="logo" className="Logo"/>
      </div>
    );
  }
}

export default Header;
