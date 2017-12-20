import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

const price1 = React.createElement('li', null, 'Price 1');
const price2 = React.createElement('li', null, 'Price 2');

ReactDOM.render(
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'Item 1',
            React.createElement(
                'ul',
                null,
                price1)),
        React.createElement(
            'li',
            null,
            'Item 2',
            React.createElement(
                'ul',
                null,
                price2
            )
        )
    ),
    document.getElementById('root')
);
