import React from 'react';

export default class Counter extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onReset}>Reset</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        );
    }
}