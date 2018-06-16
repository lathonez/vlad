import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Picker from './components/picker';

import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Vlad</h1>
          </header>
          <Picker />
        </div>
      </Provider>
    );
  }
}

export default App;
