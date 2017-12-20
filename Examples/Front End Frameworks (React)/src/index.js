import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

const item1 = "Apples";
const item2 = "Oranges";

ReactDOM.render(
    <ul>
        <li>{item1}</li>
        <li>{item2}</li>
    </ul>,
    document.getElementById('root')
);