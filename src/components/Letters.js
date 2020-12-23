import React, { Component } from 'react';
import Letter from './Letter'

class Letters extends Component {
    render() {
        return (
            <div>
                <div>Available letters</div>
                <div>{Object.keys(this.props.letterStatus).map(k => <Letter letter={k} className={this.props.letterStatus[k] === true? "striked" : k} key = {k}/>)}</div>
            </div>
        );
    }
}

export default Letters;