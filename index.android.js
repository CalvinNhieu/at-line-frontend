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

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

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
