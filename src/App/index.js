import React, { Component } from 'react';
import Applied from '../Applied';
import Response from '../Response';
import Outreach from '../Outreach';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Job Tracker</h1>
        <div className='list-holder'>
          <Applied />
          <Response />
          <Outreach />
        </div>
      </div>
    );
  }
}

export default App;
