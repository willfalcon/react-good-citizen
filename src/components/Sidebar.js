import React, { Component } from 'react';
import logo from '../images/logo-black-w300.png';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <img className="sidebar__logo" src={logo} alt=""/>
        <ul className="nav">
          <li>Dashboard</li>
          <li>Schedule</li>
          <li>Staff</li>
          <li>Timesheets</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
