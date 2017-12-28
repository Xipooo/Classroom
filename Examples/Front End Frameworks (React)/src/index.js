import React from 'react';
import { render } from 'react-dom';
import { Home, Mine, Search } from './screens/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const defaultReducer = (state, action) =>
{
    return state;
}

const store = createStore(defaultReducer);

const Index = ({ store }) =>
(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/mine" component={Mine} />
            </div>
        </Router>
    </Provider>
);

render(<Index store={store} />, document.getElementById('root'));