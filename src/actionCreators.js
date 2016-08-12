import {
  APP_READY,
  GENERATE_NAME,
} from './actionTypes';

// simplest action creator
export function appReady() {
  return {
    type: APP_READY,
  };
}

export function generateName() {
  return {
    type: GENERATE_NAME,
  };
}

// This is a thunk.
// redux-thunk supplies store.dispatch() and store.getState()
// to your action creators.
// This is where we will hit the 'join game' endpoint
export function join() {
  return function(dispatch, getState) {
    console.log('hey you\'re in a thunk!');
    // hit endpoint
    // on success, dispatch success handler action
    // on fail, dispatch fail handler action
  };
}
