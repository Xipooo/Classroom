import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import Counter from './Counter.js';

const initialState = {
    count: 0
}

const mapStateToProps = (state) => { return { count: state.count  } }
const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: () => dispatch({ type: 'DECREMENT' }),
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onReset: () => dispatch({ type: 'RESET' })
    }
}
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESET':
            return { ...state, count: 0 };
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedCounter />
    </Provider>,
    document.getElementById('root')
)