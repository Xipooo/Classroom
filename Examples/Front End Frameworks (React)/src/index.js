import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

const groceryList = (item1, item2) => 
    (
        <ul>
            <li>{item1}</li>
            <li>{item2}</li>
        </ul>
    );

ReactDOM.render(
    groceryList("Apples", "Pears"),
    document.getElementById('root')
);