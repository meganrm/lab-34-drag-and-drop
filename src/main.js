import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './component/app';
import reducer from './reducer/index';
import formValidator from './lib/form-validator';

import './style/main.scss';

const store = createStore(reducer, applyMiddleware(formValidator));

const container = document.createElement('div');
document.body.appendChild(container);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container,
);
