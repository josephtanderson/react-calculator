import React from 'react';

const NumButton = (props) => {
  return (
      <button onClick={props.onButtonClick}>{props.number}</button>
  );
}

export default NumButton