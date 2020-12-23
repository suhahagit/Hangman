import React, { Component } from 'react';

class EndGame extends Component {
    render() {
        return (
            <div>
                {this.props.won ? <div>Congratulations</div> : <div>GAME OVER :'c secret word: {this.props.secret}</div>}
            </div>
        );
    }
}

export default EndGame;