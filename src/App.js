import './App.css';
import React, { Component } from 'react';

import Solution from './components/Solution'
import Letters from './components/Letters'
import Score from './components/Score'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {word: 'CALM', hint: 'Your ideal mood when coding.'},
      score: 100
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  render() {
    return (
      <div>
        <Score score = {this.state.score}/>
        <Solution letterStatus = {this.state.letterStatus} solution = {this.state.solution}/>
        <Letters letterStatus = {this.state.letterStatus}/>
      </div>
    )
  }
}

export default App;
