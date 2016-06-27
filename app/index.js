import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Redux
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import routes from './routes';

// Apply redux middleware
// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddleware(reducers); // create the store
const initialState = {};

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(
            reduxThunk
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

// Styles
var styles = require('./scss/style.scss');

// Containers
import {
    MainContainer,
    HomeContainer } from './containers';

if(module.hot) {
    module.hot.accept('./reducers/',() => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById("app"));