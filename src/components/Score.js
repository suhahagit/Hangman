import React, { Component } from 'react';

class score extends Component {

    scoreStatus = () => {
        if (this.props.score > 80) {
            return 'high'
        } else if (this.props.score <= 80 && this.props.score >= 50) {
            return 'medium'
        } else {
            return 'low'
        }
    }

    render() {
        return (
            <div className={this.scoreStatus()}>
                {this.props.score}
            </div>
        );
    }
}

export default score;