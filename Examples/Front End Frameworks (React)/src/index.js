import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './Counter.js';

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case 'RESET':
            return {...state, count: 0};
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}

const store = createStore(reducer);


const renderApp = () =>
{
    ReactDOM.render(
        <Counter 
            count={ store.getState().count }
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onReset={() => store.dispatch({type: 'RESET'})}
            onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        />,
        document.getElementById('root')
    )
}
store.subscribe(
    () => {
        console.log("State Value: ", store.getState());
        renderApp();
    }
);

renderApp();

// console.log('State at start: ', store.getState());

// store.dispatch({type: 'INCREMENT' });
// store.dispatch({type: 'INCREMENT' });
// store.dispatch({type: 'INCREMENT' });
// store.dispatch({type: 'DECREMENT' });
// store.dispatch({type: 'RESET'});
// store.dispatch({type: 'INCREMENT' });
// store.dispatch({type: 'INCREMENT' });
// store.dispatch({type: 'DECREMENT' });