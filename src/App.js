import React, { Component } from 'react';

import Header from './Components/Header';
import Form from './Containers/FormContainer';
import Tabs from './Containers/TabsContainer';


export default class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Form/>
          <Tabs/>
        </div>
    )
  }
}
