import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Balance extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState){
        return (nextProps.accountBalance !== this.props.accountBalance);
    }

    render() {
        console.log("Rendering");
        return <h3>Savings Account Balance: ${this.props.accountBalance}</h3>
    }
}
class BankAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountBalance: 25.00,
            incrementValue: 0
        };
    }

    increment() {
        this.setState(
            { accountBalance: this.state.accountBalance + parseInt(this.state.incrementValue) });
    }

    updateAmount(event) {
        this.setState({ incrementValue: parseInt(event.target.value) });
    }

    render() {
        return (
            <div>
                <Balance accountBalance={this.state.accountBalance} />
                <input type="number" onChange={this.updateAmount.bind(this)} />
                <button onClick={this.increment.bind(this)}>Increase Amount</button>
            </div>
        );
    }
}

ReactDOM.render(
    <BankAccount />,
    document.getElementById('root')
);