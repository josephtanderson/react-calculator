import React, { Component } from 'react';
import CalcDisplay from './CalcDisplay'
import CalcButtons from './CalcButtons'
import './Calculator.css'

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
        operator: "",
        previousOperator: "",
        previousOutput: "",
        previousOperand: "",
        currentOperand: "",
        previousOperandTextEle: "",
        currentOperandTextEle: ""
    }

    this.numBtnClicked = this.numBtnClicked.bind(this);
    this.operatorBtnClicked = this.operatorBtnClicked.bind(this);
    this.delBtnClicked = this.delBtnClicked.bind(this);
    this.equalsBtnClicked = this.equalsBtnClicked.bind(this);
    this.clearBtnClicked = this.clearBtnClicked.bind(this);
    this.sqRtBtnClicked = this.sqRtBtnClicked.bind(this);
    this.sqBtnClicked = this.sqBtnClicked.bind(this);
    this.square = this.square.bind(this)
    }
    clear() {
        if (this.state.currentOperandTextEle === "") {
            this.setState({
                previousOperandTextEle: "",
                currentOperandTextEle: "",
                currentOperand: "",
                previousOperand: "",
                operator: "",
                previousOutput: "",
                previousOperator: ""
            });
        } else {
            this.setState({
                currentOperandTextEle: ""
            });
        }
    }
    appendNumber(num) {
        if (!this.state.operator && this.state.currentOperandTextEle === "") {
            this.clear();
        }
        if (num === "." && this.state.currentOperandTextEle.includes(".")) {
        } else {
            this.setState(state => ({
                currentOperandTextEle: state.currentOperandTextEle + num
              }));
        }
    }
    remove() {
        if (this.state.currentOperandTextEle === "" && this.state.operator) {
            this.setState(state => ({
                operator: "",
                currentOperandTextEle: this.state.previousOperand.toString() + "/",
                previousOperand: "",
                previousOperandTextEle: ""
            }));
        }
        this.setState(state => ({
            currentOperandTextEle: state.currentOperandTextEle.slice(0, -1)
        }));
    }
    chooseOperation(op) {
        if (!this.state.currentOperandTextEle && !this.state.previousOutput) {return}
        if (this.state.operator) {this.compute()};
        if (this.state.currentOperandTextEle) {
                this.setState(state => ({
                previousOperand: Number(state.currentOperandTextEle),
                currentOperandTextEle: ""
            }));
            }
        this.setState({
            operator: op
        })
    }

    square() {
        if (!this.currentOperandTextEle && !this.previousOutput) {return;}
        if (this.operator) {this.compute()};
        if (this.currentOperandTextEle) {
            this.setState(state => ({
                previousOperand: Number(state.currentOperandTextEle),
                currentOperandTextEle: ""
            }));
        }
        this.setState(state => ({
            currentOperandTextEle: state.previousOperand,
            operator: "x"
        }));
        this.compute();
    }

    sqRoot() {
        if (!this.currentOperandTextEle && !this.previousOutput) {return;}
        if (this.operator) {this.compute()};
        if (this.currentOperandTextEle) {
            this.setState(state =>({
                previousOperand: Number(state.currentOperandTextEle),
                currentOperandTextEle: ""
            }));
        }
        this.setState (state => ({
            previousOperand: Math.sqrt(state.previousOperand),
            previousOutput: state.previousOperand.toString(),
            currentOperandTextEle: "",
            previousOperator: state.operator,
            operator: ""
        }));
        
    }

    compute() {
        if (!this.state.operator && this.state.currentOperandTextEle === "") {
            if (!this.state.previousOperand) {return};
            this.setState(state => ({
                currentOperandTextEle: state.currentOperand.toString(),
                operator: state.previousOperator
            }));
        }
        this.setState(state => ({
            currentOperand: Number(state.currentOperandTextEle)
        }));
        switch (this.state.operator) {
            case "+":
                this.setState(state => ({
                    previousOperand: state.previousOperand + state.currentOperand
                }));
                break;
            case "-":
                this.setState(state => ({
                    previousOperand: state.previousOperand - state.currentOperand
                }));
                break;
            case "x":
                this.setState(state => ({
                    previousOperand: state.previousOperand * state.currentOperand
                }));
                break;
            case "÷":
                this.setState(state => ({
                    previousOperand: state.previousOperand / state.currentOperand
                }));
                break;
            default:
                this.setState(state =>({
                    previousOperand: state.currentOperand
                }));
        }
        this.setState(state =>({
            previousOutput: state.previousOperand.toString(),
            currentOperandTextEle: "",
            previousOperator: state.operator,
            operator: ""
        }))
    }

    
    numBtnClicked = (e) => {
        this.appendNumber(e.target.innerText)
  }
    operatorBtnClicked = (e) => {
        this.chooseOperation(e.target.innerText);
    }
    sqRtBtnClicked = () => {
        console.log("Square Root");
        this.sqRoot();
    }
    sqBtnClicked = () => {
        this.square();
    }
    delBtnClicked = () => {
        this.remove();
    }

    equalsBtnClicked = () => {
        this.compute();
    }

    clearBtnClicked = () => {
        this.clear();
    }
    render() {
        const { numBtnClicked, operatorBtnClicked, delBtnClicked, equalsBtnClicked, clearBtnClicked, sqRtBtnClicked, sqBtnClicked} = this;
        const { currentOperandTextEle, previousOperand, previousOutput, operator } = this.state;
        let bigOutput = previousOperand.toString() +" "+operator+" "+currentOperandTextEle
        return (
            <div className="calculator-grid">
                <CalcDisplay smallOutput={previousOutput} bigOutput={bigOutput} />
                <CalcButtons getNums={numBtnClicked} getOperators={operatorBtnClicked} getDelete={delBtnClicked} getEquals={equalsBtnClicked} getClear={clearBtnClicked} getSq={sqBtnClicked} getSqRt={sqRtBtnClicked} />
            </div>
        )
    }
}

export default Calculator;