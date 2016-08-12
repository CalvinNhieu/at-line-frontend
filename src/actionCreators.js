import {
  GENERATE_NAME,
  CREATE_PLAYER_SUCCESS,
  CREATE_PLAYER_FAIL,
  SET_PLAYER_COUNT,
  POLL_LOBBY_FAIL,
  SET_COUNTDOWN,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAIL,
  SET_CHOICE,
  PICK_CHOICE_SUCCESS,
  PICK_CHOICE_FAIL,
  SET_ANSWER,
  GET_RESULTS_FAIL,
  JOIN_SUCCESS,
  ADD_PLAYER
} from './actionTypes';
import { Actions } from 'react-native-router-flux';

export function appReady() {
  return function(dispatch, getState) {
    let state = getState();

    console.log("App Ready");
    if (state.id === -1) {
      console.log("Creating player");
      dispatch(createPlayer());
    }
    dispatch(generateName());
    // Actions.home();
  };
}

export function createPlayer() {
  return function(dispatch, getState) {
    // hit create player endpoint
    // on success: set player id
    console.log("In create player");
    let state = getState();
    let url = 'http://10.5.5.16:8000/create_player/';

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      console.log("Got res",res);
      return res.json();
    })
    .then((json) => {
      dispatch(createPlayerSuccess(json.id));
    })
    .catch(err => console.log(err));
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
    console.log('joining');
    let state = getState();
    let url = 'http://10.5.5.16:8000/join/';

    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     game_id: state.gameId,
    //     player_id: state.id,
    //   }),
    // })
    // .then((res) => {
    //   console.log("Got res",res);
    //   return res.json();
    // })
    // .then((json) => {
    //   console.log(data);
    //   dispatch(joinSuccess(data));
    //   Actions.lobby();
    // })
    // .catch(err => console.log(err));
    Actions.lobby();

  };
}

export function joinSuccess(data) {
  return {
    type: JOIN_SUCCESS,
    sessionId: data.id,
    playerCount: data.players.length,
  };
}

export function pollLobby() {
  return function(dispatch, getState) {
    let state = getState();
    let url = 'http://10.5.5.16:8000/session/';

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) =>{
      console.log("Got Res");
      return res.json();
    })
    .then((json) => {
      dispatch(pollLobbySuccess(json));
    })
    .catch(err => console.log(err));
    // hit 'players in room'/'is room ready' endpoint
    // CHECK HERE IF playerCount === maxPlayerCount to determine ready?? or use ready field
    // on success:not ready dispatch(pollLobbySuccess), dispatch(pollLobby)
    // on success:ready dispatch(pollLobbySuccess), Actions.countdown(), countdown(getState().countdownTime),
    // on fail: handle
  }
}

// this will receive a session (isReady and playerCount??)
export function pollLobbySuccess(data) {
  return function(dispatch, getState) {
    let state = getState();
    let numPlayers = data.players.length;

    dispatch(setPlayerCount(numPlayers));
    if (numPlayers === state.maxPlayers ) {
      Actions.countdown();
    } else {
      dispatch(pollLobby());
    }
  }
}

export function setPlayerCount(playerCount) {
  return {
    type: SET_PLAYER_COUNT,
    playerCount: playerCount,
  };
}

export function setCountdown(time) {
  return {
    type: SET_COUNTDOWN,
    time: time,
  };
}

export function countdown(time, callback) {
  return function(dispatch) {
    if (time > 0) {
      let nextTime = time - 1;

      setTimeout(() => {
        dispatch(setCountdown(nextTime));
        if (nextTime > 0) {
          dispatch(countdown(nextTime, callback));
        } else {
          callback();
        }
      }, 1000);
    }
  };
}

export function fetchQuestion() {
  return function(dispatch, getState) {
    let state = getState();
    let url = 'http://10.5.5.16:8000/question/';

    // fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // .then((res) =>{
    //   console.log("Got Res");
    //   return res.json();
    // })
    // .then((json) => {
    //   dispatch(fetchQuestionSuccess(json));
    // })
    // .catch(err => console.log(err));
    // hit questions endpoint
    // if has next question: dispatch(fetchQuestionSuccess)
  };
}

export function fetchQuestionSuccess(data) {
  return {
    type: FETCH_QUESTION_SUCCESS,
    question: data.text,
    answer: data.answer-1,
    choices: [
      data.first_option,
      data.second_option,
      data.third_option,
      data.fourth_option,
    ],
  };
}

export function fetchQuestionFail() {
  return {
    type: FETCH_QUESTION_FAIL,
  };
}

export function setChoice(choice) {
  return {
    type: SET_CHOICE,
    choice: choice,
  };
}

export function pickChoice(choice) {
  return function(dispatch, getState) {
    let state = getState();
    let url = 'http://10.5.5.16:8000/answer/';

    dispatch(setChoice(choice));
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     session_id: state.sessionId,
    //     player_id: state.id,
    //     answer: choice+1,
    //   }),
    // })
    // .then((res) => {
    //   console.log("Got res",res);
    //   return res.json();
    // })
    // .then((json) => {
    //   dispatch(pickChoiceSuccess());
    // })
    // .catch(err => console.log(err));
    // hit answer endpoint with player's choice, nothing to handle?
  };
}

export function pickChoiceSuccess() {
  return {
    type: PICK_CHOICE_SUCCESS,
  };
}

export function pickChoiceFail() {
  return {
    type: PICK_CHOICE_FAIL,
  };
}

export function getResults() {
  return function(dispatch, getState) {
    let state = getState();
    let url = 'http://10.5.5.16:8000/question/?session_id='+state.sessionId;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) =>{
      console.log("Got Res");
      return res.json();
    })
    .then((json) => {
      dispatch(getResultsSuccess(json));
    })
    .catch(err => console.log(err));
    // hit questions endpoint
    // if has next question: dispatch(fetchQuestionSuccess)
    // hit /results/ endpoint
    // on success dispatch(getResultsSuccess())
  };
}

export function getResultsSuccess(data) {
  return function(dispatch, getState) {
    // if is_over then Actions.results()
    // else setAnswer, setTimeout 2 seconds and then Actions.leaderboard()
  };
}

export function setAnswer(answer) {
  return {
    type: SET_ANSWER,
    answer: answer,
  };
}

export function getResultsFail() {
  return {
    type: GET_RESULTS_FAIL,
  };
}

export function addPlayer() {
  return {
    type: ADD_PLAYER,
  };
}
