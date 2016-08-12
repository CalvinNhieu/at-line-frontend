// import w/ destructure operation (i.e. {}) imports `export`
// import w/o destructure operation imports `export default`
import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './src/reducer';
import App from './src/containers/App';
import { appReady } from './src/actionCreators';

// logs all action dispatches in the console
const logger = createLogger();
// init app state
const store = createStore(
  rootReducer,
  compose(
    autoRehydrate(),
    applyMiddleware(thunk, logger),
  ),
);

// writes app state to SQLite
persistStore(
  store,
  {
    storage: AsyncStorage,
    blacklist: ['playerCount', 'countdownTime', 'question', 'answer', 'choices', 'timeUp'],
  },
  () => {
    store.dispatch(appReady());
  },
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
