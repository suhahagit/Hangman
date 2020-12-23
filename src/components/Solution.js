import React, { Component } from 'react';
import Letter from './Letter'

class Solution extends Component {
    render() {
        return (
            <div>
                <div>{Array.from(this.props.solution.word).map(m => (<Letter letter={this.props.letterStatus[m] === true? m : "_"} key = {m}/>))}</div>
                <div><em>{this.props.solution.hint}</em></div>
            </div>
        );
    }
}

export default Solution;