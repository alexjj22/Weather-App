import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import './style/app.css';

// http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52d7e8bed91901222e31ebc77c311f2a

ReactDOM.render(
  <App />,
  document.querySelector('.app')
);
