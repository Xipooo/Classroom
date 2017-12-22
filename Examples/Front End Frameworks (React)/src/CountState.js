import React, {Component} from 'react';
import CountDiv from './CountDiv.js'

const globalState = { count: 0 }

export default class CountState extends Component {
    constructor() {
        super();
        this.state = globalState;
    }
    render() {
        return (
            <div>
                <CountDiv count={this.state.count} />
                <button onClick={this.increase.bind(this)}>Increase</button>
            </div>
        )
    }
    increase() {
        this.setState({ ...this.state, count: this.state.count + 1 })
    }

}