import React, { Component } from 'react';
import Applied from '../Applied'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Job Tracker</h1>
        <Applied />
      </div>
    );
  }
}

export default App;
