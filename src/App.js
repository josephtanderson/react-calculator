import React, { Component } from 'react';
import Calculator from './Calculator';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="bg">
        <Calculator />
      </div>
    );
  }
}

export default App;