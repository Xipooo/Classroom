import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BankAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountBalance: 25.00
        };
    }

    increment() {
        this.setState((oldState) => 
            { accountBalance: oldState.accountBalance + parseInt(oldState.incrementValue) });
    }

    render() {
        return (
            <div>
                <h3>Savings Account Balance: ${this.state.accountBalance}</h3>
                <input type="number" onChange={(event) => this.setState({ incrementValue: event.target.value })
                } />
                <button onClick={this.increment.bind(this)}>Increase Amount</button>
            </div>
        );
    }
}

ReactDOM.render(
    <BankAccount />,
    document.getElementById('root')
);