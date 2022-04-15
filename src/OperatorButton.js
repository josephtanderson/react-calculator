
import React from 'react';

const OperatorButton = (props) => {
  return (
      <button onClick={props.onButtonClick}>{props.operator}</button>
  );
}

export default OperatorButton