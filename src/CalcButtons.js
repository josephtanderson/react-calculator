import React from 'react';
import NumButton from './NumButton';
import OperatorButton from './OperatorButton';
import './CalcButtons.css'

const CalcButtons = (props) => {
        return (
            <div className="button-grid">
                <OperatorButton operator="AC" onButtonClick={props.getClear} />
                <OperatorButton operator="x²" onButtonClick={props.getSq} />
                <OperatorButton operator="√" onButtonClick={props.getSqRt} />
                <OperatorButton operator="÷" onButtonClick={props.getOperators} />
                <NumButton number="1" onButtonClick={props.getNums} />
                <NumButton number="2" onButtonClick={props.getNums} />
                <NumButton number="3" onButtonClick={props.getNums} />
                <OperatorButton operator="x" onButtonClick={props.getOperators} />
                <NumButton number="4" onButtonClick={props.getNums} />
                <NumButton number="5" onButtonClick={props.getNums} />
                <NumButton number="6" onButtonClick={props.getNums} />
                <OperatorButton operator="+" onButtonClick={props.getOperators} />
                <NumButton number="7" onButtonClick={props.getNums} />
                <NumButton number="8" onButtonClick={props.getNums} />
                <NumButton number="9" onButtonClick={props.getNums} />
                <OperatorButton operator="-" onButtonClick={props.getOperators} />
                <NumButton number="." onButtonClick={props.getNums} />
                <NumButton number="0" onButtonClick={props.getNums} />
                <OperatorButton operator="DEL" onButtonClick={props.getDelete} />
                <OperatorButton operator="=" onButtonClick={props.getEquals} />
            </div>
        )
    }

export default CalcButtons