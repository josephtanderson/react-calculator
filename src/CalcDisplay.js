import React from 'react';
import './CalcDisplay.css'

const CalcDisplay = (props) => {
    return (
        <div className="output">
            <div className="small-output">{props.smallOutput}</div>
            <div className="big-output">{props.bigOutput}</div>
        </div>
    )
}
export default CalcDisplay