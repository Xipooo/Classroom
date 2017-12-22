import React, { Component, createElement } from 'react';
import { render } from 'react-dom';

class Hello extends Component {
    render() {
        return (
            createElement('h1', null, "Hello world!")
        )
    }
}

render(<Hello />, document.getElementById('root'));


// const obj = { first: 'Foo', last: 'Bar'};

// // const first = obj.first;
// // const last = obj.last;

// const { last } = obj;