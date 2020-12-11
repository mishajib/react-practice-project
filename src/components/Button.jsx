import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.decreaseHandler}>-</button>|
                <button onClick={this.props.increaseHandler}>+</button>
            </div>
        )
    }
}

export default Button;