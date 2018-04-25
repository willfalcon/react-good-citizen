import React, { Component } from 'react';
import './App.css';
import logo from './images/logo-black-w300.png';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <img src={logo} />
          <ul className="nav">
            <li>Dashboard</li>
            <li>Schedule</li>
            <li>Staff</li>
            <li>Timesheets</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
