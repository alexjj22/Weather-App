import React, { Component } from 'react';

import Header from './Components/Header';
import Tabs from './Components/Tabs';
import Form from './Components/Form';


class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Form/>
            <Tabs/>
        </div>

    );
  }
}

export default App;
