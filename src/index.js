import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Base, { reducers } from './BaseModule/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Base />
	</Provider>,
	document.querySelector('.container')
);
