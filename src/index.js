import React from 'react';
import ReactDOM from 'react-dom';

import store from './storage/index';
import { Provider } from 'react-redux';

import AppContainer from './Containers/AppContainer';
import './style/app.css';

ReactDOM.render(
  <Provider  store={ store }>
      <AppContainer />
  </Provider>,
  document.querySelector('.app')
);
