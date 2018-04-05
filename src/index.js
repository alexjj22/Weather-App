import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import './style/app.css';
import WeatherStore from './store/WeatherStore';
import { Provider } from "mobx-react";
import { configure } from 'mobx';

configure({ enforceActions: true });


ReactDOM.render(
  <Provider weatherStore={ new WeatherStore() }>
    <App />
  </Provider>,
  document.querySelector('.app')
);
