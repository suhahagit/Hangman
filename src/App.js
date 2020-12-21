import './App.css';
import React, { Component } from 'react';

import Solution from './components/Solution'
import Letters from './components/Letters'
import Score from './components/Score'

export class App extends Component {

  render() {
    return (
      <div>
        <Score/>
        <Solution/>
        <Letters/>
      </div>
    )
  }
}

export default App;
