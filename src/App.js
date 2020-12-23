import './App.css';
import React, { Component } from 'react';

import Solution from './components/Solution'
import Letters from './components/Letters'
import Score from './components/Score'
import EndGame from './components/EndGame';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: { word: 'CALM', hint: 'Your ideal mood when coding.' },
      score: 100,
      gameEnded: false,
      won: false
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  selectLetter = (letter) => {
    let score, gameEnded, won
    score = this.state.solution.word.includes(letter) ? (this.state.score + 5) : (this.state.score - 20)
    let letterStatus = this.state.letterStatus
    letterStatus[letter] = true
    if (score <= 0) {
      gameEnded = true
      won = false
    }
    if (this.state.solution.word.length === Object.values(letterStatus).reduce((a, item) => a + item, 0)) {
      gameEnded = true
      won = true
    }
    this.setState({ letterStatus, score, gameEnded, won})
  }

  render() {
    return (
      <div>
        {this.state.gameEnded ? <EndGame won = {this.state.won} secret = {this.state.solution.word}/> : <div><Score score={this.state.score} />
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} /></div>}
      </div>
    )
  }
}

export default App;
