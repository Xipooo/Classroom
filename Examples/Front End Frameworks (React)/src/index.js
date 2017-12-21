import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Hello name='McFly' />
        <Hello name='Tyler' />
        <Hello name='Marshall' />
    </div>,
    document.getElementById('root')
);