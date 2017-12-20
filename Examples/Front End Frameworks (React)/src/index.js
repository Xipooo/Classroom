import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

const items = [
    {
        id: 1,
        name: "Monday special",
        imageSource: "tacos.png",
        price: 10.35
    },
    {
        id: 2,
        name: "Tuesday special",
        imageSource: "burrito.png",
        price: 8.17
    }
];
const listItems = items.map((item) => (
    <div key={item.id}>
        <img src={item.imageSource} />
        <span>{item.name}: {item.price}</span>
    </div>
));

const List = (props) => (<div>{props.items}</div>);

ReactDOM.render(<List items={listItems} />, document.getElementById('root'));