import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

const items = ["Bread", "Milk", "Eggs", "Tea"];
const listItems = items.map((item) => (<li>{item}</li>));

const List = (props) => (<ul>{props.items}</ul>);

ReactDOM.render(<List items={listItems} />, document.getElementById('root'));