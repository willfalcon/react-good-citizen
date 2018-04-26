import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
      </div>
    );
  }
}

export default App;
