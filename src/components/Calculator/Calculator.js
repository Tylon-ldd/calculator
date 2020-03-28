import React from 'react';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

class Calculator extends React.Component {
    state = {
        result: 0,
        equation: ''
    }

    clear () {
        this.setState({result: 0, equation: ''});
    }

    onButtonPress = event => {
        let equation = this.state.equation;
        const pressedButton = event.target.innerHTML;

        if (pressedButton === 'C') {
            return this.clear();
        }
        else if ((pressedButton >= '0' && pressedButton <= '9')|| (pressedButton === '.')) {
            equation += pressedButton;
        }
        else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) {
            equation += ' ' + pressedButton + ' ';
        }
        else if (pressedButton === '=') {
            try {
                const evalResult = eval(equation);
                const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
                this.setState({result: result});
            } catch (error) {
                alert('Invalid Computation Input!');
            }
        }
        else {
            equation = equation.trim();
            equation = equation.substr(0, equation.length - 1);
        }

        this.setState({equation : equation});
    }

    render () {
        return (
            <main className="calculator">
                <Screen result={this.state.result} equation={this.state.equation} />
                <Keypad onButtonPress={this.onButtonPress} />
            </main>
        );
    }
}

export default Calculator;