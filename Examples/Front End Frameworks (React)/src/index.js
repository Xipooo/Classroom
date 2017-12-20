import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

const items = ["Bread", "Milk", "Eggs", "Tea"];
const listItems = [];

for (let i = 0; i < items.length; i++){
    listItems.push(<li key={i}>{items[i]}</li>);
}

const List = (props) => (
    <ul>
        {props.items}
    </ul>
);

ReactDOM.render(
    <List items={listItems} />, 
    document.getElementById('root')
);