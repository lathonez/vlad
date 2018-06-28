import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Quiz from './quiz';
import Login from './login';

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
          <BrowserRouter>
            <Switch>
              <Route path="/quiz" component={Quiz} />
              <Route path="/" component={Login} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
