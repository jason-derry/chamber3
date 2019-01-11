import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Navigation />
      </div>
    );
  }
}

export default App;
