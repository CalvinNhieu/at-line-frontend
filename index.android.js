import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './src/reducer';
import App from './src/containers/App';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// logs all action dispatches in the console
const logger = createLogger();
// init app state
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

// Provider provides the store to all child components
class AtLine extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AtLine', () => AtLine);
