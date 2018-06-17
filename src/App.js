import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Picker from './components/picker';

import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [promise, thunk];

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
