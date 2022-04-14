import React from 'react';
import './CalcDisplay.css'

const CalcDisplay = (props) => {
    const { smallOutput, bigOutput } = this.props;
    return (
        <div className="output">
            <div className="small-output">{smallOutput}</div>
            <div className="big-output">{bigOutput}</div>
        </div>
    )
}
export default CalcDisplay