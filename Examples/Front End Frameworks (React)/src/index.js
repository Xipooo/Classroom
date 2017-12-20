import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

const GroceryList = (props) => 
    (
        <ul>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
        </ul>
    );

ReactDOM.render(
    <GroceryList item1="Apples" item2="Pears" />,
    document.getElementById('root')
);