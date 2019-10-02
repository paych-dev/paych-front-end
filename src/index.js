import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './store/reducers';

import './index.scss';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));


