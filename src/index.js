import React from 'react';
import ReactDOM from 'react-dom';

import store from './storage/index';
import { Provider } from 'react-redux';

import App from './App';
import './style/app.css';

ReactDOM.render(
  <Provider  store={ store }>
      <App />
  </Provider>,
  document.querySelector('.app')
);
