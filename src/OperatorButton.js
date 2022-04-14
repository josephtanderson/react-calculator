import React, { Component } from 'react';

class OperatorButton extends Component {
      render() {
        return (
            <button onClick={this.props.onButtonClick}>{this.props.operator}</button>
        );
      }
}

export default OperatorButton