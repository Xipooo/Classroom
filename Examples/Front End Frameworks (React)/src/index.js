import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Hello world!'), 
        React.createElement('h3', null, 'Brought To You By The Dude')),
    document.getElementById('root')
);
