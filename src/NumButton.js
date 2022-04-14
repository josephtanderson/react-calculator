import React, { Component } from 'react';

class NumButton extends Component {
      render() {
        return (
            <button onClick={this.props.onButtonClick}>{this.props.number}</button>
        );
      }
}

export default NumButton