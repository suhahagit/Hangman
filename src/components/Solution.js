import React, { Component } from 'react';

class Solution extends Component {
    render() {
        let hint = 'Your ideal mood when coding.'
        let lettersToGuess = []
        for(let i = 0; i < 4; i++){
            lettersToGuess.push('_ ')
        }
        return (
            <div>
                <div>{lettersToGuess.map(l => <span>{l}</span>)}</div>
                <div><em>{hint}</em></div>
            </div>
        );
    }
}

export default Solution;