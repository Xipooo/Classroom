import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const waitTwoSecondsThenDispatch = () => {
    store.dispatch({ type: 'STARTED' });
    setTimeout(() => store.dispatch({ type: 'COMPLETED' }), 5000);
}

let StatusDisplay = (props) => {
    return (
        <div>
            <p>{props.status}</p>
            <button onClick={waitTwoSecondsThenDispatch}>Start Dispatch</button>
        </div>
    );
}

const reducer = (state = 'not started', action) => {
    switch (action.type) {
        case 'STARTED':
            return 'started';
        case 'COMPLETED':
            return 'completed';
        default:
            return state;
    }
}

const store = createStore(reducer);
store.subscribe(() => renderApp());

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <StatusDisplay status={store.getState()} />
        </Provider>,
        document.getElementById('root')
    );
}
renderApp();