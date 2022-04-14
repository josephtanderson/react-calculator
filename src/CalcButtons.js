import React from 'react';
import NumButton from './NumButton';
import OperatorButton from './OperatorButton';
import './CalcButtons.css'

const CalcButtons = (props) => {
        const { getNums, getOperators, getDelete, getEquals, getClear, getSq, getSqRt } = this.props;
        return (
            <div className="button-grid">
                <OperatorButton operator="AC" onButtonClick={getClear} />
                <OperatorButton operator="x²" onButtonClick={getSq} />
                <OperatorButton operator="√" onButtonClick={getSqRt} />
                <OperatorButton operator="÷" onButtonClick={getOperators} />
                <NumButton number="1" onButtonClick={getNums} />
                <NumButton number="2" onButtonClick={getNums} />
                <NumButton number="3" onButtonClick={getNums} />
                <OperatorButton operator="x" onButtonClick={getOperators} />
                <NumButton number="4" onButtonClick={getNums} />
                <NumButton number="5" onButtonClick={getNums} />
                <NumButton number="6" onButtonClick={getNums} />
                <OperatorButton operator="+" onButtonClick={getOperators} />
                <NumButton number="7" onButtonClick={getNums} />
                <NumButton number="8" onButtonClick={getNums} />
                <NumButton number="9" onButtonClick={getNums} />
                <OperatorButton operator="-" onButtonClick={getOperators} />
                <NumButton number="." onButtonClick={getNums} />
                <NumButton number="0" onButtonClick={getNums} />
                <OperatorButton operator="DEL" onButtonClick={getDelete} />
                <OperatorButton operator="=" onButtonClick={getEquals} />
            </div>
        )
    }

export default CalcButtons