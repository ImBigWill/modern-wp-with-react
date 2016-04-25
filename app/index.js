import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

// Apply redux middleware
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers); // create the store

// Styles
var styles = require('./scss/style.scss');

// Containers
import {
    MainContainer,
    HomeContainer } from './containers';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={MainContainer}>
                <IndexRoute component={HomeContainer} />
            </Route>
        </Router>
    </Provider>, document.getElementById("app"));