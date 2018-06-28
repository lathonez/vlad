import React, { Component } from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import Quiz from './quiz';

import store from './_store/configure-store';

class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Vlad</h1>
          </header>
          <Quiz />
        </div>
      </Provider>
    );
  }
}

export default App;
