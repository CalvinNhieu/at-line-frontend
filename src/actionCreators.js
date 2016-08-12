import {
  GENERATE_NAME,
  CREATE_PLAYER_SUCCESS,
  CREATE_PLAYER_FAIL,
  POLL_LOBBY_SUCCESS,
  POLL_LOBBY_FAIL,
} from './actionTypes';
import { Actions } from 'react-native-router-flux';

export function appReady() {
  return function(dispatch, getState) {
    let state = getState();

    if (state.id === -1) {
      dispatch(createPlayer());
    }
    dispatch(generateName());
    Actions.home();
  };
}

export function createPlayer() {
  return function(dispatch, getState) {
    // hit create player endpoint
    // on success: set player id
  };
}

export function createPlayerSuccess(id) {
  return {
    type: CREATE_PLAYER_SUCCESS,
    id: id,
  };
}

export function createPlayerFail() {
  return {
    type: CREATE_PLAYER_FAIL,
  };
}

// simplest action creator
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
    // on success, do nothing?? all server side...
  };
}

export function pollLobby() {
  return function(dispatch, getState) {
    // hit 'players in room'/'is room ready' endpoint
    // on success:not ready dispatch(pollLobbySuccess), dispatch(pollLobby)
    // on success:ready dispatch(pollLobbySuccess), dispatch(startGame)
    // on fail: handle
  }
}

// this will receive a session, populates most of state
export function pollLobbySuccess(data) {
  return {
    type: POLL_LOBBY_SUCCESS,
    // parse session object into state here...
    playerCount: data.playerCount,
  };
}

export function startGame() {
  return function() {
    Actions.question();
  }
}
